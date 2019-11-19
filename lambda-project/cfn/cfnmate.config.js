const { s3util } = require('cfnmate')
const { resourceTransform, dependency } = require('cfnmate/plugins')

const bucketPrefix = 'lambda-project'

module.exports = ({ Env, Version }) => ({
  dryRun: true,
  stackName: `lambda-sample-${Env}`,
  capabilities: 'CAPABILITY_IAM',
  tags: {
    Env, Version,
    CreatedBy: 'cfnmate:lambda-project'
  },
  plugins: [
    dependency(
      `${__dirname}/../../snippets/s3-bucket/bucket.yaml`,
      {
        Prefix: bucketPrefix,
        Env
      }
    ),
    resourceTransform({
      LambdaFunction({ Properties }) {
        const Code = {
          S3Bucket: `${bucketPrefix}-${Env}`,
          S3Key: Version
        }
        Properties.Code = Code
        //return s3util.zipAndPushToS3('src', Code.S3Bucket, Code.S3Key)
      }
    })
  ]
})