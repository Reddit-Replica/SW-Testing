
class commentObjects{
    //const postAct = new postActionObjects(); 
    
    navigate() {
        //cy.visit('http://localhost/comments')
        //cy.visit('http://localhost/r/sub-com/comments/1/Hello%20World/')

        cy.visit('http://localhost/main')
        cy.get(':nth-child(3) > .post-content > .post-services > .services > :nth-child(1)')
            .click()
    } 

    urlChecker(url) {
        cy.url()
            .should('equal',url);
    }

    //################################################### save and unsave comments################################################# 

    //NOTE: this id need to be changed later
    saveComment() {
        //"save" button
        cy.get('.post-comments > :nth-child(1) > :nth-child(1) > :nth-child(2) > :nth-child(3) > ul > :nth-child(8)')
            .click()
    }

    unsaveComment() {
        //"unsave" button
        cy.get('')
            .click()
    }

    saveMsgSyntax() {
        cy.get('._7JH6kQpO-bx66b9ajIZrz') 
            .should('have.text','Comment saved successfully');          
    }

    unsaveMsgSyntax() {
        cy.get('._7JH6kQpO-bx66b9ajIZrz') 
            .should('have.text','Comment unsaved successfully');          
    }

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
        //"save" button
        cy.get(':nth-child(3) > .comment > .right > .services > ul > :nth-child(8)')
            .click()
    }

    unfollowComment() {
        //"unsave" button
        cy.get('')
            .click()
    }

    followMsgSyntax() {
        cy.get('._7JH6kQpO-bx66b9ajIZrz') 
            .should('have.text','Followed! You’ll get updates when there’s new activity.');          
    }

    unfollowMsgSyntax() {
        cy.get('._7JH6kQpO-bx66b9ajIZrz') 
            .should('have.text','Unfollowed. You won’t get updates on this comment anymore.');          
    }
     //################################################## reply on Comments################################################### 

     //those ids is for the first comment 
     //later:edit them
    replyOnComment() {
        //"unsave" button
        cy.get('')
            .click()
    }

    addReplyText(text) {
        cy.get('#text1')
            .clear()
            .type(text);
        return this
    }

    replyMarkdownMode(){
        //"markdownMode" button
        cy.get('')
            .click()
    }

    replyFancyMode(){
        //"fancyMode" button
        cy.get('')
            .click()
    }

    submitCommentReply(){
        //"" button
        cy.get('')
            .click()
    }

    replyCancel() {
        //"cancel" button
        cy.get('')
            .click()
    }

    sendMeReplyNotif() {
        cy.get('')
            .check()
    }

    sendMeReplyNotifChecked() {
        cy.get('')
            .check()
    }
    

    // // ################################################# delete Comments ################################################# 
 
    deleteComment() {
        //"delete" button
        cy.get('')
            .click()
    }

    deleteCancel() {
        //"cancel" button
        cy.get('')
            .click()
    }

    deleteCancelbyX() {
        //"X" button
        cy.get('')
            .click()
    }

    deleteSave() {
        //"Delete Comment" button
        cy.get('')
            .click()
    }

    deleteSepearetedForm() {
        cy.get('')
            .should('be.visible')
    }

    deleteSepFormMsg() {
        cy.get('')
            .should('have.text','Are you sure you want to delete your comment?')
    }

    deleteSepFormMsgHeader() {
        cy.get('')
            .should('have.text','Delete comment')
    }

    keepComment() {
        cy.get('')
            .click()
    }

      //###################################################Edit Comments################################################# 

    editComment() {
        //"eidt" button
        cy.get('')
            .click()
    }

    editCancel() {
        //"cancel" button
        cy.get('')
            .click()
    }
    
    editCancelbyX() {
        //"X" button
        cy.get('')
            .click()
    }

    editSave() {
        //"save" button
        cy.get('')
            .click()
    }

    editText(text) {
        //NOTE:do not make clear
        //Later : check that old text didnot cleared when click on (Edit)!
        cy.get('')
            .type(text);
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
        cy.get('')
            .click()
    }

    downvoteComment() {
        //"downvote" button
        cy.get('')
            .click()
    }

    //?:-return?the concept?
    votesNum(){
        //get number ov votes
        return cy.get('') 
    }

    //?should the number be '32' or integer(32)?
    checkVotesNum(num){
        //get number ov votes
        cy.get('')
            .should('equal',num); 
    }


    // ######################################### msg #######################

    // checkMsgSyntax(msg){       
    //     cy.get('')
    //         .should('have.text',msg);

    // }

    // undoByMsg(){
    //     //"undo" button
    //     cy.get('')
    //         .click()

    // }

    msgCancelbyX() {
        //"X" button which appeare when we pass over the msg
        cy.get('')
            .click()
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
        cy.get('[data-v-3cf13948=""][data-v-224473ca=""] > .comment > .right > .user-name > #userName')
            .click()
    }

    //later:important: update this id
    myCommentAuthorText() {   
        return cy.get('[data-v-3cf13948=""][data-v-224473ca=""] > .comment > .right > .user-name > #userName').invoke('text')
    }

    //later:important: update this id
    FirstCommentAuthorClick() {
        cy.get('.post-comments > :nth-child(1) > :nth-child(1) > :nth-child(2) > :nth-child(1) > #userName')
            .click()
    }

    //later:important: update this id
    FirstCommentAuthorText() {   
        return  cy.get('.post-comments > :nth-child(1) > :nth-child(1) > :nth-child(2) > :nth-child(1) > #userName').invoke('text')
    }



    
//    //?later : get the user name from the link
//    postOwner(){
//     cy.get('')
//         .click()
//     //?Later:get username   
//     username =  
//     url = 'http://localhost:8085/User/'+username ;  
//     urlChecker(url)
// }


   //######################################## write a comment ######################################## 
   addText(text) {
        cy.get('#text1')
            .clear()
            .type(text);
        return this
    }

    checkCommentText(text) {
        //checkCommentText for the first comment
        cy.get('')
            .should('have.text',text)
    }

    markdownMode(){
        //"markdownMode" button
        cy.get('#markdown-mode')
            .click()
    }

    fancyMode(){
        //"fancyMode" button
        cy.get('#switch-f-mode')
            .click()
    }

    submitComment(){
        //"comment" button
        cy.get('#comment')
            .click()
    }

    //?later : how ti di the following:
    checkCommentExist(comm){
        //Check adding the comment at the top of other comments
        //get the first comment text
        cy.get('')
            .should('have.text',comm)
    }

    //########################################  go home  ######################################## 
    closeCommentPage() {
        cy.get('#close')
            .click()
    }

    HomePage() {
        urlChecker('http://localhost/main')
    }
   
    //########################################  post actions in comment page  ######################################## 
    
    upvotePost() {
        //"upvote" button
        //Later:child (3) need to changed to (1) i think?
        //? what ydmn that there is at least three posts in home page?
        cy.get('#post-upvote')
            .click()
    }

    downvotePost() {
        //"downvote" button
        //Later:child (3) need to changed to (1) i think?
        //? what ydmn that there is at least three posts in home page?
        cy.get('#post-downvote')
            .click()
    }

    //?:-return?the concept?
    postVotesNum(){
        //get number ov votes
        return cy.get('.post-content > .flex-column > .p-2').invoke('text')
    }
    checkVotesNum(num){
        //get number of votes for the first comment
        cy.get('')
            .invoke('text')
            .should('equal',num); 
    }





}
    export default commentObjects