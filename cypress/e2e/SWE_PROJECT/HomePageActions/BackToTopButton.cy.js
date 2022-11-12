/// <reference types="cypress" />

import BackToTopButtonObjects from "/home/karimmahmoud/Desktop/CypressAutomation/cypress/e2e/SWE_PROJECT/PageObjects/HomeObjects/BackToTopButtonObjects.cy.js"

describe('Back to Top Button Test Cases', function () {
  
  beforeEach(() => {
    //visit the URL before each test
    //backToTopButton.navigate()
  })

  // Test case 1 ==> scroll down then click on the button to get the top of the page
  it('Back To Top Button After Scrolling', function ()  {    
   
    const backToTopButton = new BackToTopButtonObjects()
    backToTopButton.navigate()
  
    backToTopButton.ScrolDown()
    
    //just for me to see what have happened
    cy.wait(2000)
    backToTopButton.BackToTopButtonAfterScrolling()
    
    })


  // Test case 2 ==> don't scroll down then click on the button to get the top of the page ==> the button must not appear if i don't scroll down
  it('Back To Top Button Before Scrolling', function ()  {    
    const backToTopButton = new BackToTopButtonObjects()
    backToTopButton.navigate()
  
    //just for me to see what have happened      
    cy.wait(2000)
    backToTopButton.BackToTopButtonBeforeScrolling()
        
    })
    
  })