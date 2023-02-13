import UnmoderatedObjects from '../PageObjects/UnmoderatedObjects/UnmoderatedObjects'
import loginObjects from '../PageObjects/LoginObjects/loginObjects'
import NavBarObjects from '../PageObjects/HomeObjects/NavBarObjects'
import createPostObjects from '../PageObjects/CreatePostObjects/createPostObjects'
//import commentObjects from '../pageObjects/commentObjects/commentObjects'

const UnmoderatedObj = new UnmoderatedObjects() 
const login = new loginObjects()
const navBarObj = new NavBarObjects() 
const createPost = new createPostObjects()

// let this.data.commName = 'footbally' ;
// let this.data.onePostTitle = 'unmody posty';
//test visiting the unmoderated page
beforeEach(function() {
    // Since we want to visit the same URL at the start of all our tests,
    // we include it in our beforeEach function so that it runs before each test        
        login.navigate() 
        login.enterUsername(this.loginData.UserName) 
        login.enterPassword(this.loginData.Password)    
        login.submit() 
        cy.wait(1000)     
        //////////////////// 
    
        navBarObj.CreatPostPlus()  
        createPost.showMyCommunities()
        createPost.chooseACommunity(this.data.commName)
        createPost.title(this.data.onePostTitle)
        //createPost.postText(this.data.PostText)
        createPost.post()
        UnmoderatedObj.Navigate(this.data.commName) 
        cy.wait(1000)
    
})

before( { scrollBehavior: false }, function() {

    cy.fixture('UnmoderatedData').then(function(data){
        this.data=data
    })

    cy.fixture('CommonLoginData').then(function(loginData){
        this.loginData=loginData
       })
})

describe('Test Moderation Unmoderated',{ scrollBehavior: false }, function() {
    // it('Ability to go to unmoderated page fot "footbally" community from home page', function() {
    //     const navBarObj = new NavBarObjects() 
    //     cy.visit(Cypress.env('CYPRESSBASEURL') +'/main')    

    //     navBarObj.OpenDropLeft()
    //     navBarObj.GoCommunity(this.data.commName)
  
    //     UnmoderatedObj.ViewAllModeration()
    //     UnmoderatedObj.GoSpamPage()
    // }) 

    it('check that the newly added post in the community is added in unmoderated page', function() {    
         UnmoderatedObj.CheckFirstPost(this.data.onePostTitle)
    })

    it('SameOreder for Newest and Oldest for one post only', function() {    
        UnmoderatedObj.TimeOrderDropDown()
        UnmoderatedObj.Newest()
        UnmoderatedObj.CheckFirstPost(this.data.onePostTitle)

        UnmoderatedObj.TimeOrderDropDown()
        UnmoderatedObj.Oldest()
        UnmoderatedObj.CheckFirstPost(this.data.onePostTitle)
    })

    it('Check "Newest" option in post page', function() {
        cy.wait(15000)     
        //////////////////// 
        navBarObj.CreatPostPlus()  
        createPost.showMyCommunities()
        createPost.chooseACommunity(this.data.commName)
        createPost.title(this.data.NewstPostTitle)
        createPost.post()
        UnmoderatedObj.Navigate(this.data.commName) 
        /////
        // UnmoderatedObj.ViewTypeDropDown()
        // UnmoderatedObj.ViewPost()

        UnmoderatedObj.TimeOrderDropDown()
        UnmoderatedObj.Newest()
        //check the order change
        UnmoderatedObj.CheckFirstPost(this.data.NewstPostTitle)

        //NOTE:one more of clean as there is two posts added not one
        //clean
        // UnmoderatedObj.Approve()
        // cy.wait(2000) 
    })


    it('Check "Oldest" option in post page', function() {
        cy.wait(15000)     
        //////////////////// 
        navBarObj.CreatPostPlus()  
        createPost.showMyCommunities()
        createPost.chooseACommunity(this.data.commName)
        createPost.title(this.data.onePostTitle)
        createPost.postText('fresh')
        createPost.post()
        UnmoderatedObj.Navigate(this.data.commName) 
        /////
        // UnmoderatedObj.ViewTypeDropDown()
        // UnmoderatedObj.ViewPost()

        UnmoderatedObj.TimeOrderDropDown()
        UnmoderatedObj.Oldest()
         //check the order change
         UnmoderatedObj.CheckFirstPost(this.data.onePostTitle)

        //NOTE:one more of clean as there is two posts added not one
        //clean
        //UnmoderatedObj.Approve()
        // UnmoderatedObj.Remove()
    })

//     it('Disappearance of posts in comment page', function() {
//         UnmoderatedObj.ViewTypeDropDown()
//         UnmoderatedObj.ViewComments()
//         //as it is the comments page , check the posts is not here
//         UnmoderatedObj.DisappearInstance(this.data.onePostTitle)
//     })

    
//     // it('', function() {
//     //     UnmoderatedObj.ViewTypeDropDown()
//     //     UnmoderatedObj.ViewPost()
//     //    //as it is the posts page , check the comments is not here
//     //   // UnmoderatedObj.DisappearInstance(oldComment)
//     // })

//     // it('Check "Newest" option in comments page', function() {
//     //     UnmoderatedObj.ViewTypeDropDown()
//     //     UnmoderatedObj.ViewComments()

//     //     UnmoderatedObj.TimeOrderDropDown()
//     //     UnmoderatedObj.Newest()
//     //     //check the order change
//     //     UnmoderatedObj.CheckFirstPost(newComment)
//     // })

//     // it('Check "Oldest" option in comments page', function() {
//     //     UnmoderatedObj.ViewTypeDropDown()
//     //     UnmoderatedObj.ViewComments()

//     //     UnmoderatedObj.TimeOrderDropDown()
//     //     UnmoderatedObj.Oldest()
//     //      //check the order change
//     //      UnmoderatedObj.CheckFirstPost(oldComment)
//     // })

//     // it('', function() {
//     //     UnmoderatedObj.ViewTypeDropDown()
//     //     UnmoderatedObj.ViewComments()

//     //    UnmoderatedObj.TimeOrderDropDown()
//     //    UnmoderatedObj.Oldest()

//     //    UnmoderatedObj.Approve()
//     //    UnmoderatedObj.DisappearInstance(this.data.onePostTitle)
//     // })

    afterEach( { scrollBehavior: false }, function() {
        //clean
        // UnmoderatedObj.Approve()
        UnmoderatedObj.Remove()
        cy.wait(1000)  
    })
})



describe('Test Moderation Unmoderated',{ scrollBehavior: false }, function() {
    // it('Ability to go to unmoderated page fot "footbally" community from home page', function() {
    //     const navBarObj = new NavBarObjects() 
    //     cy.visit(Cypress.env('CYPRESSBASEURL') +'/main')    

    //     navBarObj.OpenDropLeft()
    //     navBarObj.GoCommunity(this.data.commName)
  
    //     UnmoderatedObj.ViewAllModeration()
    //     UnmoderatedObj.GoSpamPage()
    // }) 
        
    it('Disappearance of approved post from unmoderated page', function() {
        UnmoderatedObj.Approve()
        
        cy.wait(2000)
        
        UnmoderatedObj.DisappearInstance(this.data.onePostTitle)
        //UnmoderatedObj.DisappearPost(this.data.onePostTitle)
    })

    it('Disappearance of removed post from unmoderated page', function() {
        UnmoderatedObj.Remove()
    
        cy.wait(5000)
        //UnmoderatedObj.Navigate()
        UnmoderatedObj.DisappearInstance(this.data.onePostTitle)
        //UnmoderatedObj.DisappearPost(this.data.onePostTitle)
    })

    //filtered:this is not done 
    // it('Disappearance of mark as spam post from unmoderated page', function() {
    //     UnmoderatedObj.MarkAsSpam()   
    //     cy.wait(2000)    
    //     UnmoderatedObj.DisappearInstance(this.data.onePostTitle)
    //     //UnmoderatedObj.DisappearPost(this.data.onePostTitle)
    // })

    it('Disappearance of post after approving it from community page itself in the unmoderated page', function() {
        cy.visit(Cypress.env('CYPRESSBASEURL') +'/r/'+ this.data.commName)    
        UnmoderatedObj.ExternalApprove()

        UnmoderatedObj.Navigate(this.data.commName)
        cy.wait(2000)     
        UnmoderatedObj.DisappearInstance(this.data.onePostTitle)
    })

    it('Disappearance of post after removing it from community page itself in the unmoderated page', function() {
        cy.visit(Cypress.env('CYPRESSBASEURL') +'/r/'+ this.data.commName)    
        UnmoderatedObj.ExternalRemove()

        UnmoderatedObj.Navigate(this.data.commName)
        cy.wait(2000)     
        UnmoderatedObj.DisappearInstance(this.data.onePostTitle)
    })

    it('Disappearance of post after marking it as spam from community page itself in the unmoderated page', function() {
        cy.visit(Cypress.env('CYPRESSBASEURL') +'/r/'+ this.data.commName)    
        UnmoderatedObj.ExternalSpam()

        UnmoderatedObj.Navigate(this.data.commName)
        cy.wait(2000)     
        UnmoderatedObj.DisappearInstance(this.data.onePostTitle)
    })

//     it('Disappearance of posts in comment page', function() {
//         UnmoderatedObj.ViewTypeDropDown()
//         UnmoderatedObj.ViewComments()
//         //as it is the comments page , check the posts is not here
//         UnmoderatedObj.DisappearInstance(this.data.onePostTitle)
//     })

    
//     // it('', function() {
//     //     UnmoderatedObj.ViewTypeDropDown()
//     //     UnmoderatedObj.ViewPost()
//     //    //as it is the posts page , check the comments is not here
//     //   // UnmoderatedObj.DisappearInstance(oldComment)
//     // })

//     // it('Check "Newest" option in comments page', function() {
//     //     UnmoderatedObj.ViewTypeDropDown()
//     //     UnmoderatedObj.ViewComments()

//     //     UnmoderatedObj.TimeOrderDropDown()
//     //     UnmoderatedObj.Newest()
//     //     //check the order change
//     //     UnmoderatedObj.CheckFirstPost(newComment)
//     // })

//     // it('Check "Oldest" option in comments page', function() {
//     //     UnmoderatedObj.ViewTypeDropDown()
//     //     UnmoderatedObj.ViewComments()

//     //     UnmoderatedObj.TimeOrderDropDown()
//     //     UnmoderatedObj.Oldest()
//     //      //check the order change
//     //      UnmoderatedObj.CheckFirstPost(oldComment)
//     // })

//     // it('', function() {
//     //     UnmoderatedObj.ViewTypeDropDown()
//     //     UnmoderatedObj.ViewComments()

//     //    UnmoderatedObj.TimeOrderDropDown()
//     //    UnmoderatedObj.Oldest()

//     //    UnmoderatedObj.Approve()
//     //    UnmoderatedObj.DisappearInstance(this.data.onePostTitle)
//     // })

})
