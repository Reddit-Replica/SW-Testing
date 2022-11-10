//import postActionObjects from "C:\Users\samaa\CypressInstallation\cypress\e2e\pageObjects\postActionObjects.js"

class commentObjects{
    //const postAct = new postActionObjects();
    
    navigate() {
        //cy.visit('http://localhost:8085/comments')
        cy.visit('http://localhost:8085/r/sub-com/comments/1/Hello%20World/')
    } 

    
    urlChecker(url) {
        cy.url()
            .should('equal',url);
    }

    //################################################### save and unsave comments################################################# 

    //NOTE: this id need to be changed later
    saveComment() {
        //"save" button
        cy.get(':nth-child(3) > .comment > .right > .services > ul > :nth-child(8)')
            .click()
    }

    unsaveComment() {
        //"unsave" button
        cy.get('')
            .click()
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










     //###################################################Edit Comments################################################# 

    // editComment() {
    //     //"eidt" button
    //     cy.get('')
    //         .click()
    // }

    // editCancel() {
    //     //"cancel" button
    //     cy.get('')
    //         .click()
    // }
    
    // editCancelbyX() {
    //     //"X" button
    //     cy.get('')
    //         .click()
    // }

    // editSave() {
    //     //"save" button
    //     cy.get('')
    //         .click()
    // }

    // editText(text) {
    //     cy.get('')
    //         .type(text);
    //     return this
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

    // // ################################################# delete Comments ################################################# 
 
    // deleteComment() {
    //     //"delete" button
    //     cy.get('')
    //         .click()
    // }

    // deleteCancel() {
    //     //"cancel" button
    //     cy.get('')
    //         .click()
    // }

    // deleteCancelbyX() {
    //     //"X" button
    //     cy.get('')
    //         .click()
    // }

    // deleteSave() {
    //     //"Delete Comment" button
    //     cy.get('')
    //         .click()
    // }


    // ######################################### msg #######################

    checkMsgSyntax(msg){       
        cy.get('')
            .should('have.text',msg);

    }

    undoByMsg(){
        //"undo" button
        cy.get('')
            .click()

    }

    msgCancelbyX() {
        //"X" button which appeare when we pass over the msg
        cy.get('')
            .click()
    }

   // ######################################### go to user profile #######################

//    //?later : get the user name from the link
//    commentAs(){
//         cy.get('')
//             .click()
//         //?Later:get username 
//         username =    
//         url = 'http://localhost:8085/User/'+username ;  
//         urlChecker(url)
//    }

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
    checkCommentExist(){

    }

    //########################################  go home  ######################################## 
    closeCommentPage() {
        cy.get('#close')
            .click()
    }

    HomePage() {
        urlChecker('http://localhost:8085/main')
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
        return cy.get('.post-content > .flex-column > .p-2') //.invoke('text')
    }





}
    export default commentObjects