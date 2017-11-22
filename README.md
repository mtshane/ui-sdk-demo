UI SDK Quickstart Application
=============================
The UI SDK Quickstart Application is based on the Style Guide application which is a part of the UI SDK repo at [https://gitlab.dematic.com/Dematiclabs/ui-sdk](https://gitlab.dematic.com/Dematiclabs/ui-sdk).  It is intended to be used as a baseline, plain-vanilla application based on the UI SDK for use when you need to create an application from scratch. 


Installation
-------------

### Prerequisites

* [Node.js and npm](https://docs.npmjs.com/getting-started/installing-node)
* [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)

### Install Global Dependencies:

```bash
npm install -g typescript @angular/cli
```

### Install npm packages

NOTE: Be sure to follow the directions above under "Configure NPM to Access the Dematic Artifactory NPM Registry" before attempting the follwoing.  Dependencies for the Quick Start application require access to the internally hosted KION Artifactory NPM registry.

Install the npm packages described in the `package.json`:
```bash
npm install
```

Running the Application
-----------------------

```bash
$ npm run start
```

The Quick Start application can now be viewed at:
[http://localhost:4200/](http://localhost:4200/)

Testing the Application
-----------------------

Run unit tests on the app with:
```bash
$ npm run test
```

Run integration (e2e) tests on the app with:
```bash
$ ng e2e
```
