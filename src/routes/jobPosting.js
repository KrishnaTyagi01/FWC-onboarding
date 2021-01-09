const express = require('express');
const router = express.Router();

const {
  getJobPosting,
  getJobPostings,
  createJobPosting,
  deleteJobPosting,
  createJobRespond,
  getJobResponds,
  updateJobPosting,
} = require('../controllers/jobPosting');

const { protect, authorize } = require('../middleware/auth');

router
  .route('/')
  .get(getJobPostings)
  .post(protect, authorize('admin', 'sub-admin'), createJobPosting);
router.post('/respond', protect, createJobRespond);
router.get(
  '/respond',
  protect,
  authorize('admin', 'sub-admin'),
  getJobResponds
);
router
  .route('/:id')
  .get(getJobPosting)
  .put(protect, authorize('admin', 'sub-admin'), updateJobPosting)
  .delete(protect, authorize('admin', 'sub-admin'), deleteJobPosting);

module.exports = router;
