const asyncHandler = require('../middleware/async');
const AwsS3 = require('../utils/awsS3');
const ErrorResponse = require('../utils/errorResponse');

const Employee = require('../models/Employee');

/**
 * @desc    Upload file to aws s3
 * @route   POST /api/file/upload-url
 * @access  Private
 */
exports.uploadFile = asyncHandler(async (req, res, next) => {
  const { fileName, fileType, fileExtension } = req.body;

  let fileKey;
  if (fileType === 'doc')
    fileKey = `${req.user.id}/doc/${fileName}.${fileExtension}`;
  else if (fileType === 'photo') {
    fileKey = `photos/${req.user.id}.${fileExtension}`;
  }

  const params = {
    Bucket: 'random-bucket-1234',
    ContentType: fileExtension,
    Expires: 60 * 60,
    Key: fileKey,
  };

  let url = await new AwsS3().getSignedUrl('putObject', params);

  res.status(200).json({
    success: true,
    message: `Created PUT url for file upload for ${fileName}`,
    fileKey,
    url,
  });
});

/**
 * @desc    Get a file from aws s3
 * @route   GET /api/file/get-url
 * @access  Private
 */
exports.getFile = asyncHandler(async (req, res, next) => {
  const { fileKey } = req.query;
  const params = {
    Bucket: 'random-bucket-1234',
    Expires: 60 * 60,
    Key: `${fileKey}`,
  };

  let url = await new AwsS3().getSignedUrl('getObject', params);

  // res.redirect(url)
  res.status(200).json({ url });
});

/**
 * @desc    Upload payslip or timesheet by admin to aws s3
 * @route   GET /api/file/financial-document
 * @access  Private
 */
exports.uploadFinancialDocument = asyncHandler(async (req, res, next) => {
  const { fileType, fileExtension, userId, date, employeeNo } = req.body;

  if (!date || !fileExtension || !fileType) {
    return next(
      new ErrorResponse(
        'Provide all params: fileType, fileExtension, date',
        400
      )
    );
  }

  let fileKey = '';
  let employee;

  if (userId) {
    fileKey = `${userId}/${fileType}/${date}.${fileExtension}`;
  } else if (employeeNo) {
    employee = await Employee.findOne({ empNo: employeeNo });
    if (!employee) {
      return next(new ErrorResponse(`No such employee :${employeeNo}`, 400));
    }
    fileKey = `${employee.user}/${fileType}/${date}.${fileExtension}`;
  }

  const params = {
    Bucket: 'random-bucket-1234',
    ContentType: 'application/pdf',
    Expires: 60 * 60,
    Key: fileKey,
  };

  let url = await new AwsS3().getSignedUrl('putObject', params);

  res.status(200).json({
    success: true,
    message: `Created PUT url for uploading for ${fileType}`,
    fileKey,
    url,
    userId: employee.user,
  });
});
