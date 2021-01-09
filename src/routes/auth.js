const express = require('express');
const router = express.Router();

const {
  register,
  login,
  logout,
  updatePassword,
  validateToken,
} = require('../controllers/auth');

const { protect, authorize } = require('../middleware/auth');

router.post('/register', protect, authorize('admin', 'sub-admin'), register);
router.post('/login', login);
router.get('/validate-token', protect, validateToken);
router.post('/update-password', protect, updatePassword);
router.get('/logout', logout);

module.exports = router;
