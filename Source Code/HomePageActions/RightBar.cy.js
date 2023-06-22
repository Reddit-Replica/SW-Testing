////////////////////later: Community category, Community type,Adult content


import RightBarObjects from '../PageObjects/HomeObjects/RightBarObjects'
import loginObjects from '../PageObjects/LoginObjects/loginObjects'
import CreateCommObjects from '../PageObjects/CreateCommunityObjects/CreateCommObjects'

//test visiting the sign_up page

const login = new loginObjects() 
const RightBarObj = new RightBarObjects() 
const CreateCommObj = new CreateCommObjects() 

beforeEach(function() {
    // Since we want to visit the same URL at the start of all our tests,
    // we include it in our beforeEach function so that it runs before each test
      login.navigate() 
      login.enterUsername(this.loginData.UserName) 
      login.enterPassword(this.loginData.Password)    
      login.submit() 
      // cy.wait(1000)        
  })
  
before(function() {
    cy.fixture('CommonLoginData').then(function(loginData){
        this.loginData=loginData
    })
})

describe('Test Home Right Bar',{ scrollBehavior: false }, function() {   
    it('Open Create Community form by "Create Community"', function() {      
        RightBarObj.CreateCommunityButton()
        CreateCommObj.CommFormVisible()
    })

    it('Open Create Post page by "Create Post"', function() {      
        RightBarObj.CreatPostButton()
        RightBarObj.CreatePostPage()
    })

    it('Open Top Community page by "See All"', function() {      
        RightBarObj.SeeAllButton()

        //?;- m.s of what is the TopCommunityPage asln?
        RightBarObj.TopCommunityPage()
       // RightBarObj.
    })




 })