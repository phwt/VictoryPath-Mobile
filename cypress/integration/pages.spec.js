/// <reference types="Cypress" />

describe("Simple Pages", () => {
  it("tutorial page", () => {
    cy.visit("http://localhost:19006/");
    cy.contains("Tutorial").click();
  });

  it("scoreboard page", () => {
    cy.visit("http://localhost:19006/");
    cy.contains("Score Board").click();
  });
});
