<!--
title: Serverless Framework Commands - AWS Lambda - Install
menuText: Install
description: Install pre-written AWS Lambda Functions, Events and Resources with the Serverless Framework
layout: Doc
-->

# Install

Installs a service from a GitHub URL in the current working directory.

```
serverless install --url https://github.com/some/service
```

## Options
- `--url` or `-u` The services GitHub URL. **Required**.

## Provided lifecycle events
- `install:install`

## Examples

### Installing a service from a GitHub URL

```
serverless install --url https://github.com/johndoe/authentication
```

This example will download the .zip file of the `authentication` service from GitHub,
create a new directory with the name `authentication` in the current working directory
and unzips the files in this directory.