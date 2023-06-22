class userProfileObject{
    constructor(userNameOut) {
        this.userName = userNameOut;   
    }

    // constructor(/*userNameOut*/) {
    //     this.userName = 'Samaa_Hazem';//userNameOut;   
    // }
    navigate( ) {
        //NOTE:edited later
        cy.visit(Cypress.env('CYPRESSBASEURL') +'/user/'+this.userName)
        //cy.wait(1000)
        //filtered
        //to solve the error temprory
        //cy.scrollTo('top')
    }

    overview() {
        //"OVERVIEW" button
        cy.get('#viewed-profile-link-overview')
            // .click({force:true})
            .click()
    }

    
    posts() {
        //"POSTS" button
        cy.get('#viewed-profile-link-Posts')
            // // .click({force:true})
            .click()
    }

    comments() {
        //"COMMENTS" button
        cy.get('#viewed-profile-link-Comments')
            // // .click({force:true})
            .click()
    }

    history() {
        //"HISTORY" button
        cy.get('#viewed-profile-link-history')
            // .click({force:true})
            .click()
    }

    hidden() {
        //"HIDDEN" button
        cy.get('#viewed-profile-link-hidden')
            // .click({force:true})
            .click()
    }

    saved() {
        //"SAVED" button
        cy.get('#viewed-profile-link-saved')
            // .click({force:true})
            .click()
    }

    upvoted() {
        //"UPvoted" button
        cy.get('#viewed-profile-link-upvoted')
            // .click({force:true})
            .click()
    }

    downvoted() {
        //"DOWNVOTED" button
        // cy.get('#viewed-profile-link-Down\ voted')
        //cy.contains('DOWN VOTED')
        cy.get('.viewed')
            .eq(7)
            // .click({force:true})
            .click()
    }

    awardsReceived() {
        //"AWARDS Received" button
        // cy.get('#viewed-profile-link-awards\ received')
        // cy.contains('AWARDS RECEIVED')
        cy.get('.viewed')
            .eq(8)
            // .click({force:true})
            .click()
    }

    awardsGiven() {
        //"AWARDS GIVEN" button
        // cy.get('#viewed-profile-link-awards\ given')
        // cy.contains('AWARDS GIVEN')
        cy.get('.viewed')
            .eq(9)
            // .click({force:true})
            .click()
    }

    ///////////////
    urlChecker(url) {
        cy.url()
            .should('equal',url);
    }

    overviewPage() {
         cy.url()
        .should('equal',Cypress.env('CYPRESSBASEURL') +'/user/'+this.userName)//+'/')
    }
    
    postsPage() {
        cy.url()
        .should('equal',Cypress.env('CYPRESSBASEURL') +'/user/'+this.userName+'/submitted')
    }

    commentsPage() {
         cy.url()
        .should('equal',Cypress.env('CYPRESSBASEURL') +'/user/'+this.userName+'/comments')
    }

    historyPage() {
         cy.url()
        .should('equal',Cypress.env('CYPRESSBASEURL') +'/user/'+this.userName+'/history')
    }

    hiddenPage() {
         cy.url()
        .should('equal',Cypress.env('CYPRESSBASEURL') +'/user/'+this.userName+'/hidden')
    }

    savedPage() {
         cy.url()
        .should('equal',Cypress.env('CYPRESSBASEURL') +'/user/'+this.userName+'/saved')
    }


    upvotedPage() {
         cy.url()
        .should('equal',Cypress.env('CYPRESSBASEURL') +'/user/'+this.userName+'/upvoted')
    }

    downvotedPage() {
         cy.url()
        .should('equal',Cypress.env('CYPRESSBASEURL') +'/user/'+this.userName+'/downvoted')
    }

    awardsReceivedPage() {
         cy.url()
        .should('equal',Cypress.env('CYPRESSBASEURL') +'/user/'+this.userName+'/gilded')
    }

    awardsGivenPage() {
         cy.url()
        //.should('equal',Cypress.env('CYPRESSBASEURL') +'/user/'+this.userName+'/gilded/given')
         .should('equal',Cypress.env('CYPRESSBASEURL') +'/user/'+this.userName+'/gildedgiven')

    }

    // ################################################# linking between user profile and create post ################################################# 
    newPost() {
        cy.get('#profile-new-post')
            .click()
    }

    createPostPage() {
         cy.url()
        .should('equal',Cypress.env('CYPRESSBASEURL') +'/user/'+this.userName+'/submit')
    }

    // ################################################# linking between user profile and settings ################################################# 
    goSettings() {
        cy.get('#profile-settings-icon-card')
            .click()
    }

    settingsPage() {
         cy.url()
        .should('equal',Cypress.env('CYPRESSBASEURL') +'/settings/profile')
    }
    // ################################################# linking between user profile and home ################################################# 
    goHome() {
        cy.get('#logo-img')
            .click()
    }

    HomePage() {
         cy.url()
        .should('equal',Cypress.env('CYPRESSBASEURL') +'/main')
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
        cy.contains('Profile Moderation')
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
        cy.get('.pop-message') 
            .should('have.text','Copied link!');          
    }  
    
    //?later : check if the msg diappeared or not after click on (x)
    msgCancelbyX() {
        //"X" button which appeare when we pass over the msg
        cy.get('.pop-message') 
            .click()
    }

    profileModerationPage() {
         cy.url()
        .should('equal',Cypress.env('CYPRESSBASEURL') +'/user/'+this.userName+'/about/edit/moderation')
    }

    //?later: check the responce after click on addToCustomFeed   
    profileModerationSyntax() {
        //cy.get('#profile-option-Profile\ to\ Moderation')
        //cy.get('#profile-option-Profile\ Moderation')
        cy.contains('Profile Moderation')
        // cy.get('#profile-options')
        //     .first()
            .should('have.text','Profile Moderation')

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
     //   .should('equal',Cypress.env('CYPRESSBASEURL') +'/r//')
    // }

    //later : test hover of the join commiunty button 

    // #################################################  find a post in a cerain page  ################################################# 

    //findPost to find posts and comments and others
    findPost(postTitle) {
        // cy.contains(postTitle)
        //cy.get('.base-profile-post > .box > .box-items > #main-post-container > .main-box > #base-user-post-content > .post-header > #base-user-post-title > h3')
        cy.get('.base-profile-post > .box > .box-items > #main-post-container > .main-box > #base-user-post-content > .post-header > #base-user-post-title')
            .eq(0)
            //filtered
            // .should('have.text',postTitle); 
            .should('contain.text',postTitle)//+' '); 

    }

    disappearanceOfPost(postTitle) {
        cy.contains(postTitle)
            .should('not.exist')
    }

}
export default userProfileObject


