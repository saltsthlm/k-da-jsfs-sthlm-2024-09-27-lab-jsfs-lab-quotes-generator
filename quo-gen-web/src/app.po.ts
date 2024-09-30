const PageObject = {
  fetchModeActions() {
    return cy.get('[data-testid="fetchModeButtons"] button');
  },
  singleFetchModeButton() {
    return this.fetchModeActions().eq(0);
  },
  multipleFetchModeButton() {
    return this.fetchModeActions().eq(1);
  },
  quotesList() {
    return cy.get("#quotesContainer .quote");
  },
  refetchQuoteButton() {
    return cy.get("#refetchQuoteBtn");
  },
  toast() {
    return cy.get(".toast");
  },
};

export default PageObject;
