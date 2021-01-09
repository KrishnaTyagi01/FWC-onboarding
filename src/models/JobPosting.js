const mongoose = require('mongoose');

const JobPostingSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  type: {
    type: String,
  },
  shortDescription: {
    type: String,
  },
  longDescription: {
    type: String,
  },
  shiftType: {
    type: String,
  },
  location: {
    type: String,
  },
  imageUrl: {
    type: String,
  },
  deadline: {
    type: String,
  },
  salary: {
    type: String,
  },
  experience: {
    type: String,
  },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'users',
  },
  createdBy: {
    type: mongoose.Schema.ObjectId,
    ref: 'users',
  },
  isDeleted: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('job_postings', JobPostingSchema);
