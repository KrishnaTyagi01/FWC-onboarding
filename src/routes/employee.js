const express = require('express');
const router = express.Router();

const {
  postEmployeeInfo,
  getEmployeeInfo,
  getFinancialDocsUrl,
  getFinancialDocument,
  createOrUpdateFinDoc,
} = require('../controllers/employee');

const { protect } = require('../middleware/auth');

router.route('/').post(protect, postEmployeeInfo);
router.route('/').get(protect, getEmployeeInfo);
router
  .route('/financial-docs')
  .get(protect, getFinancialDocument)
  .post(protect, getFinancialDocsUrl)
  .put(protect, createOrUpdateFinDoc);

module.exports = router;
