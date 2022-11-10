class userProfileObject{
    navigate() {
        //NOTE:edited later
        cy.visit('http://read-it.francecentral.cloudapp.azure.com/user/asmaaadel0/')
    }

    overview() {
        //"OVERVIEW" button
        cy.get('#viewed-profile-link-overview')
            .click()
    }

    
    posts() {
        //"POSTS" button
        cy.get('#viewed-profile-link-Posts')
            .click()
    }

    comments() {
        //"COMMENTS" button
        cy.get('#viewed-profile-link-Comments')
            .click()
    }

    history() {
        //"HISTORY" button
        cy.get('#viewed-profile-link-history')
            .click()
    }

    hidden() {
        //"HIDDEN" button
        cy.get('#viewed-profile-link-hidden')
            .click()
    }

    saved() {
        //"SAVED" button
        cy.get('#viewed-profile-link-saved')
            .click()
    }

    upvoted() {
        //"UPvoted" button
        cy.get('#viewed-profile-link-upvoted')
            .click()
    }

    downvoted() {
        //"DOWNVOTED" button
        cy.get('#viewed-profile-link-Down\ voted')
            .click()
    }

    awardsReceived() {
        //"AWARDS Received" button
        cy.get('#viewed-profile-link-awards\ received')
            .click()
    }

    awardsGiven() {
        //"AWARDS GIVEN" button
        cy.get('#viewed-profile-link-awards\ given')
            .click()
    }

    ///////////////
    urlChecker(url) {
        cy.url()
            .should('equal',url);
    }

    overviewPage() {
         cy.url()
        .should('equal','http://read-it.francecentral.cloudapp.azure.com/user/asmaaadel0/')
    }
    
    postsPage() {
        cy.url()
        .should('equal','http://read-it.francecentral.cloudapp.azure.com/user/asmaaadel0/submitted')
    }

    commentsPage() {
         cy.url()
        .should('equal','http://read-it.francecentral.cloudapp.azure.com/user/asmaaadel0/comments')
    }

    historyPage() {
         cy.url()
        .should('equal','http://read-it.francecentral.cloudapp.azure.com/user/asmaaadel0/history')
    }

    hiddenPage() {
         cy.url()
        .should('equal','http://read-it.francecentral.cloudapp.azure.com/user/asmaaadel0/hidden')
    }

    savedPage() {
         cy.url()
        .should('equal','http://read-it.francecentral.cloudapp.azure.com/user/asmaaadel0/saved')
    }


    upvotedPage() {
         cy.url()
        .should('equal','http://read-it.francecentral.cloudapp.azure.com/user/asmaaadel0/upvoted')
    }

    downvotedPage() {
         cy.url()
        .should('equal','http://read-it.francecentral.cloudapp.azure.com/user/asmaaadel0/downvoted')
    }

    awardsReceivedPage() {
         cy.url()
        .should('equal','http://read-it.francecentral.cloudapp.azure.com/user/asmaaadel0/gilded')
    }

    awardsGivenPage() {
         cy.url()
        .should('equal','http://read-it.francecentral.cloudapp.azure.com/user/asmaaadel0/gilded/given/')
    }

    // ################################################# linking between user profile and create post ################################################# 
    newPost() {
        cy.get('#profile-new-post')
            .click()
    }

    createPostPage() {
         cy.url()
        .should('equal','http://read-it.francecentral.cloudapp.azure.com/user/asmaaadel0/submitted')
    }

    // ################################################# linking between user profile and settings ################################################# 
    goSettings() {
        cy.get('#profile-settings-icon-card')
            .click()
    }

    settingsPage() {
         cy.url()
        .should('equal','http://read-it.francecentral.cloudapp.azure.com/settings/profile')
    }
    // ################################################# linking between user profile and home ################################################# 
    goHome() {
        cy.get('#logo-img')
            .click()
    }

    HomePage() {
         cy.url()
        .should('equal','http://read-it.francecentral.cloudapp.azure.com/main')
    }
    
    // ################################################# pictures and links ################################################# 
    //?later : how to select 
    // addProfileImg() {
        // cy.get('#add-profile-image-button')
        //     .click().selectFile('C:\Users\samaa\Downloads\test1.jpeg')
    //     cy.get('#add-profile-image-button')
    //         .click()
    // }

    // addCoverImg() {
    //     cy.get('#cover-picture > :nth-child(1)')
    //         .click()
    // }
    
    //?m.s of the following logic:
    checkProfileImg() {
        //upload img
       cy.get('#profile-picture')// yields the element
       .should('have.attr', 'src') // yields the "src" attribute
       //.and('equal', '/img/R.2bc79f6f.png') // checks the "src" value
       .and('not.eq', '/img/R.2bc79f6f.png') // checks the "src" value
       //check that another picture has been added rather than the defult one
       //NOTE:--
       //later: if the defult img change , then change the should condition
    }

    usernameUrl() {
        cy.get('#profile-pic-user-name')
            .click()
    }

    //userpage() {}
    //NOTE:use overviewPage() function
    // ################################################# profile options ################################################# 
   
    moreOptions() {
        cy.get('#more-options-button')
            .click()
    }

    fewerOptions() {
        cy.get('#fewer-options-button')
            .click()
    }

    //later: using (get) with any of the three options gives error ,why? 
    profileModeration() {
        //cy.get('#profile-option-Profile\ to\ Moderation')
        cy.contains('Profile to Moderation')
            .click()
    }

    addCustomFeed() {
       // cy.get('#profile-option-Add\ to\ Custom\ Feed')
       cy.contains('Add to Custom Feed')
            .click()
    }

    inviteSomeoneToChat() {
        //cy.get('#profile-option-Invite\ someone\ to\ chat')
        cy.contains('Invite someone to chat')
            .click()
    }

    inviteSomeoneMsgSyntax() {
        //return cy.get('')      
        cy.get('') 
            .should('have.text','Copied link!');          
    }  
    
    //?later : check if the msg diappeared or not after click on (x)
    msgCancelbyX() {
        //"X" button which appeare when we pass over the msg
        cy.get('')
            .click()
    }

    profileModerationPage() {
         cy.url()
        .should('equal','http://read-it.francecentral.cloudapp.azure.com/user/asmaaadel0/about/edit/moderation')
    }

    //?later: check the responce after click on addToCustomFeed   
    profileModerationSyntax() {
        //cy.get('#profile-option-Profile\ to\ Moderation')
        cy.contains('Profile to Moderation')
            .should('have.text','Profile Moderation'); 
    }

    addCustomFeedSyntax() {
        //cy.get('#profile-option-Add\ to\ Custom\ Feed')
        cy.contains('Add to Custom Feed')
            .should('have.text','Add to Custom Feed'); 
    }

    inviteSomeoneToChatSyntax() {
        //cy.get('#profile-option-Invite\ someone\ to\ chat')
        cy.contains('Invite someone to chat')
            .should('have.text','Invite someone to chat'); 
    }

    // #################################################  last part of Right side bar  ################################################# 
    //? is the last part is for moderating?

    //?is join and unjoin have the same id?
    //?are there the same buttom aslan?
    joinAndUnjoin() {
        cy.get('#moderator-join-button-')
            .click()
    }

    goToCommunity() {
        cy.get('#moderator-name-')
            .click()
    }

    //? later: same problem as (comment as) mena
    // communityPage() {
    //      cy.url()
     //   .should('equal','http://read-it.francecentral.cloudapp.azure.com/r//')
    // }

    //later : test hover of the join commiunty button   
}
export default userProfileObject


