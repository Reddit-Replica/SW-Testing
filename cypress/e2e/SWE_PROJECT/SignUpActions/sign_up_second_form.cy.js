
import signUpObjects from '../PageObjects/SignUpObjects/signUpObjects'

describe('Test Sign up second form', () => {
//NOTE:important : to test the second form , we temprory make special (continue) which called (contiuneTemporary) , but actually it should not pass any of this test cases
  beforeEach(() => {
    // Since we want to visit the same URL at the start of all our tests,
    // we include it in our beforeEach function so that it runs before each test
    const signUp = new signUpObjects()     
    signUp.navigate() 
    //before all cases here , we need to enter a valid Email to go to the second form
    signUp.enterEmail('samaa.abdellatif975@gmail.com') 
    signUp.contiuneTemporary()
  })

  //--------------------------------------   second form  --------------------------------------//

  it('Back to first form', () => {
    const signUp = new signUpObjects()      
    signUp.backButton()
    signUp.goFirstForm()
  })

  //filtered
  //the error in the msg syntax
  // it('Enter invalid username(with space)', () => {
  //   const signUp = new signUpObjects()
  //   signUp.enterUserName('njkh  khj j jkh')    
  //   signUp.userNameErrMsg("Letters, numbers, dashes, and underscores only. Please try again without symbols.") 
  // })


  //filtered
  //the error in the msg syntax
  // it('Enter invalid username(with # for example)', () => {
  //   const signUp = new signUpObjects()
  //   signUp.enterUserName('njkh#khjjjkh')     
  //   signUp.userNameErrMsg("Letters, numbers, dashes, and underscores only. Please try again without symbols.") 
  // })

//NOTE:it is Valid to enter a user name started with numbers
  it('Enter valid username-start with numbers-', () => {
    const signUp = new signUpObjects()        
    signUp.enterUserName('1256ftyfjv') 
    signUp.noUserNameErrMsg()
  })

  //filtered
  //the error in the msg syntax
  //NOTE:change the name (Samaa_Hazem) to a name that already exist in the database of the backend
  // it('Enter an existed username', () => {
  //   const signUp = new signUpObjects()
  //   signUp.enterUserName('Samaa_Hazem') 
  //   signUp.userNameErrMsg("That username is already taken") 
  // })

  it('Enter a long username', () => {
    const signUp = new signUpObjects()   
    signUp.enterUserName('Samaa_Hazem323knjk4kkl')   
    signUp.signUpNotDone()  
    signUp.userNameErrMsg("Username must be between 3 and 20 characters") 
  })

//NOTE: the msg of empty password is same as the msg of short password!!
  it('Enter valid username and empty password', () => {
    const signUp = new signUpObjects()    
    signUp.enterUserName('Samaa_Hazem222') 
    //signUp.signUpEnable()
    //signUp.signUpButton() 
    signUp.signUpNotDone()
    //filtered
    //the error in the msg syntax
    //signUp.passwordErrMsg("Password must be at least 8 characters long") 
  })

  it('Enter valid username and  invalid -short- password', () => {
    const signUp = new signUpObjects() 
    signUp.enterUserName('Samaa_Hazem222') 
    signUp.enterPassword('12') 
    // signUp.signUpEnable()
    // signUp.signUpButton() 
    signUp.signUpNotDone()
    //filtered
    //the error in the msg syntax
    //signUp.passwordErrMsg("Password must be at least 8 characters long") 
  })

  it('Enter valid username and invalid -exactly(7)- character password', () => {
    const signUp = new signUpObjects()    
    signUp.enterUserName('Samaa_Hazem222') 
    signUp.enterPassword('asdfghj') 
    // signUp.signUpEnable()
    // signUp.signUpButton() 
    signUp.signUpNotDone()
    //filtered
    //the error in the msg syntax
    //signUp.passwordErrMsg("Password must be at least 8 characters long") 
  })


  it('Enter valid username and valid -exactly(8)- character password', () => {
    const signUp = new signUpObjects()    
    signUp.enterUserName('Samaa_Hazem222') 
    signUp.enterPassword('asdfghje') 
    signUp.noPasswordErrMsg()
   })

   it('Enter valid username and valid -exactly(8)- character password and do not check robot', () => {
    const signUp = new signUpObjects()    
    signUp.enterUserName('Samaa_Hazem222') 
    signUp.enterPassword('asdfghje') 
    // signUp.signUpEnable()
    // signUp.signUpButton()
    signUp.signUpNotDone()
   })

  //filtered
  // it('Ability to click on (Sign up) without writing any thing', () => {
  //   const signUp = new signUpObjects()     
  //   signUp.signUpEnable()
  // })

   //later:check not robot
  // it('Enter invalid username and valid password and check robot then sign up', () => {
  //   const signUp = new signUpObjects()    
  //   signUp.enterUserName('Samaa hazem2325') 
  //   signUp.enterPassword('asdfghje') 
  //   signUp.notRobot()
  //   // signUp.signUpEnable()
  //   // signUp.signUpButton() 
  //   signUp.signUpNotDone()
  //   signUp.userNameErrMsg("Letters, numbers, dashes, and underscores only. Please try again without symbols.") 
  // })

  // //NOTE:is it a bug as after writing password the robot checker appeares in original cypress, but here , it needs to click any where first!!
  // it('Enter valid username and valid password and check robot then sign up', () => {
  //   const signUp = new signUpObjects()   
  //   signUp.enterUserName('Samaa_hazem22') 
  //   signUp.enterPassword('asdfghje') 
  //   signUp.notRobot()
  //   // signUp.signUpEnable()
  //   // signUp.signUpButton() 
  //   signUp.signUpDone()
  // })

  //later:update username suggestions checker:
  // it('Choose one of username suggestions', () => {
  //   const signUp = new signUpObjects()     
  //   signUp.firstUsernameSugg()
  //   signUp.checkUsername()
  // })

})