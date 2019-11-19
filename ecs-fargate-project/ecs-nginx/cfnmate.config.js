const { dependency } = require('cfnmate/plugins')

const cluster = 'examples'
module.exports = ({ Env }) => ({
  dryRun: true,
  stackName: `nginx-service-${Env}`,
  template: 'service.yml',
  params: {
    ServiceName: 'nginxsvc',
    Cluster: cluster,
    DockerUrl: 'nginx'
  },
  capabilities: 'CAPABILITY_IAM',
  tags: {
    CreatedBy: `cfnmate:ecs-nginx-${Env}`
  },
  plugins: [
    dependency(`${__dirname}/../ecs-cluster/cluster.yaml`, {
      Env,
      Name: cluster
    })
  ]
})