/// <reference types="Cypress" />

describe("Gameplay as Guest", () => {
  it("play easy mode", () => {
    cy.visit("http://localhost:19006/");
    cy.contains("Play").click();
    cy.contains("Easy").click();
    cy.wait(1100);
    cy.get(":nth-child(3) > :nth-child(2) > :nth-child(3)").click();
  });

  it("play normal mode", () => {
    cy.visit("http://localhost:19006/");
    cy.contains("Play").click();
    cy.contains("Normal").click();
    cy.wait(1100);
    cy.get(":nth-child(3) > :nth-child(2) > :nth-child(3)").click();
  });

  it("play hard mode", () => {
    cy.visit("http://localhost:19006/");
    cy.contains("Play").click();
    cy.contains("Hard").click();
    cy.wait(1100);
    cy.get(":nth-child(3) > :nth-child(2) > :nth-child(3)").click();
  });

  it("exit game early", () => {
    cy.visit("http://localhost:19006/");
    cy.contains("Play").click();
    cy.contains("Hard").click();
    cy.wait(1100);
    cy.contains("End game").click();
    cy.contains("End game").should("not.be.visible");
  });
});
