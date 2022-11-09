class BackToTopButtonObjects{

    navigate() {
        cy.visit('http://localhost:8085/main')
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