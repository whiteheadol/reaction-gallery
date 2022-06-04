describe ('Reaction Gallery error-handling', () => {

    it('Should see an error if fetch returns a 500', () => {
      cy.intercept('GET', /^https:\/\/api\.harvardartmuseums\.org\/object\/.*\/?apikey=b5915d6a-dcba-45df-a4a6-9ff3a72dfbeb/, {
        statusCode: 500,
        headers: {
          'x-requested-with': 'exampleClient',
        },
        fixture: 'artObject1'
      });
      cy.visit('http://localhost:3000/')
      cy.get('.load-error').should('have.text','The gallery is closed for cleaning, please visit again soon.')
    });

    it('Should see an error message if visiting favorite page before adding favorites', () => {
      cy.intercept('GET', /^https:\/\/api\.harvardartmuseums\.org\/object\/.*\/?apikey=b5915d6a-dcba-45df-a4a6-9ff3a72dfbeb/, {
        statusCode: 200,
        headers: {
          'x-requested-with': 'exampleClient',
        },
        fixture: 'artObject1'
      });
      cy.visit('http://localhost:3000/')
      cy.get('.fav-btn').click()
      cy.get('.favorites-error').should('have.text','Add some art, you plebeian!')
      cy.get('.error-image').should('have.attr', 'src').should('include', 'https://sites.psu.edu/warfareinromanculture/wp-content/uploads/sites/25211/2015/04/plebians.jpg')
    });

    it('Should see an error if the url does not exist and user can redirect to homepage', () => {
      cy.intercept('GET', /^https:\/\/api\.harvardartmuseums\.org\/object\/.*\/?apikey=b5915d6a-dcba-45df-a4a6-9ff3a72dfbeb/, {
        statusCode: 200,
        headers: {
          'x-requested-with': 'exampleClient',
        },
        fixture: 'artObject1'
      });
      cy.visit('http://localhost:3000/potato')
      cy.get('.fof-message').should('have.text',`Hey! You're in the restricted section!`)
      cy.get('.redirect').should('have.text','Click here to go back to the main gallery')
      cy.get('.fof-image').should('have.attr', 'src').should('include', 'https://i.kym-cdn.com/photos/images/original/000/548/129/538.jpg')
      cy.get('.redirect').click()
      cy.url('http://localhost:3000/')
    });

});