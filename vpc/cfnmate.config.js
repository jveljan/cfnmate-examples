module.exports = ({ Env }) =>  ({
  dryRun: true,
  stackName: `vpc-stack-${Env}`,
  template: 'vpc.yml',
  tags: {
    Env: `${Env}`,
    Name: `cfnmate:vpc:${Env}`
  }
})