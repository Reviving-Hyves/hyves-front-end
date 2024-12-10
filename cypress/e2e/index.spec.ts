describe("Login and Dashboard Test", () => {
    it("logs in and fetches user data", () => {
      cy.intercept('POST', 'http://auth:8002/api/auth/login').as('loginRequest');
  
      cy.visit("http://localhost:3000/"); 
      cy.get("#username").type("wellesnick");
      cy.get("#password").type("testtest");
      cy.get('button[type="submit"]').click();
      
      // eslint-disable-next-line jest/valid-expect-in-promise
      cy.wait('@loginRequest', { timeout: 15000 }).then((interception) => {
        expect(interception.response?.statusCode).equal(200);
        console.log('Login request intercepted:', interception);
      });
    });
  });