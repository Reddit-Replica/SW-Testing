import postActionObjects from '../PageObjects/CreatePostObjects/postActionObjects'
import userProfileObject from '../PageObjects/UserProfileObjects/userProfileObject'
import loginObjects from '../PageObjects/LoginObjects/loginObjects'
//import "cypress"
import NavBarObjects from '../PageObjects/HomeObjects/NavBarObjects'
import createPostObjects from '../PageObjects/CreatePostObjects/createPostObjects'


const postAct = new postActionObjects()
const userProfile = new userProfileObject()
const login = new loginObjects()  

  //test visiting the home page
beforeEach(function() {
  // Since we want to visit the same URL at the start of all our tests,
  // we include it in our beforeEach function so that it runs before each test  
    login.navigate() 
    login.enterUsername(this.loginData.UserName) 
    login.enterPassword(this.loginData.Password)      
    login.submit()  
    cy.wait(2000)  
  // postAct.navigate()
})

before(function() {
   // : important
   cy.fixture('PostActionData').then(function(data){
    this.data=data
    
   cy.fixture('CommonLoginData').then(function(loginData){
    this.loginData=loginData
    login.navigate() 
    login.enterUsername(this.loginData.UserName) 
    login.enterPassword(this.loginData.Password)      
    login.submit() 
   })
     // : important
    //create and spam two posts first
    const navBarObj = new NavBarObjects() 
    const createPost = new createPostObjects()
    for (var i = 0; i < 3; i++) { 
    navBarObj.CreatPostPlus()  
    createPost.showMyCommunities()
    createPost.chooseACommunity(this.data.CommName)
    cy.wait(2000)
    createPost.title(this.data.newPostTitle)
    createPost.postText(this.data.newPostText)
    createPost.post()
    cy.wait(2000) 
    postAct.navigate()
    postAct.upvotePost() 
    cy.wait(2000)
    
   }
   })

})

describe('Test some actions on post',  { scrollBehavior: false }, function() {
  // it('dumy', function() {
  //   //const postAct = new postActionObjects()
  //   cy.get('.post-title').first().should('have.text','waer')  
  //   postAct.checkVotesNum('1') 
      
  // }) 
  //----------------------------------------------- save posts-----------------------------------------------  

  it('Check saving arbitrary post in (SAVED) page in user profile', function() {
    //const postAct = new postActionObjects()
    //const userProfile = new userProfileObject() 

    postAct.firstPostActionsList()
    postAct.savePost() 

    postAct.saveMsgSyntax()


    postAct.getFirstPostTitle().then((title)=>{
      postAct.showSettingsSubmenu()
      postAct.goUserProfile()
      cy.wait(3000)  
      userProfile.saved()
      cy.wait(1000)
      let newString = title.replace(/\s+/g,' ').trim();
      userProfile.findPost(newString)
    })

    //clean:
    // postAct.navigate()
    // postAct.firstPostActionsList()
    // postAct.unsavePost()   
      
  }) 

  // it('Appearance of saving post message and its syntax', function() {
  //   //const postAct = new postActionObjects()
  //   // cy.wait(30000)
  //   postAct.firstPostActionsList()
  //   postAct.savePost()  
  //   postAct.saveMsgSyntax()

  //    //clean:
  //   //  postAct.navigate()
  //   //  postAct.firstPostActionsList()
  //   //  postAct.unsavePost()   
     
  // })

  //filtered
  // it('Check message after clicking on (Undo) in saving post message', function() {
  //   //const postAct = new postActionObjects()
  //   postAct.firstPostActionsList()
  //   postAct.savePost()   
  //   postAct.unsaveMsgSyntax()
          
  // })

  //filtered
  // it('Check unsaving post in (SAVED) page in user profile after click on (Undo) in save message', function() {
  //   //const postAct = new postActionObjects()
  //   //const userProfile = new userProfileObject() 
  //   postAct.firstPostActionsList()
  //   postAct.savePost() 
  //   postAct.saveUndoByMsg()
  //   postAct.getFirstPostTitle().then((title)=>{
  //     postAct.showSettingsSubmenu()
  //     postAct.goUserProfile()
  //     userProfile.saved()
  //     userProfile.disappearanceOfPost(title)
  //   })
  //   //save a post go to SAVED in your profile and chrck if it is unsaved or not
  //   //?Later:how to check for the post that i unsaved right now not another post? 
  // })
  
  //----------------------------------------------- unsave posts-----------------------------------------------  

  it('Check unsaving arbitrary saved post in (SAVED) page in user profile', function() {
    //const postAct = new postActionObjects()
    //const userProfile = new userProfileObject() 
    postAct.firstPostActionsList(1)
    postAct.savePost() 
    //NOTE: wait some time until the message of saving post diappeare
    cy.wait(8000)

    postAct.firstPostActionsList(1)
    postAct.unsavePost()  
    postAct.unsaveMsgSyntax()
    postAct.getFirstPostTitle(1).then((title)=>{
      postAct.showSettingsSubmenu()
      postAct.goUserProfile()
      cy.wait(3000)
      userProfile.saved()
      userProfile.disappearanceOfPost(title)
    })
  //save a post go to SAVED in your profile and chrck if it is saved or not
  //?Later:how to check for the post that i saved right now not another post?
  })
   
  // it('Appearance of unsaving post message and its syntax', function() {
  //   //const postAct = new postActionObjects()
  //   postAct.firstPostActionsList()
  //   postAct.savePost() 
  //   //NOTE: wait some time until the message of saving post diappeare
  //   cy.wait(8000)

  //   postAct.firstPostActionsList()
  //   postAct.unsavePost()    
  //   postAct.unsaveMsgSyntax()
  // })

  it('Check that post is unsaved after refresh the page', function() {
    //const postAct = new postActionObjects()
    postAct.firstPostActionsList(3)
    postAct.savePost() 
    //NOTE: wait some time until the message of saving post diappeare
    cy.wait(1000)

    postAct.firstPostActionsList(3)
    postAct.unsavePost()    
    postAct.navigate()
    cy.wait(1000)

    postAct.DisappearanceUnsavePost()

  })

  //filtered
  // it('Check message after clicking on (Undo) in unsaving post message', function() {
  //   //const postAct = new postActionObjects()
  //   postAct.firstPostActionsList()
  //   postAct.savePost() 
  //   //NOTE: wait some time until the message of saving post diappeare
  //   cy.wait(8000)

  //   postAct.firstPostActionsList()
  //   postAct.unsavePost()    
  //   postAct.unsaveUndoByMsg()
  //   postAct.saveMsgSyntax()
          
  // })

  //filtered
  // it('Check saving post in (SAVED) page in user profile after click on (Undo) in unsave message', function() {
  //   //const postAct = new postActionObjects()
  //   postAct.firstPostActionsList()
  //   postAct.savePost() 
  //   //NOTE: wait some time until the message of saving post diappeare
  //   cy.wait(8000)
  //   postAct.firstPostActionsList()
  //   postAct.unsavePost()    
  //   postAct.unsaveUndoByMsg()
  //   postAct.getFirstPostTitle().then((title)=>{
  //     postAct.showSettingsSubmenu()
  //     postAct.goUserProfile()
  //     userProfile.saved()
  //     userProfile.findPost(title)
  //   })     
  // })

  // it('Check messages for multiple saving and unsaving for the same post one after the other at the same minute', function() {
  //   //const postAct = new postActionObjects()
  //   postAct.xx
  //   postAct.xx
  //   //check it will keep up with the speed or not 
  //   //check the messages are not overlaped or not
  //   //check the last responce (saved or unsaved)
   
  // })

  //-----------------------------------------------# Hide and UnHide posts----------------------------------------------- 

  it('Check hiding arbitrary post in (HIDDEN) page in user profile', function() {
    //const postAct = new postActionObjects()
    //const userProfile = new userProfileObject() 
    postAct.firstPostActionsList()
    postAct.hidePost() 

    postAct.getFirstPostTitle().then((title)=>{
      postAct.showSettingsSubmenu()
      postAct.goUserProfile()
      cy.wait(3000)
      userProfile.hidden()
      cy.wait(1000)
      let newString = title.replace(/\s+/g,' ').trim();
      userProfile.findPost(newString)
    })
    //check : Disappearance for the arbitrary hidden post
    //hide a post go to HIDDEN in your profile and chrck if it is hide or not
    //?Later:how to check for the post that i hide right now not another post?
  })

  it('Appearance of hiding post message and its syntax', function() {
    //const postAct = new postActionObjects()
    postAct.firstPostActionsList()
    postAct.hidePost() 
    postAct.hideMsgSyntax()
  })

  //filtered
  // it('Check message after clicking on (Undo) in hiding post message ', function() {
  //   //const postAct = new postActionObjects()
  //   postAct.firstPostActionsList()
  //   postAct.hidePost() 
  //   postAct.hideUndoByMsg();
  //   postAct.unhideMsgDisappearance()
  //   //NOTE: unlike undo of save and save , there is no message appeare after pree undo in hidden msg
     
  // })

  it("Disappearance of a hidden home post in home page", function() {
    //const postAct = new postActionObjects()
    postAct.getFirstPostTitle().then((title)=>{
      postAct.firstPostActionsList()
      postAct.hidePost() 
      postAct.disappHiddenfPost(title)
    }) 
  })

  // it("Disappearance of (Unhide) option in the hiddden home post", function() {
  //   //const postAct = new postActionObjects()
  //   postAct.firstPostActionsList()
  //   postAct.hidePost()
  //   postAct.unhidePostDisappearance()
  //    //you can not unhide any post from its option, it is just done from (HIDDEN) page in the user page  
  // })


  //-----------------------------------------------Edit posts----------------------------------------------- 

  it('Disappearance of edit option of a post that dose not belong to the user', function() {
    //const postAct = new postActionObjects()
    postAct.firstPostActionsList()
    postAct.editPostDisappearance()
    //?:check the ability to edit a post which is not mine (even if i share it in my profile <= m.s )  
  })
 // ----------------------------------------------- vote posts ----------------------------------------------- 

  it('Check numbers of votes after upvote', function() {

    //const postAct = new postActionObjects()
    
    //?later: how to check thousand vote numbers?
    postAct.votesNum().then((num_str)=>{
      let num = parseInt(num_str)
      postAct.upvotePost()
      num= num+1
      let string = `${num}`;
      postAct.checkVotesNum(string) 
    })

    //clean
    postAct.upvotePost()
  })

  //later:
  // it('Check numbers of votes after downvote for at least votes = 2', function() {
  //   //const postAct = new postActionObjects()
  //   postAct.votesNum()
  //   postAct.downvotePost()
  //   postAct.checkVotesNum(num)
  // })

  // it('Check numbers of votes after downvote for at least votes = 1', function() {
  //   //const postAct = new postActionObjects()
  //   //check zero votes ability 
  // })

  // it('Check numbers of votes after downvote for at least votes = 0', function() {
  //   //const postAct = new postActionObjects()
  //   //check -ve votes
  // })

  it('Downvoting after upvoting the same post', function() {
    //const postAct = new postActionObjects()
    postAct.votesNum().then((num_str)=>{
      let num = parseInt(num_str)
      postAct.upvotePost()
      postAct.downvotePost()
      num= num-1
      let string = `${num}`;
      postAct.checkVotesNum(string) 
    })
    //clean
    postAct.downvotePost()
  })

  it('Upvoting after downvoting the same post', function() {
    //const postAct = new postActionObjects()
    postAct.votesNum().then((num_str)=>{
      let num = parseInt(num_str)
      postAct.downvotePost()
      postAct.upvotePost()
      num= num+1
      let string = `${num}`;
      postAct.checkVotesNum(string) 
    })

    //clean
    postAct.upvotePost()
  })

  it('Cancel upvoting by clicking on upvote button even numbers of time', function() {
    //const postAct = new postActionObjects()
    postAct.votesNum().then((num_str)=>{
      postAct.upvotePost()
      postAct.upvotePost()
      postAct.checkVotesNum(num_str) 
      //same old number num_str not num_str+2
    })  
  })

  it('Click on upvote button odd numbers of time', function() {
    //const postAct = new postActionObjects()
    postAct.votesNum().then((num_str)=>{
      let num = parseInt(num_str)
      postAct.upvotePost()
      postAct.upvotePost()
      postAct.upvotePost()
      num= num+1
      let string = `${num}`;
      postAct.checkVotesNum(string) 
      //num_str+1 not num_str+3
    })  
  //it should be counted as one upvote
    //clean
    postAct.upvotePost()
  })

  it('Click on downvote button odd numbers of time', function() {
    //const postAct = new postActionObjects()
    postAct.votesNum().then((num_str)=>{
      let num = parseInt(num_str)
      postAct.downvotePost()
      postAct.downvotePost()
      postAct.downvotePost()
      num= num-1
      let string = `${num}`;
      postAct.checkVotesNum(string) 
      //num_str-1 not num_str-3
    })  
      //clean
    postAct.downvotePost()
  })

  it('Cancel downvoting by clicking on downvote button even numbers of time', function() {
    //const postAct = new postActionObjects()
    postAct.votesNum().then((num_str)=>{
      postAct.downvotePost()
      postAct.downvotePost()
      postAct.checkVotesNum(num_str) 
      //same old number num_str not num_str-2
    })    
  })

  it('Check upvoted post in UPVOTE page in user profile', function() {
    //const postAct = new postActionObjects()
    //const userProfile = new userProfileObject() 
    postAct.upvotePost() 
    postAct.getFirstPostTitle().then((title)=>{
      postAct.showSettingsSubmenu()
      postAct.goUserProfile()
      cy.wait(3000)
      userProfile.upvoted()
      cy.wait(1000)
      let newString = title.replace(/\s+/g,' ').trim();
      userProfile.findPost(newString)
    }) 
  })

  it('Check downvoted post in DOWNVOTE page in user profile', function() {
    //const postAct = new postActionObjects()
    //const userProfile = new userProfileObject() 
    postAct.downvotePost() 
    postAct.getFirstPostTitle().then((title)=>{
      postAct.showSettingsSubmenu()
      postAct.goUserProfile()
      cy.wait(3000)
      userProfile.downvoted()
      cy.wait(1000)
      let newString = title.replace(/\s+/g,' ').trim();
      userProfile.findPost(newString)
    })
  })

  // ----------------------------------------------- delete posts ----------------------------------------------- 
  it('Disappearance of delete option of a post that dose not belong to the user', function() {
    //const postAct = new postActionObjects()
    postAct.firstPostActionsList()
    postAct.deleteDisappearance() 
  })

  ////////////////////////////////////////////Later//////////////////////////////////////////////
  
  it('Exsitance of any post', function() {
    //const postAct = new postActionObjects()
    postAct.getFirstPostTitle() 
  })

  //Later : check all posts option gain , but from each tab in the users top tapa ( SAVED , UPVOTE , .... ) 
  
   //Later: ----------------------------------------------- share posts -----------------------------------------------
  // it('', function() {
  //   //const postAct = new postActionObjects()
  //   postAct.xx
  //   postAct.xx
   
  // })

  // ----------------------------------------------- linking between posts and comments ----------------------------------------------- 
  it('check if (Comments)button will go to the comments page of the post', function() {
    //const postAct = new postActionObjects()
    postAct.getFirstPostTitle().then((title)=>{
      postAct.comments();
      let newString = title.replace(/\s+/g,' ').trim();
      postAct.checkCommmentPage(newString);
    })
    
  })

  //Later:check when click on the (my post or a hom post) post all the buttons that appeare , ex: (New Post) at the right

}) 