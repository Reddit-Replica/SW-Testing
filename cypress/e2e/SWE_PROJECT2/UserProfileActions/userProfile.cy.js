
import userProfileObject from '../PageObjects/UserProfileObjects/userProfileObject'
import loginObjects from '../LoginActions/login.cy'

// const userProfile = new userProfileObject(this.loginData.UserName);
const login = new loginObjects()
  //test visiting the user Profile page
  beforeEach(function() {
    // Since we want to visit the same URL at the start of all our tests,
    // we include it in our beforeEach function so that it runs before each test 
    const userProfile = new userProfileObject(this.loginData.UserName); 
    login.navigate() 
    login.enterUsername(this.loginData.UserName) 
    login.enterPassword(this.loginData.Password)  
    login.submit()  
    cy.wait(1000)      
    userProfile.navigate() 
  })
  
  
before(function() {
  cy.fixture('CommonLoginData').then(function(loginData){
   this.loginData=loginData
  })
})
// describe('Test user profile page', function() {
describe('Test user profile page',  { scrollBehavior: false }, () => {
  // ################################################# linking between user profile and other pages ################################################# 

  it('Check opening (OVERVIEW) page', function() {
    const userProfile = new userProfileObject(this.loginData.UserName);
    userProfile.overview()
    userProfile.overviewPage()  
  })

  // it.only('Check opening (POSTS) page', { scrollBehavior: false }, () => {
  it('Check opening (POSTS) page', function() {
    const userProfile = new userProfileObject(this.loginData.UserName);
    userProfile.posts()
    cy.wait(4000)      
    userProfile.postsPage()  
  })

  it('Check opening (COMMENTS) page', function() {
    const userProfile = new userProfileObject(this.loginData.UserName);
    userProfile.comments()
    userProfile.commentsPage()  
  })

  it('Check opening (HISTORY) page', function() {
    const userProfile = new userProfileObject(this.loginData.UserName);
    userProfile.history()
    userProfile.historyPage()  
  })

  it('Check opening (HIDDEN) page', function() {
    const userProfile = new userProfileObject(this.loginData.UserName);
    userProfile.hidden()
    userProfile.hiddenPage()  
  })

  it('Check opening (SAVED) page', function() {
    const userProfile = new userProfileObject(this.loginData.UserName);
    userProfile.saved()
    userProfile.savedPage() 
  })

  it('Check opening (UPvoted) page', function() {
    const userProfile = new userProfileObject(this.loginData.UserName);
    userProfile.upvoted()
    userProfile.upvotedPage()  
  })

  it('Check opening (DOWNVOTED) page', function() {
    const userProfile = new userProfileObject(this.loginData.UserName);
    userProfile.downvoted()
    userProfile.downvotedPage()  
  })

  it('Check opening (AWARDS RECEIVED) page', function() {
    const userProfile = new userProfileObject(this.loginData.UserName);
    userProfile.awardsReceived()
    userProfile.awardsReceivedPage()  
  })

  it('Check opening (AWARDS GIVEN) page', function() {
    const userProfile = new userProfileObject(this.loginData.UserName);
    userProfile.awardsGiven()
    userProfile.awardsGivenPage()  
  })

  it('Check opening (create post) page', function() {
    const userProfile = new userProfileObject(this.loginData.UserName);
    userProfile.newPost()
    userProfile.createPostPage()  
  })

  it('Check opening (settings) page', function() {
    const userProfile = new userProfileObject(this.loginData.UserName);
    userProfile.goSettings()
    userProfile.settingsPage()  
  })

  it('Check opening (Home) page', function() {
    const userProfile = new userProfileObject(this.loginData.UserName);
    userProfile.goHome()
    userProfile.HomePage()  
  })
 
  // ################################################# profile options ################################################# 

  it('View more options in right side bar', function() {
    const userProfile = new userProfileObject(this.loginData.UserName);
    userProfile.moreOptions()
    //?later: how to check that the options appeared?
  })

  it('View more options in right side bar', function() {
    const userProfile = new userProfileObject(this.loginData.UserName);
    //NOTE: to test (fewer options) you have to click on more options first
    userProfile.moreOptions()
    //?later: how to check that the options appeared?
    userProfile.fewerOptions()
  })

  it('Ability to find profile moderation option', function() {
    const userProfile = new userProfileObject(this.loginData.UserName);
    userProfile.moreOptions()
    userProfile.profileModeration()
  })

  it('Ability to find  add to custom feed option', function() {
    const userProfile = new userProfileObject(this.loginData.UserName);
    userProfile.moreOptions()
    userProfile.addCustomFeed()
  })

  it('Ability to find  invite someone to chat option', function() {
    const userProfile = new userProfileObject(this.loginData.UserName);
    userProfile.moreOptions()
    userProfile.inviteSomeoneToChat()
  })

  it('Check profile moderation option', function() {
    const userProfile = new userProfileObject(this.loginData.UserName);
    userProfile.moreOptions()
    userProfile.profileModeration()
    userProfile.profileModerationPage()
  })

  it('Check add to custom feed option', function() {
    const userProfile = new userProfileObject(this.loginData.UserName);
    userProfile.moreOptions()
    userProfile.addCustomFeed()
    //?later: check the responce after click on addToCustomFeed
  })

  it('Check invite someone to chat option', function() {
    const userProfile = new userProfileObject(this.loginData.UserName);
    userProfile.moreOptions()
    userProfile.inviteSomeoneToChat()
    userProfile.inviteSomeoneMsgSyntax()
  })

  it('Check (x) in the message of invite someone to chat', function() {
    const userProfile = new userProfileObject(this.loginData.UserName);
    userProfile.moreOptions()
    userProfile.inviteSomeoneToChat()
    userProfile.inviteSomeoneMsgSyntax()
    userProfile.msgCancelbyX()
  })

  it('Check syntax of (profile moderation) option', function() {
    const userProfile = new userProfileObject(this.loginData.UserName);
    userProfile.moreOptions()
    userProfile.profileModerationSyntax()
  })

  it('Check syntax of (add to custom feed) option', function() {
    const userProfile = new userProfileObject(this.loginData.UserName);
    userProfile.moreOptions()
    userProfile.addCustomFeedSyntax()
  })

  it('Check syntax of (invite someone to chat) option', function() {
    const userProfile = new userProfileObject(this.loginData.UserName);
    userProfile.moreOptions()
    userProfile.inviteSomeoneToChatSyntax()
  })
  
// #################################################   Right side bar  ################################################# 
    
  it('Join a community by pewssing (join) button', function() {
    const userProfile = new userProfileObject(this.loginData.UserName);
    userProfile.joinAndUnjoin()
  //?later:how to check that we are joined the community?  
  })

  //later
  // it('Check loading the community page when clicking on its url beside its (join) button', function() {
  //   const userProfile = new userProfileObject(this.loginData.UserName);
  //   userProfile.goToCommunity()
  //   userProfile.communityPage()
  // })

  it('Check loading the main user profile page when clicking on his url under his profile name', function() {
    const userProfile = new userProfileObject(this.loginData.UserName);
    userProfile.usernameUrl()
    userProfile.overviewPage()    
  })

}) 