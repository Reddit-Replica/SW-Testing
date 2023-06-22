class RightBarObjects{
 
    Navigate() {
        cy.visit(Cypress.env('CYPRESSBASEURL') +'/main')
        
    }

    UrlChecker(url) {
        cy.url()
            .should('equal',url);
    } 
    
    CreatPostButton() {
        cy.get('#create-post-sidebar')
            .click()
    }

    CreateCommunityButton() {
        cy.get('#create-community-sidebar')
        //cy.contains('Create Community')
            .click()
    }
 
    SeeAllButton() {
        cy.get('#view-all-top-communities-2')
            .click()
    }
    //----------------- urls checks -----------------------//
    CreatePostPage() {
        this.UrlChecker(Cypress.env('CYPRESSBASEURL') +'/submit')
    }

    TopCommunityPage() {
        this.UrlChecker(Cypress.env('CYPRESSBASEURL') +'/subreddits/leaderboard/')
    }
    
}
export default RightBarObjects
