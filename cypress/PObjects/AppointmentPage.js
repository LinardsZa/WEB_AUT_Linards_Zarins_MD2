import { BasePage } from "./basePage";

export class AppointmentPage extends BasePage {
  static get dropdownFacility() {
    return cy.get("#combo_facility");
  }

  static get readmissionCheckbox() {
    return cy.get("#chk_hospotal_readmission");
  }

  static get medicareRadio() {
    return cy.get("#radio_program_medicaid");
  }

  static get dateIn() {
    return cy.get("#txt_visit_date");
  }

  static get commentIn() {
    return cy.get("#txt_comment");
  }

  static get bookBtn() {
    return cy.get("#btn-book-appointment");
  }
 
  static get confirmFacility() {
    return cy.get("#facility");
  }

  static get confirmReadmission() {
    return cy.get("#hospital_readmission");
  }

  static get confirmProgram() {
    return cy.get("#program");
  }

  static get confirmDate() {
    return cy.get("#visit_date");
  }

  static get confirmComment() {
    return cy.get("#comment");
  }
}
