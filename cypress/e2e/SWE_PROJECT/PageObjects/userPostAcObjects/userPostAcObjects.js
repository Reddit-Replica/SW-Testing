class userPostAcObjects {
    navigate() {
        cy.visit('http://localhost/main')
    } 

    
    urlChecker(url) {
        cy.url()
            .should('equal',url);
    }

    
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
        cy.get('._7JH6kQpO-bx66b9ajIZrz') 
            .should('have.text','Post saved successfully');          
    }

    unsaveMsgSyntax() {
        cy.get('._7JH6kQpO-bx66b9ajIZrz') 
            .should('have.text','Post unsaved successfully');          
    }

    saveUndoByMsg() {
        //"undo" button
        cy.get('._2iuoyPiKHN3kfOoeIQalDT _3zbhtNO0bdck0oYbYRhjMC HNozj_dKjQZ59ZsfEegz8')
            .click()

    }

    unsaveUndoByMsg() {
        //"undo" button
        cy.get('._2iuoyPiKHN3kfOoeIQalDT _3zbhtNO0bdck0oYbYRhjMC HNozj_dKjQZ59ZsfEegz8')
            .click()

    }


    //################################################## Hide and UnHide posts################################################### 

    unhidePost() {
        //"unhide" button
        cy.get('')
            .click()
    }

    unhideMsgSyntax() {
        cy.get('') 
            .should('have.text','Post unhidden successfully.')          
    }

    // //later:change this func
    // unhideMsgDisappearance() {
    //     cy.contain('Post unhidden successfully') 
    //         .should('not.exist')         
    // }

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
        this
    }

    
    editMsgSyntax() {
        cy.get('') 
            .should('have.text','Post successfully edited');          
    }

    //NOTE: there is no (undo) in edit msg

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
        cy.get('') 
            .should('have.text','Post deleted successfully.');           
    }
    //NOTE: there is no (undo) in final delete msg

    deletedPostDisappearance() {
        //Disappearance of deleted post 
        cy.get('')
            .should('not.exist')  
    }

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
       return cy.get(':nth-child(3) > .d-flex > .p-2') .invoke('text')
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
 
    // deleteDisappearance() {
    //     //Disappearance of delete option in any posts rather than those of the users
    //     //"delete" button
    //     cy.get('.sub-menu')
    //         .should('not.contain','Delete').and('not.contain','delete') 
    // }

     //?later : check if the msg diappeared or not after click on (x)
     msgCancelbyX() {
        //"X" button which appeare when we pass over the msg
        cy.get('.CloseIcon')
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
        this.urlChecker('http://localhost/r/sub-com/comments/1/Hello%20World/')
    }

    getFirstPostTitle() {
        return cy.get(':nth-child(3) > .post-content > #post-router > .post-title > h3').invoke('text')//.as('posttext')
    }

     firstPostActionsList() {
        cy.get(':nth-child(3) > .post-content > .post-services > .services > #submenu')
            .click()
    }
 

}
export default userPostAcObjects