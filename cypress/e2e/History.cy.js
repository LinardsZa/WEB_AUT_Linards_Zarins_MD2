import { BasePage } from "../PObjects/basePage";
import { LoginPage } from "../PObjects/LoginPage";
import { SidebarPage } from "../PObjects/SidePage";

describe("Check if the apointment history is empty", () => {
  it("It hould show no appointments in history", () => {
    BasePage.visit();
    LoginPage.AppointmentBtn.click();

    LoginPage.usernameIn.type("John Doe");
    LoginPage.passIn.type("ThisIsNotAPassword");
    LoginPage.loginBtn.click();

    SidebarPage.menuBtn.click();
    SidebarPage.sidebar.should("have.class", "active");
    SidebarPage.historyLink.click();

    SidebarPage.noAppointmentMsg.should("be.visible");
  });
});
