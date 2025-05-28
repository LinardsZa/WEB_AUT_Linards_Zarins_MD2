import { BasePage } from "./basepage";

export class LoginPage extends BasePage {
  static get AppointmentBtn() {
    return cy.get("#btn-make-appointment");
  }

  static get usernameInput() {
    return cy.get("#txt-username");
  }

  static get passInput() {
    return cy.get("#txt-password");
  }

  static get loginBtn() {
    return cy.get("#btn-login");
  }
}