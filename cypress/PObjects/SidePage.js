import { BasePage } from "./basePage";

export class SidebarPage extends BasePage {
  static get menuBtn() {
    return cy.get("#menu-toggle");
  }

  static get sidebar() {
    return cy.get("#sidebar-wrapper");
  }

  static get historyLink() {
    return cy.get("a").contains("History");
  }

  static get noAppointmentMsg() {
    return cy.contains("No appointment.");
  }
}