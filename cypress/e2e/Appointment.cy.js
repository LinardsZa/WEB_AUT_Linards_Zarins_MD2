import { BasePage } from "../PObjects/basePage";
import { LoginPage } from "../PObjects/LoginPage";
import { AppointmentPage } from "../PObjects/AppointmentPage";

describe("Make an Appointment", () => {
  it("Booking an appointment and validating the values", () => {
    BasePage.visit();
    LoginPage.AppointmentBtn.click();

    LoginPage.usernameIn.type("John Doe");
    LoginPage.passIn.type("ThisIsNotAPassword");
    LoginPage.loginBtn.click();

    AppointmentPage.dropdownFacility.select("Seoul CURA Healthcare Center");
    AppointmentPage.readmissionCheckbox.check();
    AppointmentPage.medicareRadio.check();
    AppointmentPage.dateIn.type("30/05/2025");
    AppointmentPage.commentIn.type("CURA Healthcare Service", { force: true });
    AppointmentPage.bookBtn.click();

    AppointmentPage.confirmFacility.should("contain", "Seoul CURA Healthcare Center");
    AppointmentPage.confirmReadmission.should("contain", "Yes");
    AppointmentPage.confirmProgram.should("contain", "Medicaid");
    AppointmentPage.confirmDate.should("contain", "30/05/2025");
    AppointmentPage.confirmComment.should("contain", "CURA Healthcare Service");
  });
});
