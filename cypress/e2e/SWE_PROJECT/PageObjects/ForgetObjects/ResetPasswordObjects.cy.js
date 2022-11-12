
class ResetPasswordObjects {
    navigate() {
        cy.visit('http://localhost/reset-password/:id/:token')
    } 
    
    TitleChecker(){
        cy.title()
            .should('eq' , 'reddit.com: Reset your password')
    }

    NewPassword(password){
        cy.get('[id=password]')
            .should('be.visible')
            .type(password)
        
        return this
    }

    VerifyPassword(verifyPassword){
        cy.get('[id=password-verify]')
            .should('be.visible')
            .type(verifyPassword)
        
        return this
    }

    UrlEqualChecker(url){
        cy.url()
            .should('eq', url)
    }
    
    ClickOnSetPasswordButton(){
        cy.get('[class=AnimatedForm__submitButton]')
            .should('be.visible')
            .click()
    }

    CLickOnLoginButton(){
        cy.get('[id=login]')
            .should('be.visible')
            .click()
    }

    GoBack(){
        cy.go('back')
    }
    
    GoForward(){
        cy.go('forward')
    }
    

    ClickOnSignUpButton(){
        cy.get('[id=signup]')
            .should('be.visible')
            .click()
    }

    InvalidMessageNewPassword(){
        cy.get('[class=invalid]')
            .contains('Password must be at least 8 characters long')
    }

    NotInValidMessageNewPassword(){
        cy.get('[class=invalid]')
            .should('not.eq' , 'Password must be at least 8 characters long')
    }

    InvalidMessageVerifyPassword(){
        cy.get('[class=invalid]')
            .contains('Password must match')
    }

    NotInValidMessageVerifyPassword(){
        cy.get('[class=invalid]')
            .should('not.eq' , 'Password must match')
    }

    EmptyCheckerNewPassword(){
        cy.get('[id=password]')
            .should('be.empty')
    }

    EmptyCheckerVerifyPassword(){
        cy.get('[id=password]')
            .should('be.empty')
    }
    
}
export default ResetPasswordObjects