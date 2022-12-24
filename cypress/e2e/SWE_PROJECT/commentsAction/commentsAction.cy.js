import commentObjects from '../PageObjects/commentObjects/commentObjects'
import postActionObjects from '../PageObjects/CreatePostObjects/postActionObjects'
import userProfileObject from '../PageObjects/UserProfileObjects/userProfileObject'
import loginObjects from '../PageObjects/LoginObjects/loginObjects'

const postAct = new postActionObjects()
const userProfile = new userProfileObject() 
const login = new loginObjects()
const commentAct = new commentObjects()
//test visiting the profile page
beforeEach({ scrollBehavior: false },function() {
  // Since we want to visit the same URL at the start of all our tests,
  // we include it in our beforeEach function so that it runs before each test        
      login.navigate() 
      login.enterUsername(this.loginData.UserName) 
      login.enterPassword(this.loginData.Password)     
      login.submit() 
      cy.wait(1000)     
      ////commentAct.navigate()
      postAct.navigate()
      postAct.comments()
      // cy.scrollTo('bottom')
      // cy.get('#post-router-comment').last()
      //       .click()

      //later:important :change this:-
    //cy.visit('https://www.read-it.live/user/waer/comments/639d9d826a263e29370e7b26/tests')
})

before({ scrollBehavior: false },function() {
    //important
    // commentAct.addText('samaa comment first') 
    // commentAct.submitComment()
    cy.fixture('CommonLoginData').then(function(loginData){
      this.loginData=loginData
    })
})


describe('Test some comments actions',{ scrollBehavior: false }, function() {

  // it('dumy', function() {
  //  // const commentAct = new commentObjects()
  //   ///commentAct.addText('samaa comment first')   
  //   commentAct.replyOnComment()
  //   commentAct.addReplyText('hello')
  //   cy.wait(1000)
    

  // })

  it('Ability to write comment on a post in home page', function() {
    // const commentAct = new commentObjects()
     commentAct.addText('samaa comment first')   
  })

  it('Ability to click on (Comment) button', function() {    
   // const commentAct = new commentObjects()
    commentAct.addText('samaa comment first') 
    commentAct.submitComment()
  })

  it('Disability to add comment without text', function() {
    // const commentAct = new commentObjects()
     commentAct.DisabililtySubmitComment()   
  })
  
  it('Check adding the comment at the top of other comments with clicking on (Comment) button', function() {
   // const commentAct = new commentObjects()
    commentAct.addText('samaa comment first') 
    commentAct.submitComment()
    commentAct.checkCommentExist('samaa comment first')
   
  })

  //NOTE: the top bar is hidden behind the comment page !!
  it('Check adding the comment in COMMENT page in user profile after submit it', function() {
   // const commentAct = new commentObjects()
    const userProfile = new userProfileObject() 
    //const postAct = new postActionObjects()
    commentAct.addText('samaa comment second') 
    commentAct.submitComment()
    postAct.showSettingsSubmenu()
    postAct.goUserProfile()
    userProfile.comments()
    userProfile.findPost('samaa comment second')
    //NOTE: find post is the same implementaion to find comment
    //later:important:if you update the logic of find post , recover this test case
   
  })

  //filtered
  // //later:check that this is the markdown text box!
  // it('Switch to markdown mode ', function() {
  //  // const commentAct = new commentObjects()
  //   commentAct.markdownMode()
  // })

  //filtered
  //  //later:check that this is the fancyMode text box!
  // it('Switch to fancy pants editor', function() {
  //  // const commentAct = new commentObjects()
  //   commentAct.fancyMode()
  // })

  //?;--
  it('Check numbers of votes of my comment after adding it', function() {
   // const commentAct = new commentObjects()
    //const postAct = new postActionObjects()
    commentAct.addText('samaa comment second') 
    commentAct.submitComment()
    commentAct.checkVotesNum('1') 
  })


  it('Go to my user profile by the name of (Comment as)', function() {
   // const commentAct = new commentObjects()
    //?later: change the base url
    commentAct.commentAsText().then((username)=>{
      commentAct.commentAsClick()
      let url = Cypress.env('CYPRESSBASEURL')+'/user/'+ username;
      commentAct.urlChecker(url)
    }) 
  })

  it('Go to my user profile by the name of author comment(mine)', function() {
   // const commentAct = new commentObjects()
    commentAct.addText('samaa comment second') 
    commentAct.submitComment()

    //later:check it : assume add my comments at the top
    commentAct.myCommentAuthorClick()
    commentAct.urlChecker(Cypress.env('CYPRESSBASEURL')+'/user/'+ this.loginData.UserName)
    // commentAct.myCommentAuthorText().then((username)=>{
    //   commentAct.myCommentAuthorClick()
    //   let url = Cypress.env('CYPRESSBASEURL')+'/user/'+ username;
    //   commentAct.urlChecker(url)
    // }) 
   
  })

  //later
  // it('Check that author comment of my comment is my username', function() {
  //  // const commentAct = new commentObjects()
  // })
  
  it('Go to the user profile by the name of author comment', function() {
   // const commentAct = new commentObjects()
    // commentAct.FirstCommentAuthorText().then((username)=>{
    //   commentAct.FirstCommentAuthorClick()
    //   let url = Cypress.env('CYPRESSBASEURL')+'/user/'+ username;
    //   commentAct.urlChecker(url)

    //?later:comment should be belong to the user or another one?
    commentAct.addText('samaa comment first') 
    commentAct.submitComment()

    commentAct.LastCommentAuthorText().then((username)=>{
      commentAct.LastCommentAuthorClick()
      let url = Cypress.env('CYPRESSBASEURL')+'/user/'+ username;
      commentAct.urlChecker(url)
    }) 
   
  })

  // it('', function() {
  //  // const commentAct = new commentObjects()
  //   commentAct.xx
  //   commentAct.xx
   
  // })
  //-----------------------------------------------## save and unsave comments----------------------------------------------- 

  it('Appearance of saving comment message and its syntax', function() {
   // const commentAct = new commentObjects()
   commentAct.addText('samaa comment first') 
   commentAct.submitComment()

    commentAct.saveComment()
    // commentAct.saveMsgSyntax() 
    //filtered
    //commentAct.PopMsgSyntax('comment is saved successfully') 
    commentAct.PopMsgSyntax('comment is saved successfully') 
  })

  //filtered
  // it('Check message after clicking on (Undo) in saving comment message', function() {
  //  // const commentAct = new commentObjects()
  //  commentAct.addText('samaa comment first') 
  //  commentAct.submitComment()

  //   commentAct.saveComment()
  //   commentAct. saveUndoByMsg()
  //   //commentAct.unsaveMsgSyntax()     
  //   commentAct.PopMsgSyntax('comment is unsaved successfully')           
  // })

  // it.only('Close save comment message by click on (x) ot the mseeage', function() {
  //  // const commentAct = new commentObjects()
  //  commentAct.addText('samaa comment first') 
  //  commentAct.submitComment()
  //   commentAct.saveComment()
  //   commentAct.msgCancelbyX()
  //   //commentAct.DisappearancePopMsg('comment is saved successfully')
  //   //commentAct.DisappearancePopMsg('{ "error": "Invalid Token" }')
  //   commentAct.DisappearancePopMsg()
  //   //later:if (X) in different msgs have differebt ids, then change this function and make 'msgCancelbyX' for each action,ex:save,unsave....
  // })

  it('Appearance of unsaving comment message and its syntax', function() {
   // const commentAct = new commentObjects()
   commentAct.addText('samaa comment first') 
   commentAct.submitComment()

    commentAct.saveComment()
    //NOTE: wait some time until the message of saving comment diappeare
    cy.wait(12000)
    commentAct.unsaveComment()
    //commentAct.unsaveMsgSyntax() 
    commentAct.PopMsgSyntax('comment is unsaved successfully') 
   })
 
   //filtered
  //  it('Check message after clicking on (Undo) in unsaving comment message', function() {
  //  // const commentAct = new commentObjects()
  //   commentAct.saveComment()
  //   //NOTE: wait some time until the message of saving comment diappeare
  //   cy.wait(8000)
  //   commentAct.unsaveComment()
  //   commentAct.unsaveUndoByMsg()
  //   //commentAct.saveMsgSyntax()  
  //   commentAct.PopMsgSyntax('comment is saved successfully')      
           
  //  })

  //  it('Close unsave comment message by click on (x) ot the mseeage', function() {
  //  // const commentAct = new commentObjects()
  //  commentAct.addText('samaa comment first') 
  //  commentAct.submitComment()
  //   commentAct.saveComment()
  //   //NOTE: wait some time until the message of saving comment diappeare
  //   cy.wait(8000)
  //   commentAct.unsaveComment()
  //   commentAct.msgCancelbyX()
  //   commentAct.DisappearancePopMsg('comment is unsaved successfully')  
  //   //later:if (X) in different msgs have differebt ids, then change this function and make 'msgCancelbyX' for each action,ex:save,unsave....
  // })

  //-----------------------------------------------## follow and unfollow comments----------------------------------------------- 

   it('Appearance of follow comment message and its syntax', function() {
   // const commentAct = new commentObjects()
   commentAct.addText('samaa comment first') 
   commentAct.submitComment()

    commentAct.followComment()
    //commentAct.followMsgSyntax()  
    commentAct.PopMsgSyntax('Followed comment successfully')  

    //clean:
    commentAct.unfollowComment()
   })

  // it('Close follow comment message by click on (x) ot the mseeage', function() {
  //  // const commentAct = new commentObjects()
  //  commentAct.addText('samaa comment first') 
  //  commentAct.submitComment()
  //   commentAct.followComment()
  //   commentAct.msgCancelbyX()
  //   commentAct.DisappearancePopMsg('Followed comment successfully')  
  //   //later:if (X) in different msgs have differebt ids, then change this function and make 'msgCancelbyX' for each action,ex:save,unsave....
    
  //   //clean:
  //   commentAct.unfollowComment()
  // })

  it('Appearance of unfollow comment message and its syntax', function() {
   // const commentAct = new commentObjects()
   commentAct.addText('samaa comment first') 
   commentAct.submitComment()

   commentAct.followComment()
   //wait till the message of follow disappeare
   //later: what if we do not want o wait?
   cy.wait(12000)
    commentAct.unfollowComment()
    // commentAct.unfollowMsgSyntax()
    commentAct.PopMsgSyntax('Unfollowed comment successfully')    
     
   })

  // it('Close unfollow comment message by click on (x) ot the mseeage', function() {
  //  // const commentAct = new commentObjects()
  //  commentAct.addText('samaa comment first') 
  //  commentAct.submitComment()
  //  commentAct.followComment() 
  //  cy.wait(12000)
  //  commentAct.unfollowComment()
  //   commentAct.msgCancelbyX()
  //   commentAct.DisappearancePopMsg('Unfollowed comment successfully')  
  //   //later:if (X) in different msgs have differebt ids, then change this function and make 'msgCancelbyX' for each action,ex:save,unsave....
  // })
  // // ----------------------------------------------- reply on comment -----------------------------------------------

  it('Trying to reply on my comment', function() {
   // const commentAct = new commentObjects()
    commentAct.addText('samaa comment second') 
    commentAct.submitComment()
    commentAct.replyOnComment()
  })
//--------//
  it('Disability to add reply without text', function() {
    // const commentAct = new commentObjects()
     commentAct.addText('samaa comment second') 
     commentAct.submitComment()
     commentAct.replyOnComment()
     commentAct.DisabililtySubmitReply()
   })

  it('Cancel reply on the comment', function() {
   // const commentAct = new commentObjects()
  commentAct.addText('samaa comment second') 
  commentAct.submitComment()
  commentAct.replyOnComment()

  commentAct.replyCancel() 
  commentAct.checkCommentText('samaa comment second') 
 
  })

  it('Submit reply on the comment', function() {
   // const commentAct = new commentObjects()
  commentAct.addText('samaa comment second') 
  commentAct.submitComment()
  commentAct.replyOnComment()
  commentAct.addReplyText('my dirst reply of samaa')
  commentAct.submitCommentReply()
  cy.wait(1000)
  commentAct.checkReplyText('my dirst reply of samaa')

  })

  //later:
  // it('Check existance of submitted reply on the comment', function() {
  //  // const commentAct = new commentObjects()
  //   commentAct.replyOnComment()
  //   commentAct.addReplyText('my dirst reply of samaa')
  //   commentAct.submitCommentReply()
  //   //check
  // })

  //later:check that this is the markdown text box!
  // it('Switch to markdown mode in comment reply', function() {
  //  // const commentAct = new commentObjects()
  // //  commentAct.addText('samaa comment second') 
  // // commentAct.submitComment()
  //   commentAct.replyOnComment()
  //   commentAct.replyMarkdownMode() 
  // })

  //  //later:check that this is the fancyMode text box!
  // it('Switch to fancy pants editor in comment reply', function() {
  //  // const commentAct = new commentObjects()
  // //  commentAct.addText('samaa comment second') 
  // // commentAct.submitComment()
  //   commentAct.replyOnComment()
  //   commentAct.replyFancyMode() 
  // })

  // it('check that "Send me reply notification" option on my comment is checked after adding my comment', function() {
  //  // const commentAct = new commentObjects()
  //   commentAct.addText('samaa comment second') 
  //   commentAct.submitComment()
  //   commentAct.sendMeReplyNotifChecked()  
  // })
  // it('Send me reply notification option on a comment', function() {
  //  // const commentAct = new commentObjects()
  //   commentAct.sendMeReplyNotif()
  //   commentAct.xx
  // })


  // // ----------------------------------------------- delete comments -----------------------------------------------
  it('Ability to delete my comment', function() {
   // const commentAct = new commentObjects()
    commentAct.addText('samaa comment second') 
    commentAct.submitComment()

    commentAct.FirstDot()
    commentAct.deleteComment()  
  })

  // it('DisAbility to delete another one comment', function() {
  //  // const commentAct = new commentObjects()
  //   commentAct.xx
  //   commentAct.xx 
  // })

  it('Appearance of deleting comment message sepeareted form', function() {
   // const commentAct = new commentObjects()
    commentAct.addText('samaa comment second') 
    commentAct.submitComment()

    commentAct.FirstDot()
    commentAct.deleteComment()  
    commentAct.deleteSepearetedForm()       
  })

  it('Syntax of deleting comment message and the syntax of its header', function() {
   // const commentAct = new commentObjects()
    commentAct.addText('samaa comment second') 
    commentAct.submitComment()

    commentAct.FirstDot()
    commentAct.deleteComment()  
    commentAct.deleteSepFormMsg()
    commentAct.deleteSepFormMsgHeader()
  })

  it('Canceling deleting comment process from button (Keep) in the delete sepeareted form', function() {
   // const commentAct = new commentObjects()
    commentAct.addText('samaa comment second') 
    commentAct.submitComment()

    commentAct.FirstDot()
    commentAct.deleteComment() 
    commentAct.keepComment()  
    commentAct.checkCommentText('samaa comment second') 
  })

  it('Canceling deleting comment process from button (X) in the delete sepeareted form', function() {
   // const commentAct = new commentObjects()
    commentAct.addText('samaa comment second') 
    commentAct.submitComment()

    commentAct.FirstDot()
    commentAct.deleteComment() 
    commentAct.deleteCancelbyX()   
    commentAct.checkCommentText('samaa comment second') 
  })

  //?later:is it my internet or there is no message appeasres after clivk (Delete) !!
  // it('Appearance of deleting post message at the bottom after clicking on (Delete post) ', function() {
   //// const commentAct = new commentObjects()
    //commentAct.xx
    //commentAct.xx
       
  // })

  
  it('Delete comment and check its disappearance ', function() {
   // const commentAct = new commentObjects()
   commentAct.addText('samaa want to sleep') 
   commentAct.submitComment()

   commentAct.FirstDot()
   commentAct.deleteComment() 
   commentAct.deleteSave()  
   commentAct.checkCommentNotExist('samaa want to sleep')  
  }) 

  //later:
  // it('Disappearance of delete option of a comment of another one', function() {
  // // const commentAct = new commentObjects()
   // commentAct.xx
   // commentAct.xx
  // //Trying to delete a comment of another one
   
  // })

  //----------------------------------------------- share comments ----------------------------------------------- 

  // it('', function() {
  //  // const commentAct = new commentObjects()
   // commentAct.xx
   // commentAct.xx 
  // })

  //  ----------------------------------------------- vote comments -----------------------------------------------
  // it('Upvote my newly added comment', function() {
  //  // const commentAct = new commentObjects()
  //   commentAct.addText('samaa comment second') 
  //   commentAct.submitComment()
  //   commentAct.upvoteComment()
  //   checkVotesNum('')
   
  // })

  it('Downvote my newly added comment', function() {
   // const commentAct = new commentObjects()
    commentAct.addText('samaa comment second') 
    commentAct.submitComment()

    commentAct.downvoteComment()
    commentAct.checkVotesNum('-1')
  })
  it('Cancel upvote my newly added comment ', function() {
    // const commentAct = new commentObjects()
     commentAct.addText('samaa comment second') 
     commentAct.submitComment()

     commentAct.CancelUpvoteComment()
     commentAct.checkVotesNum('0')  
   })

  // it('Upvote another one comment', function() {
  //  // const commentAct = new commentObjects()
  //  commentAct.addText('samaa comment second') 
  // commentAct.submitComment()
  //   commentAct.upvoteComment()
  //   // commentAct.checkVotesNum() 
  // })

  // it('Downvote another one comment', function() {
  //  // const commentAct = new commentObjects()
  //  commentAct.addText('samaa comment second') 
  // commentAct.submitComment()
  //   commentAct.downvoteComment()
  //   // commentAct.checkVotesNum() 
  // })

  it('Downvote my comment', function() {
    // const commentAct = new commentObjects()
    commentAct.addText('samaa comment second') 
   commentAct.submitComment()
     commentAct.downvoteComment()
     // commentAct.checkVotesNum() 
   })
 
  //  ----------------------------------------------- edit comments -----------------------------------------------
  it('Trying to edit my comment', function() {
   // const commentAct = new commentObjects()
    commentAct.addText('samaa comment second') 
    commentAct.submitComment()
    commentAct.editComment() 
  })

  it('Cancel editing by (cancel) button', function() {
   // const commentAct = new commentObjects()
    commentAct.addText('samaa comment second') 
    commentAct.submitComment()
    commentAct.editComment() 
    commentAct.editCancel()
    commentAct.checkCommentText('samaa comment second')
   
  })

  it('Save editing of my comment', function() {
   // const commentAct = new commentObjects()
    commentAct.addText('samaa comment second') 
    commentAct.submitComment()
    commentAct.editComment()
    commentAct.editText('welcome to edit my comment samaa')
    commentAct.editSave()
    commentAct.checkCommentText('welcome to edit my comment samaa')
  })

  //later:
  // it('Editing my comment at the same time of replying to it', function() {
  //  // const commentAct = new commentObjects()
  //   commentAct.addText('samaa comment second') 
  //   commentAct.submitComment()
  //   commentAct.editComment()
  //   commentAct.editText(' welcome to edit my comment samaa')

  //   commentAct.replyOnComment()
  //   commentAct.addReplyText('my dirst reply of samaa')
  //  //NOTE: text box of editing will appeare with the reply text bos at the same time
  //  //Later: see it again when you apply this test case implementation
  // })

  //########################################  go home  ######################################## 
    
  it('Close comment page by (X close) in the top bar', function() {
   // const commentAct = new commentObjects()
    commentAct.closeCommentPage()
    commentAct.HomePage()
  })

  //later:
  // it('Check that this comment page is the comment page of the post itself not another post', function() {
  //  // const commentAct = new commentObjects()
  //   commentAct.xx
  //   commentAct.xx
  // })

  //  ----------------------------------------------- Hide comments -----------------------------------------------
  //later:is there a hide option to my comment or others comments?
  // it('', function() {
   //// const commentAct = new commentObjects()
   // commentAct.xx
   // commentAct.xx
   
  // })

  //  ----------------------------------------------- comments and user profile -----------------------------------------------
  //later: important 
  it('Check that the comment in a post (which is NOT belong to the user) is added in the user profilr page', function() {
   // const commentAct = new commentObjects()
  //  commentAct.xx
  //  commentAct.xx



  
   
  })

  

})