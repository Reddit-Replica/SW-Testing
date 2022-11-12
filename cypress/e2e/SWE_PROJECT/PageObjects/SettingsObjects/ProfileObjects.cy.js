class ProfileObjects {
    
    navigate(){
        cy.visit('http://localhost/settings/profile')
    }

    //--------------------------------PROFILE INFORMATION------------------------------------// 

    //----------------------------------------Test #1----------------------------------------// 
   
    DisplayNameOptional(displayName){
        cy.get('[id=dispalyname]')
            .should('be.visible')
            .type(displayName)
    }

    //----------------------------------------Test #2----------------------------------------// 
    AboutOptional(about) {
        cy.get('[id=about]')
            .should('be.visible')
            .type(about)
    }

    //----------------------------------------Test #3----------------------------------------// 
    SocialLinks5Max() {
        cy.get('[id=links-profile-settings]')
            .should('be.visible')
            .click()
    }


    //----------------------------------------IMAGES----------------------------------------// 
    //----------------------------------------Test #4----------------------------------------// 

    //TODO: CHECK THE  ID HERE
    ProfilePicture() {
        cy.get('[id=sum-menuNobody]')
            .should('be.visible')
            .click()
    }
    
    
    //TODO: CHECK THE  ID HERE
    BannerImage(){
        cy.get('[class=title]')
            .should('be.visible')
            .click()
    }

    //----------------------------------------PROFILE CATEGORY----------------------------------------// 
    
    NSFW() {
        cy.get('[id=nsfw-profile-settings]')
            .should('be.visible')
            .click()
    }

    //----------------------------------------ADVANCED----------------------------------------// 
    
    AllowPeopletoFollowYou() {
        cy.get('[id=allow-profile-settings]')
            .should('be.visible')
            .click()
    }

    ContentVisibility() {
        cy.get('[id=visibility-profile-settings]')
            .should('be.visible')
            .click()
    }    


    ActiveInCommunitiesVisibility(){
        cy.get('[id=active-profile-settings]')
            .should('be.visible')
           .click()
    }

    ProfileModerationPage(){
        cy.get('[id=moderation-profile-settings]')
            .should('be.visible')
            .click()        
    }

}

export default ProfileObjects