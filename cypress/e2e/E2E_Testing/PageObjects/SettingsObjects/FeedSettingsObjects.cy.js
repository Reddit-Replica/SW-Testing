class FeedSettingsObjects{

    //----------------------------------------Test #1----------------------------------------//     
    
    FeedSettingsButton(){
        cy.get('[id=feed-settings]')
            .click()
    }

    AdultContent(){
        cy.get('[id=button-one]')
            .should('be.visible')
            .click()        
    }

    EnableAdultContent(){
        cy.get('[id=button-one]')
            .should('be.enabled')
    }
    
    DisableAdultContent(){
        cy.get('[id=button-one]')
            .should('not.be.selected')
    }
    

    //----------------------------------------Test #5----------------------------------------//     
    AutoplayMedia(){
        cy.get('[id=button-five]')
            .should('be.visible')
            .click()        
    }
    
    EnableAutoplayMedia(){
        cy.get('[id=button-five]')
            .should('be.enabled')    
    }

    DisableAutoplayMedia(){
        cy.get('[id=button-five]')
            .should('not.be.selected')   
    }
    
    SettingsChangedSuccessfully(){
        cy.get('[class=right]')
            .should('have.text',"settings changed successfully")
    }

}
export default FeedSettingsObjects