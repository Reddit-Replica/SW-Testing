class ProfileObjects {
    
    //--------------------------------PROFILE INFORMATION------------------------------------// 

    ProfileButton(){
        cy.get('[id=profile-settings]')
            .click()
    }

    //----------------------------------------Test #1----------------------------------------// 
   
    DisplayNameOptional(displayName){
        cy.get('[id=dispalyname]')
            .should('be.visible')
            .type(displayName)
    }

    CheckDisplayedName(optionalName){
        cy.get('[id=dispalyname]')
            .should('have.text',optionalName)
    }

    //----------------------------------------Test #2----------------------------------------// 
    AboutOptional(about) {
        cy.get('[id=about]')
            .should('be.visible')
            .type(about)
    }

    CheckAboutOptional(optionalName2){
        cy.get('[id=dispalyname]')
            .should('have.text',optionalName2)
    }

    //----------------------------------------Test #3----------------------------------------// 
    AddSocialLink() {
        cy.get('[id=add-social-link-button]')
            .should('be.visible')
            .click()
    }

    SelectAddingSOcialLink(socialLinkType,socialLinkName){
        cy.get(socialLinkType)
            .should('have.text',socialLinkName)
            .click()
    }

    UserNameInAddSocialLink(userName2){
        cy.get('[id=social-link-config-input-displayedText]')
            .clear()
            .type(userName2)
    }

    EnableSaveButton(){
        cy.get('[id=save-button]')
            .should('be.enabled')
            .click()
    }

    DisabledSaveButoon(){
        cy.get('[id=save-button]')
            .should('not.be.selected')
    }

    CheckSocialLinkAfterAdded(idOfAddedSocialLink,TextOfAddedSocialLink){
        cy.get(idOfAddedSocialLink)
            .should('have.text',TextOfAddedSocialLink)
    }
    //----------------------------------------IMAGES----------------------------------------// 
    //----------------------------------------Test #4----------------------------------------// 

    //TODO: CHECK HOW TO UPLOAD AN IMG HERE
    ProfilePicture() {
        cy.get('[class=add-more]')
            .should('be.visible')
            .click()
    }
    
    //TODO: CHECK HOW TO UPLOAD AN IMG HERE
    BannerImage(){
        cy.get('[class=add-more2]')
            .should('be.visible')
            .click()
    }

    //----------------------------------------PROFILE CATEGORY----------------------------------------// 
    
    NSFW(){
        cy.get('[id=nsfw-profile-settings]')
            .click()    
    }

    EnabledNSFW() {
        cy.get('[id=nsfw-profile-settings]')
            .should('be.enabled')
    }

    DisabledNSFW() {
        cy.get('[id=nsfw-profile-settings]')
            .should('not.be.selected')
    }
    
    SettingsChangedSuccessfully(){
        cy.get('[class=right]')
            .should('have.text',"settings changed successfully")
    }


    //----------------------------------------ADVANCED----------------------------------------// 
    
    AllowPeopletoFollowYou() {
        cy.get('[id=allow-profile-settings]')
            .should('be.visible')
            .click()
    }

    EnabledAllowPeopletoFollowYou() {
        cy.get('[id=allow-profile-settings]')
            .should('be.enabled')
    }
    
    DisabledAllowPeopletoFollowYou() {
        cy.get('[id=allow-profile-settings]')
            .should('not.be.selected')
    }
    
    SettingsChangedSuccessfully(){
        cy.get('[class=right]')
            .should('have.text',"settings changed successfully")
    }

}

export default ProfileObjects