import SpamObjects from '../PageObjects/ModerationSpamObjects/SpamObjects'
import loginObjects from '../PageObjects/LoginObjects/loginObjects'
import NavBarObjects from '../PageObjects/HomeObjects/NavBarObjects'
import createPostObjects from '../PageObjects/CreatePostObjects/createPostObjects'
//import commentObjects from '../pageObjects/commentObjects/commentObjects'

const spamObj = new SpamObjects() 
const login = new loginObjects()
// let newPostTitle = 'seure posty';
// let oldestPostTitle = 'hima posty';
// let newComment = 'second comment';
// let oldComment  = 'first comment';
//test visiting the spam page
beforeEach(function() {
    // Since we want to visit the same URL at the start of all our tests,
    // we include it in our beforeEach function so that it runs before each test        
        login.navigate() 
        login.enterUsername(this.loginData.UserName) 
        login.enterPassword(this.loginData.Password)    
        login.submit() 
        cy.wait(1000)     
        spamObj.Navigate(this.data.CommName) 
    
})

before( { scrollBehavior: false }, function() {

    cy.fixture('SpamData').then(function(data){
        this.data=data

        // : important
        //create and spam two posts first
        const navBarObj = new NavBarObjects() 
        const createPost = new createPostObjects()
        login.navigate() 
        login.enterUsername('Samaa_Hazem') 
        login.enterPassword('cmp123456')    
        login.submit() 

        navBarObj.CreatPostPlus()  
        createPost.showMyCommunities()
        createPost.chooseACommunity(this.data.CommName)
        createPost.title(this.data.oldestPostTitle)
        createPost.postText(this.data.oldestPostText)
        createPost.post()
        
        //wait some time to make one the new and one the first
        cy.wait(15000)  
        navBarObj.CreatPostPlus()
        createPost.showMyCommunities()
        createPost.chooseACommunity(this.data.CommName)
        createPost.title(this.data.newPostTitle)
        createPost.postText(this.data.newPostText)
        createPost.post()

        cy.visit(Cypress.env('CYPRESSBASEURL') +'/r/'+ this.data.CommName)    
        spamObj.MarkAsSpam(0)
        spamObj.MarkAsSpam(1)
    })
    
    cy.fixture('CommonLoginData').then(function(loginData){
        this.loginData=loginData
    })

})

describe('Test Moderation Spam',{ scrollBehavior: false }, function() {
    // it('Ability to go to spam page fot "footbally" community from home page', function() {
    //     const navBarObj = new NavBarObjects() 
    //     cy.visit(Cypress.env('CYPRESSBASEURL') +'/main')    

    //     navBarObj.OpenDropLeft()
    //     navBarObj.GoCommunity(this.data.CommName)
  
    //     spamObj.ViewAllModeration()
    //     spamObj.GoSpamPage()
    // }) 

    it('Check "Newest" option in post page', function() {
        spamObj.ViewTypeDropDown()
        spamObj.ViewPost()

        spamObj.TimeOrderDropDown()
        spamObj.Newest()
        //check the order change
        spamObj.CheckFirstPost(this.data.newPostTitle)
    })

    it('Check "Oldest" option in post page', function() {
        spamObj.ViewTypeDropDown()
        spamObj.ViewPost()

        spamObj.TimeOrderDropDown()
        spamObj.Oldest()
         //check the order change
         spamObj.CheckFirstPost(this.data.oldestPostTitle)
    })

        
    it('Disappearance of approved post', function() {
        spamObj.ViewTypeDropDown()
        spamObj.ViewPost()
        //choose the time order to know which title will be checked
        spamObj.TimeOrderDropDown()
        spamObj.Oldest()

        spamObj.Approve()
        
        cy.wait(2000)
        
        //spamObj.DisappearInstance(this.data.oldestPostTitle)
        spamObj.DisappearPost(this.data.oldestPostTitle)
    })

    it('Disappearance of posts in comment page', function() {
        spamObj.ViewTypeDropDown()
        spamObj.ViewComments()
        //as it is the comments page , check the posts is not here
        spamObj.DisappearInstance(this.data.oldestPostTitle)
    })

    
    // it('', function() {
    //     spamObj.ViewTypeDropDown()
    //     spamObj.ViewPost()
    //    //as it is the posts page , check the comments is not here
    //   // spamObj.DisappearInstance(this.data.oldComment)
    // })

    // it('Check "Newest" option in comments page', function() {
    //     spamObj.ViewTypeDropDown()
    //     spamObj.ViewComments()

    //     spamObj.TimeOrderDropDown()
    //     spamObj.Newest()
    //     //check the order change
    //     spamObj.CheckFirstPost(this.data.newComment)
    // })

    // it('Check "Oldest" option in comments page', function() {
    //     spamObj.ViewTypeDropDown()
    //     spamObj.ViewComments()

    //     spamObj.TimeOrderDropDown()
    //     spamObj.Oldest()
    //      //check the order change
    //      spamObj.CheckFirstPost(this.data.oldComment)
    // })

    // it('', function() {
    //     spamObj.ViewTypeDropDown()
    //     spamObj.ViewComments()

    //    spamObj.TimeOrderDropDown()
    //    spamObj.Oldest()

    //    spamObj.Approve()
    //    spamObj.DisappearInstance(this.data.oldestPostTitle)
    // })

})