
class SpamObjects {

    Navigate(commName) {
        cy.visit(Cypress.env('CYPRESSBASEURL') +'/r/'+ commName+'/about/spam')    
    }

    UrlChecker(url) {
        cy.url()
            .should('equal',url);
    } 
    
    // GoSpamPage() {
    //     cy.get('#spam-button')
    //         .click()
    // }

    CheckFirstPost(postTitle) {
        //return cy.get('')    
        //cy.get('#theBox > .box > .right-bar > .post-title > .title-box')  
        cy.get('.post-title > .title-box')
            .first()
            .should('have.text',postTitle);          
    }

    MarkAsSpam(x) {
        cy.get('.post-list > #spam-user-post-button')
            .eq(x)
            // .click()
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

    ViewTypeDropDown() {
        cy.get('#type')
            .click()
    }

    ViewPost() {
        cy.get('#sum-menuPosts')
            .click()
    }

    ViewComments() {
        cy.get('#sum-menuComments')
            .click()
    }

    // ViewPostsAndComments() {
    //     cy.get('')
    //         .click()
    // }

    Approve() {
        // cy.get('#theBox > .box > .right-bar > .footer > .buttons')
        //     .eq(0)
        // cy.contains('Approve')
        cy.get('*[id^="approve-button"]')
            .eq(0)
            .click()
    }

    // Remove() {
    //     cy.get('')
    //         .click()
    // }

    DisappearInstance(title) {
        cy.contains(title)
            .should('not.be.exist')
    }

    DisappearPost(title) {
       cy.get(':nth-child(1) > :nth-child(2) > :nth-child(2) > #theBox > .box > .right-bar > .post-title > .title-box')
    //    cy.get('.post-title > .title-box')
    //         .first() 
            .should('not.have.text',title)
    }

}

export default SpamObjects