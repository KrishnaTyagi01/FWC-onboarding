module.exports = {
  mongoUri: process.env.MONGO_URI,
  jwtSecret: process.env.JWT_SECRET,
  jwtExpire: process.env.JWT_EXPIRE,
  jwtCookieExpire: process.env.JWT_COOKIE_EXPIRE,
  smtpHost: process.env.SMTP_HOST,
  smtpPort: process.env.SMTP_PORT,
  smtpEmail: process.env.SMTP_EMAIL,
  smtpPassword: process.env.SMTP_PASSWORD,
  fromName: process.env.FROM_NAME,
  fromEmail: process.env.FROM_EMAIL,
  awsS3AccessKeyId: process.env.AWS_S3_ACCESS_KEY_ID,
  awsS3SecretAccessKey: process.env.AWS_S3_SECRET_ACCESS_KEY,
};
