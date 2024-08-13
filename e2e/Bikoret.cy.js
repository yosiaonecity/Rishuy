describe('template spec', () => {
    it('passes', () => {
      cy.viewport(1280, 720)
      cy.visit('https://uat.ladpc.net.il/ASAKIM/LoginUI?customerID=283000&autoUserID=040476400&autoUserPass=MA44ster&application=RISHUY_ASAKIM&userIP=127.0.0.1&ipFileNet')
      cy.get(':nth-child(5) > .menu-item-btn').click()
      cy.get('.bl-icon-btn > :nth-child(2)').click()
      cy.get('.mat-mdc-autocomplete-trigger').type('999999915');
      cy.wait(1000);
      cy.get('.bl-business-list-row').click();
      cy.get('#mat-select-12').click();
      cy.wait(1000);
      cy.get('#mat-option-546').click();
      cy.get('#mat-select-14 > .mat-mdc-select-trigger').click();
      cy.get('#mat-option-554').click()
      cy.get('#mat-input-1').type('01/10/2026');
      cy.get('.date-time > bl-input-time-text.ng-pristine > .form-grid-cell > .clear > .ng-pristine').type('{selectAll}')
    //   cy.get('.date-time > bl-input-time-text.ng-pristine > .form-grid-cell > .clear > .ng-pristine').type('{backspace}');
      cy.get('.date-time > bl-input-time-text.ng-pristine > .form-grid-cell > .clear > .ng-pristine').type('14:59');
      cy.get('#mat-input-2').type('01/10/2023');
      cy.get('bl-input-time-text.ng-pristine > .form-grid-cell').type('{selectAll}')
    //   cy.get('.ng-dirty > .date-range > .date-time > bl-input-time-text.ng-pristine > .form-grid-cell > .clear > .ng-pristine').type('{backspace}');
      cy.get('bl-input-time-text.ng-pristine > .form-grid-cell').type('14:43')
      cy.get('#inspectionCheckList').click();
      cy.get('.list-header > .ml-auto').click();
      cy.get(':nth-child(2) > .btn-item > .inner-btn > p').click();
      cy.get('.text-wrapper > .ng-pristine').type('בדיקה בדיקות בדקנו');
      cy.get('.button').click();
      // cy.get(':nth-child(1) > bl-decision-item > .decision-item > .inner-btn > p').click();
      cy.get(':nth-child(1) > bl-inspection-check-details-row > .inspection-check-container > .inspection-check-details > form.ng-untouched > .inspection-check-details-form > .check-statuses-wrapper > .status-list > .check-statuses > :nth-child(1) > bl-decision-item > .decision-item > .inner-btn > p').click();
      cy.get(':nth-child(1) > bl-inspection-check-details-row > .inspection-check-container > .inspection-check-details > form.ng-untouched > .inspection-check-details-form > .note-wrapper > bl-input-textarea.ng-untouched > .form-grid-textarea > .text-wrapper > .ng-untouched').type('cdcdf');
      cy.get(':nth-child(2) > bl-inspection-check-details-row > .inspection-check-container > .inspection-check-details > form.ng-untouched > .inspection-check-details-form > .check-statuses-wrapper > .status-list > .check-statuses > :nth-child(1) > bl-decision-item > .decision-item').click();
      cy.get(':nth-child(2) > bl-inspection-check-details-row > .inspection-check-container > .inspection-check-details > form.ng-untouched > .inspection-check-details-form > .note-wrapper > bl-input-textarea.ng-untouched > .form-grid-textarea > .text-wrapper > .ng-untouched').type('cdcdf');
      cy.get(':nth-child(3) > bl-inspection-check-details-row > .inspection-check-container > .inspection-check-details > form.ng-untouched > .inspection-check-details-form > .check-statuses-wrapper > .status-list > .check-statuses > :nth-child(1) > bl-decision-item > .decision-item').click();
      cy.get(':nth-child(3) > bl-inspection-check-details-row > .inspection-check-container > .inspection-check-details > form.ng-untouched > .inspection-check-details-form > .note-wrapper > bl-input-textarea.ng-untouched > .form-grid-textarea > .text-wrapper > .ng-untouched').type('cdcdf');
      cy.get(':nth-child(4) > bl-inspection-check-details-row > .inspection-check-container > .inspection-check-details > form.ng-untouched > .inspection-check-details-form > .check-statuses-wrapper > .status-list > .check-statuses > :nth-child(1) > bl-decision-item > .decision-item').click();
      cy.get(':nth-child(4) > bl-inspection-check-details-row > .inspection-check-container > .inspection-check-details > form.ng-untouched > .inspection-check-details-form > .note-wrapper > bl-input-textarea.ng-untouched > .form-grid-textarea > .text-wrapper > .ng-untouched').type('cdcdf');
      cy.get(':nth-child(5) > bl-inspection-check-details-row > .inspection-check-container > .inspection-check-details > form.ng-untouched > .inspection-check-details-form > .check-statuses-wrapper > .status-list > .check-statuses > :nth-child(1) > bl-decision-item > .decision-item').click();
      cy.get(':nth-child(5) > bl-inspection-check-details-row > .inspection-check-container > .inspection-check-details > form.ng-untouched > .inspection-check-details-form > .note-wrapper > bl-input-textarea.ng-untouched > .form-grid-textarea > .text-wrapper > .ng-untouched').type('cdcdf');
      cy.get(':nth-child(6) > bl-inspection-check-details-row > .inspection-check-container > .inspection-check-details > form.ng-untouched > .inspection-check-details-form > .check-statuses-wrapper > .status-list > .check-statuses > :nth-child(1) > bl-decision-item > .decision-item').click();
      cy.get(':nth-child(6) > bl-inspection-check-details-row > .inspection-check-container > .inspection-check-details > form.ng-untouched > .inspection-check-details-form > .note-wrapper > bl-input-textarea.ng-untouched > .form-grid-textarea > .text-wrapper > .ng-untouched').type('cdcdf');
      cy.get('.action-buttons > .button').click();
      cy.wait(1000);
      cy.get(':nth-child(1) > bl-decision-item > .decision-item').click();
      cy.get('.text-wrapper > .ng-untouched').type('בגל הראשון היינו');
      cy.get('#mat-button-toggle-1-button > .mat-button-toggle-label-content').click();
      cy.get('.mat-mdc-select-placeholder').click();
      cy.get('#mat-option-1046').click();
      cy.get('.button').click();
      cy.wait(1000);
      cy.get('.action > .bl-link-btn').click();

      //end of Bdikot
      
    
    })
  })