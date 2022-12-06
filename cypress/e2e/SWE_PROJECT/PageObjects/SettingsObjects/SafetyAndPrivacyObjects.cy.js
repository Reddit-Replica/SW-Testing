class SafetyAndPrivacyObjects{

    //TODO: CHECK ALL IDS OF THIS PAGE OBJECTS
    navigate() {
        cy.visit(Cypress.env('CYPRESSBASEURL') +'/settings/privacy')
    }
    //----------------------------------------Safety Section----------------------------------------//

    //----------------------------------------Test #1----------------------------------------//     
    PrivacyAndSecurityFAQs(){
        cy.get('#app > div > div > div > div:nth-child(2) > div > div > div > p > span > a')
            .should('be.visible')
            .click()        
    }

    //----------------------------------------Test #2----------------------------------------//     
    PeopleYouHaveBlocked(){
        cy.get('[id=button-two]')
            .should('be.visible')
            .click()        
    }

    //----------------------------------------Test #3----------------------------------------//     
    RemoveABlockedUser(){
        cy.get('[id=button-three]')
            .should('be.visible')
            .click()        
    }
    
    //----------------------------------Privacy Section--------------------------------------//

    //----------------------------------------Test #4----------------------------------------//     
    ShowUpInSearchResults(){
        cy.get('[id=button-four]')
            .should('be.visible')
            .click()        
    }

    //----------------------------------------Test #5----------------------------------------//     
    PersonalizeAllOfRedditBasedOnTheOutboundLinksYouClickOn(){
        cy.get('[id=button-five]')
            .should('be.visible')
            .click()        
    }

    //----------------------------------------Test #6----------------------------------------//     
    PersonalizeAdsBasedOnInformationFromOurPartners(){
        cy.get('[id=button-six]')
            .should('be.visible')
            .click()        
    }

    //----------------------------------------Test #7----------------------------------------//     
    PersonalizeAdsBasedOnYourActivityWithOurPartners(){
        cy.get('[id=button-seven]')
            .should('be.visible')
            .click()        
    }

    //----------------------------------------Test #8----------------------------------------//     
    PersonalizeRecommendationsBasedOnYourGeneralLocation(){
        cy.get('[class=items-span]')
            .should('be.visible')
            .click()        
    }

    //----------------------------------------Test #9----------------------------------------//     
    PersonalizeRecommendationsBasedOnYourActivityWithOurPartners(){
        cy.get('[id=button-eight]')
            .should('be.visible')
            .click()        
    }

    //----------------------------------------Test #10----------------------------------------//     
    BlockNewUserAddButton(){
        cy.get('[id=button-nine]')
            .should('be.visible')
            .click()        
    }
    
    //----------------------------ADVANCED SECURITY Section--------------------------------//

    //----------------------------------------Test #11----------------------------------------//     
    UseTwoFactorAuthentication(){
        cy.get('[id=button-ten]')
            .should('be.visible')
            .click()        
    }

}
export default SafetyAndPrivacyObjects