class RightSideBarObjects{



    GoToCommunity(commmName2){
        cy.get(commmName2)
            .first()
            .click()
    }

    ModTools(){
        cy.get('[id=mod-tools]')
            //.should('have.text',"MOD TOOLS")
            .click()
    }

    checkURLMODTOOLS(commName){
        cy.url()
            .should('eq',Cypress.env('CYPRESSBASEURL') + '/r/'+commName+'/about/moderators')
    }

    ThreeDots(){
        cy.get('[id=three-dots]')
            .click()
    }

    AddToFavourites(){
        cy.get('[id=add-to-favourite]')
            .should('have.text','Add To Favorites')
            .click()
    }

    RemoveFromFavourites(){
        cy.get('[id=add-to-favourite]')
            .should('have.text','Remove From Favorites')
            .click()
    }

    AddDescription(desContent){
        cy.get('[id=add-description-3]')
            //.should('have.text',desContent)
            .click()
    }

    WriteDescription(descriptionBody){
        cy.get('[id=add-desc-textarea]')
            .clear()
            .type(descriptionBody)
    }

    WIthoutClearWriteDescription(descriptionBody2){
        cy.get('[id=add-desc-textarea]')
            //.clear()
            .type(descriptionBody2)
    }

    SaveAddedDescription(){
        cy.get('[id=save-description]')
            .should('have.text',"Save")
            .click()
    }

    CheckDesciptionContent(contentDescription){
        cy.get('[id=add-description-3]')
            .should('have.text',contentDescription)
    }

    CancelAddedDescription(){
        cy.get('[id=cancel-description]')
            .should('have.text',"Cancel")
            .click()
    }

    //CommunityCreatedDate(createdDay){
    //    cy.get('[id=comm-date]')
    //        .should('have.text',"Created Dec "+createdDay+", 2022")
    //}
    
    NumberOfMembersInTheCOmmunity(numberOfMembers){
        cy.get('[id=comm-mem]')
            .should('have.text',numberOfMembers)
    }

    AddedAPrimaryTopic(indexOfTopic){
        cy.get('[id=topic-added]')
            .click()
    }

    SelectPrimaryTopic(topicid){
        cy.get(topicid)
    }

    CheckTopicAdded(topicName){
        cy.get('[id=topic-added]')
            .should('have.text',topicName)
    }

    AddedSubTopic(){
        cy.get('[id=show-both]')
            .click()
    }

    SelectSubTopic(subtopicid){
        cy.get(subtopicid)
    }

    WriteSubTopicName(subTopicName){
        cy.get('[id=subtopic-box-4]')
            .clear()
            .type(subTopicName)
    }

    SaveSubToicName(){
        cy.get('[id=subtopic-box-save]')
            .click({force:true})
    }

    CancelSubTopicName(){
        cy.get('[id=subtopic-box-cancel]')
            .click()
    }

    CheckSubTopicNameAfterAdded(subTopicName2){
        cy.get('[id=subtopics-list]')
            .should('have.text',subTopicName2)
    }

    CreatePostButton(){
        cy.get('[id=create-post-subreddit-bar]')
            .should('have.text',"Create Post")
            .click()
    }

    checkURL(URLcomplete){
        cy.url()
        .should('eq',Cypress.env('CYPRESSBASEURL')+URLcomplete)
    }

    MessageTheMods(){
        cy.get('[id=mods-message]')
            .click()
    }

    CheckTheModeratorName(moderatorName){
        cy.get('[id=mods-bar-0]')
            .should('have.text','u/'+moderatorName)
    }

    ViewAllModerators(){
        cy.get('[id=mods-view-all]')
            .click()
    }

    SeeAll(){
        cy.get('[id=view-all-top-communities-2]')
            .click()
    }
}

export default RightSideBarObjects