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

### Configure NPM to Access the Dematic Artifactory NPM Registry
##### Obtain an encoded password
In order for your NPM command line client to work with Artifactory you will first need to set up your `.npmrc` file with the necessary credentials. For getting authentication details run the following command:

```bash
$ curl -u'your KION username:your KION password' "http://artifactory.ops.cld/artifactory/api/npm/npm-local/auth/kion"
```

*NOTE:* Because the values for the password property will change when your corporate password changes (i.e., every 90 days), you will need to run the above command whenever your corporate password changes and update your .npmrc file accordingly.
The response should be pasted in the `~/.npmrc` (in Windows `%USERPROFILE%/.npmrc`) file, as follows

The response should be pasted in the `~/.npmrc` (in Windows `%USERPROFILE%/.npmrc`) file, as follows:
```text
ca=
strict-ssl=false
always-auth=false
@kion:registry=http://artifactory.ops.cld:80/artifactory/api/npm/npm-local/
//artifactory.ops.cld:80/artifactory/api/npm/npm-local/:_password=<your encoded password>
//artifactory.ops.cld:80/artifactory/api/npm/npm-local/:username=silveir
//artifactory.ops.cld:80/artifactory/api/npm/npm-local/:email=Rodrigo.Silveira@dematic.com
//artifactory.ops.cld:80/artifactory/api/npm/npm-local/:always-auth=true
```

### Create a new project based on the Quickstart app

Clone this repo into new project folder (e.g., `my-proj`):
```bash
git clone https://gitlab.dematic.com/Dematiclabs/ui-sdk-quickstart
cd my-proj
```

Discard everything "git-like" by deleting the `.git` folder:
```bash
rm -rf .git  # non-Windows
rd .git /S/Q # windows
```

#### Create a new git repo

Initialize this project as a *local git repo* and make the first commit:
```bash
git init
git add .
git commit -m "Initial commit"
```

Create a *remote repository* for this project on the service of your choice.

Grab its address (e.g. *`https://gitlab.dematic.com/<my-org>/my-proj.git`*) and push the *local repo* to the *remote*:
```bash
git remote add origin <repo-address>
git push -u origin master
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