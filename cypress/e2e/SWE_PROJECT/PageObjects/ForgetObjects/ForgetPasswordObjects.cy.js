
class ForgetPasswordObjects {
    navigate() {
        cy.visit(Cypress.env("CYPRESSBASEURL")+'/login')
        console.log("CYPRESSBASEURL", "waer")
    } 
    
    //----------------------------------------Test #1----------------------------------------// 
    
    ForgetPasswordHyperLink(){
        //click on the hyperlink of Password
        cy.get('#app > div > div > div.sec-largest-div > div > form > div.forgot-usr-pass > a:nth-child(4)')
            .should('be.visible')
            .click()
            return this
    }

    UrlEqualChecker(url){
        cy.url()
            .should('eq', url)
    }

    UrlNotEqualChecker(url){
        cy.url()
        .should('not.eq' , url )

    }
    

    EnterEmail(Password) {
        cy.get('[id=emailAddress]')
            .should('be.visible')
            .clear()
            .type(Password)
        return this
    }

    EnterUserName(password) {
        cy.get('[id=userName]')
            .should('be.visible')
            .clear()
            .type(password)
        return this
    }
    

    ClickOnResetPasswordButton(){
        cy.get('[id=reset-btn]')
            .should('be.visible')
            .click()
    }

    //----------------------------------------Test #2----------------------------------------// 
    CLickOnLoginButton(){
        cy.get('[id=login]')
            .should('be.visible')
            .click()
    }
    

    GoBack(){
        cy.go('back')
    }

    ContainsChecker(checkingContent){
        cy.get('[id=emailAddress]')
            .should('be.visible')
            .contains()
    }

    //----------------------------------------Test #3----------------------------------------// 
    ClickOnSignUpButton(){
        cy.get('[id=signup]')
            .should('be.visible')
            .click()
    }

    //----------------------------------------Test #4----------------------------------------// 
    ClickOnHelpButton(){
        cy.get('[id=help]')
            .should('be.visible')
            .click()
    }
    
    //----------------------------------------Test #5----------------------------------------// 
    InvalidMessage(){
        cy.get('[class=invalid]')
            .should('be.visible')
            .contains('Please enter an email address to continue')
    }

    //----------------------------------------Test #6----------------------------------------// 
    NotInValidMessage(){
        cy.get('[class=invalid]')
            .should('be.visible')
            .should('not.eq' , 'Please enter an email address to continue')
    }



}
export default ForgetPasswordObjects