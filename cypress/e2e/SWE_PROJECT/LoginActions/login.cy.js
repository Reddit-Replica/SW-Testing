
import loginObjects from '../PageObjects/LoginObjects/loginObjects'
const login = new loginObjects()

//test visiting the login page
beforeEach(function() {
  // Since we want to visit the same URL at the start of all our tests,
  // we include it in our beforeEach function so that it runs before each test
  //const login = new loginObjects()     
  login.navigate() 
})

before( { scrollBehavior: false }, function() {
  cy.fixture('LoginTestData').then(function(data){
      this.data = data
  })
})
describe('Test Login', function() {

  it('empty username with empty password', function() {
    //const login = new loginObjects()     
    login.submit() 
    login.doNotLog()    
  })
 
//Later:if we have to check the enter , then theck it for all test cases bellow
  it('Invalid username with empty password', function() {
    //const login = new loginObjects() 
    login.enterUsername(this.data.InvalidUserName1) 
    login.submit() 
    login.doNotLog()
  })

  it('Invalid password with empty username', function() {
    //const login = new loginObjects() 
    login.enterPassword(this.data.InvalidPassword1)    
    login.submit() 
    login.doNotLog()
  })

  it('Valid username with empty password', function() {
    //const login = new loginObjects() 
    login.enterUsername(this.data.UserName) 
    login.submit() 
    login.doNotLog()
  })

  it('Valid password with empty username', function() {
    //const login = new loginObjects() 
    login.enterPassword(this.data.validPassword2)    
    login.submit() 
    login.doNotLog()
  })

  it('Valid username with invalid password', function() {
    //const login = new loginObjects() 
    login.enterUsername(this.data.UserName) 
    login.enterPassword(this.data.validPassword2)     
    login.submit() 
    login.userNameErrMsg(this.data.userNameErrMsg) 
    login.doNotLog()

  })

  it('Valid password with invalid username', function() {
    //const login = new loginObjects() 
    login.enterUsername(this.data.InvalidUserName2) 
    login.enterPassword(this.data.Password)   
    login.submit()  
    login.doNotLog()

    login.userNameErrMsg(this.data.userNameErrMsg) 
  })

  it('Invalid password with Invalid username', function() {
    //const login = new loginObjects() 
    login.enterUsername(this.data.InvalidUserName2) 
    login.enterPassword(this.data.InvalidPassword1) 
    //login.enterPassword('1231hgrjgn')   
    login.submit() 
    login.doNotLog()

    login.userNameErrMsg(this.data.userNameErrMsg) 

  })

  it('Valid password with valid username', function() {
    //const login = new loginObjects() 
    login.enterUsername(this.data.UserName) 
    login.enterPassword(this.data.Password)    
    login.submit()  
    //blue msg for success login
    //cy.get(':nth-child(8) > .AnimatedForm__submitStatus > .AnimatedForm__submitStatusMessage').should('have.text',"You are now logged in. You will soon be redirected")
    login.userNameErrMsg(this.data.userNameErrMsg2)
    login.doLog()
  })
 
  //weird case:
  it('Check the message after:writing username then writing password the deleting user name then submit', function() {
    //const login = new loginObjects() 
    login.enterUsername(this.data.UserName) 
    login.enterPassword(this.data.Password)   
    //NOTE:enterUsername is already make clearing the text inside it
    login.clearUsername() 
    login.submit() 
    login.userNameErrMsg(this.data.userNameErrMsg3) 
    login.doNotLog()
  })

  //weird case:
  //?later : check the validation of this in original cypress
  it('Check the message after:writing username then writing password the deleting user name then press any where', function() {
    //const login = new loginObjects() 
    login.enterUsername(this.data.UserName) 
    login.enterPassword(this.data.Password)   
    login.clearUsername() 
    login.body() 
    login.userNameErrMsg(this.data.userNameErrMsg3) 
    login.doNotLog()
  })
  //########################################### linking with other pages #######################################
  it('Clicking on the "SIGN UP" will load the Login page', function() {
    //const login = new loginObjects()   
    login.signUpPage() 
    login.urlChecker(Cypress.env('CYPRESSBASEURL') +this.data.SignUpPage) 
    //cy.url().should('include','/register') 
    //?or:cy.url().should('include','/account/register')   
  })

  it('Clicking on the "username" will load the(forget  username page)', function() {
    //const login = new loginObjects()     
    login.forgetUserName() 
    login.urlChecker(Cypress.env('CYPRESSBASEURL') +this.data.ForgetUsernamepage) 
  })

  it('Clicking on the "password" will load the (forget  password page)', function() {
    //const login = new loginObjects()  
    login.forgetPassword() 
    login.urlChecker(Cypress.env('CYPRESSBASEURL') +this.data.ForgetPasswordpage) 
  })   

  it('Clicking on the "User Agreement" will load the (User Agreement page)', function() {
    //const login = new loginObjects()  
    login.userAgreementPage() 
    // login.urlChecker('https://www.redditinc.com/policies/user-agreement') 
    login.urlInclude(this.data.UserAgreementPage) 
  })   

  it('Clicking on the "Privacy Policy" will load the (Privacy Policy)', function() {
    //const login = new loginObjects()  
    login.privacyPolicyPage() 
    login.urlChecker(this.data.PrivacyPolicy) 
  })   

})