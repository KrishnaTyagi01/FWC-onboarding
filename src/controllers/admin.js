const crypto = require('crypto');
const bcrypt = require('bcryptjs');

const asyncHandler = require('../middleware/async');
const AwsS3 = require('../utils/awsS3');
const ErrorResponse = require('../utils/errorResponse');
const sendEmail = require('../utils/sendMail');
const {
  renderResetPasswordTemplate,
  renderUploadFilesTemplate,
} = require('../views/templates');

const User = require('../models/User');
const Employee = require('../models/Employee');
const FinancialDocument = require('../models/FinancialDocument');

/**
 * @desc    Get all users
 * @route   GET /api/admin/users?role=employee
 * @access  Private
 */
exports.getAllUsers = asyncHandler(async (req, res, next) => {
  const { role } = req.query;

  let and = [{ isDeleted: false }];

  if (role === 'employee') and.push({ role: 'employee' });
  else if (role === 'sub-admin') and.push({ role: 'sub-admin' });

  if (req.user.role === 'sub-admin') {
    and.push({ reportingTo: { $in: [req.user.id] } });
  }
  const users = await User.find({
    $and: and,
  });

  res.status(200).json({
    success: true,
    message: 'All list of users',
    data: users,
  });
});

/**
 * @desc    Get employee info
 * @route   GET /api/admin/employee-info/:userId?select
 * @access  Private
 */
exports.getEmployeeInfo = asyncHandler(async (req, res, next) => {
  const fields = req.query.select.split(',').join(' ');
  const results = await Employee.findOne({
    user: req.params.userId,
  }).select(fields);
  res.status(200).json({
    success: true,
    data: results,
  });
});

/**
 * @desc    Delete an employee
 * @route   DELETE /api/admin/employee/:id
 * @access  Private
 */
exports.deleteUser = asyncHandler(async (req, res, next) => {
  let user = await User.findById(req.params.id);

  if (user.role === 'sub-admin') {
    return next(new ErrorResponse('Cannot delete of user role sub-admin'));
  }
  user = await User.findByIdAndUpdate(
    req.params.id,
    { isDeleted: true },
    {
      new: true,
      runValidators: true,
    }
  );

  res.status(201).json({
    success: true,
    message: 'Deleted User',
    data: user,
  });
});

/**
 * @desc    Change active status
 * @route   POST /api/admin/change-activity
 * @access  Private
 */
exports.changeUserActiveStatus = asyncHandler(async (req, res, next) => {
  const { userId, active } = req.body;

  await User.findByIdAndUpdate(
    userId,
    { active, updatedAt: Date.now() },
    {
      new: true,
      runValidators: true,
    }
  );

  res.status(201).json({
    success: true,
    message: "Changed user's active status",
  });
});

/**
 * @desc    Update User details
 * @route   PUT /api/admin/register
 * @access  Private
 */
exports.updateRegisteredUser = asyncHandler(async (req, res, next) => {
  let { userId, updateParams, financialDocument } = req.body;

  if (updateParams) updateParams.password && delete updateParams.password;

  let user = await User.findById(userId);

  if (!user) {
    return next(new ErrorResponse('User not found'));
  }

  if (financialDocument !== undefined) {
    let { documentType, documentedDate } = financialDocument;
    let finDoc = await FinancialDocument.findOne({
      $and: [{ user: userId }, { documentedDate }, { documentType }],
    });

    if (!finDoc) {
      console.log('new doc');
      financialDocument = new FinancialDocument({
        user: userId,
        ...financialDocument,
      });
      financialDocument = await financialDocument.save();

      let {
        documentType,
        documentedDate: { month, year },
      } = financialDocument;

      let html = `<bold>Created ${documentType.toUpperCase()} for ${month}-${year}. Uploaded at ${new Date()}. Check the web app to view/download.</bold>`;

      await sendEmail({
        email: user.email,
        subject: `${financialDocument.documentType.toUpperCase()} Uploaded`,
        html,
      });

      return res.status(201).json({
        success: true,
        message: `Document: ${documentType} added for user employee`,
        data: financialDocument,
      });
    }
    console.log('update doc');
    finDoc = await FinancialDocument.findByIdAndUpdate(
      finDoc._id,
      {
        ...financialDocument,
        updatedAt: Date.now(),
      },
      {
        new: true,
        runValidators: true,
      }
    );

    html = `<bold>Updated ${finDoc.documentType.toUpperCase()} for ${
      finDoc.documentedDate.month
    }-${
      finDoc.documentedDate.year
    }. Uploaded at ${new Date()}.Check the web app to view/download.</bold> `;

    await sendEmail({
      email: user.email,
      subject: `${financialDocument.documentType.toUpperCase()} Uploaded`,
      html,
    });

    return res.status(201).json({
      success: true,
      message: `Document: ${documentType} updated for user employee`,
      data: finDoc,
    });
  }

  let employee = await Employee.findOneAndUpdate(
    { user: userId },
    { ...updateParams, updatedAt: Date.now() },
    {
      new: true,
      runValidators: true,
    }
  );

  res.status(201).json({
    success: true,
    message: 'Updated user employee',
    data: employee,
  });
});

/**
 * @desc    Add reportingTo to user
 * @route   POST /api/admin/add-reportee
 * @access  Private
 */
exports.addReportee = asyncHandler(async (req, res, next) => {
  const { userId, reporteeId } = req.body;

  const user = await User.findByIdAndUpdate(
    userId,
    {
      $addToSet: {
        reportingTo: reporteeId,
      },
    },
    {
      new: true,
      runValidators: true,
    }
  );

  res.status(201).json({
    success: true,
    message: 'Added reportee to the specified user',
    data: user,
  });
});

/**
 * @desc    Toggle isFormComplete for a user
 * @route   POST /api/admin/toggle-form-completion
 * @access  Private
 */

exports.toggleFormComplete = asyncHandler(async (req, res, next) => {
  const { userId, isFormComplete } = req.body;

  employee = await Employee.findOneAndUpdate(
    { user: userId },
    {
      isFormComplete,
    }
  );

  res.status(200).json({
    success: true,
    message: `Employee form filling ${isFormComplete ? 'Locked' : 'Un-locked'}`,
  });
});

/**
 * @desc    Get all type of financial documents for a employee
 * @route   POST /api/admin/financial-documents
 * @access  Private
 */
exports.getFinancialDocs = asyncHandler(async (req, res, next) => {
  const { userId, documentType } = req.body;

  const findoc = await FinancialDocument.find({
    $and: [{ user: userId }, { documentType }],
  });

  res.status(200).json({
    success: true,
    message: `Got all documents of type ${documentType} for particular employee`,
    data: findoc,
  });
});

/**
 * @desc    Get a single financial document for a employee
 * @route   POST /api/admin/single-fin-doc
 * @access  Private
 */
exports.getSingleFinancialDoc = asyncHandler(async (req, res, next) => {
  const { userId, documentType, documentedDate } = req.body;

  const findoc = await FinancialDocument.findOne({
    $and: [{ user: userId }, { documentType }, { documentedDate }],
  });
  let url;
  if (findoc) {
    let fileKey = findoc.fileKey;
    const params = {
      Bucket: 'random-bucket-1234',
      Expires: 60 * 60,
      Key: `${fileKey}`,
    };

    url = await new AwsS3().getSignedUrl('getObject', params);
  }

  res.status(200).json({
    success: true,
    data: { url },
  });
});

/**
 * @desc    Get a all financial document for a employee
 * @route   POST /api/admin/all-fin-docs
 * @access  Private
 */
exports.getAllFinancialDocs = asyncHandler(async (req, res, next) => {
  const {
    userId,
    documentType,
    documentedYear,
    documentedMonth,
    current,
  } = req.body;

  let filter = {};

  if (current === 'employee') {
    filter = {
      $and: [
        { user: userId },
        { documentType },
        {
          'documentedDate.year': documentedYear,
        },
      ],
    };
  } else if (current === 'month') {
    filter = {
      $and: [
        { documentType },
        {
          documentedDate: {
            month: documentedMonth,
            year: documentedYear,
          },
        },
      ],
    };
  }

  const finDocs = await FinancialDocument.find(filter).populate('user');
  let downloadUrls = new Array();

  if (finDocs !== null && finDocs.length > 0) {
    for (let finDoc of finDocs) {
      let fileKey = finDoc.fileKey;
      const params = {
        Bucket: 'random-bucket-1234',
        Expires: 60 * 60,
        Key: `${fileKey}`,
      };
      let s3GetUrl = await new AwsS3().getSignedUrl('getObject', params);
      if (finDoc.user)
        downloadUrls.push({
          documentedDate: finDoc.documentedDate,
          documentType: finDoc.documentType,
          user: {
            id: finDoc.user._id,
            empNo: finDoc.user.empNo,
            name: finDoc.user.name,
          },
          downloadUrl: s3GetUrl,
        });
    }
  }
  res.status(200).json({
    success: true,
    data: {
      downloadUrls,
    },
  });
});

/**
 * @desc    Update User password
 * @route   POST /api/admin/update-password
 * @access  Private
 */

exports.updateUserPassword = asyncHandler(async (req, res, next) => {
  const { userId } = req.body;

  let user = await User.findById(userId);

  if (!user) {
    return next(new ErrorResponse('User not found', 400));
  }
  let password = crypto.randomBytes(8).toString('hex');

  const salt = await bcrypt.genSalt(10);
  let hashedPassword = await bcrypt.hash(password, salt);

  user = await User.findByIdAndUpdate(
    user._id,
    {
      password: hashedPassword,
    },
    {
      new: true,
      runValidators: true,
    }
  );

  // const message = `You are receiving this email because your password has been changed by admin : email: ${user.email}, password: ${password}`;

  await sendEmail({
    email: user.email,
    subject: 'Password Reset',
    html: renderResetPasswordTemplate({
      email: user.email,
      password,
      domain: process.env.DOMAIN,
    }),
  });

  res.status(200).json({
    success: true,
    message: `Password Reset mail sent to ${user.email}`,
  });
});

/**
 * @desc    Admin confirmation mail
 * @route   POST /api/admin/confirmation-email
 * @access  Private
 */

exports.sendConfirmationMail = asyncHandler(async (req, res, next) => {
  const { subject, message, message2 } = req.body;

  await sendEmail({
    email: req.user.email,
    subject,
    html: renderUploadFilesTemplate({ message: message, message2: message2 }),
  });

  res.status(200).json({
    success: true,
    message: `Mail sent succesfully`,
  });
});
