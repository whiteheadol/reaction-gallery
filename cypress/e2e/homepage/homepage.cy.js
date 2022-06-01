describe ('Reaction Gallery homepage', () => {
  beforeEach(() => {
    // stub object fetched on load
    cy.intercept('GET', /^https:\/\/api\.harvardartmuseums\.org\/object\/.*\/?apikey=b5915d6a-dcba-45df-a4a6-9ff3a72dfbeb/, {
      // fixture: 'artObject1'
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

})
