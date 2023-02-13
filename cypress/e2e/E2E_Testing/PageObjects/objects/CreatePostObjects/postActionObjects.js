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
    
    //-----------------------------------------------## save and unsave posts----------------------------------------------- 

    savePost() {
        //"save" button
        cy.get('#sub-save')
            .click({force: true})
    }

    unsavePost() {
        //"unsave" button
        cy.get('#sub-unsave')
            .click({force: true})
    }

    DisappearanceUnsavePost() {
        //"unsave" button
        cy.get('#sub-unsave')
            .should('not.exist')
    }

    saveMsgSyntax() {
        cy.get('.right > p')
        // .invoke('text').then((str)=>{
        //    // str2=str.trim();
        //    cy.log(str)  
        // })
            // .should('have.text','Post saved successfully'); 
            .should('have.text','Post is saved successfully');   
           // .should('include.text','post saved successfully');          
    }

    unsaveMsgSyntax() {
        // cy.get('._7JH6kQpO-bx66b9ajIZrz') 
        cy.get('.right > p')
            // .should('have.text','Post unsaved successfully');    
            .should('have.text','Post is unsaved successfully');             
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

     //-----------------------------------------------# Hide and UnHide posts-----------------------------------------------## 

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
       // cy.get('_7JH6kQpO-bx66b9ajIZrz')
       cy.get('.right > p')
            // .should('have.text','Post hidden successfully.')   
            .should('have.text','post hidden successfully.')           
    }

    //?? later:important: what if there are more than one post have the same title of hidden post?
    disappHiddenfPost(postTitle) {
        //filtered
        // cy.contains(postTitle)
        //     //.should('not.exist')
        //     .should('not.be.visible')
        cy.get('.post-title')
            .first()
            //.invoke('text')
            .should('not.have.text',postTitle)
    }

    //  //-----------------------------------------------##Edit posts----------------------------------------------- 
    //later:m.s of this function
    editPostDisappearance() {
        //"edit" button
        cy.get('.sub-menu')
            .should('not.contain','Edit').and('not.contain','edit') 
    }

    // ----------------------------------------------- vote posts ----------------------------------------------- 
        
    upvotePost() {
        //"upvote" button
        //Later:child (3) need to changed to (1) i think?
        //? what ydmn that there is at least three posts in home page?
        // cy.get(':nth-child(3) > .d-flex > #upvote')
        cy.get('#upvote').first()
            .click({force: true})
    }

    downvotePost() {
        //"downvote" button
        //Later:child (3) need to changed to (1) i think?
        //? what ydmn that there is at least three posts in home page?
       // cy.get(':nth-child(3) > .d-flex > #downvote')
       cy.get('#downvote').first()
            .click()
    }

    //?:-return?the concept?
    votesNum(){
        //get number ov votes
      // return cy.get(':nth-child(3) > .d-flex > .p-2') .invoke('text')
      return cy.get('.p-2').first().invoke('text')
    }

    //?should the number be '32' or integer(32)?
    checkVotesNum(num){
        //get number ov votes
       // cy.get(':nth-child(3) > .d-flex > .p-2').invoke('text')
      
       //cy.get('.p-2 vote-count').first().invoke('text')
       cy.get('.p-2')
            .first()
            .invoke('text')
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


    // ----------------------------------------------- delete posts ----------------------------------------------- 
 
    deleteDisappearance() {
        //Disappearance of delete option in any posts rather than those of the users
        //"delete" button
        cy.get('.sub-menu')
            .should('not.contain','Delete').and('not.contain','delete') 
    }

     //Later:important ----------------------------------------------- share posts ----------------------------------------------- 









     

     //Later:important -----------------------------------------------  Report  ----------------------------------------------- 











    // -------------------------------------------------------  Messages  ----------------------------------------------- 

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
        //cy.get('.CloseIcon')
        cy.get('.left')
            .click()
    }

   // ----------------------------------------------- linking between posts and comments ----------------------------------------------- 
    
    comments() {
        //"Comments" button of the post first post
        //cy.get(':nth-child(3) > .post-content > .post-services > .services > :nth-child(1)')
        cy.get('#post-router-comment').first()
            .click()
    }

    //?Later: get the link of the post , then get the link of the comment page of this post
    checkCommmentPage(title) {
        //this.urlChecker(Cypress.env('CYPRESSBASEURL') +'/r/sub-com/comments/1/Hello%20World/')
        cy.url()
            .should('include','comments')
        cy.get('.content > [style="padding: 0px;"] > .post-title')
            .should('have.text',title+' ')    
    }

     // ----------------------------------------------- linking between posts and user profile ----------------------------------------------- 
    
    goUserProfile() {
        cy.get('#go-to-user-page')
            .click()
    }

    getFirstPostTitle(x=0) {
       //return cy.get(':nth-child(3) > .post-content > #post-router > .post-title > h3').invoke('text')//.as('posttext')
       return cy.get('.post-title').eq(x).invoke('text')//.as('posttext')
    }

    showSettingsSubmenu() {
        cy.get('#show-settings-submenu')
            .click()
    }

    //?Later: important: we have a serious problem in find saving in cypress!
    //?at the full window , saved appeare without the need to click on (...) 
    //?but in cypress window , it has to click on (...) !!
    //?which is totally different id !! 
    firstPostActionsList(x=0) {
        //cy.get(':nth-child(3) > .post-content > .post-services > .services > #submenu')
        //cy.get('#submenu')  
        cy.get('.post-services > .services > #submenu')
            //.first() 
            //.eq(1)
            .eq(x)
            // .click()
            .click({force: true})

    }

}
export default postActionObjects