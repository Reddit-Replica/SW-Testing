
import BackToTopButtonObjects from "../PageObjects/HomeObjects/BackToTopButtonObjects.cy.js"


const backToTopButton = new BackToTopButtonObjects()
  
beforeEach(() => {
  backToTopButton.navigate()  
  backToTopButton.enterUsername('karim22') 
  backToTopButton.enterPassword('Karim@0107228700')     
  backToTopButton.submit() 
})

describe('Back to Top Button Test Cases', function () {

  // Test case 1 ==> scroll down then click on the button to get the top of the page
  it('Back To Top Button After Scrolling', function ()  {    
    backToTopButton.ScrolDown()
    //just for me to see what have happened
    cy.wait(3000)
    backToTopButton.BackToTopButtonAfterScrolling()    
  })

  // Test case 2 ==> don't scroll down then click on the button to get the top of the page ==> the button must not appear if i don't scroll down
  it('Back To Top Button Before Scrolling', function ()  {    
    //just for me to see what have happened      
    cy.wait(2000)
    backToTopButton.BackToTopButtonBeforeScrolling()
  })
    
  })