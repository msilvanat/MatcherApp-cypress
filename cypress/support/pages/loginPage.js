export class LoginPage {
  constructor() {
    this.loginButton = 'Ya tengo una cuenta';
    this.mailInput = 'input[type="email"]';
    this.passwordInput = 'input[type="password"]';
    this.submitButton = 'button[type="submit"]';
  }

  clickLoginButton() {
    cy.contains(this.loginButton).click();
  };

  typeEmail(mail) {
    cy.get(this.mailInput).type(mail);
  }

  typePassword(password) {
    cy.get(this.passwordInput).type(password);
  }

  clickSubmitButton() {
    cy.get(this.submitButton).click();
  }

}