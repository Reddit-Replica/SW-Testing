class createPostObjects{
 
    navigate() {
        cy.visit(Cypress.env('CYPRESSBASEURL') +'/submit')
    }

    urlChecker(url) {
        cy.url()
            .should('equal',url);
    }

    urlInclude(tag) {
        cy.url()
            .should('include',tag);
    }

    urlNotInclude(tag) {
        cy.url()
            .should('not.include',tag);
    }

    post() {
        //"Post" button
        //cy.contains('Post')
        cy.get('.post-button')
            .click()
    }

    //?later:change the condition of
    //later:update the link 
    //?what is (2) here? how to determine this num
    // cy.url()
     //   .should('equal',Cypress.env('CYPRESSBASEURL') +'/r/sub-com/comments/2/look_at_this/')
    postDone() {
        this.urlInclude('comments')     
    }

    postNotDone() {
        //later:change the url
        //NOTE:we check that we still in th create post page
         cy.url()
            .should('equal',Cypress.env('CYPRESSBASEURL') +'/submit')
       // urlNotInclude('comments')
    }

    // chooseCommunity() {
    //     //" " button
    //     cy.get(' ')
    //         .click()
    // }
    
    mainPostTap() {
        //" " button
        cy.get('#0')
            .click()
    }

    imageAndVideoTap() {
        //" " button
        cy.get('#1')
            .click()
    }

    linkTap() {
        //" " button
        cy.get('#2')
            .click()
    }

    //later:the following should not be implemented as excel sheet said
    // pollTap() {
    //     //" " button
    //     cy.get(' ')
    //         .click()
    // }

    // talkTap() {
    //     //" " button
    //     cy.get(' ')
    //         .click()
    // }

    // oc() {
    //     //" " button
    //     cy.get(' ')
    //         .click()
    // }

    // markdown() {
    //     //" " button
    //     cy.get(' ')
    //         .click()
    // }

    spoiler() {
        //" " button
        cy.get('#footer-button-spoiler')
            .click()
    }

    nsfw() {
        //" " button
        cy.get('#footer-button-nsfw')
            .click()
    }

    //later:
    flair() {
        //" " button
        cy.get('#footer-button-flair')
            .click()
    }

    dragDropImg(img) {
        cy.get("input[type=file]")
            .attachFile(img, { subjectType: 'drag-n-drop' })

    }

    uploadImgOrVideo() {
        //" " button
        cy.get('label.blue-button')
            .click()
    }

    //?later:how to that?(selecting img after pressing (upload) button
    selectImg(img) {

    }

    //?later:how to check that:-
    checkUploadImgOrVideo(imoog) {
       // cy.get("input[type=file]")
    //    cy.get('.one-image')
    //         .contains(img)
    cy.get('.one-image')
      .should('be.visible')
      .and(($img) => {
        // "naturalWidth" and "naturalHeight" are set when the image loads
        expect($img[0].naturalWidth).to.be.greaterThan(0)
      })
    }

    sendNotification() {
        //" " checkbox
        cy.get('#reply')
            .check()
    }

    title(text) {
        cy.get('.title-input')
            .clear()
            .type(text);
        return this
    }

    checkMaxTitle() {
        //change this id :[maxlength] :-
        cy.get('[maxlength]').invoke('attr', 'maxlength')
            .should('equal','300')
    }

    checkTitle(text) {
        cy.get('.title-input')
            .should('equal',text)
    }

    postText(text) {
        //cy.get('[data-v-2464a639=""][data-v-a41bc47a=""]')
        cy.get('.ql-editor')
            .clear()
            .type(text);
        return this
    }

    typeUrl(url) {
        //cy.get('.url-placeholder')
        cy.get('#title')
            .clear()
            .type(url);
        return this
    }

    showMyCommunities() {
        cy.get('.choose-post-community-3 > .bi')
            .click()
    }

    //later:update this id:-
    chooseMyprofile() {
        cy.get('.choose-post-community-3')
            .children().first()
    }

    //later:update this function:-
    clearCommunity() {
        //" " button
        cy.get('.choose-post-community-3')
            .clear
    }

    // chooseACommunity(pswd) {
    //     cy.get('')
    //         .children().last()
    // }
     
    buttonDisabled(button) {
        cy.get(button)
            .should('be.disabled')
    }

    buttonEnabled(button) {
        cy.get(button)
            .should('be.enabled')
    }

    postDisabled() {
        //later and important : update the id of (post) button when norhan add it
        this.buttonDisabled('.post-button')
    }

    spoilerDisabled() {
        this.buttonDisabled('#footer-button-spoiler')
    }

    //later
    FlairDisabled() {
        this.buttonDisabled('#footer-button-flair')
    }

    nsfwEnable() {
        this.buttonEnabled('#footer-button-nsfw')
    }
    
}
export default createPostObjects