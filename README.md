# dvm-crypt-js
Encrypt and Decrypt a String

## Steps:

* [Install](#install)
* [Usage](#usage)
* [Write and test the library locally](#write-and-test)
* [Publish the code and the package](#publish-package)
* [Test your library](#test-lib)


## Install

On the shell run the following commands:

`npm install dvm-crypt-js --save`

## Usage 

- Import the module

`var dvm-crypt = require('dvm-crypt-js');`

- Hash a string

`var hash = dvm-crypt.encrypt('David');`

- Decrypt a hash value to its original form

`var string = dvm-crypt.decrypt('e2o4e11o28e2');`

## Write and test the library locally

- Now you are done with the library and can test it using node command line tool:

`$ node`

`> var lib=require('./src/index.js');`

`> lib.addNumbers(6,7);`

`13`

`> .exit`


## Publish your library to GitHub and NPM

- Push it to github run the following commands:

`git add --all`

`git commit –m 'basic files'`

`git push`

- And publish it to npm using the command:

`npm publish`

Thats it!!! you can use the library now

To creare a relese version run:

`git tag 1.0.0`

`git push –tags`

`npm publish`
