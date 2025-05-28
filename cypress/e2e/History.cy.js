import { BasePage } from "../PObjects/basePage";
import { LoginPage } from "../PObjects/LoginPage";
import { SidebarPage } from "../PObjects/SidePage";

describe("Scenario 2 - Appointment History Empty", () => {
  it("should show no appointments in history", () => {
    BasePage.visit();
    LoginPage.AppointmentBtn.click();

    LoginPage.usernameInput.type("John Doe");
    LoginPage.passInput.type("ThisIsNotAPassword");
    LoginPage.loginBtn.click();

    SidebarPage.menuBtn.click();
    SidebarPage.sidebar.should("have.class", "active");
    SidebarPage.historyLink.click();

    SidebarPage.noAppointmentMsg.should("be.visible");
  });
});
