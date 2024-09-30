import PageObject from "./app.po";

describe("template spec", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should have correct heading", () => {
    cy.title().should("eq", "Quote(s) of the day 💪");
  });

  it("should have the single mode active by default", () => {
    PageObject.singleFetchModeButton().should("be.visible");
    PageObject.singleFetchModeButton().should("have.class", "active");
  });

  it("should get a random quote on page load", () => {
    PageObject.quotesList().should("have.length", 1);
  });

  it("should be able to refecth a random quote", () => {
    PageObject.quotesList().should("have.length", 1);
    PageObject.refetchQuoteButton().click();
    PageObject.quotesList().should("have.length", 1);
  });

  it("should be able to get multiple quotes", () => {
    PageObject.multipleFetchModeButton().click();
    PageObject.refetchQuoteButton().click();
    PageObject.quotesList().should("have.length", 4);
  });

  it("should show the error toast", () => {
    cy.intercept(
      "GET",
      "http://localhost:3000/api/v1/quotes/random",
      new Error("what"),
    ).as("getRandomQuote");
    PageObject.refetchQuoteButton().click();
    PageObject.toast().should("be.visible");
    PageObject.toast().should("have.text", "Failed to fetch random quote");
  });
});
