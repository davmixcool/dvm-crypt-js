# dvm-crypt-js
Encrypt and Decrypt Alphabetic Strings

## Steps:

* [Install](#install)
* [Usage](#usage)


## Install

`npm install dvm-crypt-js --save`

## Usage 

- Import the module

`var dvm_crypt = require('dvm-crypt-js');`

- Hash a string

`var hash = dvm_crypt.encrypt('David');`

- Decrypt a hash value to its original form

`var string = dvm_crypt.decrypt('e2o4e11o28e2');`

