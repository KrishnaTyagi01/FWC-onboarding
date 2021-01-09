const mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.ObjectId,
      ref: 'users',
    },
    photo: {
      type: String,
      default: '',
    },
    paySlipDownloads: {
      type: Number,
      default: 0,
    },
    isFormComplete: {
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
  },
  { strict: false }
);

module.exports = mongoose.model('employees', EmployeeSchema);
