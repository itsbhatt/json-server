# json-server
Json server powered by express.js that works on AWS Lambda


This project provides a json mock server which can be deployed on AWS Labda leveraging [`serverless-http`](https://github.com/dougmoscrop/serverless-http/) core functionalities.

- [How to install](#how-to-install)
- [Overview](#overview)
- [Structure](#structure)
- [Usage](#usage)
- [Deployment](#deployment)
  - [`Serverless (AWS Lambda)`](#aws-lambda)
  - [`Other`](#other)

## How to install

There is no installation so to say, you just have to clone this repo and you are good to go.

```bash
git clone https://github.com/ItsBhatt/json-server.git
```


## Overview

`json-server` takes advantage of `serverless-http` package which acts as a wrapper and exported as a handler supported by AWS Lambda. It can be deployed on serverless functions as well as on normal servers.


## Structure

- helpers -> Parsing the req + generating response
- db.json -> Mock data which will be used for response generation
- index.js -> Root File
- routes.js -> express server routes


## Usage

After clonning the repo you can simply add you mock json data inside `db.json` on the root directory.


## Deployment

It can be deployed on any platform(server/serverless) and it works seamlessly.

### AWS-Lambda

> Asuming you have already created api and lambda function <br>

 Step 1 - Just create a .zip of all files including node_modules. <br>
 Step 2 - Open your labda function and upload the .zip file. <br>
 Step 3 - Add a environment variable `ENVIRONMENT=production`. <br>
 Step 4 - Deploy the function 🎊 . <br>


### Other

You can simply deploy this as an express app on any server.



