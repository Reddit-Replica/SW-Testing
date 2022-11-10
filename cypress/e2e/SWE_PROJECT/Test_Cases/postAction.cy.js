import postActionObjects from './pageObjects/postActionObjects'
describe('Test some actions on post', () => {

   //test visiting the home page
   beforeEach(() => {
    // Since we want to visit the same URL at the start of all our tests,
    // we include it in our beforeEach function so that it runs before each test
    const postAct = new postActionObjects();
    postAct.navigate()
  })

  
  //################################################### save and unsave posts#################################################  

  it.only('Check saving post belongs to the user in (SAVED) page in user profile', () => {
    //save a post go to SAVED in your profile and chrck if it is saved or not
    //?Later:how to check for the post that i saved right now not another post?
  
     
  }) 


  it('Check saving arbitrary post in (SAVED) page in user profile', () => {
  //save a post go to SAVED in your profile and chrck if it is saved or not
  //?Later:how to check for the post that i saved right now not another post?

   
  })

  it('Appearance of saving post message and its syntax', () => {
    
    postAct.saveMsgSyntax().should('have.text','Post saved successfully');
     
  })

  it('Check (Undo) in saving post message', () => {

    postAct.saveUndoByMsg()

    postAct.unsaveMsgSyntax().should('have.text','Post unsaved successfully');
       
    
     
  })

  it('Check unsaving post in (SAVED) page in user profile', () => {
    //save a post go to SAVED in your profile and chrck if it is unsaved or not
    //?Later:how to check for the post that i unsaved right now not another post?
  
     
  })
  
  it('Appearance of unsaving post message and its syntax', () => {
      
    postAct.unsaveMsgSyntax().should('have.text','Post unsaved successfully');
       
  })
  
  it('Check (Undo) in unsaving post message ', () => {

    postAct.unsaveUndoByMsg()

    postAct.saveMsgSyntax().should('have.text','Post unsaved successfully');
       
       
  })

  it('Check messages for multiple saving and unsaving for the same post one after the other at the same minute', () => {
    //check it will keep up with the speed or not 
    //check the messages are not overlaped or not
    //check the last responce (saved or unsaved)
   
  })





  //################################################## Hide and UnHide posts################################################### 

  it('Check hiding post belongs to the user in (HIDDEN) page in user profile', () => {
    //check Disappearance for the user's hidden post
    //hide a post go to HIDDEN in your profile and chrck if it is hide or not
    //?Later:how to check for the post that i hide right now not another post?
  
     
    })


  it('Check hiding arbitrary post in (HIDDEN) page in user profile', () => {
  //check : Disappearance for the arbitrary hidden post
  //hide a post go to HIDDEN in your profile and chrck if it is hide or not
  //?Later:how to check for the post that i hide right now not another post?

   
  })

  it('Appearance of hiding post message and its syntax', () => {
    
    postAct.hideMsgSyntax().should('have.text','Post hidden successfully.');
   
     
  })

  it('Check (Undo) in hiding post message ', () => {
    
    postAct.hideUndoByMsg();
    //NOTE: unlike undo of save and save , there is no msg appeare after pree undo in hidden msg
     
  })

  it("Disappearance of (Unhide) option in the hiddden user's post", () => {
    //you can not unhide any post from its option, it is just done from (HIDDEN) page in the user page
   
  })

  it("Disappearance of (Unhide) option in the hiddden home post", () => {
     //you can not unhide any post from its option, it is just done from (HIDDEN) page in the user page
   
  })

  it('Unhide a post after hide it, from (HIDDEN) page in the user page', () => {
   //check : Appearance for the unhidden post

  })

  it('Appearance of unhiding post message and its syntax', () => {
    
    postAct.unhideMsgSyntax().should('have.text','Post unhidden successfully.');
    
     
  })

  it('Check (Undo) in unhiding post message ', () => {
    
    postAct.unhideUndoByMsg();
    //NOTE: unlike undo of save and save , there is no msg appeare after pree undo in unhidden msg
      
  })


  //###################################################Edit posts################################################# 

  it('Disappearance of edit option of a post that dose not belong to the user', () => {
    //check the ability to edit a post which is not mine (even if i share it in my profile <= m.s )
   
  })

  it("Click on edit option of user's post and check the appearance od edit form", () => {
  //? is the edit form ?or u url ?(new page)
  //? if it is a form , then how to check on it?
   
  })

  it("Edit a user's post and click on (cancel)", () => {
    //edit must be unsaved
   
  })

  it("Edit a user's post and click on (save)", () => {
    //edit must be unsaved
   
  })

  it("Apperance and ability to press save button in edit form", () => {
    //check the apperance and the ability to press save button
   
  })

  it('Edit my post and click (save) and check if changed is saved or not', () => {
   
  })

  it('Press (close) botton without saving the changes in edit form', () => {
  // a message must be appeare at the top under the url immediately
   
  })

  it('Press (close) botton with saving the changes in edit form', () => {
    // a message must be appeare at the top under the url immediately
     
    })

  it('Trying to edit the title of my post in edit form', () => {
  //should Not pass
   
  })

  it('Appearance of editing post message and its syntax in edit form', () => {
    
    postAct.editMsgSyntax().should('have.text','Post successfully edited');
     
  })

  it('Disappearance (Undo) in unhiding post message in edit form', () => {
    //Disappearance not Appearance
    
     
  })

  it('Trying to edit the post after clicking on (save) in edit form', () => {
    //should Not pass
     
  })
  
  

 // ################################################# vote posts ################################################# 
  it('Ability to upvote my post', () => {
    
  })

  it('Ability to downvote my post', () => {
    
  })

  it('Check numbers of votes after upvote', () => {
  //? how to check thousand vote numbers?
    postAct.upvotePost()
    postAct.checkVotesNum()
  })

  it('Check numbers of votes after downvote for at least votes = 2', () => {
  
    postAct.votesNum()
    postAct.downvotePost()
    postAct.checkVotesNum(num)
  })

  it('Check numbers of votes after downvote for at least votes = 1', () => {
  //check zero votes ability
  
  })

  it('Check numbers of votes after downvote for at least votes = 0', () => {
  //check -ve votes
  
  })

  it('Downvoting after upvoting the same post', () => {
  
  })

  it('Upvoting after downvoting the same post', () => {
  
    
  })

  it('Click on upvote button odd numbers of time', () => {
  //it should be counted as one upvote
    
  })

  it('Click on downvote button odd numbers of time', () => {
    //it should be counted as one downvote
      
  })

  it('Undo upvote by clicking on it twice', () => {
    
      
  })

  it('Undo downvote by clicking on it twice', () => {
    
      
  })

  it('Check upvoted post in UPVOTE page in yser profile', () => {
  
  })

  it('Check downvoted post in DOWNVOTE page in yser profile', () => {
  
  })

  it('Delete upvoted post in UPVOTE page in yser profile by downvoting it ', () => {
  //? do we need to refresh the page before checking?

  
  })

  it('Delete downvoted post in DOWNVOTE page in yser profile by upvoting it ', () => {
    //? do we need to refresh the page before checking?
    
    
  })

  it('Delete upvoted post in UPVOTE page in yser profile by upvoting it again', () => {
    //? do we need to refresh the page before checking?
    
    
  })
    
  it('Delete downvoted post in DOWNVOTE page in yser profile by downvoting it again', () => {
    //? do we need to refresh the page before checking?
      
      
  })


  // ################################################# delete posts ################################################# 
  it('Disappearance of delete option of a post that dose not belong to the user', () => {
    //check the ability to edit a post which is not mine
   
  })

  it('Appearance of deleting post message sepeareted form', () => {
  //? is it will appear in a sepearete form or what?
  
     
  })

  it('Syntax of deleting post message and the syntax of its header', () => {
    //Delete post?
    //Are you sure you want to delete your post? You can't undo this.

  })

  it('Canceling deleting post process from button (cancel) in the delete sepeareted form', () => {
   
  })

  it('Canceling deleting post process from button (X) in the delete sepeareted form', () => {
   
  })

  it('Appearance of deleting post message at the bottom after clicking on (Delete post) ', () => {
    //? is it will appear in a sepearete form or what?
    postAct.deleteMsgSyntax().should('have.text','Post deleted successfully.'); 
       
  })

  it('Delete post and check its disappearance ', () => {
   
  }) 
  ////////////////////////////////////////////Later//////////////////////////////////////////////
  
  it('Exsitance of any post', () => {
   
  })

  //Later : check all posts option gain , but from each tab in the users top tapa ( SAVED , UPVOTE , .... ) 
  
   //Later: ################################################# share posts ################################################# 
  it('Disappearance of share option of a post that belongs to the user', () => {
   
  })

  it('', () => {
   
  })

  it('', () => {
   
  })

  it('', () => {
   
  })

  it('', () => {
   
  })

  // ################################################# linking between posts and comments ################################################# 
  it('check if (Comments) will go to the comments page of the post', () => {

    postAct.comments();
    postAct.checkCommmentPage();
  })

  //Later:check when click on the (my post or a hom post) post all the buttons that appeare , ex: (New Post) at the right

})