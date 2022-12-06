//1)Later: important : most of these ids is for the first post which is child(3)
//so, later we have to edit it (when it becomes child (1)
//NOTES:if ypu want to upvote any post rather than the first post , most of thses functions may not help

//2))Later: important : the class names of any msg or any (Undo) in msg or (X) in msg , need to be updated later

class postActionObjects {
    navigate() {
        cy.visit(Cypress.env('CYPRESSBASEURL') +'/main')
    } 

    
    urlChecker(url) {
        cy.url()
            .should('equal',url);
    }
 
    postOptions(){
       return cy.get('.sub-menu')        
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

    hidePost() {
        //"hide" button
        cy.get('#hide')
            .click()
    }

    //later:m.s of this function
    unhidePostDisappearance() {
        //"unhide" button
        cy.get('.sub-menu')
            .should('not.exist')
            //.should('not.contain','Unhide').and('not.contain','unhide').and('not.contain','UnHide') 
    }


    hideMsgSyntax() {
        cy.get('_7JH6kQpO-bx66b9ajIZrz ')
            .should('have.text','Post hidden successfully.')           
    }

    //later:important: what if there are more than one post have the same title of hidden post?
    disappHiddenfPost(postTitle) {
        cy.contains(postTitle)
            .should('not.exist')
    }

    //  //###################################################Edit posts################################################# 
    //later:m.s of this function
    editPostDisappearance() {
        //"edit" button
        cy.get('.sub-menu')
            .should('not.contain','Edit').and('not.contain','edit') 
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
 
    deleteDisappearance() {
        //Disappearance of delete option in any posts rather than those of the users
        //"delete" button
        cy.get('.sub-menu')
            .should('not.contain','Delete').and('not.contain','delete') 
    }

     //Later: ################################################# share posts ################################################# 

     //generl check , if all have the sme id:
    // checkMsgSyntax(msg) {       
    //     cy.get('_7JH6kQpO-bx66b9ajIZrz')
    //         .should('have.text',msg);

    // }

    // undoByMsg() {
    //     //"undo" button
    //     cy.get('._2iuoyPiKHN3kfOoeIQalDT _3zbhtNO0bdck0oYbYRhjMC HNozj_dKjQZ59ZsfEegz8')
    //         .click()
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

     // ################################################# linking between posts and user profile ################################################# 
    
    goUserProfile() {
        cy.get('#go-to-user-page')
            .click()
    }

    getFirstPostTitle() {
       return cy.get(':nth-child(3) > .post-content > #post-router > .post-title > h3').invoke('text')//.as('posttext')
    }

    showSettingsSubmenu() {
        cy.get('#show-settings-submenu')
            .click()
    }

    //?Later: important: we have a serious problem in find saving in cypress!
    //?at the full window , saved appeare without the need to click on (...) 
    //?but in cypress window , it has to click on (...) !!
    //?which is totally different id !! 
    firstPostActionsList() {
        cy.get(':nth-child(3) > .post-content > .post-services > .services > #submenu')
            .click()
    }

}
export default postActionObjects