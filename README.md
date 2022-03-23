# aws-serverless-example

This sample project has two lambda functions
1. hello: Listens to API Gateway HTTP Requests, adds a unique ID and pushes the data to a dynamodb table.
2. dblistener: Listens to dynamodb table, if changes match filter criteria then the lambda processes data.

## Install serverless
npm i -g serverless

## Deploy

sls deploy

## Remove stack

sls remove