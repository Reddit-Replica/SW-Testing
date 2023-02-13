class BackToTopButtonObjects{

    //----------------------------------------General functions----------------------------------------//     
    enterUsername(username) {
        cy.get('[id=user-name]')
            .clear()
            .type(username) 
        return this
    }

    enterPassword(pswd) {
        cy.get('#password')
            .clear()
            .type(pswd)
        return this
    }

    submit() {
        //"LOG IN" button
        cy.get('.submit-login')
            .click()
    }

    navigate() {
        cy.visit(Cypress.env('CYPRESSBASEURL') +'/login')
    }

    //----------------------------------------Test #1----------------------------------------//     
    ScrolDown(){
        cy.scrollTo(0,300)
    }

    BackToTopButtonAfterScrolling(){
        cy.get('[class=back-button]')
            .should('be.visible')
            .click()
    }

    //----------------------------------------Test #2----------------------------------------//     
    BackToTopButtonBeforeScrolling(){
        cy.get('[class=back-button]')
            .should('not.be.visible')      
    }

}
export default BackToTopButtonObjects