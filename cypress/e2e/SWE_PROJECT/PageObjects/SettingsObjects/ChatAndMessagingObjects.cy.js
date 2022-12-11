class ChatAndMessagingObjects {
    
    navigate(){
        cy.visit(Cypress.env('CYPRESSBASEURL') + '/settings/messaging')
    }

    //----------------------------------------Test #1----------------------------------------// 
    WhoCanSendYouChatRequests(){
    //TODO: [class=title] ==>need to be changed later
        cy.get('[class=title]')
            .should('be.visible')
            .click()
    }

    AccountsOlderThan30DaysChatRequests() {
        cy.get('[id=sum-menu-titleAccounts Older Than 30 Days]')
            .should('be.visible')
            .click()
    }

    EveryOneChatRequests() {
        cy.get('[id=sum-menu-titleEveryone]')
            .should('be.visible')
            .click()
    }

    NoBodyChatRequests() {
        cy.get('[id=sum-menuNobody]')
            .should('be.visible')
            .click()
    }
    
    //----------------------------------------Test #2----------------------------------------// 

    WhoCanSendYouPrivateMessages(){
    //TODO: [class=title] ==>need to be changed later
        cy.get('[class=title]')
            .should('be.visible')
            .click()
    }

    AccountsOlderThan30DaysPrivateMessages() {
        cy.get('[id=sum-menu-titleAccounts Older Than 30 Days]')
            .should('be.visible')
            .click()
    }

    EveryOnePrivateMessages() {
        cy.get('[id=sum-menu-titleEveryone]')
            .should('be.visible')
            .click()
    }

    NoBodyPrivateMessages() {
        cy.get('[id=sum-menuNobody]')
            .should('be.visible')
            .click()
    }    

    //----------------------------------------Test #3----------------------------------------// 

    InvisbleWhoCanSendYouPrivateMessages(){
        //TODO: [class=title] ==>need to be changed later
        cy.get('[class=title]')
            .should('not.be.visible')
            .click()
        }
        
    //----------------------------------------Test #4----------------------------------------//     
    InvisbleWhoCanSendYouChatRequests(){
        //TODO: [class=title] ==>need to be changed later
        cy.get('[class=title]')
            .should('not.be.visible')
            .click()
        }

    //----------------------------------------Test #6----------------------------------------//     
    InviteSomeoneToChat(){
        cy.get('[id=copy-link]')
            .should('be.visible')
            .click()        
    }

    //----------------------------------------Test #7----------------------------------------//     
    MarkAllAsread(){
        cy.get('[id=mark-as-read]')
            .should('be.visible')
            .click()    
    }
    
    
}

export default ChatAndMessagingObjects