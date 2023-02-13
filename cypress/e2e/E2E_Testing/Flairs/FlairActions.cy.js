////////////////////later: Community category, Community type,Adult content


//import { afterEach } from 'mocha'
import FlairObjects from '../PageObjects/FlairObjects/FlairObjects'
import loginObjects from '../PageObjects/LoginObjects/loginObjects'

const flairObj = new FlairObjects()
const login = new loginObjects()
//test visiting the flair page
beforeEach(function() {
  // Since we want to visit the same URL at the start of all our tests,
  // we include it in our beforeEach function so that it runs before each test        
      login.navigate() 
      login.enterUsername(this.loginData.UserName) 
      login.enterPassword(this.loginData.Password)    
      login.submit() 
      cy.wait(1000)     

      flairObj.Navigate()
      cy.wait(1000) 
  
})

before( { scrollBehavior: false }, function() {
  cy.fixture('FlairData').then(function(data){
      this.data=data
  })

  cy.fixture('CommonLoginData').then(function(loginData){
    this.loginData=loginData
   })
})

describe('Tests  Moderation Post Flairs :do not need to clean after it', function() {   

    it('Disability to add flair without any information', function() {
      //const flairObj = new FlairObjects()     
      flairObj.AddFlair()
      flairObj.DisableAddFlair()
    })

    it('check error message for empty flair text', function() {
      //const flairObj = new FlairObjects()     
      flairObj.AddFlair()
      //flairObj.FlairTextErrMsg('Error: text or emoji is required')
      flairObj.FlairTextErrMsg(' Error: text or emoji is required ')
    })


    it('Cancel adding flair', function() {
      //const flairObj = new FlairObjects() 
      flairObj.AddFlair()  
      flairObj.FlairText(this.data.FlairText)  
      flairObj.CancelFlair()
      flairObj.DisappearanceFlairForm()
  
      //check that the flair is not added
      flairObj.NotExistFlair(this.data.FlairText)
    })

    
  it('Delete the Flair', function() {
    //const flairObj = new FlairObjects()     
    flairObj.AddFlair()
    flairObj.FlairText(this.data.FlairText)
    flairObj.SaveFlair() 

    cy.wait(100)

    flairObj.DeleteFlair()
    flairObj.SubmitDeleteFlair()

    //check it is diapperance
    flairObj.NotExistFlair(this.data.FlairText)
  })


  it('Check changing the Flair background color', function() {
    //const flairObj = new FlairObjects()     
    flairObj.AddFlair()
    flairObj.FlairText(this.data.FlairText)
    //flairObj.SaveFlair() 
    //?;-
    flairObj.OpenBackgroundColors()
    flairObj.ChooseOrangeColor()

    flairObj.CheckBackground(this.data.BackGroundRGB)
    
    //flairObj.
  })

})

//************************************************************************** */

describe('Test Moderation Post Flairs', function() {  
  beforeEach(function() {
    flairObj.AddFlair()  
    flairObj.FlairText(this.data.FlairText)  
    flairObj.SaveFlair()
    cy.wait(1000)
    })

  
  it('Check adding flair', function() {
    //const flairObj = new FlairObjects()    
    flairObj.ExistanceFlair(this.data.FlairText)
  })
  // it('Ability to add a flair with existing flair name', function() {
  //   //const flairObj = new FlairObjects()   
  //   flairObj.AddFlair()  
  //   flairObj.FlairText(this.data.FlairText)  
  //   flairObj.SaveFlair() 
    
  //   flairObj.AddFlair()  
  //   flairObj.FlairText(this.data.FlairText)  
  //   flairObj.SaveFlair() 

  //   //?:-
  //   flairObj.ExistanceFlair(this.data.FlairText)

  //   //clean
  //   flairObj.DeleteFlair()
  //   flairObj.SubmitDeleteFlair()

  //   flairObj.DeleteFlair()
  //   flairObj.SubmitDeleteFlair()
  // })

  //later:
  // it('Check changing the Flair text color', function() {
  //   //const flairObj = new FlairObjects()     
  //   flairObj.AddFlair()
  //   flairObj.FlairText(this.data.FlairText)
  //   //?;-
  //   flairObj.ChooseOrangeColor()

  //   flairObj.CheckBackground()
  // })

  

  it('Cancel deleting the Flair by cancel button', function() {
    //const flairObj = new FlairObjects() 
    flairObj.DeleteFlair()
    flairObj.CancelDeleteFlair()

    //check it is not deleted
    flairObj.ExistanceFlair(this.data.FlairText)

  })

  it('Cancel deleting the Flair by X', function() {
    //const flairObj = new FlairObjects()     
    flairObj.DeleteFlair()
    flairObj.CancelDeleteFlairByX()

    //check it is not deleted
    flairObj.ExistanceFlair(this.data.FlairText)
  })

  it('Edit the Flair Text', function() {
    //const flairObj = new FlairObjects()  

    flairObj.EditFlair()
    flairObj.FlairText(this.data.EditedFlairText)
    flairObj.SaveFlair()
    
    //later:check it is edited
    flairObj.ExistanceFlair(this.data.EditedFlairText)
    flairObj.NotExistFlair(this.data.FlairText)

  })

  it('Cancel editting the Flair Text', function() {
    //const flairObj = new FlairObjects()  

    flairObj.EditFlair()
    flairObj.FlairText(this.data.EditedFlairText)
    flairObj.CancelFlair()

    //check it is not edited
    flairObj.ExistanceFlair(this.data.FlairText)
    flairObj.NotExistFlair(this.data.EditedFlairText)

  })

  // it('Disappearance of the pop message after close it by X', function() {
  //   //const flairObj = new FlairObjects()  
  //   flairObj.ClosePopMsgByX()
  //   flairObj.DisappearancePopMsg()
  // })

  it('Appearance of the pop message after add a flair', function() {
    //const flairObj = new FlairObjects()   

    flairObj.PopMsg(this.data.FlairSaveMsg)
  })

  it('Appearance of the pop message after edit a flair', function() {
    //const flairObj = new FlairObjects()  

    flairObj.EditFlair()
    flairObj.FlairText(this.data.EditedFlairText)
    flairObj.SaveFlair()

    flairObj.PopMsg(this.data.FlairEditedMsg)
  })

  // it('Reorder the flairs', function() {
  //   //const flairObj = new FlairObjects()     
  //   flairObj.
  //   flairObj.
  //   flairObj.
  // })

  afterEach(function() {
    //clean
    flairObj.DeleteFlair()
    cy.wait(1000)
    flairObj.SubmitDeleteFlair()
    cy.wait(1000)
    })

})