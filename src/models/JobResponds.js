const mongoose = require('mongoose');

const JobRespondsSchema = new mongoose.Schema({
  job: {
    type: mongoose.Schema.ObjectId,
    ref: 'job_postings',
  },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'users',
  },
  fileKey: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('job_responds', JobRespondsSchema);
