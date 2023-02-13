
class commentObjects{
    //const postAct = new postActionObjects()  
    
    navigate() {
        //cy.visit(Cypress.env('CYPRESSBASEURL') +'/comments')
        //cy.visit(Cypress.env('CYPRESSBASEURL') +'/r/sub-com/comments/1/Hello%20World/')

        cy.visit(Cypress.env('CYPRESSBASEURL') +'/main')
        // cy.get(':nth-child(3) > .post-content > .post-services > .services > :nth-child(1)')
        //     .click()
    } 

    urlChecker(url) {
        cy.url()
            .should('equal',url) 
    }

    //################################################### save and unsave comments################################################# 

    //NOTE: this id need to be changed later
    saveComment() {
        //"save" button
       // cy.get('.post-comments > :nth-child(1) > :nth-child(1) > :nth-child(2) > :nth-child(3) > ul > :nth-child(8)')
       //cy.get('#save')
       cy.get('.comment > .right > .services > ul > #save')
        .first()
        //.last() 
        .click()
    }

    unsaveComment() {
        //"unsave" button
        cy.get('.comment > .right > .services > ul > #unsave')
            .first()
            .click()
    }

    // saveMsgSyntax() {
    //     cy.get('.pop-message > .right > p')
    //         .first()
    //         .should('have.text','Comment saved successfully')           
    // }

    // unsaveMsgSyntax() {
    //     cy.get('.pop-message > .right > p')
    //         .first()
    //         .should('have.text','Comment unsaved successfully')           
    // }

    saveUndoByMsg() {
        //"undo" button
        cy.get('._2iuoyunsaveMsgSyntaxXPiKHN3kfOoeIQalDT _3zbhtNO0bdck0oYbYRhjMC HNozj_dKjQZ59ZsfEegz8')
            .click()

    }

    unsaveUndoByMsg() {
        //"undo" button
        cy.get('._2iuoyPiKHN3kfOoeIQalDT _3zbhtNO0bdck0oYbYRhjMC HNozj_dKjQZ59ZsfEegz8')
            .click()

    }

    //################################################### follow and unfollow comments################################################# 

    followComment() {
        //"follow" button
        cy.get('ul > #follow')
            .first()
            .click()
    }

    unfollowComment() {
        //"unfollow" button
        cy.get('#unfollow')
            .first()
            .click()
    }

    // followMsgSyntax() {
    //     cy.get('.pop-message > .right > p')
    //         .first()
    //         .should('have.text','Followed! You’ll get updates when there’s new activity.')           
    // }

    // unfollowMsgSyntax() {
    //     cy.get('.pop-message > .right > p')
    //         .first() 
    //         .should('have.text','Unfollowed. You won’t get updates on this comment anymore.')           
    // }
     //################################################## reply on Comments################################################### 

     //those ids is for the first comment 
     //later:edit them
    replyOnComment() {
        //"reply" button
        cy.get('.reply')
            .first()
            .click()
    }

    addReplyText(text) {
        //cy.get('#text1')
        cy.get('.ql-editor')
        //NOTE:the first is for the comment box above
            //.first()
            .last()
            .clear()
            .type(text) 
        return this
    }

    // replyMarkdownMode(){
    //     //"markdownMode" button
    //     cy.get('')
    //         .click()
    // }

    // replyFancyMode(){
    //     //"fancyMode" button
    //     cy.get('')
    //         .click()
    // }

    submitCommentReply(){
        //"" button
        cy.get('.comment-submit > .comment-button')
         //NOTE:the first is for the comment box above
            //.first()    
            .last()
            .click({force: true})
    }

    DisabililtySubmitReply(){
        cy.get('.comment-submit > .comment-button')
         //NOTE:the first is for the comment box above
            //.first()    
            .last()
            .should('be.disabled')
    }

    replyCancel() {
        //"cancel" button
        cy.get('#cancel1')
    //?later:?delete first()?
            .first()
            .click({force: true})
    }

    // sendMeReplyNotif() {
    //     cy.get('')
    //         .check()
    // }

    // sendMeReplyNotifChecked() {
    //     cy.get('')
    //         .check()
    // }
    

    // // ################################################# delete Comments ################################################# 
    
    FirstDot() {
        //"cancel" button
        cy.get('#dots')
            .first()
            .click()
    }
    deleteComment() {
        //"Delete Comment" button
        cy.get('#sub-menu-delete')
            .first()
            .click()
    }

    //later:where is cancel?
    // deleteCancel() {
    //     //"cancel" button
    //     cy.get('')
    //         .click()
    // }

    deleteCancelbyX() {
        //"X" button
        cy.get('#exit-dialog')
        //.first()
            .click()
    }

    deleteSave() {
         //"delete" button
         cy.get('section > .buttons > :nth-child(2)')
            .click()
    }

    deleteSepearetedForm() {
        cy.get('.delete')
            .should('be.visible')
    }

    deleteSepFormMsg() {
        //later: check this id
        cy.get('.body')
            .should('have.text','Are you sure you want to delete your comment?')
    }

    deleteSepFormMsgHeader() {
        //cy.get('header > h2')
        cy.get('.delete > header')
            .should('have.text','Delete comment')
    }

    keepComment() {
        //later:update this id
        cy.get('section > .buttons > :nth-child(1)')
            .click()
    }

      //###################################################Edit Comments################################################# 

    editComment() {
        //"eidt" button
        //cy.get('#edit')
        cy.get('.comment > .right > .services > ul > #edit')
            .first()
            .click()
    }

    editCancel() {
        //"cancel" button
        //later:m.s of this id
        cy.get('#cancel1')
            .click()
    }
    
    //later: what is that?
    // editCancelbyX() {
    //     //"X" button
    //     cy.get('')
    //         .click()
    // }

    editSave() {
        //"save" button
        cy.get('#comment-in-mark-down-mode')
            .first()
            .click()
    }

    editText(text) {
        //NOTE:do not make clear
        //Later : check that old text didnot cleared when click on (Edit)!
        cy.get('.ql-editor')
        //NOTE:the first is for the comment box above
            //.first()
            .clear()
            .last()
            .type(text) 
        return this
    }




                                
     //################################################## Hide and UnHide Comments################################################### 

    // hideComment() {
    //     //"hide" button
    //     cy.get('')
    //         .click()
    // }

    // unhideComment() {
    //     //"unhide" button
    //     cy.get('')
    //         .click()
    // }

    // // ################################################# vote Comments ################################################# 
 
    upvoteComment() {
        //"upvote" button
        cy.get('.comment > .right > .services > ul > :nth-child(1) > #upvote')
            .first()
            .click()
    }

    downvoteComment() {
        //"downvote" button
        cy.get('.comment > .right > .services > ul > :nth-child(3) > #downvote')
            .first()
            .click()
    }

    CancelUpvoteComment() {
        //"upvote" button
        cy.get('.comment > .right > .services > ul > .clicked > #cancel-upvote')
            .first()
            .click()
    }

    CancelDownvoteComment() {
        //"downvote" button
        cy.get('.comment > .right > .services > ul > .clicked > #cancel-downvote')
            .first()
            .click()
    }

    //?:-return?the concept?
    votesNum(){
        //get number ov votes
        return cy.get('.comment > .right > .services > ul > :nth-child(2)').first().invoke('text')
    }

    //?should the number be '32' or integer(32)?
    checkVotesNum(num){
        //get number ov votes
        cy.get('.comment > .right > .services > ul > :nth-child(2)')
            .first()
            .invoke('text')
            .should('equal',num)  
    }


    // ######################################### msg #######################

    // undoByMsg(){
    //     //"undo" button
    //     cy.get('')
    //         .click()

    // }

    DisappearancePopMsg(/*msg*/) {
        cy.get('.pop-message > .right > p')
            .first()
        //cy.contains(msg)
            .should('not.exist')     
    }

    //later:first or last?
    PopMsgSyntax(msg) {
        cy.get('.pop-message > .right > p')
            .first()
            .should('have.text',msg)           
    }

    //later:first or last?
    msgCancelbyX() {
        //"X" button which appeare when we pass over the msg
        cy.get('.pop-message > .left')
            .first()
            .click({force: true})
    }

   // ######################################### go to user profile #######################

//    //?later : get the user name from the link
    commentAsClick() {
        cy.get('#user-router')
            .click()
    }

   commentAsText() {   
        return cy.get('#user-router').invoke('text')
    }

    //later:important :update this id
    myCommentAuthorClick() {
       // cy.get('[data-v-3cf13948=""][data-v-224473ca=""] > .comment > .right > .user-name > #userName')
       cy.get('.comment > .right > .user-name > #userName')
            .first()   
            .click()
    }

    //later:important: update this id
    myCommentAuthorText() {   
        //return cy.get('[data-v-3cf13948=""][data-v-224473ca=""] > .comment > .right > .user-name > #userName').invoke('text')
        return cy.get('.comment > .right > .user-name > #userName').first().invoke('text')
    }

    // //later:important: update this id
    // FirstCommentAuthorClick() {
    //     // cy.get('.post-comments > :nth-child(1) > :nth-child(1) > :nth-child(2) > :nth-child(1) > #userName')
    //     cy.get(':nth-child(1) > :nth-child(2) > :nth-child(1) > #userName')   
    //         .first()
    //         .click()
    // }

    // //later:important: update this id
    // FirstCommentAuthorText() {   
    //    // return  cy.get('.post-comments > :nth-child(1) > :nth-child(1) > :nth-child(2) > :nth-child(1) > #userName').invoke('text')
    //    return cy.get(':nth-child(1) > :nth-child(2) > :nth-child(1) > #userName').first().invoke('text')
    // }

     //later:important: update this id
     LastCommentAuthorClick() {
        // cy.get('.post-comments > :nth-child(1) > :nth-child(1) > :nth-child(2) > :nth-child(1) > #userName')
        //cy.get(':nth-child(1) > :nth-child(2) > :nth-child(1) > #userName') 
        cy.get('.comment > .right > .user-name > #userName')  
            .last()
            .click({force: true})
    }

    //later:important: update this id
    LastCommentAuthorText() {   
       // return  cy.get('.post-comments > :nth-child(1) > :nth-child(1) > :nth-child(2) > :nth-child(1) > #userName').invoke('text')
       //return cy.get(':nth-child(1) > :nth-child(2) > :nth-child(1) > #userName').last().invoke('text')
       return cy.get('.comment > .right > .user-name > #userName').last().invoke('text')
    }


    
//    //?later : get the user name from the link
//    postOwner(){
//     cy.get('')
//         .click()
//     //?Later:get username   
//     username =  
//     url = Cypress.env('CYPRESSBASEURL') +':8085/User/'+username    
//     urlChecker(url)
// }


   //######################################## write a comment ######################################## 
   addText(text) {
        //cy.get('#text1')
        cy.get('.ql-editor')
            .first()
            .clear()
            .type(text) 
        return this
    }

    //later:important : we here assume that the comment will be added at top not at the bottom as the original reddit
    //so if the fron change this you have to change the first() to last() 
    checkCommentText(text) {
        //Check the comment text at the top of other comments
        //get the first comment text
        cy.get('.comment > .right > .content > p')
            .first()
            //.last()
            .should('have.text',text)
    }

    //assume reply on the first comment
    checkReplyText(text) {
        //Check the comment text at the top of other comments
        //get the first comment text
        cy.get('.comment > .right > .content > p')
            .eq(1)//second element of :.comment > .right > .content > p
            //.last()
            .should('have.text',text)
    }

    // markdownMode(){
    //     //"markdownMode" button
    //     cy.get('#markdown-mode')
    //         .click()
    // }

    // fancyMode(){
    //     //"fancyMode" button
    //     cy.get('#switch-f-mode')
    //         .click()
    // }

    submitComment(){
        //"comment" button
        //cy.get('#comment')
        cy.get('.comment-button')
            .first()
            .click()

        cy.wait(1000) 
    }

    DisabililtySubmitComment(){
        cy.get('.comment-button')
            .first()
            .should('be.disabled')
    }

    //later:important : we here assume that the comment will be added at tje top not at the bottom as the original reddit
    //so if the fron change this you have to change the first() to last() 
    checkCommentExist(comm){
        //Check adding the comment at the bottom of other comments
        cy.contains(comm)
            .should('be.exist')
    }

    checkCommentNotExist(comm){
        cy.contains(comm)
            .should('not.exist')
    }

    //?later:no need to this?
    //?later : how ti di the following:
    // checkCommentExist(comm){
    //     //Check adding the comment at the top of other comments
    //     //get the first comment text
    //     cy.get('')
    //         .should('have.text',comm)
    // }

    // checkCommentExist(comm){
    //     //Check adding the comment at the top of other comments
    //     //get the first comment text
    //     cy.get('.comment > .right > .content > p')
    //         .should('be.exist')
    // }

    //########################################  go home  ######################################## 
    closeCommentPage() {
        cy.get('#close')
            .click()
    }

    HomePage() {
        this.urlChecker(Cypress.env('CYPRESSBASEURL') +'/main')
    }
   
    // //########################################  post actions in Top Bar comment page  ######################################## 
    
    // upvotePost() {
    //     //"upvote" button
    //     //cy.get('#post-upvote')
    //     cy.get('.col-7 > .vote-box > #upvote')
    //         .click()
    // }

    // downvotePost() {
    //     //"downvote" button
    //    //cy.get('#post-downvote')
    //     cy.get('.col-7 > .vote-box > #downvote')  
    //         .click()
    // }

    // //?:-return?the concept?
    // postVotesNum(){
    //     //get number ov votes
    //     //return cy.get('.post-content > .flex-column > .p-2').invoke('text')
    //     return cy.get('.col-7 > .vote-box > .p-2').invoke('text')
    //     return cy.get('.col-7 > .vote-box > .p-2').invoke('text')
    // }
    // checkPostVotesNum(num){
    //     cy.get('.col-7 > .vote-box > .p-2')
    //         //.first()?
    //         .invoke('text')
    //         .should('equal',num)  
    // }





}
    export default commentObjects