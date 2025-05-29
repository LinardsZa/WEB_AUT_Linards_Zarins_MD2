import { BasePage } from "./basePage";

export class LoginPage extends BasePage {
  static get AppointmentBtn() {
    return cy.get("#btn-make-appointment");
  }

  static get usernameIn() {
    return cy.get("#txt-username");
  }

  static get passIn() {
    return cy.get("#txt-password");
  }

  static get loginBtn() {
    return cy.get("#btn-login");
  }
}