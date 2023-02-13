////////////////////later: Community category, Community type,Adult content


import CreateCommObjects from '../PageObjects/CreateCommunityObjects/CreateCommObjects'
describe('Test Create Community form', () => {   

    //test visiting the sign_up page
    beforeEach(() => {
      // Since we want to visit the same URL at the start of all our tests,
      // we include it in our beforeEach function so that it runs before each test
      const creatCommObj = new CreateCommObjects()     
      creatCommObj.Navigate() 
      creatCommObj.HomeCreateComm()
    })
    
//-------------------------------------------------------  first form   --------------------------------------------------------///
  it('test damy', () => {
    const creatCommObj = new CreateCommObjects()     
    creatCommObj.CommName('samasemo')
    // creatCommObj.CancelCreateComByX()
    // creatCommObj.CommFormNotExist()
  })

  it('Clicking on "Create Community" button with empty Community name', () => {
    const creatCommObj = new CreateCommObjects()     
    creatCommObj.CreateCommunitySub()
    creatCommObj.NoCommNameErrMsg('A community name is required') 
   //?: creatCommObj.ErrFormVisible()
  })

//?:Community names must be between 3–21 characters, and can only contain letters, numbers, or underscores. 
//?OR : Community names must be between 3–21 characters, and can only contain letters,.. ?
  //?:-
  it('Clicking on "Create Community" button with very short Community name', () => {
    const creatCommObj = new CreateCommObjects() 
    creatCommObj.CommName('ab')    
    creatCommObj.CreateCommunitySub()
    creatCommObj.InvalidCommNameErrMsg('Community names must be between 3–21 characters, and can only contain letters, numbers, or underscores.') 
  })

  //pass
  //later
  it('Clicking on "Create Community" button with community name with numbers only', () => {
    const creatCommObj = new CreateCommObjects() 
    creatCommObj.CommName('hihii8908')  
    creatCommObj.CommCategory('TV') 
    creatCommObj.CreateCommunitySub()
  })

    //pass -m.s-
  //later
  it('Clicking on "Create Community" button with community name start with numbers only', () => {
    const creatCommObj = new CreateCommObjects() 
    creatCommObj.CommName('8908party')   
    creatCommObj.CommCategory('TV')
    creatCommObj.CreateCommunitySub()
  })

  it('Clicking on "Create Community" button with community name with numbers and space', () => {
    const creatCommObj = new CreateCommObjects() 
    creatCommObj.CommName('hibjhii 8908')    
    creatCommObj.CreateCommunitySub()
    creatCommObj.InvalidCommNameErrMsg('Community names must be between 3–21 characters, and can only contain letters, numbers, or underscores.') 
  })

  it('Clicking on "Create Community" button with community name with numbers and space', () => {
    const creatCommObj = new CreateCommObjects() 
    creatCommObj.CommName('hibjhii 8908')    
    creatCommObj.CreateCommunitySub()
    creatCommObj.InvalidCommNameErrMsg('Community names must be between 3–21 characters, and can only contain letters, numbers, or underscores.') 
  })

  //not pass
  it('Clicking on "Create Community" button with community name with special character only', () => {
    const creatCommObj = new CreateCommObjects() 
    creatCommObj.CommName('hibjhii##')    
    creatCommObj.CreateCommunitySub()
    creatCommObj.InvalidCommNameErrMsg('Community names must be between 3–21 characters, and can only contain letters, numbers, or underscores.') 
  })

  //repeated?:-
  it('Clicking on "Create Community" button with community name with special character and space', () => {
    const creatCommObj = new CreateCommObjects() 
    creatCommObj.CommName('hibjhii ##')    
    creatCommObj.CreateCommunitySub()
    creatCommObj.InvalidCommNameErrMsg('Community names must be between 3–21 characters, and can only contain letters, numbers, or underscores.') 
  })

//   //later: responce?
//   it('Clicking on "Create Community" button with lowercase community name', () => {
//     const creatCommObj = new CreateCommObjects() 
//    // creatCommObj.CommName('lowlow')    

//   })

//later: responce?
//   it('Clicking on "Create Community" button with upercase community name', () => {
//     const creatCommObj = new CreateCommObjects() 
//    // creatCommObj.CommName('HIGHHIGH')    

//   })
  
  //useless?:-
//   it('Without clicking on "Create Community" button with very short Community name', () => {
//     const creatCommObj = new CreateCommObjects()     
//     creatCommObj.CommName('ab')
//     creatCommObj.InvalidCommNameErrMsg('Community names must be between 3–21 characters, and can only contain letters, numbers, or underscores.') 
//   })

  it('Clicking on "More" in the error message of very short Community name ', () => {
    const creatCommObj = new CreateCommObjects()   
    creatCommObj.CommName('ab')    
    creatCommObj.CreateCommunitySub()  
    creatCommObj.MoreErrMsgUrl()
    creatCommObj.ErrFormVisible()
  })

  it('Error form message synatx', () => {
    const creatCommObj = new CreateCommObjects()
    creatCommObj.CommName('ab')    
    creatCommObj.CreateCommunitySub()
    creatCommObj.MoreErrMsgUrl()  
    creatCommObj.ErrFormText('Community names must be between 3–21 characters, and can only contain letters, numbers, or underscores.')
  })

  it('Close by (x) in error form message synatx', () => {
    const creatCommObj = new CreateCommObjects()
    creatCommObj.CommName('ab')    
    creatCommObj.CreateCommunitySub()
    creatCommObj.MoreErrMsgUrl()  
    creatCommObj.ErrFormX()
    creatCommObj.ErrFormNotExist()
  })

  it('Close by (OK) in error form message synatx', () => {
    const creatCommObj = new CreateCommObjects()
    creatCommObj.CommName('ab')    
    creatCommObj.CreateCommunitySub()
    creatCommObj.MoreErrMsgUrl()  
    creatCommObj.ErrFormOk()
    creatCommObj.ErrFormNotExist()
  })

  it('Check Max community name lenght', () => {
    const creatCommObj = new CreateCommObjects()  
    creatCommObj.CommNameMax()
  })

  // it('Enter existing community name and submit', () => {
  //   const creatCommObj = new CreateCommObjects()  
  //   //later commName:-
  //   const commName = 'footbally'
  //   creatCommObj.CommName(commName)  
  //   creatCommObj.CreateCommunitySub() 
  //   creatCommObj.CommNameErrMsg('Sorry, r/'+commName+' is taken. Try another.') 
  //   //Sorry, r/footbally is taken. Try another.
  // })

  it('Enter existing community name and submit', () => {
    const creatCommObj = new CreateCommObjects()  
    //later commName:-
    const commName = 'footbally'
    creatCommObj.CommName(commName)  
    creatCommObj.CreateCommunitySub() 
   // creatCommObj.CommNameErrMsg('Sorry, r/'+commName+' is taken. Try another.') 
    //Sorry, r/footbally is taken. Try another.
  })

  //filtered
  //   it('Submit without community category', () => {
  //   const creatCommObj = new CreateCommObjects()  
  //   creatCommObj.CommName('NOCATEGORY')    
  //   creatCommObj.CreateCommunitySub()
  //   creatCommObj.CommCategoryErrMsg('A community category is required') 
  // }) 

//   //later
// //   it('Enter valid community name and submit', () => {
// //     const creatCommObj = new CreateCommObjects()  
// //     creatCommObj.CommName('Samaa_Comm_fero')  
// //     creatCommObj.CreateCommunitySub() 
// //     creatCommObj.xx 
// //   })

  it('Closeing the form of "Create Community" by (Cancel) button', () => {
    const creatCommObj = new CreateCommObjects()  
    creatCommObj.CancelCreateCom ()
    //creatCommObj.GoHome() 
    creatCommObj.CommFormNotExist()
  })

  it('Closeing the form of "Create Community" by (X) button', () => {
    const creatCommObj = new CreateCommObjects()  
    creatCommObj.CancelCreateComByX()
    //creatCommObj.GoHome() 
    creatCommObj.CommFormNotExist()
  })

  //Bug
  it('Closeing the form of "Create Community" by Clicking out of the "Create Community" form', () => {
    const creatCommObj = new CreateCommObjects()  
    creatCommObj.ClickOutForm()
    //creatCommObj.GoHome() 
    creatCommObj.CommFormNotExist()
  })   

})