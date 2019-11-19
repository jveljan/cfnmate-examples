module.exports = ({ Env, Name }) =>  ({
  dryRun: true,
  stackName: `ecs-cluster-${Name}-${Env}`,
  tags: {
    CreatedBy: 'cfnmate:cluster.yaml'
  }
})