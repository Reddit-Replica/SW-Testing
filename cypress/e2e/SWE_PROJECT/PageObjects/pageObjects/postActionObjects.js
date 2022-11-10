
class postActionObjects {
    navigate() {
        cy.visit('http://localhost:8085/')
    } 

    
    urlChecker(url) {
        cy.url()
            .should('equal',url);
    }
 
    // postOptions(){
    //     cy.get('')
    //         .children()
    //         .first()
            
    // }
    
    //################################################### save and unsave posts################################################# 

    savePost() {
        //"save" button
        cy.get('#sub-save')
            .click()
    }

    unsavePost() {
        //"unsave" button
        cy.get('#sub-unsave')
            .click()
    }

    saveMsgSyntax() {
        return cy.get('')           
    }

    unsaveMsgSyntax() {
        return cy.get('')           
    }

    saveUndoByMsg() {
        //"undo" button
        cy.get('')
            .click()

    }

    unsaveUndoByMsg() {
        //"undo" button
        cy.get('')
            .click()

    }

     //################################################## Hide and UnHide posts################################################### 

    hidePost() {
        //"hide" button
        cy.get('#hide')
            .click()
    }

    unhidePost() {
        //"unhide" button
        cy.get('')
            .click()
    }

    hideMsgSyntax() {
        return cy.get('')           
    }

    unhideMsgSyntax() {
        return cy.get('')           
    }

    hideUndoByMsg() {
        //"undo" button
        cy.get('')
            .click()

    }

    unhideUndoByMsg() {
        //"undo" button
        cy.get('')
            .click()

    }







     //###################################################Edit posts################################################# 

    editPost() {
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
        cy.get('')
            .type(text);
        return this
    }

    
    editMsgSyntax() {
        return cy.get('')           
    }

    //NOTE: there is no (undo) in edit msg



    // ################################################# vote posts ################################################# 
 
    upvotePost() {
        //"upvote" button
        //Later:child (3) need to changed to (1) i think?
        //? what ydmn that there is at least three posts in home page?
        cy.get(':nth-child(3) > .d-flex > #upvote')
            .click()
    }

    downvotePost() {
        //"downvote" button
        //Later:child (3) need to changed to (1) i think?
        //? what ydmn that there is at least three posts in home page?
        cy.get(':nth-child(3) > .d-flex > #downvote')
            .click()
    }

    //?:-return?the concept?
    votesNum(){
        //get number ov votes
        return cy.get(':nth-child(3) > .d-flex > .p-2') //.invoke('text')
    }

    //?should the number be '32' or integer(32)?
    checkVotesNum(num){
        //get number ov votes
        cy.get(':nth-child(3) > .d-flex > .p-2').invoke('text')
            .should('equal',num); 
    }

//     // cypress test code
// cy.get('[data-testid="num"]').then(($span) => {
//     // capture what num is right now
//     const num1 = parseFloat($span.text())
  
//     cy.get('button')
//       .click()
//       .then(() => {
//         // now capture it again
//         const num2 = parseFloat($span.text())
  
//         // make sure it's what we expected
//         expect(num2).to.eq(num1 + 1)
//       })
//   })


    // ################################################# delete posts ################################################# 
 
    deletePost() {
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
        //"Delete post" button
        cy.get('')
            .click()
    }
  
    deleteMsgSyntax() {
        return cy.get('')           
    }

    //NOTE: there is no (undo) in final delete msg





     //Later: ################################################# share posts ################################################# 

     //generl check , if all have the sme id:
    // checkMsgSyntax(msg) {       
    //     cy.get('')
    //         .should('have.text',msg);

    // }

    // undoByMsg() {
    //     //"undo" button
    //     cy.get('')
    //         .click()

    // }

    
    //?later : check if the msg diappeared or not after click on (x)
    msgCancelbyX() {
        //"X" button which appeare when we pass over the msg
        cy.get('')
            .click()
    }


   // ################################################# linking between posts and comments ################################################# 
    
    comments() {
        //"Comments" button of the post first post
        cy.get(':nth-child(3) > .post-content > .post-services > .services > :nth-child(1)')
            .click()
    }

    //?Later: get the link of the post , then get the link of the comment page of this post
    checkCommmentPage() {
        urlChecker('http://localhost:8085/comments')
    }






}
    export default postActionObjects