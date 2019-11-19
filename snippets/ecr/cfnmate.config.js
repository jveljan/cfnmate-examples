module.exports = ({ RepositoryName }) =>  ({
  dryRun: true,
  stackName: `ecr-${RepositoryName}`,
  template: 'repository.yaml',
  tags: {
    CreatedBy: 'cfnmate:repository.yaml'
  }
})