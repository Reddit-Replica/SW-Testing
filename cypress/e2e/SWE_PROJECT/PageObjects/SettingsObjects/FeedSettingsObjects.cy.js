class FeedSettingsObjects{

    navigate() {
        cy.visit(Cypress.env('CYPRESSBASEURL') +'/settings/feed')
    }
    //----------------------------CONTENT PREFERENCES Section--------------------------------//

    //----------------------------------------Test #1----------------------------------------//     
    AdultContent(){
        cy.get('[id=button-one]')
            .should('be.visible')
            .click()        
    }

    //----------------------------------------Test #2----------------------------------------//     
    SafeBrowsingMode(){
        cy.get('[id=button-two]')
            .should('be.visible')
            .click()        
    }

    //----------------------------------------Test #3----------------------------------------//     
    EnableHomeFeedRecommendations(){
        cy.get('[id=button-three]')
            .should('be.visible')
            .click()        
    }

    //----------------------------------------Test #4----------------------------------------//     
    EnableLiveRecommendations(){
        cy.get('[id=button-four]')
            .should('be.visible')
            .click()        
    }

    //----------------------------------------Test #5----------------------------------------//     
    AutoplayMedia(){
        cy.get('[id=button-five]')
            .should('be.visible')
            .click()        
    }

    //----------------------------------------Test #6----------------------------------------//     
    ReduceAnimations(){
        cy.get('[id=button-six]')
            .should('be.visible')
            .click()        
    }

    //----------------------------------------Test #7----------------------------------------//     
    CommunityThemes(){
        cy.get('[id=button-seven]')
            .should('be.visible')
            .click()        
    }

    //----------------------------------------Test #8----------------------------------------//     
    CommunityContentSort(){
        cy.get('[class=items-span]')
            .should('be.visible')
            .click()        
    }

    //----------------------------------------Test #9----------------------------------------//     
    RememberPerCommunity(){
        cy.get('[id=button-eight]')
            .should('be.visible')
            .click()        
    }

    //----------------------------------------Test #10----------------------------------------//     
    OpenPostsInNewTab(){
        cy.get('[id=button-nine]')
            .should('be.visible')
            .click()        
    }
    
    //----------------------------CONTENT PREFERENCES Section--------------------------------//

    //----------------------------------------Test #11----------------------------------------//     
    DefaultToMarkdown(){
        cy.get('[id=button-ten]')
            .should('be.visible')
            .click()        
    }

}
export default FeedSettingsObjects