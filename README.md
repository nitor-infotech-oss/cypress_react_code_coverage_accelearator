## Cypress Accelerator with React code coverage

<br />

> ### Application under test is based on React + Redux RealWorld example app and codebase contains real world examples (CRUD, auth, advanced patterns, etc) that adheres to the [RealWorld](https://github.com/gothinkster/realworld-example-apps) spec and API.

<br />

## Key Points of this Solution:
-   Application Code Coverage
-   Page Object Model(POM) implementation
-   HTML Reports
-   Environment vise data parameterization using json and csv files
-   Implementation of common utilities for data parser and date parser
-   Adding user defined functions as Cypress common functions
-   Cross Browser testing support
- Command line parameter support
 
<br />

## Getting started

You can view a live demo of application under test at https://react-redux.realworld.io/

<br /> 

### Prerequisite:
- Clone this repo
- `npm install` to install all required dependencies
- `npm install -g junit-merge`
- `npm install -g xunit-viewer`


### To run react application locally:

- `npm start` to start the local server (this project uses create-react-app)

### To run the cypress automation:
- `npm run testE2E -- --env env='<run_env>' --headed --browser chrome` (to run the cypress test using command line, here headed implies that we need to run test cases in Headed mode and we can pass ie/edge/electorn/firefox to run test cases on a different browser)
- `npm run mergereport` (to generate a merged Json file, which can be used for Jenkins /creating HTML reports)
- `npm run createHTMLReport` (to generate HTML reports after merging Jsons)

### To open cypress runner:
- `npm run openCypress -- --env env='<run_env>'`
### Test data passing to test cases:

- Test data to the test cases is passed using .json and csv files and they are present under the fixtures folder
- As per the Environment value (qa/dev) passed while running the cypress tests, the test data files are used by the code.
- Baseurl/url in the current solution is passed using the cypress.json
  

Local web server will use port 4100 instead of standard React's port 3000 to prevent conflicts with some back ends like Node or Rails. You can configure port in scripts section of `package.json`: we use [cross-env](https://github.com/kentcdodds/cross-env) to set environment variable PORT for React scripts, this is Windows-compatible way of setting environment variables.

## Folder Structure for Cypress:
- Fixtures: Uses to put test data in “.json” format
- Integration: Uses to write all our testcases
- Plugins: These are the cypress listener; and cypress events after and before
- Support: Uses to write all reusable methods. Here we can add page object models as well
  - command.js in support folder contains the user created commands
  - The solution is based on POM and page object files which contain the locator and is created under support\pageObjects folder 
- cypress.json: Uses to overwrite all default cypress configuration
- package.json: uses to add any dependency which are required

### Cypress Overview
- Cypress is a JS based UI automation tool which allows user to automate application effectively and easily.
- Cypress is very fast as compared to other tools as it runs within browser.
- The component currently has capability to create good HTML reports.
- Cypress also have capability to capture screenshot and videos automatically.
- Code coverage with Cypress for angular application is also implemented, which helps to generate a report showing how much code coverage does Cypress tests are covering.

### Setup Code Coverage for React application from scratch:
- Please follow steps in the file "How to Setup From Scratch.md" for setting it up from scratch in any existing project.