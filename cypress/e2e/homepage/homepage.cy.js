describe ('Reaction Gallery homepage', () => {
  beforeEach(() => {
    // stub object fetched on load
    cy.intercept('GET', /^https:\/\/api\.harvardartmuseums\.org\/object\/.*\/?apikey=b5915d6a-dcba-45df-a4a6-9ff3a72dfbeb/, {
      statusCode: 200,
      headers: {
        'x-requested-with': 'exampleClient',
      },
      fixture: 'artObject1'
    });

    cy.visit('http://localhost:3000/')
  });

  it('Should be able to visit the homepage', () => {
    cy.url('http://localhost:3000/')
  });

  it('Should be able to view a page tile and nav bar', () => {
    cy.get('.page-title').should('have.text', 'Reaction Gallery')
    cy.get('.random-btn').should('have.text', 'Randomize')
    cy.get('.fav-btn').should('have.text', 'Favorites')
  });

  it('Should display an art image and have alt text', () => {
    cy.get('.art-image').should('have.attr', 'src').should('include', 'https://nrs.harvard.edu/urn-3:HUAM:50835_dynmc')
    cy.get('.art-image').should('have.attr', 'alt').should('include', "Tall Jade 'Cong'")
  });

  it('Should contain a description of the random art', () => {
    cy.get('.art-title').should('have.text', "Title: Tall Jade 'Cong'")
    cy.get('.art-artist').should('have.text', 'Artist: unknown')
    cy.get('.art-medium').should('have.text', 'Medium: Mottled bluish gray-green stone with darker markings')
    cy.get('.art-period').should('have.text', 'Period: 4th-3rd millennium BCE')
  });

  it('Should have a add to favorites button', () => {
    cy.get('button').eq(2).should('have.text', "Add to favorites")
    cy.get('button').eq(2).click().should('not.exist')
  });

  it('Should be able to display another art after randomize', () => {
    cy.intercept('GET', /^https:\/\/api\.harvardartmuseums\.org\/object\/.*\/?apikey=b5915d6a-dcba-45df-a4a6-9ff3a72dfbeb/, {
      statusCode: 200,
      headers: {
        'x-requested-with': 'exampleClient',
      },
      fixture: 'artObject2'
    });
    cy.get('.random-btn').click()
    cy.get('.art-title').should('have.text', "Title: The First Steps")
    cy.get('.art-artist').should('have.text', "Artist: Jean-Honoré Fragonard, Marguerite Gérard")
    cy.get('.art-medium').should('have.text', "Medium: Oil on canvas")
    cy.get('.art-period').should('have.text', 'Period: 18th century')
  });

})
