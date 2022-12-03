/// <reference types="cypress" />

import { RegisterPage } from '../support/pages/registerPage';
import { LoginPage } from '../support/pages/loginPage';

describe("Testing Matcher App", () => {
  let loginData;
 // let imagesData;

  const registerPage = new RegisterPage();
  const loginPage = new LoginPage();

  before("Json files", () => {
    cy.fixture('loginData').then(data => {
      loginData = data;
    });
    // cy.fixture('images').then(data => {
    //   iamgesData = data;
    // });
  });

  beforeEach("Enter the page", () => {
    cy.visit('');
  });

  it('Register with the correct information', () => {
    registerPage.clickRegisterButton();
    registerPage.typeName(loginData.name);
    registerPage.typeAge(loginData.age);
    registerPage.selectGender(loginData.gender);
    registerPage.selectGenderInterest(loginData.genderInterest);
    registerPage.typeMail(loginData.email);
    registerPage.typePass(loginData.password);
    registerPage.typeConfirmPass(loginData.confirmPassword);
    cy.get('input[name="img1"]').attachFile('images/img1.jpg');
    cy.get('input[name="img2"]').attachFile('images/img2.jpg');
    cy.get('input[name="img3"]').attachFile('images/img3.jpg');
    cy.get('input[name="img4"]').attachFile('images/img4.jpg');
    registerPage.typeDescription(loginData.description);
    registerPage.clickSubmitButton();
    registerPage.clickStartButton();
  });

  it('Enter the page, login with the correct information, add two product to the shopping cart', () => {
    cy.visit('');
    loginPage.clickLoginButton();
    loginPage.typeEmail(loginData.email);
    loginPage.typePassword(loginData.password);
    loginPage.clickSubmitButton();
  })

  // afterEach('after each', () => {
  //   cy.wait(10000);
  //   loginPage.clickLogoutButton();
  // });
});


