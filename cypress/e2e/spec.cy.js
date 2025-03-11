describe('template spec', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/')
  })

  it('TC_01 Load the game board', () => {
    cy.contains('Tic-Tac-Toe').should('be.visible');
    cy.get('.square').should('have.length', 9);
    cy.contains('Next Player: X').should('be.visible');
  });

  it('TC_02 Allow players to make moves', () => {
    cy.get('.square').eq(0).click().should('contain', 'X');
    cy.contains('Next Player: O').should('be.visible');

    cy.get('.square').eq(1).click().should('contain', 'O');
    cy.contains('Next Player: X').should('be.visible');
  });

  it('TC_03 Not allow clicking on an occupied square', () => {
    cy.get('.square').eq(0).click();
    cy.get('.square').eq(0).click(); // Bandome dar kartą
    cy.get('.square').eq(0).should('contain', 'X'); // Neturėtų keistis
  });

  it('TC_04 Detect a winner', () => {
    cy.get('.square').eq(0).click(); // X
    cy.get('.square').eq(3).click(); // O
    cy.get('.square').eq(1).click(); // X
    cy.get('.square').eq(4).click(); // O
    cy.get('.square').eq(2).click(); // X laimi

    cy.contains('Winner: X').should('be.visible');
  });

  it('TC_05 Reset the game', () => {
    cy.get('.square').eq(0).click();
    cy.get('.reset').click();
    
    cy.get('.square').each(($square) => {
      cy.wrap($square).should('be.empty');
    });

  
  });

})