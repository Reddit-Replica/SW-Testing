
class ForgetUserNameObjects {
    navigate() {
        cy.visit('http://localhost/login')
    } 
    
    //----------------------------------------Test #1----------------------------------------// 
    
    ForgetUserNameHyperLink(){
        //click on the hyperlink of username
        cy.get('#app > div > div > div.sec-largest-div > form > div.forgot-usr-pass > a:nth-child(2)')
            .should('be.visible')
            .click()
            return this
    }

    /*
    ReCAPTCHA(){
        cy.get('iframe')
            .first()
            .then((recaptchaIframe) => {
                const body = recaptchaIframe.contents()
                cy.get('[id=recaptcha-anchor]')
                    .click()
        })
            
    }
    */

    UrlEqualChecker(url){
        cy.url()
            .should('eq', url)
    }

    UrlNotEqualChecker(url){
        cy.url()
        .should('not.eq' , url )

    }
    

    EnterEmail(username) {
        cy.get('[id=emailAddress]')
            .should('be.visible')
            .clear()
            .type(username)
        return this
    }

    ClickOnEmailButton(){
        cy.get('[id=emailme]')
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
export default ForgetUserNameObjects