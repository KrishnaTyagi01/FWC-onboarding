const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');

const ca = [fs.readFileSync(path.resolve(__dirname, 'aws_db_ca_bundle.pem'))];

const dbConnect = async () => {
  let mongooseOptions = {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  };

  if (process.env.NODE_ENV === 'production') {
    mongooseOptions = {
      ...mongooseOptions,
      sslValidate: true,
      sslCA: ca,
    };
  }
  const conn = await mongoose.connect(process.env.MONGO_URI, mongooseOptions);
  console.log(`MongoDB connected: ${conn.connection.host}`.cyan.underline.bold);
};

module.exports = dbConnect;
