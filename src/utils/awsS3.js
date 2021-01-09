const { promisify } = require('util');
const AWS = require('aws-sdk');

const { awsS3AccessKeyId, awsS3SecretAccessKey } = require('../../config/keys');

class AwsS3 {
  s3 = new AWS.S3({
    accessKeyId: awsS3AccessKeyId,
    secretAccessKey: awsS3SecretAccessKey,
    signatureVersion: 'v4',
    region: 'ap-south-1',
  });
  s3GetSignedUrl = promisify(this.s3.getSignedUrl).bind(this.s3);

  async getSignedUrl(requestMethod, config) {
    try {
      const signedUrl = await this.s3GetSignedUrl(requestMethod, config);
      return signedUrl;
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = AwsS3;
