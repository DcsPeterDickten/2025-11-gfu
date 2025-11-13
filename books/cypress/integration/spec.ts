it('loads examples', () => {
  cy.visit('/');
  cy.contains('start works!');
  cy.screenshot();
});

describe('book list', () => {
  it('loads the book list', () => {
  cy.visit('/');
  cy.contains('start works!');
  cy.get('[data-cy=link-to-books]').click();
  cy.contains('Bücher vorhanden');
  });
});
