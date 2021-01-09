const mongoose = require('mongoose');

const FinancialDocumentSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'users',
  },
  documentType: {
    type: String,
    required: [true, 'Please add a documentType'],
  },
  fileKey: {
    type: String,
    required: true,
  },
  documentedDate: {
    month: String,
    year: String,
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

module.exports = mongoose.model('financial_documents', FinancialDocumentSchema);
