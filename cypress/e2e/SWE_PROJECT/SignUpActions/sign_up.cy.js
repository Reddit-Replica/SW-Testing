
import signUpObjects from '../PageObjects/SignUpObjects/signUpObjects'

describe('Test Sign up first form', () => {   

    //test visiting the sign_up page
    beforeEach(() => {
      // Since we want to visit the same URL at the start of all our tests,
      // we include it in our beforeEach function so that it runs before each test
      const signUp = new signUpObjects()     
      signUp.navigate() 
    })

///////////////////////////////////  first form   ////////////////////////////////////
  it('Press "CONTINUE" button with empty email', () => {
    const signUp = new signUpObjects()     
    signUp.continue()  
    //signUp.emailErrMsg('Looks like you've been doing that a lot. Take a break for 32 minutes before trying again.')
    signUp.goSecondForm()
  })

  //weird
  it('Press "CONTINUE" button with empty email and with valid username and strong password then submit', () => {
    const signUp = new signUpObjects()     
    signUp.continue()  
    //signUp.goSecondForm()
    signUp.enterUserName('Samaa_hazem22fxggf') 
    signUp.enterPassword('asdfghje123') 
    signUp.signUpBotton() 

  })

//?is this different ftom test2?
//?i think it should appear a different msg!!

    // it.only('Check without "enter" with invalid Email', () => {
    //const signUp = new signUpObjects()     
    //   signUp.enterEmail('hello')
    //   signUp.emailErrMsg('Please fix your email to continue')
  
    // })

  it('Without pressing "CONTINUE" with invalid email', () => {
    const signUp = new signUpObjects()     
    signUp.enterEmail('hello') 
    //signUp.continue() 
    signUp.emailErrMsg('Please fix your email to continue')
    signUp.goNotSecondForm()

  })  

  it('Press "CONTINUE" with invalid email', () => {
    const signUp = new signUpObjects()     
    signUp.enterEmail('hello') 
    //signUp.emailErrMsg('Please fix your email to continue')
    signUp.continue()   
    signUp.emailErrMsg('That email is invalid')
    signUp.goNotSecondForm()

  })

  it('Press "CONTINUE" with invalid email (with .com only)', () => {
    const signUp = new signUpObjects()     
    signUp.enterEmail('hello.com') 
    signUp.continue() 
    signUp.emailErrMsg('That email is invalid')
    signUp.goNotSecondForm()

  })

  it('Press "CONTINUE" with invalid email (with @ only)', () => {
    const signUp = new signUpObjects()     
    signUp.enterEmail('hello.com') 
    signUp.continue() 
    signUp.emailErrMsg('That email is invalid')
    signUp.goNotSecondForm()

  })

  it('Press "CONTINUE" with invalid email (with @ and .com)', () => {
    const signUp = new signUpObjects()     
    signUp.enterEmail('hello.com') 
    signUp.continue() 
    signUp.emailErrMsg('That email is invalid')
    signUp.goNotSecondForm()

  })

  //weird: this will pass :-
  it('Press "CONTINUE" with valid non-existing email', () => {
    const signUp = new signUpObjects()     
    signUp.enterEmail('hello.dfghj@gmail.com') 
    signUp.continue() 
    //.emailErrMsg('That email is invalid')
    signUp.goSecondForm()

  })

  // it.only('Entering a valid Email after alot of Failed attempts', () => {
  //  const signUp = new signUpObjects()     
  //   signUp.enterEmail('sama.hazem22@gmail.com')
  //   signUp.continue()  
  //   //signUp.emailErrMsg('Looks like you've been doing that a lot. Take a break for 32 minutes before trying again.')

  // })

  it('Entering a valid email without pressing "CONTINUE"', () => {
   const signUp = new signUpObjects()     

    signUp.enterEmail('sama.hazem22@gmail.com')
    signUp.goNotSecondForm()
  })

  it('Entering a valid email and press the "CONTINUE" ', () => {
    const signUp = new signUpObjects()     
    signUp.enterEmail('sama.hazem22@gmail.com') 
    signUp.continue()  
    signUp.goSecondForm()  
  })

  it('Entering a valid email of an existing account', () => {
    const signUp = new signUpObjects()     
    signUp.enterEmail('sama.hazem22@gmail.com')
    signUp.continue()  
    signUp.goSecondForm()
   })

  //########################################### linking with other pages #######################################
  it('Click the "LOG IN" will load the Login page', () => {
    const signUp = new signUpObjects()     
    signUp.loginPage() 
    signUp.urlChecker('http://read-it.francecentral.cloudapp.azure.com/login')
  })

  it('Clicking on the "User Agreement" will load the (User Agreement page)', () => {
    const signUp = new signUpObjects()  
    signUp.userAgreementPage() 
    signUp.urlChecker('https://www.redditinc.com/policies/user-agreement') 
  })   

  it('Clicking on the "Privacy Policy" will load the (Privacy Policy)', () => {
    const signUp = new signUpObjects()  
    signUp.privacyPolicyPage() 
    signUp.urlChecker('https://www.reddit.com/policies/privacy-policy') 
  })   

})