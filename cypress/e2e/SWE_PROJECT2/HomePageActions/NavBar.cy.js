////////////////////later: Community category, Community type,Adult content


import NavBarObjects from '../PageObjects/HomeObjects/NavBarObjects'
import loginObjects from '../PageObjects/LoginObjects/loginObjects'
import CreateCommObjects from '../PageObjects/CreateCommunityObjects/CreateCommObjects'

//test visiting the sign_up page

const login = new loginObjects() 
const navBarObj = new NavBarObjects() 
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
  
before( { scrollBehavior: false }, function() {
    cy.fixture('HomeData').then(function(data){
        this.data=data
    })

    cy.fixture('CommonLoginData').then(function(loginData){
        this.loginData=loginData
    })
})

describe('Test Home Nav Bar', function() {   
    // it('', function() {      
    //     cy.get('.header-icon-home').click()

    //     //cy.get('#home-sub-menu-1 > :nth-child(4)').click()
    //     //cy.contains(this.data.CommName).click()
    //     cy.get('#home-sub-menu-1 > :nth-child(2)').click()
    //     CreateCommObj.CommFormVisible()
    // })

    //---------------------------------- Drop Left -----------------------------//
    it('Open Create Community form by "Create Community" from drop down list on the left', function() {      
        navBarObj.OpenDropLeft()
        navBarObj.CreateCommunity()
        CreateCommObj.CommFormVisible()
    })

    it('Open Create Post page by "Create Post"', function() {      
        navBarObj.OpenDropLeft()
        navBarObj.CreatPostDropDownLeft()
        navBarObj.CreatePostPage()
    })

    it('Open a user Community from drop down list on the left', function() {      
        navBarObj.OpenDropLeft()
        navBarObj.GoCommunity(this.data.CommName)
        navBarObj.ACommunity(this.data.CommName)
    })

    it('Open Settings page by "User Settings"', function() {      
        navBarObj.OpenDropLeft()
        navBarObj.SettingsDropDownLeft()
        navBarObj.SettingsPage()
    })

    it('Open Home page by "Home"', function() {      
        navBarObj.OpenDropLeft()
        navBarObj.HomeDropDownLeft()
        navBarObj.HomePage()
    })

    //---------------------------------- Drop Right -----------------------------//

    it('Open Settings page by "User Settings"', function() {      
        navBarObj.OpenDropRight()
        navBarObj.SettingsDropDownRight()
        navBarObj.SettingsPage()
    })

    it('Open user profile page by "Profile"', function() {      
        navBarObj.OpenDropRight()
        navBarObj.ProfileDropDownRight()
        navBarObj.ProfilePage(this.loginData.UserName)
    })

    //later:-
    //View options
    //Logout

    //---------------------------------- Logos -----------------------------//
    it('Open Create Post page by "+"', function() {      
        navBarObj.CreatPostPlus()
        navBarObj.CreatePostPage()
    })

    it('Open Settings page by settings logo', function() {      
        navBarObj.SettingsLogo()
        navBarObj.SettingsPage()
    })

    it('Open Home page by home', function() {      
        navBarObj.HomeLogo()
        navBarObj.HomePage()
    })

    it('Open Home page by Reddit logo', function() {      
        navBarObj.RedditLogo()
        navBarObj.HomePage()
    })

    it('Open user profile page by "Profile"', function() {      
        navBarObj.ProfileLogo()
        navBarObj.ProfilePage(this.loginData.UserName)
    })

    it('Open message page by message logo', function() {      
        navBarObj.MessagesLogo()
        navBarObj.ChatPage()
    })

    //?later: what is the thing that i have to check?
    // it('Open Notifications by notification logo', function() {      
    //     navBarObj.NotificationLogo()
    // })

 })