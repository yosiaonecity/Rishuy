describe('template spec', () => {
    it('passes', () => {
      cy.viewport(1280, 720)
      cy.visit('https://uat.ladpc.net.il/ASAKIM/LoginUI?customerID=283000&autoUserID=040476400&autoUserPass=MA44ster&application=RISHUY_ASAKIM&userIP=127.0.0.1&ipFileNet')
        cy.get('[automation-id="new-license-button"]').click();
        // cy.get('[automation-id=""]').click();
        cy.get('[automation-id="owner-id-search-input"]').click().type('999999915');
          cy.get('[automation-id="new-business-license-popup-continue-button"]').click();
          cy.wait(1000);
        
         
      })
    })
    