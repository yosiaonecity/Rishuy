
describe('template spec', () => {
    it('passes', () => {
    cy.viewport(1280, 720);
    cy.visit('https://uat.ladpc.net.il/ASAKIM/LoginUI?customerID=283000&autoUserID=040476400&autoUserPass=MA44ster&application=RISHUY_ASAKIM&userIP=127.0.0.1&ipFileNet');
        cy.get('[automation-id="new-license-button"]').click();
        // cy.get('[automation-id=""]').click();
        cy.get('[automation-id="owner-id-search-input"]').click().type('999999915');
        cy.get('[automation-id="new-business-license-popup-continue-button"]').click();
        cy.get('[automation-id="continue-with-no-asset-button"]').click();
        cy.wait(1000);
        // cy.get('.col-1-2:nth-child(1) > .ng-untouched .ng-untouched').click();exit
        
        cy.get('[automation-id="business-name"]').type('אוטומציה');
        cy.get('[automation-id="business-description"]').type('בדיקות אוטומציה');
        cy.wait(1000);
        cy.get('.col-1-2:nth-child(3) > .ng-untouched .ng-untouched').click();
        cy.get('[automation-id="business-company-name"]').type('בדיקות אוטומציה');
        cy.get('[automation-id="business-mail"]').click();
        cy.get('[automation-id="business-company-id"]').type('999999915');
        cy.wait(1000);
        cy.get('[automation-id="business-city"]').type("ראשון לציון");  
        cy.get('[automation-id="business-street"]').click().type('136');
        cy.log('Suppose to check Street');
        cy.get('#mat-option-346').click();
        cy.wait(1000);
        cy.get('div:nth-child(22) > .ng-untouched .ng-untouched').click();
        cy.get('[automation-id="business-house-num"]').type('11');
        cy.wait(1000);
        cy.get('[automation-id="business-note"]').type('kjfshgkhja@#%$&%&**235888');
        cy.get('[automation-id="business-details-continue-button"]').click();
        //End of Pirtey esek
        cy.get('[automation-id="identity-name-0"]').type('אוטו מציה');
        // cy.get('.col-1-2 > .ng-valid .ng-untouched').click();relation-type-0 בעל העסק
        cy.get('[automation-id="identity-cell-phone-0"]').type('0505656565');
        cy.get('[automation-id="identity-mail-0"]').type('5656565@gmail.com');
        cy.get('[automation-id="business-city-0"]').click().type('ראשון לציון');
        cy.get('.bl-list-row').click();
        cy.get('[automation-id="business-street-0"]').type('136');
        cy.get('.street-autocomplete-first-column').click();
        cy.wait(1000);
        cy.get('[automation-id="house-num-0"]').type('12');
        cy.wait(1000);
        cy.get('.button-left > .button');
        cy.get('[automation-id="owner-details-save-continue-button"]').click();
        cy.wait(1000);
        //en of owner details
        cy.get('[automation-id="license-id-search-input"]').type('1010000');
        cy.wait(1000);
        cy.get('#cdk-overlay-6').click()
        cy.get('[automation-id="license-description-0"]').type('sjhfkjsk');
        cy.get('[automation-id="license-report-size-0"]').type('33');
        cy.get('.clear > .ng-invalid').click();
        cy.get('[automation-id="license-construct-size-0"]').type('33');
        cy.get('[automation-id="license-room-num-0"]').type('3');
        cy.get('#mat-button-toggle-8-button').click();//toggle fill details
        cy.get('#mat-button-toggle-3-button > .mat-button-toggle-label-content').click();//toggle of KAbaut
        cy.get('#mat-button-toggle-5-button').click();//toggle of Seif 6a
        cy.get('.text-wrapper > .ng-untouched').click();
        cy.get('[automation-id="license-note-0"]').type('כדעדגכע');
        cy.get('[automation-id="license-details-save-continue-button"]').click();
        //End of Pritey rishuy
        cy.get('[automation-id="document-details-save-complete-button"]').click(); //End of Documents
        cy.get('.bl-primary-btn').click();
        cy.wait(1000);
        cy.get('.bl-link-btn').click();//click back to BAkashot
        // cy.log("End-of-Hakama,Start-deleting")

        cy.get('[automation-id="businesses-menu"]').click();
        cy.get('[automation-id="search-select-el-input"]').click();
        cy.get('[automation-id="search-select-el-input"]').type('אוטומציה');
        cy.get('.input-search').type('{enter}');
        // cy.get('.search-el-icon svg').click();

        cy.get('#business-id').click();
        cy.get('a.ng-star-inserted > .mat-mdc-menu-trigger > .mat-mdc-button-touch-target').click();
        cy.get('.mat-mdc-menu-content > :nth-child(1)').click();
        cy.get('.mat-mdc-select-trigger').click(top)
        cy.wait(1000);
        cy.get('#mat-option-531').click();
        cy.get('.business-business-close-continue-wrapper > div:nth-child(2)').dblclick();
        cy.get('.text-wrapper > .ng-untouched').click();
        cy.get('.text-wrapper > .ng-pristine').click();
        cy.get('.text-wrapper > .ng-valid').type('Automation');
        cy.get('#mat-input-2').type('01/01/2024');
        cy.get('.button').click();

    })
}) 