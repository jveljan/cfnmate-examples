# cfnmate-examples

# Install cfnmate
```
npm install -g cfnmate
```

# Run examples
```
cfnmate deploy vpc/vpc.yml Env=dev
cfnmate deploy ecs-fargate-project/ecs-nginx/service.yaml Env=dev Subnets=sn1,sn2 VpcId=vpc-1
```

