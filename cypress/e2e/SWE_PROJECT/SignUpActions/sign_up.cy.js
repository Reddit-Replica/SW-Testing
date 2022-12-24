
import signUpObjects from '../PageObjects/SignUpObjects/signUpObjects'

//test visiting the sign_up page
const signUp = new signUpObjects()
beforeEach( function() {
  // Since we want to visit the same URL at the start of all our tests,
  // we include it in our beforeEach function so that it runs before each test
  //const signUp = new signUpObjects()     
  signUp.navigate() 
})

    
before( { scrollBehavior: false }, function() {
  cy.fixture('SignUpData').then(function(data){
      this.data = data
  })

  cy.fixture('LoginTestData').then(function(data2){
    this.data2 = data2
  })
})

describe('Test Sign up first form',  function() {   


//----------------------------------------  first form   --------------------------------------- //
//filtered
  // it('Press "CONTINUE" button with empty email',  function() {
  //   //const signUp = new signUpObjects()     
  //   signUp.continue()  
  //   //signUp.emailErrMsg('Looks like you've been doing that a lot. Take a break for 32 minutes before trying again.')
  //   signUp.goSecondForm()
  // })

//filtered
  // it('Press "CONTINUE" button with empty email and with valid username and strong password then submit',  function() {
  //   //const signUp = new signUpObjects()     
  //   signUp.continue()  
  //   //signUp.goSecondForm()
  //   signUp.enterUserName('Samaa_hazem22fxggf') 
  //   signUp.enterPassword('asdfghje123') 
  //   signUp.signUpBotton() 

  // })

  //filtered
  //the error in the msg syntax
  it('Without pressing "CONTINUE" with invalid email',  function() {
    //const signUp = new signUpObjects()     
    signUp.enterEmail(this.data.InvalidEmail1) 
    //signUp.continue() 
    //filtered
    //the error in the msg syntax
    //signUp.emailErrMsg('Please fix your email to continue')
    signUp.goNotSecondForm()

  })  

  it('Press "CONTINUE" with invalid email',  function() {
    //const signUp = new signUpObjects()     
    signUp.enterEmail(this.data.InvalidEmail1) 
    //signUp.emailErrMsg('Please fix your email to continue')
    signUp.continue()   
    //filtered
    //the error in the msg syntax
    //signUp.emailErrMsg('That email is invalid')
    signUp.goNotSecondForm()

  })

  it('Press "CONTINUE" with invalid email (with .com only)',  function() {
    //const signUp = new signUpObjects()     
    signUp.enterEmail(this.data.InvalidEmail2) 
    signUp.continue() 
    //filtered
    //the error in the msg syntax
    //signUp.emailErrMsg('That email is invalid')
    signUp.goNotSecondForm()

  })

  it('Press "CONTINUE" with invalid email (with @ only)',  function() {
    //const signUp = new signUpObjects()     
    signUp.enterEmail(this.data.InvalidEmail2) 
    signUp.continue() 
    //filtered
    //the error in the msg syntax
    //signUp.emailErrMsg('That email is invalid')
    signUp.goNotSecondForm()

  })

  it('Press "CONTINUE" with invalid email (with @ and .com)',  function() {
    //const signUp = new signUpObjects()     
    signUp.enterEmail(this.data.InvalidEmail2) 
    signUp.continue() 
    //filtered
    //the error in the msg syntax
    //signUp.emailErrMsg('That email is invalid')
    signUp.goNotSecondForm()

  })

  //weird: this will pass :-
  it('Press "CONTINUE" with valid non-existing email',  function() {
    //const signUp = new signUpObjects()     
    signUp.enterEmail(this.data.ValidEmail2) 
    signUp.continue() 
    //.emailErrMsg('That email is invalid')
    cy.wait(1000)
    signUp.goSecondForm()

  })

  it('Entering a valid email without pressing "CONTINUE"',  function() {
   //const signUp = new signUpObjects()     

    signUp.enterEmail(this.data.ValidEmail)
    signUp.goNotSecondForm()
  })

  it('Entering a valid email and press the "CONTINUE" ',  function() {
    //const signUp = new signUpObjects()     
    signUp.enterEmail(this.data.ValidEmail2) 
    signUp.continue()  
    cy.wait(1000)
    signUp.goSecondForm()  
  })

  //filtered
  // it('Entering a valid email of an existing account',  function() {
  //   //const signUp = new signUpObjects()     
  //   signUp.enterEmail(this.data.ValidEmail)
  //   signUp.continue()  
  //   signUp.goSecondForm()
  //  })

  //########################################### linking with other pages #######################################
  it('Click the "LOG IN" will load the Login page',  function() {
    //const signUp = new signUpObjects()     
    signUp.loginPage() 
    signUp.urlChecker(Cypress.env('CYPRESSBASEURL') +this.data.LoginPage)
  })

  it('Clicking on the "User Agreement" will load the (User Agreement page)',  function() {
    //const signUp = new signUpObjects()  
    signUp.userAgreementPage() 
    signUp.urlChecker(this.data2.UserAgreementPage) 
  })   

  it('Clicking on the "Privacy Policy" will load the (Privacy Policy)',  function() {
    //const signUp = new signUpObjects()  
    signUp.privacyPolicyPage() 
    signUp.urlChecker(this.data2.PrivacyPolicy) 
  })   


  // it.only('Entering a valid Email after alot of Failed attempts',  function() {
  //  //const signUp = new signUpObjects()     
  //   signUp.enterEmail(this.data.ValidEmail)
  //   signUp.continue()  
  //   //signUp.emailErrMsg('Looks like you've been doing that a lot. Take a break for 32 minutes before trying again.')

  // })

  //?is this different ftom test2?
  //?i think it should appear a different msg!!

    // it.only('Check without "enter" with invalid Email',  function() {
    ////const signUp = new signUpObjects()     
    //   signUp.enterEmail(this.data.InvalidEmail1)
    //   signUp.emailErrMsg('Please fix your email to continue')
  
    // })
})