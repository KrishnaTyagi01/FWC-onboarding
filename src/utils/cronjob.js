const cron = require('node-cron');
const User = require('../models/User');

exports.validateUserActivity = () => {
  cron.schedule('20 4 * * *', async () => {
    console.log('********** Running Cronjob ***************');
    const users = await User.aggregate([
      {
        $project: {
          _id: 1,
          email: 1,
          duration: {
            $trunc: {
              $divide: [
                { $subtract: [Date.now(), '$lastLogin'] },
                1000 * 60 * 60 * 24,
              ],
            },
          },
          active: 1,
        },
      },
      {
        $match: {
          $and: [{ duration: { $gt: 10 } }, { active: { $ne: 0 } }],
        },
      },
    ]);

    for (let user of users) {
      await User.findByIdAndUpdate(
        user._id,
        { active: 0 },
        {
          new: true,
        }
      );
    }
  });
};
