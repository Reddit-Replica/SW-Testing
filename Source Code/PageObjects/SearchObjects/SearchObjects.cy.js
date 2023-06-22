class SearchObjects{

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
    
    SearchReddit(searchContent){
        cy.get('[id=header-search]')
            //.should('have.text',"Search Reddit")
            .clear()
            .type(searchContent)
    }

    Posts(){
        cy.get('[id=posts-button]')
            //.should('have.text'," Posts ")
            .click()
    }

    CheckCommunityName(commName1){
        cy.get('[class=comm-name]')
            .first()
            //.contains(commName1)
    }

    CheckUserNameOfThePost(userName9){
        cy.get('[class=posted-username]')
            .first()
            //.should('have.text',userName9)
    }

    CheckContentOfThePost(content){
        cy.get('[class=post-title]')
            .first()
            //should('have.text',content)
            .click()
    }

    Comments(){
        cy.get('[id=comments-button]')
            //.should('have.text',' Comments ')
            .click({force:true})
    }

    CheckTheComment(commentContent){
        cy.get('[class=the-words]')
            .first()
            //.should('have.text',commentContent)
    }

    ClickOnAComment(){
        cy.get('[id=thread-button]')
            .first()
            .click({force:true})
    }


    Communities(){
        cy.get('[id=communities-button]')
            //.should('have.text',"Communities")
            .click({force:true})
    }

    CheckUserNameOfTheComment(userNameOfTheComment){
        cy.get('[class=user-name]')
            .first()
            //.should('have.text',userNameOfTheComment)
    }

    NotFoundInSearchPeople(userName20){
        cy.get('[class=head-two]')
            .should('have.text'," Hm... we couldn’t find any results for "+userName20+" ")
    }
    People(){
        cy.get('[id=users-button]')
            //.should('have.text',"People")
            .click()
    }

    Sort(idOfSortType,){
        cy.get('[class=items-span]')
            .first()
            .select(idOfSortType)
    }

    CheckSortContent(SortType){
        cy.get('[class=items-span]')
            .first()
            //.should('have.text',SortType)
    }

    Time(){
        cy.get('[class=items-span]')
            .last()
            .click()
    }

    TimeType(indexOfTimeType){
        cy.get('[id=sub-menu-two]')
            .select(indexOfTimeType)
    }

    CheckTimeContent(TimeType){
        cy.get('[class=items-span]')
            .last()
            //.should('have.text',TimeType)
    }

    //start test of posts
    ClickOnAPost(){
        cy.get('[class=header-3]')
            .first()
            .click()
    }

    CheckCommunityNameOfThePost(commName){
        cy.get('[class=comm-name]')
            //.should('have.text',commName)
    }

    UserNameWhoCreatedThePost(userName2){
        cy.get('[class=posted-username]')
            //.should('have.text',userName2)
    }

    ClickOnUserNameWhoCreatedThePost(){
        cy.get('[class=posted-username]')
            .click()
    }

    TitleOfThePost(postTitle){
        cy.get('[class=header-3]')
            //.should('have.text',postTitle)
    }

    NumberOfUpVotes(numberOfUpvotes1){
        cy.get('[class=votes]')
            //.should('have.text',numberOfUpvotes1 +" upvotes")
    }

    //Communities in the right side bar
    CommunityNameCheck(commName2){
        cy.get('[class=communities-name]')
            //.should('have.text',commName2)
    }

    NUmberOfMembersInACommunity(numberOfMembers2){
        cy.get('[class=karma-number]')
            .first()
            //.should('have.text','• '+numberOfMembers2+' Members')
    }

    JoinTheCommunity(userName6){
        cy.get('[id=user-button-'+userName6+']')
            .first()
            //.should('have.text',"join")
            .click()
    }

    LeftTheCommunity(userName7){
        cy.get('[id=user-button-'+userName7+']')
            //.should('have.text',"Leave")
            .click()
    }

    SuccessfullyJoinedACommunity(commName3){
        cy.get('[class=right]')
            //.should('have.text',"successfully Joined r/"+commName3)
    }

    SuccessfullyLeftACommunity(commName4){
        cy.get('[class=right]')
            .should('have.text',"successfully Left r/"+commName4)
    }

    ClickOnFollowButton(userName3){
        cy.get('[id=user-button-'+userName3+']')
            .should('have.text',"Follow")
            .click()
    }

    ClickOnUnFollowButton(userName8){
        cy.get('[id=user-button-'+userName8+']')
            .should('have.text',"Unfollow")
            .click()
    } 

    SuccessfullyFollowAUserName(userName4){
        cy.get('[class=right]')
            .should('have.text',"successfully follow r/"+userName4)
    }

    SuccessfullyUnFollowAUserName(userName5){
        cy.get('[class=right]')
            .should('have.text',"successfully unfollow r/"+userName5)
    }
    

    SeeMoreCOmmunities(){
        cy.get('[class=communities-go]')
            .click()
    }

    CommunitiesIsSelected(){
        cy.get('[id=communtites-button]')
            .should('be.selected')
    }

    //start of test communities
    NameOfTheCommunity(commName5){
        cy.get('[class=people-name]')
            .first()
            //.should('have.text','r/'+commName5)
    }

    CheckUserNameInPeople(username10){
        cy.get('[class=people-name]')
            .first()
            //.should('have.text',"u/"+username10)
    }

    CheckEmptyPosts(){
        cy.get('[class=hole-post]')
            //.should('be.empty')
    }

    CheckPeopleNameInRightSideBar(username11){
        cy.get('[class=people-name]')
            //.should('have.text',"u/"+username11)
    }

    CLickOnSearchIcon(){
        cy.get('[id=header-search-icon]')
            .click()
    }
}

export default SearchObjects