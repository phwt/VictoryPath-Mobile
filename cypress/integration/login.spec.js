/// <reference types="Cypress" />

describe("Login", () => {
  it("login with valid credentials", () => {
    cy.visit("http://localhost:19006/");

    cy.contains("Login").click();
    cy.get('[placeholder="Your email   [ ex.123@gmail.com ]"]').type(
      "BuenosDias@pendejos.com"
    );
    cy.get('[placeholder="Your password').type("P@ssw0rd");
    cy.get("#loginButton").click();

    cy.on("window:alert", (message) => {
      expect(message).to.equal("Login success!");
    });
  });

  it("login with invalid credentials", () => {
    cy.visit("http://localhost:19006/");
    cy.contains("Login").click();
    cy.get('[placeholder="Your email   [ ex.123@gmail.com ]"]').type(
      "BuenosDias@pendejos.com"
    );
    cy.get('[placeholder="Your password').type("P@zaddaAdasd");
    cy.get("#loginButton").click();

    cy.on("window:alert", (message) => {
      expect(message).to.equal(
        "The password is invalid or the user does not have a password."
      );
    });
  });
});
