export class RegisterPage {
  constructor() {
    this.registerButton = 'Quiero registrarme';
    this.nameInput = 'input[name="name"]';
    this.ageInput = 'input[name="age"]';
    this.genderLabel = 'label[for="gender"]';
    this.genderSelect = 'select';
    this.genderInterestLabel = 'label[for="genderInterest"]';
    this.genderInterestSelect = 'select';
    this.mailInput = 'input[name="email"]';
    this.passInput = 'input[name="password"]';
    this.confirmPassInput = 'input[name="confirmPassword"]';
    this.description = 'textarea[name="description"]';
    //cy.get('input[name="img1"]').attachFile('images/img1.jpg');
    this.submitButton = 'button[type="submit"]';
    this.startButton = 'Ir al inicio';
  }

  clickRegisterButton() {
    cy.contains(this.registerButton).click();
  };

  typeName(name) {
    cy.get(this.nameInput).type(name);
  }

  typeAge(age) {
    cy.get(this.ageInput).type(age);
  }

  selectGender(gender) {
    cy.get(this.genderLabel).siblings(this.genderSelect).select(gender);
  }

  selectGenderInterest(genderInterest) {
    cy.get(this.genderInterestLabel).siblings(this.genderInterestSelect).select(genderInterest);
  }

  typeMail(mail) {
    cy.get(this.mailInput).type(mail);
  }

  typePass(pass) {
    cy.get(this.passInput).type(pass);
  }

  typeConfirmPass(confirmPass) {
    cy.get(this.confirmPassInput).type(confirmPass);
  }

  typeDescription(description) {
    cy.get(this.description).type(description);
  }

  clickSubmitButton() {
    cy.get(this.submitButton).click();
  }

  clickStartButton() {
    cy.contains(this.startButton).click();
  }
}

