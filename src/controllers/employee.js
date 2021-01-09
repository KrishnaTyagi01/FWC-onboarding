const asyncHandler = require('../middleware/async');
const AwsS3 = require('../utils/awsS3');

const Employee = require('../models/Employee');
const User = require('../models/User');
const FinancialDocument = require('../models/FinancialDocument');

/**
 * @desc    Create employee info
 * @route   POST /api/employee
 * @access  Private
 */
exports.postEmployeeInfo = asyncHandler(async (req, res, next) => {
  const { postParams } = req.body;
  let employee = await Employee.findOne({ user: req.user.id });
  let update = {
    ...postParams,
    updatedAt: Date.now(),
  };
  employee = await Employee.findByIdAndUpdate({ _id: employee._id }, update, {
    new: true,
  });

  res.status(201).json({
    success: true,
    message: 'Dumped Employee info',
    data: employee,
  });
});

/**
 * @desc    Get employee info according to querystring select
 * @route   GET /api/employee?select=name
 * @access  Private
 */

exports.getEmployeeInfo = asyncHandler(async (req, res, next) => {
  if (!req.query.select) {
    const userData = await User.findById(req.user.id).select('name');
    let employeeData = await Employee.findOne({ user: req.user.id }).select(
      'photo isFormComplete joiningDate designation department empNo'
    );
    let data;
    if (employeeData !== null) {
      employeeData = employeeData.toObject();
      data = {
        name: userData.name,
        photo: employeeData.photo,
        isFormComplete: employeeData.isFormComplete,
        joiningDate: employeeData.joiningDate,
        designation: employeeData.designation,
        department: employeeData.department,
        empNo: employeeData.empNo,
      };
    } else {
      data = {
        name: '',
        photo: '',
      };
    }
    return res.status(200).json({
      success: true,
      message: 'User info',
      data,
    });
  }

  const fields = req.query.select.split(',').join(' ');
  const results = await Employee.findOne({ user: req.user.id }).select(fields);

  res.status(200).json({
    success: true,
    message: 'Employee info',
    data: results,
  });
});

/**
 * @desc    Change active status
 * @route   POST /api/employee/financial-docs
 * @access  Private
 */
exports.getFinancialDocsUrl = asyncHandler(async (req, res, next) => {
  const { documentedDate, documentType } = req.body;

  let financialDocument = await FinancialDocument.findOne({
    $and: [
      {
        user: req.user.id,
      },
      {
        documentType,
      },
      {
        documentedDate,
      },
    ],
  }).select('-user -_id -createdAt -__v');

  if (financialDocument !== null) {
    financialDocument = financialDocument.toObject();

    let { fileKey } = financialDocument;

    const params = {
      Bucket: 'random-bucket-1234',
      Expires: 60 * 60,
      ResponseContentType: 'application/pdf',
      Key: `${fileKey}`,
    };
    let url = await new AwsS3().getSignedUrl('getObject', params);
    financialDocument.url = url;
  }
  res.status(200).json({
    success: true,
    message: 'Fetched financial docs',
    data: financialDocument,
  });
});

/**
 * @desc    Change active status
 * @route   GET /api/employee/financial-docs?documentType=''
 * @access  Private
 */
exports.getFinancialDocument = asyncHandler(async (req, res, next) => {
  const { documentType } = req.query;

  let financialDocument = await FinancialDocument.find({
    $and: [
      {
        user: req.user.id,
      },
      {
        documentType,
      },
    ],
  }).select('documentedDate');

  res.status(200).json({
    success: true,
    message: `Fetched financial docs for ${documentType}`,
    data: financialDocument,
  });
});

/**
 * @desc    Create or update financial document for a employee
 * @route   PUT /api/employee/financial-docs
 * @access  Private
 */
exports.createOrUpdateFinDoc = asyncHandler(async (req, res, next) => {
  let { documentType, documentedDate, fileKey } = req.body;
  let financialDocument;
  let finDoc = await FinancialDocument.findOne({
    $and: [{ user: req.user.id }, { documentedDate }, { documentType }],
  });

  if (!finDoc) {
    console.log('new doc');
    financialDocument = new FinancialDocument({
      user: req.user.id,
      documentType,
      documentedDate,
      fileKey,
    });
    await financialDocument.save();
    return res.status(201).json({
      success: true,
      message: `Document: ${documentType} added`,
      data: financialDocument,
    });
  }
  console.log('update doc');
  finDoc = await FinancialDocument.findByIdAndUpdate(
    finDoc._id,
    {
      documentType,
      documentedDate,
      fileKey,
      updatedAt: Date.now(),
    },
    {
      new: true,
      runValidators: true,
    }
  );

  res.status(201).json({
    success: true,
    message: `Document: ${documentType} updated`,
    data: finDoc,
  });
});
