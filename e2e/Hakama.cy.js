
describe('template spec', () => {
  it('passes', () => {
    cy.viewport(1280, 720)
    cy.visit('https://uat.ladpc.net.il/ASAKIM/LoginUI?customerID=283000&autoUserID=040476400&autoUserPass=MA44ster&application=RISHUY_ASAKIM&userIP=127.0.0.1&ipFileNet')
      // cy.url().should('include', 'https://uat.ladpc.net.il/ASAKIM-204/main');
        cy.get('.bl-icon-btn > div:nth-child(2)').click();
        cy.get('.mat-mdc-autocomplete-trigger').click();
        cy.get('.mat-mdc-autocomplete-trigger').type('999999915');
        cy.get('.bl-primary-btn').click();
        cy.get('.bl-link-btn').click();
        cy.wait(1000)
        cy.get('.col-1-2:nth-child(1) > .ng-untouched .ng-untouched').click();
        cy.get(':nth-child(1) > bl-input-text.ng-pristine > .form-grid-cell > .clear > .ng-pristine').type('אוטומציה');
        cy.get('.col-3-7 .clear > .ng-star-inserted').type('בדיקות אוטומציה');
        cy.wait(1000)
        cy.get('.col-1-2:nth-child(3) > .ng-untouched .ng-untouched').click();
        cy.get('.col-1-2:nth-child(3) > .ng-valid .ng-valid').type('בדיקות אוטומציה');
        cy.get('.col-3-4:nth-child(4) > .ng-untouched .ng-untouched').click();
        cy.get('.col-1-2:nth-child(6) .clear > .ng-star-inserted').type('999999915');
        cy.wait(2000);
        cy.get('.search-lookup-street > .search-lookup > .mat-mdc-autocomplete-trigger').click().type('136');
        cy.get('#mat-option-966').click();
        cy.wait(1000);
        cy.get('div:nth-child(22) > .ng-untouched .ng-untouched').click();
        cy.get('div:nth-child(22) > .ng-valid .ng-valid').type('11');
        cy.wait(1000);
        cy.get('.button').click();
        cy.get(':nth-child(2) > bl-input-text.ng-untouched > .form-grid-cell > .clear > .ng-untouched').type('אוטו מציה');
        // cy.get('.col-1-2 > .ng-valid .ng-untouched').click();
        cy.get('bl-input-tel-text.ng-untouched > .form-grid-cell > .clear > .ng-untouched').type('0505656565');
        // cy.get('.col-3-4 > .ng-untouched .ng-untouched').click();
        // cy.get('.ng-dirty > .form-grid-cell .ng-untouched').type('{backspace}');
        cy.get('.col-3-4:nth-child(6) .clear > .ng-star-inserted').type('5656565@gmail.com');
        cy.get('.ng-star-inserted > .search-lookup > .mat-mdc-autocomplete-trigger').click().type('ראשון לציון');
        cy.get('.bl-list-row').click();
        // cy.get('.search-lookup > .ng-untouched').click();
        cy.get('.search-input > .search-lookup > .mat-mdc-autocomplete-trigger').type('136');
        cy.wait(1000);
        cy.get('#mat-option-1721 > .bl-list-row').click();
        cy.wait(1000);
        cy.get('div:nth-child(11) > .ng-valid .ng-valid').type('12');
        cy.wait(1000);
        cy.get('.button-left > .button');
        cy.get('.bl-primary-btn').click();
        cy.wait(1000);
        cy.get('.mat-mdc-autocomplete-trigger').type('1010000');
        cy.wait(1000);
        cy.get('#cdk-overlay-6').click()
        cy.get(':nth-child(4) > bl-input-text.ng-untouched > .form-grid-cell > .clear > .ng-untouched').type('33');
        cy.get(':nth-child(5) > bl-input-text.ng-untouched > .form-grid-cell > .clear > .ng-untouched').type('33');
        cy.get(':nth-child(6) > bl-input-text.ng-pristine > .form-grid-cell > .clear > .ng-pristine').type('3');
        cy.get('#mat-button-toggle-3-button > .mat-button-toggle-label-content').click();
        cy.get('#mat-button-toggle-5-button').click();
        cy.get('.text-wrapper > .ng-untouched').click();
        cy.get('.text-wrapper > .ng-valid').type('כדעדגכע');
        cy.get('.bl-primary-btn').click();
        cy.get('.bl-primary-btn').click();
        cy.get('.bl-primary-btn').click();
        cy.wait(1000);
        cy.get('.bl-link-btn').click();
        // cy.log("End-of-Hakama,Start-deleting")

        cy.get(':nth-child(3) > .menu-item-btn').click()
        cy.get('.input-search').click();
        cy.get('.input-search').type('אוטומציה');
        cy.get('.search-el-icon svg').click();

        cy.get('#business-id').click();
        cy.get('a.ng-star-inserted > .mat-mdc-menu-trigger > .mat-mdc-button-touch-target').click();
        cy.get('.mat-mdc-menu-content > :nth-child(1)').click();
        cy.get('.mat-mdc-select-trigger').click(top)
        cy.wait(1000)
        cy.get('#mat-option-1769').click();
        cy.get('.business-business-close-continue-wrapper > div:nth-child(2)').dblclick();
        cy.get('.text-wrapper > .ng-untouched').click();
        cy.get('.text-wrapper > .ng-pristine').click();
        cy.get('.text-wrapper > .ng-valid').type('Automation');
        cy.get('#mat-input-2').type('01/01/2024');
        cy.get('.button').click();
      
       
    })
  })
  