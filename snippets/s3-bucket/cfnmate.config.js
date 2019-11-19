module.exports = ({ Env, Prefix }) =>  ({
  dryRun: true,
  stackName: `s3-bucket-${Prefix}-${Env}`,
  template: 'bucket.yaml',
  tags: {
    Env: `${Env}`,
    Prefix: `${Prefix}`,
    CreatedBy: 'cfnmate:bucket.yaml'
  }
})