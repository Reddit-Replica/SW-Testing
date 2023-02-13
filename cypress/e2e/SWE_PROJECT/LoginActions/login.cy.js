
import loginObjects from '../PageObjects/LoginObjects/loginObjects'

describe('Test Login', () => {

  //test visiting the login page
  beforeEach(() => {
    // Since we want to visit the same URL at the start of all our tests,
    // we include it in our beforeEach function so that it runs before each test
    const login = new loginObjects()     
    login.navigate() 
  })


  it('empty username with empty password', () => {
    const login = new loginObjects()     
    login.submit() 
    login.doNotLog()    
  })
 
//Later:if we have to check the enter , then theck it for all test cases bellow
  it('Invalid username with empty password', () => {
    const login = new loginObjects() 
    login.enterUsername('Samaa_Hazem_semo') 
    login.submit() 
    login.doNotLog()
  })

  it('Invalid password with empty username', () => {
    const login = new loginObjects() 
    login.enterPassword('12345ghhj')    
    login.submit() 
    login.doNotLog()
  })

  it('Valid username with empty password', () => {
    const login = new loginObjects() 
    login.enterUsername('Samaa_Hazem') 
    login.submit() 
    login.doNotLog()
  })

  it('Valid password with empty username', () => {
    const login = new loginObjects() 
    login.enterPassword('12345')    
    login.submit() 
    login.doNotLog()
  })

  it('Valid username with invalid password', () => {
    const login = new loginObjects() 
    login.enterUsername('Samaa_Hazem') 
    login.enterPassword('12345')     
    login.submit() 
    login.userNameErrMsg("Incorrect username or password") 
    login.doNotLog()

  })

  it('Valid password with invalid username', () => {
    const login = new loginObjects() 
    login.enterUsername('Samaa_Ha') 
    login.enterPassword('cmp123456')   
    login.submit()  
    login.doNotLog()

    login.userNameErrMsg("Incorrect username or password") 
  })

  it('Invalid password with Invalid username', () => {
    const login = new loginObjects() 
    login.enterUsername('Samaa_Ha') 
    login.enterPassword('1231hgrjgn')   
    login.submit() 
    login.doNotLog()

    login.userNameErrMsg("Incorrect username or password") 

  })

  it('Valid password with valid username', () => {
    const login = new loginObjects() 
    login.enterUsername('Samaa_Hazem') 
    login.enterPassword('cmp123456')    
    login.submit()  
    //blue msg for success login
    //cy.get(':nth-child(8) > .AnimatedForm__submitStatus > .AnimatedForm__submitStatusMessage').should('have.text',"You are now logged in. You will soon be redirected")
    login.userNameErrMsg('You are now logged in. You will soon be redirected')
    login.doLog()
  })
 
  //weird case:
  it('Check the message after:writing username then writing password the deleting user name then submit', () => {
    const login = new loginObjects() 
    login.enterUsername('Samaa_Hazem') 
    login.enterPassword('cmp123456')   
    //NOTE:enterUsername is already make clearing the text inside it
    login.clearUsername() 
    login.submit() 
    login.userNameErrMsg("Username must be between 3 and 20 characters") 
    login.doNotLog()
  })

  //weird case:
  //?later : check the validation of this in original cypress
  it('Check the message after:writing username then writing password the deleting user name then press any where', () => {
    const login = new loginObjects() 
    login.enterUsername('Samaa_Hazem') 
    login.enterPassword('cmp123456')   
    login.clearUsername() 
    login.body() 
    login.userNameErrMsg("Username must be between 3 and 20 characters") 
    login.doNotLog()
  })
  //########################################### linking with other pages #######################################
  it('Clicking on the "SIGN UP" will load the Login page', () => {
    const login = new loginObjects()   
    login.signUpPage() 
    login.urlChecker(Cypress.env('CYPRESSBASEURL') +'/signup') 
    //cy.url().should('include','/register') 
    //?or:cy.url().should('include','/account/register')   
  })

  it('Clicking on the "username" will load the(forget  username page)', () => {
    const login = new loginObjects()     
    login.forgetUserName() 
    login.urlChecker(Cypress.env('CYPRESSBASEURL') +'/forgetUsernamepage') 
  })

  it('Clicking on the "password" will load the (forget  password page)', () => {
    const login = new loginObjects()  
    login.forgetPassword() 
    login.urlChecker(Cypress.env('CYPRESSBASEURL') +'/forgetPasswordpage') 
  })   

  it('Clicking on the "User Agreement" will load the (User Agreement page)', () => {
    const login = new loginObjects()  
    login.userAgreementPage() 
    login.urlChecker('https://www.redditinc.com/policies/user-agreement') 
  })   

  it('Clicking on the "Privacy Policy" will load the (Privacy Policy)', () => {
    const login = new loginObjects()  
    login.privacyPolicyPage() 
    login.urlChecker('https://www.reddit.com/policies/privacy-policy') 
  })   

})