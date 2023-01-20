# Serverless Project

## About
This is a fully serverless project! The project is hosted using a S3 bucket with CloudFront.
The user requests are managed through AWS's API Gateway and Lambda. 
User data along with the inventory is stored using RDS (MySQL) and DynamoDB. 
Once an order is placed, SES (Simple Email Service) is triggered to alert the admin (owner) of product purchase. 
A log of daily sales is also generated using SNS (Simple Notification Service).

## Project Status

This project is currently not hosted as AWS charges for many of the features implemented.

## Built With

- ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
- ![AWS](https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white)
- ![MySQL](https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white)


## Architecture
![Image](./architecture.jpg)

The client sends a request to access the website to CloudFront to display the website. From there lambda calls are made through the API Gateway depending on user/ admin requests. Incase there are too many requests made in a very short amount, SQS (Simple Queue Service) manages by acting as a buffer between the producer and the consumer, making sure all messages are delivered. Sending a receipt to the user/ admin once an item is purchased and generating a daily sales report for the admin is all triggered and managed by lambda functions.

<sub>Refer/ download architecture pdf <a href="https://github.com/ogharambae/serverless_shoe_store/blob/master/architecture.jpg">here</a>.</sub>
