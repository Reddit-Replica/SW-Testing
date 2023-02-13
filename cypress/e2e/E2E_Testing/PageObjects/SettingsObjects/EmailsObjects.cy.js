class EmailsObjects{

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
        cy.get('.submit-login')
            .click()
    }

    navigate() {
        cy.visit(Cypress.env('CYPRESSBASEURL') + '/login')
    }

    TopRightBar(){
        cy.get('[id=arrod-down-user-name]')
            .last()
            .click()
    }

    UserSettings(){
        cy.get('[id=go-to-settings]')
            .click()
    }
    
    EmailSettings(){
        cy.get('a[href*="/settings/emails"]')
            .click()
    }

    //----------------------------------------Test #9----------------------------------------//     
    NewFollowers(){
        cy.get('[id=btn9]')
            .should('be.visible')
            .click()
    }

    EnableNewFollowers(){
        cy.get('[id=btn9]')
            .should('be.enabled')
    }
    
    DisableNewFollowers(){
        cy.get('[id=btn9]')
            .should('not.be.selected')
    }
    

    //----------------------------------------Test #13----------------------------------------//     
    UnsubscribeFromAllEmails(){
        cy.get('[id=btn13]')
            .should('be.visible')
            .click()        
    }

    EnableUnsubscribeFromAllEmails(){
        cy.get('[id=btn13]')
            .should('be.enabled')      
    }
    
    DisableUnsubscribeFromAllEmails(){
        cy.get('[id=btn13]')
            .should('not.be.selected')
    }

    SettingsChangedSuccessfully(){
        cy.get('[class=right]')
            .should('have.text',"settings changed successfully")
    }
    
    
    /*

    //----------------------------------------Test #1----------------------------------------//     
    InboxMessages(){
        cy.get('[id=btn1]')
            .should('be.visible')
            .click()        
    }

    //----------------------------------------Test #2----------------------------------------//     
    ChatRequests(){
        cy.get('[id=btn2]')
            .should('be.visible')
            .click()        
    }

    //----------------------------------------Test #3----------------------------------------//     
    NewUserWelcome(){
        cy.get('[id=btn3]')
            .should('be.visible')
            .click()        
    }

    //----------------------------------------Test #4----------------------------------------//     
    CommentsOnYourPosts(){
        cy.get('[id=btn4]')
            .should('be.visible')
            .click()        
    }

    //----------------------------------------Test #5----------------------------------------//     
    RepliesToYourComments(){
        cy.get('[id=btn5]')
            .should('be.visible')
            .click()        
    }

    //----------------------------------------Test #6----------------------------------------//     
    UpvotesOnYourPosts(){
        cy.get('[id=btn6]')
            .should('be.visible')
            .click()        
    }

    //----------------------------------------Test #7----------------------------------------//     
    UpvotesOnYourComments(){
        cy.get('[id=btn7]')
            .should('be.visible')
            .click()        
    }

    //----------------------------------------Test #8----------------------------------------//     
    UsernameMentions(){
        cy.get('[id=btn8]')
            .should('be.visible')
            .click()        
    }

        //----------------------------------------Test #10----------------------------------------//     
    DailyDigest(){
        cy.get('[id=btn10]')
            .should('be.visible')
            .click()        
    }

    //----------------------------------------Test #11----------------------------------------//     
    WeeklyRecap(){
        cy.get('[id=btn11]')
            .should('be.visible')
            .click()        
    }

    //----------------------------------------Test #12----------------------------------------//     
    CommunityDiscovery(){
        cy.get('[id=btn12]')
            .should('be.visible')
            .click()        
    }

    */


}
export default EmailsObjects