class AccountObjects {
    
    navigate(){
        cy.visit('http://localhost/settings/account')
    }

    //----------------------------------------ACCOUNT PREFERENCES----------------------------------------// 
    EmailAddress(){
        cy.get('[id=change]')
            .should('be.visible')
            .click()
    }

    //TODO: CHECK THE ID OF IT LATER
    Gender() {
        cy.get('[id=gender-menu]')
            .should('be.visible')
            .click()
    }

    DisplayLanguageBeta() {
        cy.get('[id=language]')
            .should('be.visible')
            .click()
    }

    Country() {
        cy.get('[id=scountry]')
            .should('be.visible')
            .click()
    }
    
    //----------------------------------------CONNECTED ACCOUNTS----------------------------------------// 

    ConnectToTwitter(){
        cy.get('[id=twitter]')
            .should('be.visible')
            .click()
    }

    ConnectToApple() {
        cy.get('[id=apple]')
            .should('be.visible')
            .click()
    }

    ConnectedToGoogle() {
        cy.get('[id=google]')
            .should('be.visible')
            .click()
    }

    NoBodyPrivateMessages() {
        cy.get('[id=sum-menuNobody]')
            .should('be.visible')
            .click()
    }    

    //----------------------------------------BETA TESTS----------------------------------------// 

    OptIntoBetaTests(){
        cy.get('[id=sb-2]')
            .should('not.be.visible')
            .click()
        }
        
    OptOutOfTheRedesign(){
        //TODO: [class=title] ==>need to be changed later
        cy.get('[id=sb-1]')
            .should('not.be.visible')
            .click()
        }

    //----------------------------------------DELETE ACCOUNT----------------------------------------//     
    InviteSomeoneToChat(){
        cy.get('[id=delete-account]')
            .should('be.visible')
            .click()        
    }
    
}

export default AccountObjects