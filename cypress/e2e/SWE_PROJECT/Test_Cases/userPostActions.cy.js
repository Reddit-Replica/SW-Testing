import postActionObjects from './pageObjects/postActionObjects'
import userProfileObject from './pageObjects/userProfileObject'

describe('Test some actions on post', () => {

   //test visiting the home page
   beforeEach(() => {
    // Since we want to visit the same URL at the start of all our tests,
    // we include it in our beforeEach function so that it runs before each test
    const postAct = new postActionObjects();
    postAct.navigate()
  })

  
  //################################################### save posts#################################################  

  it('Check saving post belongs to the user in (SAVED) page in user profile', () => {
    const postAct = new postActionObjects()
    const userProfile = new userProfileObject() 
    postAct.xx
    postAct.xx
    //save a post go to SAVED in your profile and chrck if it is saved or not
    //?Later:how to check for the post that i saved right now not another post?
  
     
  }) 

  //################################################### unsave posts#################################################  
   

  //################################################## Hide and UnHide posts################################################### 

  it('Check hiding post belongs to the user in (HIDDEN) page in user profile', () => {
    const postAct = new postActionObjects()
    postAct.xx
    postAct.xx
    //check Disappearance for the user's hidden post
    //hide a post go to HIDDEN in your profile and chrck if it is hide or not
    //?Later:how to check for the post that i hide right now not another post?
    })



  it("Disappearance of (Unhide) option in the hiddden user's post", () => {
    const postAct = new postActionObjects()
    postAct.xx
    postAct.xx
    //you can not unhide any post from its option, it is just done from (HIDDEN) page in the user page
   
  })

  it("Disappearance of (Unhide) option in the hiddden home post", () => {
    const postAct = new postActionObjects()
    postAct.xx
    postAct.xx
     //you can not unhide any post from its option, it is just done from (HIDDEN) page in the user page
   
  })

  it('Unhide a post after hide it, from (HIDDEN) page in the user page', () => {
    const postAct = new postActionObjects()
    postAct.firstPostActionsList()
    postAct.hidePost()
    postAct.showSettingsSubmenu()
    postAct.goUserProfile()
    userProfile.hidden()
    postAct.xx
    postAct.xx
   //check : Appearance for the unhidden post

  })

  it('Appearance of unhiding post message after unhide it from (HIDDEN) page in user profile and its syntax', () => {
    const postAct = new postActionObjects()
    const userProfile = new userProfileObject() 
    postAct.firstPostActionsList()
    postAct.hidePost()
    postAct.showSettingsSubmenu()
    postAct.goUserProfile()
    userProfile.hidden()
    postAct.xx
    postAct.xx
  
  })

  it('Check (Undo) in unhiding post message ', () => {
    const postAct = new postActionObjects()
    postAct.firstPostActionsList()
    postAct.hidePost()
    postAct.showSettingsSubmenu()
    postAct.goUserProfile()
    userProfile.hidden()

    postAct.xx
    postAct.xx
    
    postAct.unhideUndoByMsg();
    //NOTE: unlike undo of save and save , there is no message appeare after pree undo in unhidden msg
      
  })


  //###################################################Edit posts################################################# 

  it('Disappearance of edit option of a post that dose not belong to the user', () => {
    const postAct = new postActionObjects()
    postAct.xx
    postAct.xx
    //check the ability to edit a post which is not mine (even if i share it in my profile <= m.s )
   
  })

  it("Click on edit option of user's post and check the appearance od edit form", () => {
    const postAct = new postActionObjects()
    postAct.xx
    postAct.xx
  //? is the edit form ?or u url ?(new page)
  //? if it is a form , then how to check on it?
   
  })

  it("Edit a user's post and click on (cancel)", () => {
    const postAct = new postActionObjects()
    postAct.xx
    postAct.xx
    //edit must be unsaved
   
  })

  it("Edit a user's post and click on (save)", () => {
    const postAct = new postActionObjects()
    postAct.xx
    postAct.xx
    //edit must be unsaved
   
  })

  it("Apperance and ability to press save button in edit form", () => {
    const postAct = new postActionObjects()
    postAct.xx
    postAct.xx
    //check the apperance and the ability to press save button
   
  })

  it('Edit my post and click (save) and check if changed is saved or not', () => {
    const postAct = new postActionObjects()
    postAct.xx
    postAct.xx
   
  })

  it('Press (close) botton without saving the changes in edit form', () => {
    const postAct = new postActionObjects()
    postAct.xx
    postAct.xx
  // a message must be appeare at the top under the url immediately
   
  })

  it('Press (close) botton with saving the changes in edit form', () => {
    const postAct = new postActionObjects()
    postAct.xx
    postAct.xx
    // a message must be appeare at the top under the url immediately
     
    })

  it('Trying to edit the title of my post in edit form', () => {
    const postAct = new postActionObjects()
    postAct.xx
    postAct.xx
  //should Not pass
   
  })

  it('Appearance of editing post message and its syntax in edit form', () => {
    const postAct = new postActionObjects()
    postAct.xx
    postAct.xx
    
    postAct.editMsgSyntax()
     
  })

  it('Disappearance (Undo) in unhiding post message in edit form', () => {
    const postAct = new postActionObjects()
    postAct.xx
    postAct.xx
    //Disappearance not Appearance
    
     
  })

  it('Trying to edit the post after clicking on (save) in edit form', () => {
    const postAct = new postActionObjects()
    postAct.xx
    postAct.xx
    //should Not pass
     
  })
  
  

 // ################################################# vote posts ################################################# 
  it('Ability to upvote my post', () => {
    const postAct = new postActionObjects()
    postAct.xx
    postAct.xx
    
  })

  it('Ability to downvote my post', () => {
    const postAct = new postActionObjects()
    postAct.xx
    postAct.xx
    
  })

  it.only('Check numbers of votes after upvote', () => {
    const postAct = new postActionObjects()
    //? how to check thousand vote numbers?
    let num = parseInt(postAct.votesNum());
    postAct.upvotePost()
    //num=num+1
    //postAct.checkVotesNum(num) 
    let string = `${num}`;
    cy.log(num)
    postAct.checkVotesNum('23')
  })

  it('Check numbers of votes after downvote for at least votes = 2', () => {
    const postAct = new postActionObjects()
    postAct.xx
    postAct.xx
  
    postAct.votesNum()
    postAct.downvotePost()
    postAct.checkVotesNum(num)
  })

  it('Check numbers of votes after downvote for at least votes = 1', () => {
    const postAct = new postActionObjects()
    postAct.xx
    postAct.xx
  //check zero votes ability
  
  })

  it('Check numbers of votes after downvote for at least votes = 0', () => {
    const postAct = new postActionObjects()
    postAct.xx
    postAct.xx
  //check -ve votes
  
  })

  it('Downvoting after upvoting the same post', () => {
    const postAct = new postActionObjects()
    postAct.upvotePost()
    postAct.downvotePost()
    //postAct.checkVotesNum(num)
  })

  it('Upvoting after downvoting the same post', () => {
    const postAct = new postActionObjects()
    postAct.downvotePost()
    postAct.upvotePost()
    //postAct.checkVotesNum(num) 
  })

  it('Cancel upvoting by clicking on upvote button even numbers of time', () => {
    const postAct = new postActionObjects()
    postAct.upvotePost()
    postAct.upvotePost()
    // postAct.xx
    // postAct.xx
    //postAct.checkVotesNum(num)   
  })

  it('Click on upvote button odd numbers of time', () => {
    const postAct = new postActionObjects()
    postAct.upvotePost()
    postAct.upvotePost()
    var num = 3
    num.toString

    postAct.checkVotesNum('22') 
  //it should be counted as one upvote
    
  })

  it('Click on downvote button odd numbers of time', () => {
    const postAct = new postActionObjects()
    postAct.xx
    postAct.xx
    //it should be counted as one downvote
      
  })

  it('Cancel downvoting by clicking on downvote button even numbers of time', () => {
    const postAct = new postActionObjects()
    postAct.xx
    postAct.xx
    
      
  })

  
  it('Delete upvoted post in UPVOTE page in user profile by downvoting it ', () => {
    const postAct = new postActionObjects()
    postAct.xx
    postAct.xx
  //? do we need to refresh the page before checking?

  
  })

  it('Delete downvoted post in DOWNVOTE page in user profile by upvoting it ', () => {
    const postAct = new postActionObjects()
    postAct.xx
    postAct.xx
    //? do we need to refresh the page before checking?
    
    
  })

  it('Delete upvoted post in UPVOTE page in user profile by upvoting it again', () => {
    const postAct = new postActionObjects()
    postAct.xx
    postAct.xx
    //? do we need to refresh the page before checking?
    
    
  })
    
  it('Delete downvoted post in DOWNVOTE page in user profile by downvoting it again', () => {
    const postAct = new postActionObjects()
    postAct.xx
    postAct.xx
    //? do we need to refresh the page before checking?
      
      
  })


  // ################################################# delete posts ################################################# 
  it('Appearance of deleting post message sepeareted form', () => {
    const postAct = new postActionObjects()
    postAct.xx
    postAct.xx
  //? is it will appear in a sepearete form or what?
  
     
  })

  it('Syntax of deleting post message and the syntax of its header', () => {
    const postAct = new postActionObjects()
    postAct.xx
    postAct.xx
    //Delete post?
    //Are you sure you want to delete your post? You can't undo this.

  })

  it('Canceling deleting post process from button (cancel) in the delete sepeareted form', () => {
    const postAct = new postActionObjects()
    postAct.xx
    postAct.xx
   
  })

  it('Canceling deleting post process from button (X) in the delete sepeareted form', () => {
    const postAct = new postActionObjects()
    postAct.xx
    postAct.xx
   
  })

  it('Appearance of deleting post message at the bottom after clicking on (Delete post) ', () => {
    const postAct = new postActionObjects()
    postAct.xx
    postAct.xx
    //? is it will appear in a sepearete form or what?
    postAct.deleteMsgSyntax()
       
  })

  it('Delete post and check its disappearance ', () => {
    const postAct = new postActionObjects()
    postAct.xx
    postAct.xx
   
  }) 
  ////////////////////////////////////////////Later//////////////////////////////////////////////
  //Later : check all posts option again , but from each tab in the users top tapa ( SAVED , UPVOTE , .... ) 
  
   //Later: ################################################# share posts ################################################# 
  it('Disappearance of share option of a post that belongs to the user', () => {
    const postAct = new postActionObjects()
    postAct.xx
    postAct.xx
   
  })

  // it('', () => {
  //   const postAct = new postActionObjects()
  //   postAct.xx
  //   postAct.xx
   
  // })

  // ################################################# linking between posts and comments ################################################# 

  //Later:check when click on the (my post or a hom post) post all the buttons that appeare , ex: (New Post) at the right

})