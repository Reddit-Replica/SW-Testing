class userPostAcObjects {
    navigate() {
        cy.visit('http://localhost/main')
    } 

    
    urlChecker(url) {
        cy.url()
            .should('equal',url);
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

    //later:change this func
    unhideMsgDisappearance() {
        cy.contain('Post unhidden successfully') 
            .should('not.exist')         
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

}
export default userPostAcObjects