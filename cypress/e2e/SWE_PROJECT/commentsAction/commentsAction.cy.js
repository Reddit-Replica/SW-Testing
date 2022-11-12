import commentObjects from './pageObjects/commentObjects'
import postActionObjects from './pageObjects/postActionObjects'
import userProfileObject from './pageObjects/userProfileObject'

describe('Test some comments actions', () => {

  beforeEach(() => {
    // Since we want to visit the same URL at the start of all our tests,
    // we include it in our beforeEach function so that it runs before each test
    // ;
    const commentAct = new commentObjects()
    commentAct.navigate()
  })

  it('Ability to write comment on a post in home page', () => {
    const commentAct = new commentObjects()
    commentAct.addText('samaa comment first')   
  })

  it('Ability to click on (Comment) button', () => {    
    const commentAct = new commentObjects()
    commentAct.addText('samaa comment first') 
    commentAct.submitComment()
  })

  
  it('Check adding the comment at the top of other comments with clicking on (Comment) button', () => {
    const commentAct = new commentObjects()
    commentAct.addText('samaa comment first') 
    commentAct.submitComment()
    commentAct.checkCommentExist('samaa comment first')
   
  })

  //NOTE: the top bar is hidden behind the comment page !!
  it('Check adding the comment in COMMENT page in user profile after submit it', () => {
    const commentAct = new commentObjects()
    const userProfile = new userProfileObject() 
    const postAct = new postActionObjects()
    commentAct.addText('samaa comment second') 
    commentAct.submitComment()
    postAct.showSettingsSubmenu()
    postAct.goUserProfile()
    userProfile.comments()
    userProfile.findPost('samaa comment second')
    //NOTE: find post is the same implementaion to find comment
    //later:important:if you update the logic of find post , recover this test case
   
  })

  //later:check that this is the markdown text box!
  it('Switch to markdown mode ', () => {
    const commentAct = new commentObjects()
    commentAct.markdownMode()
  })

   //later:check that this is the fancyMode text box!
  it('Switch to fancy pants editor', () => {
    const commentAct = new commentObjects()
    commentAct.fancyMode()
  })

  it('Check numbers of votes of my comment after adding it', () => {
    const commentAct = new commentObjects()
    const postAct = new postActionObjects()
    commentAct.addText('samaa comment second') 
    commentAct.submitComment()
    commentAct.checkVotesNum('1') 
  })


  it('Go to my user profile by the name of (Comment as)', () => {
    const commentAct = new commentObjects()
    //?later: change the base url
    commentAct.commentAsText().then((username)=>{
      commentAct.commentAsClick()
      let url = 'http://localhost/user/'+ username;
      commentAct.urlChecker(url)
    }) 
  })

  it('Go to my user profile by the name of author comment(mine)', () => {
    const commentAct = new commentObjects()
    commentAct.addText('samaa comment second') 
    commentAct.submitComment()
    //?later: change the base url
    commentAct.myCommentAuthorText().then((username)=>{
      commentAct.myCommentAuthorClick()
      let url = 'http://localhost/user/'+ username;
      commentAct.urlChecker(url)
    }) 
   
  })

  //later
  // it('Check that author comment of my comment is my username', () => {
  //   const commentAct = new commentObjects()
  // })
  
  it('Go to the user profile by the name of author comment', () => {
    const commentAct = new commentObjects()
    //?later: change the base url
    commentAct.FirstCommentAuthorText().then((username)=>{
      commentAct.FirstCommentAuthorClick()
      let url = 'http://localhost/user/'+ username;
      commentAct.urlChecker(url)
    }) 
   
  })

  // it('', () => {
  //   const commentAct = new commentObjects()
  //   commentAct.xx
  //   commentAct.xx
   
  // })
  //################################################### save and unsave comments################################################# 

  it('Appearance of saving comment message and its syntax', () => {
    const commentAct = new commentObjects()
    commentAct.saveComment()
    commentAct.saveMsgSyntax() 
  })

  it('Check message after clicking on (Undo) in saving comment message', () => {
    const commentAct = new commentObjects()
    commentAct.saveComment()
    commentAct. saveUndoByMsg()
    commentAct.unsaveMsgSyntax()        
  })

  it('Close save comment message by click on (x) ot the mseeage', () => {
    const commentAct = new commentObjects()
    commentAct.saveComment()
    commentAct.msgCancelbyX()
    //later:if (X) in different msgs have differebt ids, then change this function and make 'msgCancelbyX' for each action,ex:save,unsave....
  })

  it('Appearance of unsaving comment message and its syntax', () => {
    const commentAct = new commentObjects()
    commentAct.saveComment()
    //NOTE: wait some time until the message of saving comment diappeare
    cy.wait(8000)
    commentAct.unsaveComment()
    commentAct.unsaveMsgSyntax() 
     
   })
 
   it('Check message after clicking on (Undo) in unsaving comment message', () => {
    const commentAct = new commentObjects()
    commentAct.saveComment()
    //NOTE: wait some time until the message of saving comment diappeare
    cy.wait(8000)
    commentAct.unsaveComment()
    commentAct.unsaveUndoByMsg()
    commentAct.saveMsgSyntax()    
           
   })

   it('Close unsave comment message by click on (x) ot the mseeage', () => {
    const commentAct = new commentObjects()
    commentAct.saveComment()
    //NOTE: wait some time until the message of saving comment diappeare
    cy.wait(8000)
    commentAct.unsaveComment()
    commentAct.msgCancelbyX()
    //later:if (X) in different msgs have differebt ids, then change this function and make 'msgCancelbyX' for each action,ex:save,unsave....
  })

  //################################################### follow and unfollow comments################################################# 

   it('Appearance of follow comment message and its syntax', () => {
    const commentAct = new commentObjects()
    commentAct.followComment()
    commentAct.followMsgSyntax()  
   })

  it('Close follow comment message by click on (x) ot the mseeage', () => {
    const commentAct = new commentObjects()
    commentAct.followComment()
    commentAct.msgCancelbyX()
    //later:if (X) in different msgs have differebt ids, then change this function and make 'msgCancelbyX' for each action,ex:save,unsave....
  })

  it('Appearance of unfollow comment message and its syntax', () => {
    const commentAct = new commentObjects()
    commentAct.unfollowComment()
    commentAct.unfollowMsgSyntax()  
     
   })

  it('Close unfollow comment message by click on (x) ot the mseeage', () => {
    const commentAct = new commentObjects()
    commentAct.unfollowComment()
    commentAct.msgCancelbyX()
    //later:if (X) in different msgs have differebt ids, then change this function and make 'msgCancelbyX' for each action,ex:save,unsave....
  })
  // // ################################################# reply on comment #################################################
  it('Trying to type reply on a comment', () => {
    const commentAct = new commentObjects()
    commentAct.replyOnComment()
    commentAct.addReplyText('my dirst reply of samaa')
  })

  it('Trying to reply on my comment', () => {
    const commentAct = new commentObjects()
    commentAct.addText('samaa comment second') 
    commentAct.submitComment()
    commentAct.replyOnComment()
    commentAct.addReplyText('my dirst reply of samaa')
  })

  it('Cancel reply on the comment', () => {
    const commentAct = new commentObjects()
    commentAct.replyOnComment()
    commentAct.replyCancel() 
  
  
  })

  it('Submit reply on the comment', () => {
    const commentAct = new commentObjects()
    commentAct.replyOnComment()
    commentAct.addReplyText('my dirst reply of samaa')
    commentAct.submitCommentReply()
  })

  //later:
  // it('Check existance of submitted reply on the comment', () => {
  //   const commentAct = new commentObjects()
  //   commentAct.replyOnComment()
  //   commentAct.addReplyText('my dirst reply of samaa')
  //   commentAct.submitCommentReply()
  //   //check
  // })

  //later:check that this is the markdown text box!
  it('Switch to markdown mode in comment reply', () => {
    const commentAct = new commentObjects()
    commentAct.replyOnComment()
    commentAct.replyMarkdownMode()
   
  })

   //later:check that this is the fancyMode text box!
  it('Switch to fancy pants editor in comment reply', () => {
    const commentAct = new commentObjects()
    commentAct.replyOnComment()
    commentAct.replyFancyMode()
   
  })

  it('check that "Send me reply notification" option on my comment is checked after adding my comment', () => {
    const commentAct = new commentObjects()
    commentAct.addText('samaa comment second') 
    commentAct.submitComment()
    commentAct.sendMeReplyNotifChecked()  
  })
  // it('Send me reply notification option on a comment', () => {
  //   const commentAct = new commentObjects()
  //   commentAct.sendMeReplyNotif()
  //   commentAct.xx
  
  
  // })


  // // ################################################# delete comments #################################################
  it('Ability to delete my comment', () => {
    const commentAct = new commentObjects()
    commentAct.addText('samaa comment second') 
    commentAct.submitComment()
    commentAct.deleteComment()  
  })

  // it('DisAbility to delete another one comment', () => {
  //   const commentAct = new commentObjects()
  //   commentAct.xx
  //   commentAct.xx 
  // })

  it('Appearance of deleting comment message sepeareted form', () => {
    const commentAct = new commentObjects()
    commentAct.addText('samaa comment second') 
    commentAct.submitComment()
    commentAct.deleteComment()  
    commentAct.deleteSepearetedForm()       
  })

  it('Syntax of deleting comment message and the syntax of its header', () => {
    const commentAct = new commentObjects()
    commentAct.addText('samaa comment second') 
    commentAct.submitComment()
    commentAct.deleteComment()  
    commentAct.deleteSepFormMsg()
    commentAct.deleteSepFormMsgHeader()
  })

  it('Canceling deleting comment process from button (Keep) in the delete sepeareted form', () => {
    const commentAct = new commentObjects()
    commentAct.addText('samaa comment second') 
    commentAct.submitComment()
    commentAct.deleteComment() 
    commentAct.keepComment()
    //later:check deleting is not done  
  })

  it('Canceling deleting comment process from button (X) in the delete sepeareted form', () => {
    const commentAct = new commentObjects()
    commentAct.addText('samaa comment second') 
    commentAct.submitComment()
    commentAct.deleteComment() 
    commentAct.keepComment()
    commentAct.deleteCancelbyX()    
  })

  //?later:is it my internet or there is no message appeasres after clivk (Delete) !!
  // it('Appearance of deleting post message at the bottom after clicking on (Delete post) ', () => {
   // const commentAct = new commentObjects()
    //commentAct.xx
    //commentAct.xx
       
  // })

  //later:
  // it('Delete comment and check its disappearance ', () => {
  //   const commentAct = new commentObjects()
  //   commentAct.xx
  //   commentAct.xx 
  // }) 
  // it('Disappearance of delete option of a comment of another one', () => {
  //  const commentAct = new commentObjects()
   // commentAct.xx
   // commentAct.xx
  // //Trying to delete a comment of another one
   
  // })

  //################################################### share comments ################################################# 

  // it('', () => {
  //   const commentAct = new commentObjects()
   // commentAct.xx
   // commentAct.xx 
  // })

  //  ################################################# vote comments #################################################
  it('Upvote my newly added comment', () => {
    const commentAct = new commentObjects()
    commentAct.addText('samaa comment second') 
    commentAct.submitComment()
    commentAct.upvoteComment()
   
  })

  it('Downvote my newly added comment', () => {
    const commentAct = new commentObjects()
    commentAct.addText('samaa comment second') 
    commentAct.submitComment()
    commentAct.downvoteComment()
  })

  it('Upvote another one comment', () => {
    const commentAct = new commentObjects()
    commentAct.upvoteComment()
  })

  it('Downvote another one comment', () => {
    const commentAct = new commentObjects()
    commentAct.downvoteComment()
  })

  //  ################################################# edit comments #################################################
  it('Trying to edit my comment', () => {
    const commentAct = new commentObjects()
    commentAct.addText('samaa comment second') 
    commentAct.submitComment()
    commentAct.editComment() 
  })

  it('Cancel editing by (cancel) button', () => {
    const commentAct = new commentObjects()
    commentAct.addText('samaa comment second') 
    commentAct.submitComment()
    commentAct.editComment() 
    commentAct.editCancel()
   
  })

  it('Save editing of my comment', () => {
    const commentAct = new commentObjects()
    commentAct.addText('samaa comment second') 
    commentAct.submitComment()
    commentAct.editComment()
    commentAct.editText(' welcome to edit my comment samaa')
    commentAct.editSave()
    commentAct.checkCommentText('samaa comment second welcome to edit my comment samaa')
  })

  it('Editing my comment at the same time of replying to it', () => {
    const commentAct = new commentObjects()
    commentAct.addText('samaa comment second') 
    commentAct.submitComment()
    commentAct.editComment()
    commentAct.editText(' welcome to edit my comment samaa')

    commentAct.replyOnComment()
    commentAct.addReplyText('my dirst reply of samaa')
   //NOTE: text box of editing will appeare with the reply text bos at the same time
   //Later: see it again when you apply this test case implementation
  })

  //########################################  go home  ######################################## 
    
  it('Close comment page by (X close) in the top bar', () => {
    const commentAct = new commentObjects()
    commentAct.closeCommentPage()
    commentAct.HomePage()
  })

  //later:
  // it('Check that this comment page is the comment page of the post itself not another post', () => {
  //   const commentAct = new commentObjects()
  //   commentAct.xx
  //   commentAct.xx
  // })

  //  ################################################# Hide comments #################################################
  //later:is there a hide option to my comment or others comments?
  // it('', () => {
   // const commentAct = new commentObjects()
   // commentAct.xx
   // commentAct.xx
   
  // })

  

})