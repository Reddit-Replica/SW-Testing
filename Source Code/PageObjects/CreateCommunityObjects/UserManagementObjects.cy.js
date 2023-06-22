class UserManagementObjects{

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

    CreateCommunity(){
        cy.get('[id=create-community-sidebar]')
            .click()
    }

    CommunityName(commName){
        cy.get('[id=name-input]')
            .should('be.visible')
            .clear()
            .type(commName)
    }
    
    CommunityCategory(){
        cy.get('[id=name-input]')
            .should('be.visible')
            .click()
    }

    SelectCommunityCategory(commCategory){
        cy.get(commCategory)
            .should('be.visible')
            .click()
    }
    
    PublicCommunityType(){
        cy.get('[id=bi-record-circle-fill-1]')
            .should('be.visible')
            .click()
    }

    RestrictedCommunityType(){
        cy.get('[id=bi-circle-2]')
            .should('be.visible')
            .click()
    }
    
    PrivateCommunityType(){
        cy.get('[id=bi-circle-3]')
            .should('be.visible')
            .click()
    }
    
    AdultContent(){
        cy.get('[class=title-black]')
            .last()
            .should('be.visible')
            .click()
    }

    SUbmitCreateCommunity(){
        cy.get('[id=create-button]')
            .should('be.visible')
            .click()
    }

    CancelCreateCommunity(){
        cy.get('[id=cancel-button]')
            .should('be.visible')
            .click()    
    }

    ViewAllModerators(){
        cy.get('a[href*="/r/asdasdvv/about/moderators"]')
            .last()
            .should('be.visible')
            .click()
    }

    //Starting of Ban Objects
    Banned(){
        cy.get('[id=banned-button]')
            //.should('be.visible')
            .click()
    }

    BanUser()
    {
        cy.get('[id=ban-user-button]')
            .first()
            .should('be.visible')
            .click()
    }

    BanAUser(userName1){
        cy.get('[id=user-name]')
            .last()
            .should('be.visible')
            .clear()
            .type(userName1)
    }

    ReasonForBan(reasonbanned){
        cy.get('[id=reason-input]')
            .select(reasonbanned)
    }

    SpamReason(){
        cy.get('[id=spam]')
            .select()
    }

    PersonalReason(){
        cy.get('[id=personal-and-confidential]')
        .select()
    }

    ThreatiningReason(){
        cy.get('[id=threatening-harassing]')
        .select()
    }

    OtherReason(){
        cy.get('[id=other]')
        .select()
    }

    ModNote(modNote){
        cy.get('[id=note]')
            .should('be.visible')
            .clear()
            .type(modNote)
    }

    selectedHowLongBanningPermanent(){
        cy.get('[id=checkPermanent]')
            .click()
            .should('not.be.selected')
    }

    NotselectedHowLongBanningPermanent(){
        cy.get('[id=checkPermanent]')
            .should('not.be.selected')
    }

    BanPeriodDays(banPeriod){
        cy.get('[id=banPeriod]')
            .should('be.visible')
            .clear()
            .type(banPeriod)
    }

    ReasonNote(NoteToIncludeInBanMessage){
        cy.get('[id=reason-note]')
            .should('be.visible')
            .clear()
            .type(NoteToIncludeInBanMessage)
    }

    SubmitBanUser(){
        cy.get('[id=ban-button]')
            .should('be.visible')
            .click()
    }    

    CancelSubmitBanUser(){
        cy.get('[id=cancel-button]')
            .should('be.visible')
            .click()
    }    

    UnEnabledSubmitBanUser(){
        cy.get('[id=ban-button]')
            .should('not.be.sealed')
    }

    EnabledSubmitBanUser(){
        cy.get('[id=ban-button]')
            .should('be.enabled')
    }
    
    DonotFindAUserWithThatName(){
        cy.get('[class=no-messages]')
            .should('be.visible')
            .should('have.text' , "Error: Didn't find a user with that username")
    }
    
    BannedSuccessfully(){
        cy.get('[class=right]')
            .should('be.visible')
            .should('have.text' , 'banned  successfully')
    }

    //Start of Muted Objects
    Muted(){
        cy.get('[id=muted-button]')
            //.should('be.visible')
            .click()
    } 

    MuteUser(){
        cy.get('[id=mute-user-button]')
            .first()
            .should('be.visible')
            .click({force:true})
    }

    MuteUserName(userName2){
        cy.get('[id=user-name]')
            .last()
            .clear()
            .type(userName2)
    }

    ReasonMuted(reasonMuted){
        cy.get('[id=reason-note]')
            .clear()
            .type(reasonMuted)
    }

    THisUserIsNotAMember(commName2){
        cy.get('[class=no-messages]')
            .should('be.visible')
            .should('have.text' , "Error: This user is not a member of "+commName2)
    }

    //**TODO**
    MutedSuccessfully(){
        cy.get('[class=right]')
            .should('have.text',"added  successfully")

    }

    UnMutedAUser(){
        cy.get('[id=unmute-button0]')
            .click()
    }

    CancelUnmutedUser(){
        cy.get('[id=cancel-button0]')
            .click()
    }

    CancelMutedUser(){
        cy.get('[id=cancel-button]')
            .click()
    }

    SubmitMutedUser(){
        cy.get('[id=mute-user-button]')
            .first()
            .click({force:true})
    }

    DisabledSubmitMutedUser(){
        cy.get('[id=mute-user-button]')
            .first()
            .should('not.be.selected')
    }

    MutedUnauthorizedMessage(){
        cy.get('[class=no-messages]')
            .should('have.text',"Error: Unauthorized to send a message")
    }



    SubmitUnMutedUser(){
        cy.get('[id=unmute-button-final-0]')
            .click()
    }

    MoreDetailsAboutMutedUser(){
        cy.get('[id=button-more-details-0]')
            .click()
    }

    BannedFor(reason){
        cy.get('[id=reason-note]')
            .clear()
            .type(reason)
    }

    //Starting of Approved
    Approved(){
        cy.get('[id=approved-button]')
            .should('be.visible')
            .click()
    }

    ApproveUser(){
        cy.get('[id=approve-user-button]')
            .first()
            .should('be.visible')
            .click({force:true})
    }

    AddApprovUser(userName3){
        cy.get('[id=invited-user-name]')
            .should('be.visible')
            .clear()
            .type(userName3)
    }

    SubmitAddUser(){
        cy.get('[id=add-user-button]')
            .should('be.visible')
            .click({force:true})
    }

    DisabledSubmitAddUser(){
        cy.get('[id=add-user-button]')
            .should('not.be.selected')
    }
    

    CancelAddUser(){
        cy.get('[id=cancel-button]')
            .should('be.visible')
            .click()
    }

    AddUserSuccessfully(){
        cy.get('[class=right]')
            .should('have.text',"approved  successfully")
    }

    ThisUserIsAlreadyApproved(){
        cy.get('[class=no-messages]')
            .should('be.visible')
            .should('have.text' , "Error: This user is already approved" )
    }

    SearchApproveUser(username4){
        cy.get('[id=search-moderator]')
            .clear()
            .type(username4)
    }

    FindApprovedUserUsingSearch(){
        cy.get('moderator-name-0')
            .should('have.text',"karim10")    
    }

    RemoveApprovedUser(){
        cy.get('[id=button-remove-0]')
            .should('be.visible')
            .click()
    }

    SubmitRemoveApprovedUser(){
        cy.get('[id=remove-button0]')
            .should('be.visible')
            .click()
    }

    CancelRemoveApprovedUser(){
        cy.get('[id=cancel-button0]')
            .should('be.visible')
            .click()
    }

    RemoveApprovedUserSuccessfully(){
        cy.get('[class=right]')
            .should('be.visible')
            .should('have.text',"removed successfully")
    }


    //Starting of Moderators
    Moderators(){
        cy.get('[id=moderators-button]')
            .should('be.visible')
            .click()
    }

    InviteUserAsModerator(){
        cy.get('[id=invite-user-mod-button]')
            .first()
            .should('be.visible')
            .click()
    }
    
    InvitedUSerName(username5){
        cy.get('[id=invited-user-name]')
            .should('be.visible')
            .clear()
            .type(username5)
    }

    UnselectedGiveModeratorAccessTOEverything(){
        cy.get('[id=everythig]')
            .should('not.be.selected')
    }

    UnselectedGiveModeratorAccessTOManageUsers(){
        cy.get('[id=manage-users]')
            .should('not.be.selected')
    }
    
    UnselectedGiveModeratorAccessTOManageSettings(){
        cy.get('[id=manage-settings]')
            .should('not.be.selected')
    }
    
    UnselectedGiveModeratorAccessTOManageFlairs(){
        cy.get('[id=manage-flair]')
            .should('not.be.selected')
    }
    
    UnselectedGiveModeratorAccessTOPostsANdComments(){
        cy.get('[id=manage-posts-comments]')
            .should('not.be.selected')
    }
    
    //
    selectedGiveModeratorAccessTOEverything(){
        cy.get('[id=everythig]')
            .should('not.be.selected')
    }

    selectedGiveModeratorAccessTOManageUsers(){
        cy.get('[id=manage-users]')
            //.should('be.selected')
    }
    
    selectedGiveModeratorAccessTOManageSettings(){
        cy.get('[id=manage-settings]')
            .should('be.selected')
    }
    
    selectedGiveModeratorAccessTOManageFlairs(){
        cy.get('[id=manage-flair]')
            .should('be.selected')
    }
    
    selectedGiveModeratorAccessTOPostsANdComments(){
        cy.get('[id=manage-posts-comments]')
            .should('be.selected')
    }

    //
    GiveModeratorAccessTOEverything(){
        cy.get('[id=everythig]')
            .click()
    }

    GiveModeratorAccessTOManageUsers(){
        cy.get('[id=manage-users]')
            .click()
    }
    
    GiveModeratorAccessTOManageSettings(){
        cy.get('[id=manage-settings]')
            .click()
    }
    
    GiveModeratorAccessTOManageFlairs(){
        cy.get('[id=manage-flair]')
            .click()
    }
    
    GiveModeratorAccessTOPostsANdComments(){
        cy.get('[id=manage-posts-comments]')
            .click()
    }
    CheckInvitedUserName(username7){
        cy.get('[id=moderator]')
            .last()
            .should('have.text',username7)
    }
    
    SubmitInviteModerator(){
        cy.get('[id=invite-moderation-button]')
            .should('be.visible')
            .click()
    }

    CancelInviteModerator(){
        cy.get('[id=cancel-button]')
            .should('be.visible')
            .click()
    }

    DidnotFindAUserWithThatName(){
        cy.get('[class=no-messages]')
            .should('have.text',"Error: Didn't find a user with that username")
    }

    InvitedSuccessfully(){
        cy.get('[class=right]')
            .should('be.visible')
            .should('have.text','invited  successfully')
    }

    SearchModerators(userName6){
        cy.get('[id=search-moderator]')
            .first()
            .should('be.visible')
            .click()
            .type(userName6)
    }

    LeaveAsMod(){
        cy.get('[id=leave-mod-button]')
            .first()
            .click()
    }

    CancelLeaveAsMod(){
        cy.get('[id=cancel-button]')
            .click()
    }

    LeaveAsModSubmit(){
        cy.get('[id=leave-button]')
            .click()
    }

    SearchedModeratorUserName(username8){
        cy.get('[id=mute-name-0]')
            .should('have.text',username8)
    }

    SearchedMutedUserName(username9){
        cy.get('[id=mute-name-1]')
            .should('have.text',username9)
    }

    SeeAll(){
        cy.get('[id=see-all-button]')
            .should('have.text',"See all")
    }

    SearchIconModerators(){
        cy.get('[id=search-icon]')
            .first()
            .should('be.visible')
            .click()
    }

    FindInvitedModeratorUsingSearch(){
        cy.get('moderator-name-0')
            .should('have.text',"karim10")    
    }



}

export default UserManagementObjects