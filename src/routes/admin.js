const express = require('express');
const router = express.Router();

const {
  getAllUsers,
  getEmployeeInfo,
  changeUserActiveStatus,
  updateRegisteredUser,
  addReportee,
  deleteUser,
  getFinancialDocs,
  toggleFormComplete,
  getSingleFinancialDoc,
  updateUserPassword,
  getAllFinancialDocs,
  sendConfirmationMail,
} = require('../controllers/admin');

const { protect, authorize } = require('../middleware/auth');

router
  .route('/users')
  .get(protect, authorize('admin', 'sub-admin'), getAllUsers);
router.route('/employee/:id').delete(protect, authorize('admin'), deleteUser);
router
  .route('/change-activity')
  .post(protect, authorize('admin', 'sub-admin'), changeUserActiveStatus);
router
  .route('/confirmation-email')
  .post(protect, authorize('admin', 'sub-admin'), sendConfirmationMail);
router
  .route('/employee-info/:userId')
  .get(protect, authorize('admin', 'sub-admin'), getEmployeeInfo);
router
  .route('/register')
  .put(protect, authorize('admin', 'sub-admin'), updateRegisteredUser);
router.route('/add-reportee').post(protect, authorize('admin'), addReportee);
router
  .route('/financial-documents')
  .post(protect, authorize('admin', 'sub-admin'), getFinancialDocs);
router
  .route('/single-fin-doc')
  .post(protect, authorize('admin', 'sub-admin'), getSingleFinancialDoc);
router
  .route('/all-fin-docs')
  .post(protect, authorize('admin', 'sub-admin'), getAllFinancialDocs);

router
  .route('/toggle-form-completion')
  .post(protect, authorize('admin', 'sub-admin'), toggleFormComplete);

router
  .route('/update-password')
  .post(protect, authorize('admin'), updateUserPassword);

module.exports = router;
