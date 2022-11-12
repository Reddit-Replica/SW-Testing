import commemtPagePostActObj from './pageObjects/commemtPagePostActObj'
import userProfileObject from './pageObjects/userProfileObject'

//import postActionObjects from './pageObjects/postActionObjects'
describe('Test some comments actions', () => {

it('Go to the user profile of the post author', () => {
    const commentAct = new commentObjects()
   
  })

  it('Appearance of follow post message and its syntax', () => {
    const commPagePostAct = new commemtPagePostActObj()
    // const commPagePostAct = new commemtPagePostActObj()
     // commPagePostAct.firstPostActionsList()
     // commPagePostAct.savePost()  
     // commPagePostAct.saveMsgSyntax()
     
     //Followed! You’ll get updates when there’s new activity.
     
   })

  it('Close follow post message by click on (x) ot the mseeage', () => {
    const commentAct = new commentObjects()
  
  
  })

  it('Appearance of unfollow post message and its syntax', () => {
    const commentAct = new commentObjects()
    // const commPagePostAct = new commemtPagePostActObj()
     // commPagePostAct.firstPostActionsList()
     // commPagePostAct.savePost()  
     // commPagePostAct.saveMsgSyntax()

     //Unfollowed. You won’t get updates on this post anymore.
     
     
   })

  it('Close unfollow post message by click on (x) ot the mseeage', () => {
    const commentAct = new commentObjects()
  
  
  })

  it('upvote post by the upvoting sign in the top bar', () => {
    const commentAct = new commentObjects()
   
  })

  it('downvote post by the downvoting sign in the top bar', () => {
    const commentAct = new commentObjects()
   
  })

  it('upvote post by the upvoting left sign in the post', () => {
    const commentAct = new commentObjects()
   
  })

  it('downvote post by the downvoting left sign in the post', () => {
    const commentAct = new commentObjects()
   
  })

  it('Check numbers of votes of the post at left after upvoting it from the top bar', () => {
    const commentAct = new commentObjects()
    // const commPagePostAct = new commemtPagePostActObj()
    
    // //?later: how to check thousand vote numbers?
    // commPagePostAct.votesNum().then((num_str)=>{
    //   let num = parseInt(num_str)
    //   commPagePostAct.upvotePost()
    //   num= num+1
    //   let string = `${num}`;
    //   commPagePostAct.checkVotesNum(string) 
    // })
  })

  it('Check numbers of votes of the post at top bar after upvoting it from the left', () => {
    const commentAct = new commentObjects()
    // const commPagePostAct = new commemtPagePostActObj()
    
    // //?later: how to check thousand vote numbers?
    // commPagePostAct.votesNum().then((num_str)=>{
    //   let num = parseInt(num_str)
    //   commPagePostAct.upvotePost()
    //   num= num+1
    //   let string = `${num}`;
    //   commPagePostAct.checkVotesNum(string) 
    // })
  })

  it('Check numbers of votes of the post at left after downvoting it from the top bar', () => {
    const commentAct = new commentObjects()
    // const commPagePostAct = new commemtPagePostActObj()
    
    // //?later: how to check thousand vote numbers?
    // commPagePostAct.votesNum().then((num_str)=>{
    //   let num = parseInt(num_str)
    //   commPagePostAct.upvotePost()
    //   num= num+1
    //   let string = `${num}`;
    //   commPagePostAct.checkVotesNum(string) 
    // })
  })

  it('Check numbers of votes of the post at top bar after downvoting it from the left', () => {
    const commentAct = new commentObjects()
    // const commPagePostAct = new commemtPagePostActObj()
    
    // //?later: how to check thousand vote numbers?
    // commPagePostAct.votesNum().then((num_str)=>{
    //   let num = parseInt(num_str)
    //   commPagePostAct.upvotePost()
    //   num= num+1
    //   let string = `${num}`;
    //   commPagePostAct.checkVotesNum(string) 
    // })
  })

  it('', () => {
    const commentAct = new commentObjects()
   
  })
  //#####################################  tests from postAction.cy.js   #########################

  //################################################### save posts#################################################  

  it('Check saving arbitrary post in (SAVED) page in user profile', () => {
    const commPagePostAct = new commemtPagePostActObj()
    const userProfile = new userProfileObject() 

    commPagePostAct.firstPostActionsList()
    commPagePostAct.savePost() 
    commPagePostAct.getFirstPostTitle().then((title)=>{
       // commPagePostAct.showSettingsSubmenu()
      // commPagePostAct.goUserProfile()
      userProfile.saved()
      userProfile.findPost(title)
    })
      
  }) 

  it('Appearance of saving post message and its syntax', () => {
    const commPagePostAct = new commemtPagePostActObj()
    commPagePostAct.firstPostActionsList()
    commPagePostAct.savePost()  
    commPagePostAct.saveMsgSyntax()
     
  })

  it('Check message after clicking on (Undo) in saving post message', () => {
    const commPagePostAct = new commemtPagePostActObj()
    commPagePostAct.firstPostActionsList()
    commPagePostAct.savePost()   
    commPagePostAct.unsaveMsgSyntax()
          
  })

  it('Check unsaving post in (SAVED) page in user profile after click on (Undo) in save message', () => {
    const commPagePostAct = new commemtPagePostActObj()
    const userProfile = new userProfileObject() 
    commPagePostAct.firstPostActionsList()
    commPagePostAct.savePost() 
    commPagePostAct.saveUndoByMsg()
    commPagePostAct.getFirstPostTitle().then((title)=>{
      // commPagePostAct.showSettingsSubmenu()
      // commPagePostAct.goUserProfile()
      userProfile.saved()
      userProfile.disappearanceOfPost(title)
    })
    //save a post go to SAVED in your profile and chrck if it is unsaved or not
    //?Later:how to check for the post that i unsaved right now not another post? 
  })
  
  //################################################### unsave posts#################################################  

  it('Check unsaving arbitrary saved post in (SAVED) page in user profile', () => {
    const commPagePostAct = new commemtPagePostActObj()
    const userProfile = new userProfileObject() 
    commPagePostAct.firstPostActionsList()
    commPagePostAct.savePost() 
    //NOTE: wait some time until the message of saving post diappeare
    cy.wait(8000)

    commPagePostAct.firstPostActionsList()
    commPagePostAct.unsavePost()  
    commPagePostAct.getFirstPostTitle().then((title)=>{
       // commPagePostAct.showSettingsSubmenu()
      // commPagePostAct.goUserProfile()
      userProfile.saved()
      userProfile.disappearanceOfPost(title)
    })
  //save a post go to SAVED in your profile and chrck if it is saved or not
  //?Later:how to check for the post that i saved right now not another post?
  })
   
  it('Appearance of unsaving post message and its syntax', () => {
    const commPagePostAct = new commemtPagePostActObj()
    commPagePostAct.firstPostActionsList()
    commPagePostAct.savePost() 
    //NOTE: wait some time until the message of saving post diappeare
    cy.wait(8000)

    commPagePostAct.firstPostActionsList()
    commPagePostAct.unsavePost()    
    commPagePostAct.unsaveMsgSyntax()
  })

  it('Check message after clicking on (Undo) in unsaving post message', () => {
    const commPagePostAct = new commemtPagePostActObj()
    commPagePostAct.firstPostActionsList()
    commPagePostAct.savePost() 
    //NOTE: wait some time until the message of saving post diappeare
    cy.wait(8000)

    commPagePostAct.firstPostActionsList()
    commPagePostAct.unsavePost()    
    commPagePostAct.unsaveUndoByMsg()
    commPagePostAct.saveMsgSyntax()
          
  })

  it('Check saving post in (SAVED) page in user profile after click on (Undo) in unsave message', () => {
    const commPagePostAct = new commemtPagePostActObj()
    commPagePostAct.firstPostActionsList()
    commPagePostAct.savePost() 
    //NOTE: wait some time until the message of saving post diappeare
    cy.wait(8000)
    commPagePostAct.firstPostActionsList()
    commPagePostAct.unsavePost()    
    commPagePostAct.unsaveUndoByMsg()
    commPagePostAct.getFirstPostTitle().then((title)=>{
       // commPagePostAct.showSettingsSubmenu()
      // commPagePostAct.goUserProfile()
      userProfile.saved()
      userProfile.findPost(title)
    })     
  })

  // it('Check messages for multiple saving and unsaving for the same post one after the other at the same minute', () => {
  //   const commPagePostAct = new commemtPagePostActObj()
  //   commPagePostAct.xx
  //   commPagePostAct.xx
  //   //check it will keep up with the speed or not 
  //   //check the messages are not overlaped or not
  //   //check the last responce (saved or unsaved)
   
  // })

  //################################################## Hide and UnHide posts################################################### 

  it('Check hiding arbitrary post in (HIDDEN) page in user profile', () => {
    const commPagePostAct = new commemtPagePostActObj()
    const userProfile = new userProfileObject() 
    commPagePostAct.firstPostActionsList()
    commPagePostAct.hidePost() 

    commPagePostAct.getFirstPostTitle().then((title)=>{
       // commPagePostAct.showSettingsSubmenu()
      // commPagePostAct.goUserProfile()
      userProfile.hidden()
      userProfile.findPost(title)
    })
    //check : Disappearance for the arbitrary hidden post
    //hide a post go to HIDDEN in your profile and chrck if it is hide or not
    //?Later:how to check for the post that i hide right now not another post?
  })

  it('Appearance of hiding post message and its syntax', () => {
    const commPagePostAct = new commemtPagePostActObj()
    commPagePostAct.firstPostActionsList()
    commPagePostAct.hidePost() 
    commPagePostAct.hideMsgSyntax()
  })

  it('Check message after clicking on (Undo) in hiding post message ', () => {
    const commPagePostAct = new commemtPagePostActObj()
    commPagePostAct.firstPostActionsList()
    commPagePostAct.hidePost() 
    commPagePostAct.hideUndoByMsg();
    commPagePostAct.unhideMsgDisappearance()
    //NOTE: unlike undo of save and save , there is no message appeare after pree undo in hidden msg
     
  })

  it("Disappearance of a hidden home post in home page", () => {
    const commPagePostAct = new commemtPagePostActObj()
    commPagePostAct.getFirstPostTitle().then((title)=>{
      commPagePostAct.firstPostActionsList()
      commPagePostAct.hidePost() 
      commPagePostAct.disappHiddenfPost(title)
    }) 
  })

  //NOTE: important : unlike the posts in home page , the (unhide) option in appear here
  it("Appearance of (Unhide) option in the hiddden home post", () => {
    const commPagePostAct = new commemtPagePostActObj()
    commPagePostAct.firstPostActionsList()
    commPagePostAct.hidePost()
    commPagePostAct.unhidePostDisappearance()
     //you can not unhide any post from its option, it is just done from (HIDDEN) page in the user page  
  })


  //###################################################Edit posts################################################# 

  it('Disappearance of edit option of a post that dose not belong to the user', () => {
    const commPagePostAct = new commemtPagePostActObj()
    commPagePostAct.firstPostActionsList()
    commPagePostAct.editPostDisappearance()
    //?:check the ability to edit a post which is not mine (even if i share it in my profile <= m.s )  
  })
 // ################################################# vote posts ################################################# 

  it('Check numbers of votes after upvote', () => {
    const commPagePostAct = new commemtPagePostActObj()
    
    //?later: how to check thousand vote numbers?
    commPagePostAct.votesNum().then((num_str)=>{
      let num = parseInt(num_str)
      commPagePostAct.upvotePost()
      num= num+1
      let string = `${num}`;
      commPagePostAct.checkVotesNum(string) 
    })
  })

  //later:
  // it('Check numbers of votes after downvote for at least votes = 2', () => {
  //   const commPagePostAct = new commemtPagePostActObj()
  //   commPagePostAct.votesNum()
  //   commPagePostAct.downvotePost()
  //   commPagePostAct.checkVotesNum(num)
  // })

  // it('Check numbers of votes after downvote for at least votes = 1', () => {
  //   const commPagePostAct = new commemtPagePostActObj()
  //   //check zero votes ability 
  // })

  // it('Check numbers of votes after downvote for at least votes = 0', () => {
  //   const commPagePostAct = new commemtPagePostActObj()
  //   //check -ve votes
  // })

  it('Downvoting after upvoting the same post', () => {
    const commPagePostAct = new commemtPagePostActObj()
    commPagePostAct.votesNum().then((num_str)=>{
      let num = parseInt(num_str)
      commPagePostAct.upvotePost()
      commPagePostAct.downvotePost()
      num= num-1
      let string = `${num}`;
      commPagePostAct.checkVotesNum(string) 
    })
  })

  it('Upvoting after downvoting the same post', () => {
    const commPagePostAct = new commemtPagePostActObj()
    commPagePostAct.votesNum().then((num_str)=>{
      let num = parseInt(num_str)
      commPagePostAct.downvotePost()
      commPagePostAct.upvotePost()
      num= num+1
      let string = `${num}`;
      commPagePostAct.checkVotesNum(string) 
    })
  })

  it('Cancel upvoting by clicking on upvote button even numbers of time', () => {
    const commPagePostAct = new commemtPagePostActObj()
    commPagePostAct.votesNum().then((num_str)=>{
      commPagePostAct.upvotePost()
      commPagePostAct.upvotePost()
      commPagePostAct.checkVotesNum(num_str) 
      //same old number num_str not num_str+2
    })  
  })

  it('Click on upvote button odd numbers of time', () => {
    const commPagePostAct = new commemtPagePostActObj()
    commPagePostAct.votesNum().then((num_str)=>{
      let num = parseInt(num_str)
      commPagePostAct.upvotePost()
      commPagePostAct.upvotePost()
      commPagePostAct.upvotePost()
      num= num+1
      let string = `${num}`;
      commPagePostAct.checkVotesNum(string) 
      //num_str+1 not num_str+3
    })  
  //it should be counted as one upvote
    
  })

  it('Click on downvote button odd numbers of time', () => {
    const commPagePostAct = new commemtPagePostActObj()
    commPagePostAct.votesNum().then((num_str)=>{
      let num = parseInt(num_str)
      commPagePostAct.downvotePost()
      commPagePostAct.downvotePost()
      commPagePostAct.downvotePost()
      num= num-1
      let string = `${num}`;
      commPagePostAct.checkVotesNum(string) 
      //num_str-1 not num_str-3
    })  
      
  })

  it('Cancel downvoting by clicking on downvote button even numbers of time', () => {
    const commPagePostAct = new commemtPagePostActObj()
    commPagePostAct.votesNum().then((num_str)=>{
      commPagePostAct.downvotePost()
      commPagePostAct.downvotePost()
      commPagePostAct.checkVotesNum(num_str) 
      //same old number num_str not num_str-2
    })    
  })

  it('Check upvoted post in UPVOTE page in user profile', () => {
    const commPagePostAct = new commemtPagePostActObj()
    const userProfile = new userProfileObject() 
    commPagePostAct.upvotePost() 
    commPagePostAct.getFirstPostTitle().then((title)=>{
       // commPagePostAct.showSettingsSubmenu()
      // commPagePostAct.goUserProfile()
      userProfile.upvoted()
      userProfile.findPost(title)
    }) 
  })

  it('Check downvoted post in DOWNVOTE page in user profile', () => {
    const commPagePostAct = new commemtPagePostActObj()
    const userProfile = new userProfileObject() 
    commPagePostAct.downvotePost() 
    commPagePostAct.getFirstPostTitle().then((title)=>{
       // commPagePostAct.showSettingsSubmenu()
      // commPagePostAct.goUserProfile()
      userProfile.downvoted()
      userProfile.findPost(title) 
    })
  })

  // ################################################# delete posts ################################################# 
  it('Disappearance of delete option of a post that dose not belong to the user', () => {
    const commPagePostAct = new commemtPagePostActObj()
    commPagePostAct.firstPostActionsList()
    commPagePostAct.deleteDisappearance() 
  })

  ////////////////////////////////////////////Later//////////////////////////////////////////////
  
  it('Exsitance of any post', () => {
    const commPagePostAct = new commemtPagePostActObj()
    commPagePostAct.getFirstPostTitle() 
  })

  //Later : check all posts option gain , but from each tab in the users top tapa ( SAVED , UPVOTE , .... ) 
  
   //Later: ################################################# share posts #################################################
  // it('', () => {
  //   const commPagePostAct = new commemtPagePostActObj()
  //   commPagePostAct.xx
  //   commPagePostAct.xx
   
  // })

  // ################################################# linking between posts and comments ################################################# 
  it('check if (Comments)button will go to the comments page of the post', () => {
    const commPagePostAct = new commemtPagePostActObj()
    commPagePostAct.comments();
    commPagePostAct.checkCommmentPage();
  })

  //Later:check when click on the (my post or a hom post) post all the buttons that appeare , ex: (New Post) at the right


})

  