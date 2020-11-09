//including cypress as reference includes the intelligence for cypress in the file
/// <reference types="cypress" />
import HomePage from "../../support/pageObjects/HomePage";
import SignInPage from "../../support/pageObjects/SignInPage";
import UserDashboardPage from "../../support/pageObjects/UserDashboardPage";
import SignUpPage from "../../support/pageObjects/SignUpPage";
import Reusable from "../../support/reusable.js";

let reusable = new Reusable();
let env, url, fileData, randomNumber, homePageObj, signUpObj, signInObj,userDashboardObj;

//Test suite
describe("validate the signup and sign in functionality", () => {
  before(() => {
    //reads the value for env which is passed during runtime or default value in the cypress.json
    env = Cypress.env("env");
    cy.log(`env is ${env}`);
    url = Cypress.env(env).url;
    let filepath = `${env}/signUpTestData.json`;
    randomNumber = reusable.getRandomNumber(1, 10000);
    //cy.fixture allows to read the json files directly from the fixture folder
    cy.fixture(filepath).then(function (data) {
      fileData = data;
    });
    homePageObj = new HomePage();
    signUpObj = new SignUpPage();
    signInObj = new SignInPage();
    userDashboardObj = new UserDashboardPage();
  });
  it("validate the user is able to sign up in application", () => {
    cy.visit(url);
    homePageObj.getSignUpButton().click();    
    fileData.signUpUsername = fileData.signUpUsername + randomNumber;
    fileData.signUpEmail = fileData.signUpEmail.replace("1", randomNumber);
    signUpObj.getSignUpUsername().type(fileData.signUpUsername);
    signUpObj.getSignUpEmail().type(fileData.signUpEmail);
    signUpObj.getSignUpPassword().type(fileData.signUpPassword);
    signUpObj.getSignUpButton().click();
    userDashboardObj.getLoggedInUsername().should('have.text', fileData.signUpUsername)
  });

  it('validate the user is able to sign in with the user created',()=>{
    cy.visit(url);
    homePageObj.getSignInButton().click();
    signInObj.getEmailAddress().type(fileData.signUpEmail);
    signInObj.getPassword().type(fileData.signUpPassword);
    signInObj.getSignInButton().click();
    userDashboardObj.getLoggedInUsername().should('have.text', fileData.signUpUsername)
  })
});
