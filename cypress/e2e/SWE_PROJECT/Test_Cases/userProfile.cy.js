import userProfileObject from './pageObjects/userProfileObject'
describe('Test user profile page', () =>  {

  //test visiting the user Profile page
  beforeEach(() =>  {
    // Since we want to visit the same URL at the start of all our tests,
    // we include it in our beforeEach function so that it runs before each test
    const userProfile = new userProfileObject()     
    userProfile.navigate() 
  })

  // ################################################# linking between user profile and other pages ################################################# 

  it('Check opening (OVERVIEW) page', () =>  {
    const userProfile = new userProfileObject()
    userProfile.overview()
    userProfile.overviewPage()  
  })

  it('Check opening (POSTS) page', () =>  {
    const userProfile = new userProfileObject()
    userProfile.posts()
    userProfile.postsPage()  
  })

  it('Check opening (COMMENTS) page', () =>  {
    const userProfile = new userProfileObject()
    userProfile.comments()
    userProfile.commentsPage()  
  })

  it('Check opening (HISTORY) page', () =>  {
    const userProfile = new userProfileObject()
    userProfile.history()
    userProfile.historyPage()  
  })

  it('Check opening (HIDDEN) page', () =>  {
    const userProfile = new userProfileObject()
    userProfile.hidden()
    userProfile.hiddenPage()  
  })

  it('Check opening (SAVED) page', () =>  {
    const userProfile = new userProfileObject()
    userProfile.saved()
    userProfile.savedPage() 
  })

  it('Check opening (UPvoted) page', () =>  {
    const userProfile = new userProfileObject()
    userProfile.upvoted()
    userProfile.upvotedPage()  
  })

  it('Check opening (DOWNVOTED) page', () =>  {
    const userProfile = new userProfileObject()
    userProfile.downvoted()
    userProfile.downvotedPage()  
  })

  it('Check opening (AWARDS RECEIVED) page', () =>  {
    const userProfile = new userProfileObject()
    userProfile.awardsReceived()
    userProfile.awardsReceivedPage()  
  })

  it('Check opening (AWARDS GIVEN) page', () =>  {
    const userProfile = new userProfileObject()
    userProfile.awardsGiven()
    userProfile.awardsGivenPage()  
  })

  it('Check opening (create post) page', () =>  {
    const userProfile = new userProfileObject()
    userProfile.newPost()
    userProfile.createPostPage()  
  })

  it('Check opening (settings) page', () =>  {
    const userProfile = new userProfileObject()
    userProfile.goSettings()
    userProfile.settingsPage()  
  })

  it('Check opening (Home) page', () =>  {
    const userProfile = new userProfileObject()
    userProfile.goHome()
    userProfile.HomePage()  
  })
 
  // ################################################# profile options ################################################# 

  it('View more options in right side bar', () =>  {
    const userProfile = new userProfileObject()
    userProfile.moreOptions()
    //?later: how to check that the options appeared?
  })

  it('View more options in right side bar', () =>  {
    const userProfile = new userProfileObject()
    //NOTE: to test (fewer options) you have to click on more options first
    userProfile.moreOptions()
    //?later: how to check that the options appeared?
    userProfile.fewerOptions()
  })

  it('Ability to find profile moderation option', () =>  {
    const userProfile = new userProfileObject()
    userProfile.moreOptions()
    userProfile.profileModeration()
  })

  it('Ability to find  add to custom feed option', () =>  {
    const userProfile = new userProfileObject()
    userProfile.moreOptions()
    userProfile.addCustomFeed()
  })

  it('Ability to find  invite someone to chat option', () =>  {
    const userProfile = new userProfileObject()
    userProfile.moreOptions()
    userProfile.inviteSomeoneToChat()
  })

  it('Check profile moderation option', () =>  {
    const userProfile = new userProfileObject()
    userProfile.moreOptions()
    userProfile.profileModeration()
    userProfile.profileModerationPage()
  })

  it('Check add to custom feed option', () =>  {
    const userProfile = new userProfileObject()
    userProfile.moreOptions()
    userProfile.addCustomFeed()
    //?later: check the responce after click on addToCustomFeed
  })

  it('Check invite someone to chat option', () =>  {
    const userProfile = new userProfileObject()
    userProfile.moreOptions()
    userProfile.inviteSomeoneToChat()
    userProfile.inviteSomeoneMsgSyntax()
  })

  it('Check (x) in the message of invite someone to chat', () =>  {
    const userProfile = new userProfileObject()
    userProfile.moreOptions()
    userProfile.inviteSomeoneToChat()
    userProfile.inviteSomeoneMsgSyntax()
    userProfile.msgCancelbyX()
  })

  it('Check syntax of (profile moderation) option', () =>  {
    const userProfile = new userProfileObject()
    userProfile.moreOptions()
    userProfile.profileModerationSyntax()
  })

  it('Check syntax of (add to custom feed) option', () =>  {
    const userProfile = new userProfileObject()
    userProfile.moreOptions()
    userProfile.addCustomFeedSyntax()
  })

  it('Check syntax of (invite someone to chat) option', () =>  {
    const userProfile = new userProfileObject()
    userProfile.moreOptions()
    userProfile.inviteSomeoneToChatSyntax()
  })
  
// #################################################   Right side bar  ################################################# 
    
  it('Join a community by pewssing (join) button', () =>  {
    const userProfile = new userProfileObject()
    userProfile.joinAndUnjoin()
  //?later:how to check that we are joined the community?  
  })

  it('Check loading the community page when clicking on its url beside its (join) button', () =>  {
    const userProfile = new userProfileObject()
    userProfile.goToCommunity()
    userProfile.communityPage()
  })

  it('Check loading the main user profile page when clicking on his url under his profile name', () =>  {
    const userProfile = new userProfileObject()
    userProfile.usernameUrl()
    userProfile.overviewPage()    
  })

}) 