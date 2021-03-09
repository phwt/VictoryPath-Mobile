/// <reference types="Cypress" />

describe("Login", () => {
  it("play easy mode", () => {
    cy.visit("http://localhost:19006/");
    cy.contains("Login").click();
    cy.get('[placeholder="Your email   [ ex.123@gmail.com ]"]').type(
      "buenosdias@pendejos.com"
    );
    cy.get('[placeholder="Your password').type("buenosdias@pendejos.com");
    cy.contains("Login").click();
    // cy.wait(1100);
    // cy.get(":nth-child(3) > :nth-child(2) > :nth-child(3)").click();
  });
});
