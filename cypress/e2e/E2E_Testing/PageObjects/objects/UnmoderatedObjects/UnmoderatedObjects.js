
class UnmoderatedObjects {

    Navigate(commName) {
        cy.visit(Cypress.env('CYPRESSBASEURL') +'/r/'+ commName+'/about/unmoderated')    
    }

    UrlChecker(url) {
        cy.url()
            .should('equal',url);
    } 

    Approve() {
        cy.get('*[id^="approve-button"]')
            // .eq(0)
            //.last()
            .click({ multiple: true ,force: true})
    }

    Remove() {
        cy.get('*[id^="Remove-button"]')
            //.eq(0)
            // .click({ multiple: true },{force: true})
            .click({ multiple: true ,force: true})
    }
    

    ExternalApprove() {
        cy.get('*[id^="approve-user-post-button"]')
            .eq(0)
            .click({force: true})
    }

    ExternalRemove() {
        cy.get('*[id^="remove-user-post-button"]')
            .eq(0)
            .click({force: true})
    }

    ExternalSpam() {
        cy.get('*[id^="spam-user-post-button"]')
            .eq(0)
            .click({force: true})
    }
    

    TimeOrderDropDown() {
        cy.get('#time')
            .click()
    }

    Newest() {
        // cy.get('#sum-menu-titleNewest\ First')
        // cy.get('.sub-menu')
        cy.get('.icon-box')
            .eq(0)
            .click()
    }
    
    Oldest() {
        // cy.get('#sum-menuOlder\ First')
        // cy.get('.sub-menu')
        cy.get('.icon-box')
            .eq(1)
            .click()
    }

        
    DisappearPost(title) {
        cy.get(':nth-child(1) > :nth-child(2) > :nth-child(2) > #theBox > .box > .right-bar > .post-title > .title-box')
     //    cy.get('.post-title > .title-box')
     //         .first() 
             .should('not.have.text',title)
    }

    
    DisappearInstance(title) {
        cy.contains(title)
            // .should('not.be.exist')
            .should('not.be.visible')
    }

    
    CheckFirstPost(postTitle) {
        //return cy.get('')    
        //cy.get('#theBox > .box > .right-bar > .post-title > .title-box')  
        cy.get('.post-title > .title-box')
            .first()
            .should('have.text',postTitle);          
    }

    // ViewTypeDropDown() {
    //     cy.get('#type')
    //         .click()
    // }

    // ViewPost() {
    //     cy.get('#sum-menuPosts')
    //         .click()
    // }

    // MarkAsSpam() {
    //     cy.get('.post-list > #spam-user-post-button')
    //         //.eq(x)
    //         //.first()
    //         // .click()
    //         .click({force: true})
    // }


    // GoUnmoderatedPage() {
    //     cy.get('#spam-button')
    //         .click()
    // }

    // ViewComments() {
    //     cy.get('#sum-menuComments')
    //         .click()
    // }

    // // ViewPostsAndComments() {
    // //     cy.get('')
    // //         .click()
    // // }


}

export default UnmoderatedObjects