import * as React from 'react';


import Task1 from '../../src/Task1';

describe('Task1 Component', () => {
  beforeEach(() => {
    cy.viewport(1200, 700)
    cy.mount(<Task1 />);
  });

  it('component renders without crashing', () => {
    cy.get('.image-container').should('exist');
  });

  it('adds a new image on clicking plus icon', () => {
    cy.get('.plus-icon').click();
    cy.wait(1000); 
    cy.get('.image').should('have.length', 1);
    
  });
  
  // it('displays refresh button on image hover', () => {
  //   cy.get('.plus-icon').click();
  //   cy.wait(2000);
  //   cy.get('.image-wrapper').first().trigger('mouseover');
  //   cy.get('.hover-content').should('be.visible');
  // });

  it('refreshes a single image with a different image', () => {
    cy.get('.plus-container').click();
    cy.wait(1000); 
    cy.get('.image').first().invoke('attr', 'src').then(firstImageSrc => {
      cy.get('.hover-content').first().click();
      cy.wait(1000);
      cy.get('.image').first().invoke('attr', 'src').should('not.equal', firstImageSrc);
    });
  });


  it('refreshes a single image on clicking refresh button', () => {
    cy.get('.plus-container').click();
    cy.wait(1000); 
    cy.get('.image').first().invoke('attr', 'src').should('not.contain', 'plus.png');
  });

  it('refreshes all images on clicking "Refresh All" button', () => {
    cy.get('.image-container').trigger('mouseover')
    cy.get('.plus-icon').click();
    cy.get('.mainButtons button').click();
    cy.wait(1000); 
  });

  it('adds two images and refreshe all ', () => {
    cy.get('.plus-icon').click().click(); 
    cy.get('button').contains('Refresh All').click();
    
  });
 
 
});
