describe('template spec', () => {
    it('passes', () => {
        cy.viewport(1280, 720)
        cy.visit('https://uat.ladpc.net.il/ASAKIM/LoginUI?customerID=283000&autoUserID=040476400&autoUserPass=MA44ster&application=RISHUY_ASAKIM&userIP=127.0.0.1&ipFileNet')
        cy.get(':nth-child(5) > .menu-item-btn').click()
        cy.get('.input-search').click();
        cy.get('.input-search').type('אוטומציה');
        cy.get('.input-search').type('{enter}');
        cy.wait(1000);
        cy.get('.cdk-column-inTypeDesc > .mat-mdc-tooltip-trigger').click();
        cy.wait(1000);
        cy.get('a.ng-star-inserted > .mat-mdc-menu-trigger').click();
        cy.wait(1000);
        cy.get('.cdk-focused > .mat-mdc-menu-item-text > span').click();
        cy.get('.input-fields-textarea > .grid-row-span > .text-wrapper > .ng-pristine').type('סתם בדיקה');
        cy.get('.action-2 > .button').click();
    })
  })