describe('template spec', () => {
    it('passes', () => {
      cy.viewport(1280, 720)
      cy.visit('https://uat.ladpc.net.il/ASAKIM-204/LoginUI?customerID=705870&autoUserID=040476400&autoUserPass=MA44ster&application=RISHUY_ASAKIM&userIP=127.0.0.1&ipFileNet')

      // cy.visit('https://uat.ladpc.net.il/ASAKIM/LoginUI?customerID=283000&autoUserID=040476400&autoUserPass=MA44ster&application=RISHUY_ASAKIM&userIP=127.0.0.1&ipFileNet')
      // cy.get('#submit').click()
     
        // cy.url().should('include', 'https://uat.ladpc.net.il/ASAKIM-204/main');
        
  
        cy.get(':nth-child(3) > .menu-item-btn').click()
        cy.get('.input-search').click();
        cy.get('.input-search').type('אוטומציה');
        cy.get('.search-el-icon svg').click();

        cy.get('#business-id').click();
        cy.get('a.ng-star-inserted > .mat-mdc-menu-trigger > .mat-mdc-button-touch-target').click();
        cy.get('.mat-mdc-menu-content > :nth-child(1)').click();
        cy.get('.mat-mdc-select-trigger').click(top)
        cy.get('#mat-option-13').click();
        cy.get('.business-business-close-continue-wrapper > div:nth-child(2)').dblclick();
        cy.get('.text-wrapper > .ng-untouched').click();
        cy.get('.text-wrapper > .ng-pristine').click();
        cy.get('.text-wrapper > .ng-valid').type('Automation');
        cy.get('#mat-input-1').type('01/01/2024');
        cy.get('.button').click();
        

       
        // cy.get('.cdk-row:nth-child(1) .mat-mdc-tooltip-trigger svg').invoke('show').click();
        // cy.get('.mat-mdc-menu-item:nth-child(1)').click();

        // cy.get('.mat-mdc-menu-item:nth-child(1) > .mdc-list-item__primary-text').click();

        
        // cy.get('.pageContainer').click();
        // cy.get('.cdk-row:nth-child(1) .mat-mdc-button-touch-target').click();
        // cy.get('.cdk-overlay-backdrop').click();

        // cy.get('.cdk-row:nth-child(1) .mat-mdc-tooltip-trigger svg').click();
        // cy.get('.mat-mdc-menu-item:nth-child(1)').click();
        // cy.get('#mat-select-value-115').click();
        // cy.get('#mat-option-310 > .mdc-list-item__primary-text').click();
        // cy.get('.text-wrapper > .ng-valid').type('Automation');
        // cy.get('#mat-input-13').click();
        // cy.get('#mat-input-13').type('01/01/2024');
        // cy.get('.button').click();
  
    
        
  
        // cy.get('.mat-mdc-select-arrow > .ng-tns-c104-633').click();
        // cy.get('#mat-option-97 > .mdc-list-item__primary-text').click();
        // cy.get('.text-wrapper > .ng-valid').type('Automation');
        // cy.get('#mat-input-4').type('01/01/2024');
        // cy.get('.button').click();
     
    })
  })
   