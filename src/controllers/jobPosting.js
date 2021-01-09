const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');
const sendEmail = require('../utils/sendMail');
const AwsS3 = require('../utils/awsS3');

const JobPosting = require('../models/JobPosting');
const JobResponds = require('../models/JobResponds');
const User = require('../models/User');

/**
 * @desc    Get JobPostings
 * @route   GET /api/job-posting
 * @access  Public
 */
exports.getJobPostings = asyncHandler(async (req, res, next) => {
  const jobPostings = await JobPosting.find({ isDeleted: false });
  res.status(200).json({
    success: true,
    data: jobPostings,
  });
});

/**
 * @desc    Get a single JobPosting
 * @route   GET /api/job-posting/:id
 * @access  Public
 */

exports.getJobPosting = asyncHandler(async (req, res, next) => {
  const jobPosting = await JobPosting.findById(req.params.id);

  if (jobPosting.isDeleted || !jobPosting) {
    return next(
      new ErrorResponse(
        `No JobPosting found with the id of ${req.params.id}`,
        404
      )
    );
  }

  res.status(200).json({
    success: true,
    data: jobPosting,
  });
});

/**
 * @desc    Create JobPosting
 * @route   POST /api/job-posting/
 * @access  Private
 */
exports.createJobPosting = asyncHandler(async (req, res, next) => {
  const {
    name,
    title,
    shortDescription,
    longDescription,
    type,
    shiftType,
    location,
    imageUrl,
    deadline,
    salary,
    skills,
    experience,
  } = req.body;

  let jobPosting = new JobPosting({
    name,
    shortDescription,
    longDescription,
    type,
    shiftType,
    location,
    imageUrl,
    deadline,
    salary,
    skills,
    title,
    experience,
    user: req.user.id,
  });

  await jobPosting.save();

  res.status(201).json({
    success: true,
    message: 'Created JobPosting',
    data: jobPosting,
  });
});

/**
 * @desc    Update a job posting
 * @route   PUT /api/job-posting/:id
 * @access  Public
 */
exports.updateJobPosting = asyncHandler(async (req, res, next) => {
  let jobPosting = await JobPosting.findById(req.params.id);

  if (jobPosting.isDeleted || !jobPosting) {
    return next(
      new ErrorResponse(`No jobPosting with the id of ${req.params.id}`, 404)
    );
  }

  req.body.isDeleted && delete req.body.isDeleted;
  jobPosting = await JobPosting.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  res.status(200).json({
    success: true,
    message: 'Updated job posting',
    data: jobPosting,
  });
});

/**
 * @desc    Delete a job posting
 * @route   DELETE /api/job-posting/:id
 * @access  Public
 */
exports.deleteJobPosting = asyncHandler(async (req, res, next) => {
  let jobPosting = await JobPosting.findById(req.params.id);

  if (jobPosting.isDeleted || !jobPosting) {
    return next(
      new ErrorResponse(`No jobPosting with the id of ${req.params.id}`, 404)
    );
  }
  await JobPosting.findByIdAndUpdate(req.params.id, { isDeleted: true });
  res.status(200).json({
    success: true,
    data: {},
  });
});

/**
 * @desc    Create a respond by an employee
 * @route   POST /api/job-posting/respond
 * @access  Private
 */

exports.createJobRespond = asyncHandler(async (req, res, next) => {
  let { jobId, fileKey } = req.body;
  let jobPosting = await JobPosting.findById(jobId);

  if (!jobPosting || jobPosting.isDeleted) {
    return next(
      new ErrorResponse(`No jobPosting with the id of ${req.params.id}`, 404)
    );
  }

  let jobRespondsUser = await JobResponds.findOne({
    $and: [
      { user: req.user.id },
      {
        job: jobPosting._id,
      },
    ],
  });

  if (!jobRespondsUser) {
    jobRespondsUser = new JobResponds({
      job: jobPosting._id,
      user: req.user.id,
      fileKey,
    });
    await jobRespondsUser.save();
  } else {
    jobRespondsUser = await JobResponds.findOneAndUpdate(
      {
        $and: [
          { user: req.user.id },
          {
            job: jobPosting._id,
          },
        ],
      },
      {
        fileKey,
        updatedAt: Date.now(),
      },
      {
        new: true,
        runValidators: true,
      }
    );
  }

  // Get uploaded resume from S3
  const params = {
    Bucket: 'random-bucket-1234',
    Expires: 60 * 60,
    Key: `${fileKey}`,
  };

  const s3GetUrl = await new AwsS3().getSignedUrl('getObject', params);

  let user = await User.findById(jobPosting.user);
  let html = `<bold>You are receiving this email because the employee ${req.user.name} has uploaded his resume</bold>`;

  await sendEmail({
    email: user.email,
    subject: 'Job Posting',
    html,
    attachments: [
      {
        // use URL as an attachment
        filename: 'resume.pdf',
        path: s3GetUrl,
      },
    ],
  });

  res.status(202).json({
    success: true,
    data: jobRespondsUser,
  });
});

/**
 * @desc    Get all JobResponds
 * @route   GET /api/job-posting/respond
 * @access  Private
 */
exports.getJobResponds = asyncHandler(async (req, res, next) => {
  let jobResponds = await JobResponds.find({})
    .populate({
      path: 'user',
      select: 'name',
    })
    .populate({
      path: 'job',
      select: 'name description',
    });
  res.status(200).json({
    success: true,
    message: 'Get all job responds',
    data: jobResponds,
  });
});
