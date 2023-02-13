class SafetyAndPrivacyObjects{

    //----------------------------------------Safety Section----------------------------------------//

    //----------------------------------------Test #1----------------------------------------//     
    SafetyAndPrivacyButton(){
        cy.get('[id=privacy-settings]')
            .click()
    }

    PrivacyAndSecurityFAQs(){
        cy.get('[id=privacy-settings]')
            .should('be.visible')
            .click()        
    }


    BlockANewUser(blockedusername){
        cy.get('[id=block-new-user-input]')
            .clear()
            .type(blockedusername)
    }

    ClickOnAddToBLockAUser(){
        cy.get('[id=Add-block-new-user-button]')
            .click()
    }

    ErrorMessage(){
        cy.get('[class=right]')
            .should('have.text',"An error has occured. Please try again later")
    }

    NowBLocked(userName){
        cy.get('[class=right]')
            .should('have.text',userName+" is now blocked")
    }

    RemovedABlockedUser(){
        cy.get('[id=remove-undefined]')
            .click()
    }

    NowUnBLocked(userName2){
        cy.get('[class=right]')
            .should('have.text',userName2+' is now unblocked')
    }

    SearchForABlockedUser(userName3){
        cy.get('[id=header-search]')
            .clear()
            .type(userName3)
    }

    CLickOnSearchIcon(){
        cy.get('[id=header-search-icon]')
            .click()
    }

    
    //Need to check the messagge that will appear ==> if success or fails to block a user

    /*

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
    
    */

}
export default SafetyAndPrivacyObjects