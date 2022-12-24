////////////////////later: Community category, Community type,Adult content


import CreateCommObjects from '../PageObjects/CreateCommunityObjects/CreateCommObjects'
import loginObjects from '../PageObjects/LoginObjects/loginObjects'

const creatCommObj = new CreateCommObjects() 
const login = new loginObjects() 
//test visiting the sign_up page
beforeEach(function() {
  // Since we want to visit the same URL at the start of all our tests,
  // we include it in our beforeEach function so that it runs before each test
  
  login.navigate() 
  login.enterUsername(this.loginData.UserName) 
  login.enterPassword(this.loginData.Password)    
  login.submit()  
  cy.wait(1000)      
  creatCommObj.Navigate()   
  creatCommObj.HomeCreateComm()
  cy.wait(1000) 
})

before(function() {
  cy.fixture('CommonLoginData').then(function(loginData){
   this.loginData=loginData
  })

  cy.fixture('CreateCommData').then(function(data){
    this.data=data
   })
})

describe('Test Create Community form',{ scrollBehavior: false }, function() {   

    
//-------------------------------------------------------  first form   --------------------------------------------------------///
  it('test damy', function() {
    const creatCommObj = new CreateCommObjects()     
    creatCommObj.CommName(this.data.CommName1)
    // creatCommObj.CancelCreateComByX()
    // creatCommObj.CommFormNotExist()
  })

  it('Clicking on "Create Community" button with empty Community name', function() {
    const creatCommObj = new CreateCommObjects()     
    creatCommObj.CreateCommunitySub()
    creatCommObj.NoCommNameErrMsg(this.data.NoCommNameErrMsg) 
   //?: creatCommObj.ErrFormVisible()
  })

//?:Community names must be between 3–21 characters, and can only contain letters, numbers, or underscores. 
//?OR : Community names must be between 3–21 characters, and can only contain letters,.. ?
  //?:-
  it('Clicking on "Create Community" button with very short Community name', function() {
    const creatCommObj = new CreateCommObjects() 
    creatCommObj.CommName(this.data.CommName2)    
    creatCommObj.CreateCommunitySub()
    creatCommObj.InvalidCommNameErrMsg(this.data.ErrFormText) 
  })

  //pass
  //later
  it('Clicking on "Create Community" button with community name with numbers only', function() {
    const creatCommObj = new CreateCommObjects() 
    creatCommObj.CommName(this.data.CommName7)  
    creatCommObj.CommCategory(this.data.CommCategory) 
    creatCommObj.CreateCommunitySub()
  })

    //pass -m.s-
  //later
  it('Clicking on "Create Community" button with community name start with numbers only', function() {
    const creatCommObj = new CreateCommObjects() 
    creatCommObj.CommName(this.data.CommName6)   
    creatCommObj.CommCategory(this.data.CommCategory)
    creatCommObj.CreateCommunitySub()
  })

  it('Clicking on "Create Community" button with community name with numbers and space', function() {
    const creatCommObj = new CreateCommObjects() 
    creatCommObj.CommName(this.data.CommName3)    
    creatCommObj.CreateCommunitySub()
    creatCommObj.InvalidCommNameErrMsg(this.data.ErrFormText) 
  })

  it('Clicking on "Create Community" button with community name with numbers and space', function() {
    const creatCommObj = new CreateCommObjects() 
    creatCommObj.CommName(this.data.CommName3)    
    creatCommObj.CreateCommunitySub()
    creatCommObj.InvalidCommNameErrMsg(this.data.ErrFormText) 
  })

  //not pass
  it('Clicking on "Create Community" button with community name with special character only', function() {
    const creatCommObj = new CreateCommObjects() 
    creatCommObj.CommName(this.data.CommName4)    
    creatCommObj.CreateCommunitySub()
    creatCommObj.InvalidCommNameErrMsg(this.data.ErrFormText) 
  })

  //repeated?:-
  it('Clicking on "Create Community" button with community name with special character and space', function() {
    const creatCommObj = new CreateCommObjects() 
    creatCommObj.CommName(this.data.CommName5)    
    creatCommObj.CreateCommunitySub()
    creatCommObj.InvalidCommNameErrMsg(this.data.ErrFormText) 
  })

//   //later: responce?
//   it('Clicking on "Create Community" button with lowercase community name', function() {
//     const creatCommObj = new CreateCommObjects() 
//    // creatCommObj.CommName('lowlow')    

//   })

//later: responce?
//   it('Clicking on "Create Community" button with upercase community name', function() {
//     const creatCommObj = new CreateCommObjects() 
//    // creatCommObj.CommName('HIGHHIGH')    

//   })
  
  //useless?:-
//   it('Without clicking on "Create Community" button with very short Community name', function() {
//     const creatCommObj = new CreateCommObjects()     
//     creatCommObj.CommName(this.data.CommName2)
//     creatCommObj.InvalidCommNameErrMsg(this.data.ErrFormText) 
//   })

  it('Clicking on "More" in the error message of very short Community name ', function() {
    const creatCommObj = new CreateCommObjects()   
    creatCommObj.CommName(this.data.CommName2)    
    creatCommObj.CreateCommunitySub()  
    creatCommObj.MoreErrMsgUrl()
    creatCommObj.ErrFormVisible()
  })

  it('Error form message synatx', function() {
    const creatCommObj = new CreateCommObjects()
    creatCommObj.CommName(this.data.CommName2)    
    creatCommObj.CreateCommunitySub()
    creatCommObj.MoreErrMsgUrl()  
    creatCommObj.ErrFormText(this.data.ErrFormText)
  })

  it('Close by (x) in error form message synatx', function() {
    const creatCommObj = new CreateCommObjects()
    creatCommObj.CommName(this.data.CommName2)    
    creatCommObj.CreateCommunitySub()
    creatCommObj.MoreErrMsgUrl()  
    creatCommObj.ErrFormX()
    creatCommObj.ErrFormNotExist()
  })

  it('Close by (OK) in error form message synatx', function() {
    const creatCommObj = new CreateCommObjects()
    creatCommObj.CommName(this.data.CommName2)    
    creatCommObj.CreateCommunitySub()
    creatCommObj.MoreErrMsgUrl()  
    creatCommObj.ErrFormOk()
    creatCommObj.ErrFormNotExist()
  })

  it('Check Max community name lenght', function() {
    const creatCommObj = new CreateCommObjects()  
    creatCommObj.CommNameMax()
  })

  // it('Enter existing community name and submit', function() {
  //   const creatCommObj = new CreateCommObjects()  
  //   //later commName:-
  //   const commName = this.data.ExistingCommNam
  //   creatCommObj.CommName(commName)  
  //   creatCommObj.CreateCommunitySub() 
  //   creatCommObj.CommNameErrMsg('Sorry, r/'+commName+' is taken. Try another.') 
  //   //Sorry, r/footbally is taken. Try another.
  // })

  it('Enter existing community name and submit', function() {
    const creatCommObj = new CreateCommObjects()  
    //later commName:-
    const commName = this.data.ExistingCommNam
    creatCommObj.CommName(commName)  
    creatCommObj.CreateCommunitySub() 
   // creatCommObj.CommNameErrMsg('Sorry, r/'+commName+' is taken. Try another.') 
    //Sorry, r/footbally is taken. Try another.
  })

  //filtered
  //   it('Submit without community category', function() {
  //   const creatCommObj = new CreateCommObjects()  
  //   creatCommObj.CommName('NOCATEGORY')    
  //   creatCommObj.CreateCommunitySub()
  //   creatCommObj.CommCategoryErrMsg('A community category is required') 
  // }) 

//   //later
// //   it('Enter valid community name and submit', function() {
// //     const creatCommObj = new CreateCommObjects()  
// //     creatCommObj.CommName('Samaa_Comm_fero')  
// //     creatCommObj.CreateCommunitySub() 
// //     creatCommObj.xx 
// //   })

  it('Closeing the form of "Create Community" by (Cancel) button', function() {
    const creatCommObj = new CreateCommObjects()  
    creatCommObj.CancelCreateCom ()
    //creatCommObj.GoHome() 
    creatCommObj.CommFormNotExist()
  })

  it('Closeing the form of "Create Community" by (X) button', function() {
    const creatCommObj = new CreateCommObjects()  
    creatCommObj.CancelCreateComByX()
    //creatCommObj.GoHome() 
    creatCommObj.CommFormNotExist()
  })

  //Bug
  it('Closeing the form of "Create Community" by Clicking out of the "Create Community" form', function() {
    const creatCommObj = new CreateCommObjects()  
    creatCommObj.ClickOutForm()
    //creatCommObj.GoHome() 
    creatCommObj.CommFormNotExist()
  })   

})