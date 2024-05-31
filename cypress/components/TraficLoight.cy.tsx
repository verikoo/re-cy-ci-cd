import * as React from 'react';
import { mount } from 'cypress/react';
import Task2 from '../../src/Task2';
import TrafficLight from '../../src/TrafficLights';

describe('TrafficLight Component', () => {
  beforeEach(() => {
    cy.viewport(1200, 700);
    mount(<Task2 />);
  });

  it('initially displays the red light', () => {
    cy.get('.traffic-light.red').should('have.css', 'background-color', 'rgb(223, 64, 64)');
  });

  it('cycles through the lights correctly', () => {
    cy.get('.traffic-light.red').should('have.css', 'background-color', 'rgb(223, 64, 64)');
    cy.wait(2000);
    cy.get('.traffic-light.yellow').should('have.css', 'background-color', 'rgb(233, 236, 106)');
    cy.wait(1500);
    cy.get('.traffic-light.green').should('have.css', 'background-color', 'rgb(4, 202, 0)');
    cy.wait(2000);
   
  });

  it('blinks the green light', () => {
    cy.get('.traffic-light.red').should('have.css', 'background-color', 'rgb(223, 64, 64)');
    cy.wait(2000);
    cy.get('.traffic-light.yellow').should('have.css', 'background-color', 'rgb(233, 236, 106)');
    cy.wait(1500);
    
  });
});
