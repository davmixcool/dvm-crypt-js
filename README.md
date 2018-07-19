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

