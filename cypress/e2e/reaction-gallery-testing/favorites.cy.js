describe ('Reaction Gallery favorites page', () => {
  beforeEach(() => {
    cy.intercept('GET', /^https:\/\/api\.harvardartmuseums\.org\/object\/.*\/?apikey=b5915d6a-dcba-45df-a4a6-9ff3a72dfbeb/, {
      statusCode: 200,
      headers: {
        'x-requested-with': 'exampleClient',
      },
      fixture: 'artObject1'
    });
    cy.visit('http://localhost:3000/')
    cy.get('button').eq(2).click()
    cy.get('.fav-btn').click()
    });

    it('Should be able to visit the favorites page', () => {
      cy.url('http://localhost:3000/favorites')
    });

    it('Should have a favorite image and details', () => {
      cy.get('.favorite-title').should('exist')
      cy.get('.favorite-image').should('exist')
      cy.get('.favorite-image').should('have.attr', 'src').should('include', 'https://nrs.harvard.edu/urn-3:HUAM:50835_dynmc')
      cy.get('.favorite-title').should('have.text',"Tall Jade 'Cong'")
    });

    it('Should be able to return to the home page', () => {
      cy.get('.home-btn').click()
      cy.url('http://localhost:3000/')
      cy.get('.art-title').should('have.text', "Title: Tall Jade 'Cong'")
      cy.get('.art-artist').should('have.text', 'Artist: unknown')
      cy.get('.art-medium').should('have.text', 'Medium: Mottled bluish gray-green stone with darker markings')
      cy.get('.art-period').should('have.text', 'Period: 4th-3rd millennium BCE')
      cy.get('button').eq(2).should('not.exist')
    });
  });

