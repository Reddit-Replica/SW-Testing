class createPostObjects{

    navigate() {
        cy.visit('http://read-it.francecentral.cloudapp.azure.com/submit')
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
        //later and important : update the id of (post) button when norhan add it
        cy.get('._18Bo5Wuo3tMV-RDB8-kh8Z _2iuoyPiKHN3kfOoeIQalDT _10BQ7pjWbeYP63SAPNS8Ts HNozj_dKjQZ59ZsfEegz8')
            .click()
    }

    //?later:change the condition of
    //later:update the link 
    //?what is (2) here? how to determine this num
    // cy.url()
     //   .should('equal','http://read-it.francecentral.cloudapp.azure.com/r/sub-com/comments/2/look_at_this/')
    postDone() {
        urlInclude('comments')     
    }

    postNotDone() {
        //later:change the url
        //NOTE:we check that we still in th create post page
         cy.url()
            .should('equal','http://read-it.francecentral.cloudapp.azure.com/submit')
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
    checkUploadImgOrVideo(img) {
        cy.get("input[type=file]")
            .contains(img)
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
        cy.get('[maxlength]').invoke('attr', 'maxlength')
            .should('equal','300')
    }

    checkTitle(text) {
        cy.get('.title-input')
            .should('equal',text)
    }

    postText(text) {
        cy.get('[data-v-2464a639=""][data-v-a41bc47a=""]')
            .clear()
            .type(text);
        return this
    }

    typeUrl(url) {
        cy.get('.url-placeholder')
            .clear()
            .type(url);
        return this
    }

    showMyCommunities() {
        cy.get('.choose-post-community-3 > .bi')
            .click()
    }

    //later:update this id:-
    chooseMyprofile(pswd) {
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
        buttonDisabled('._18Bo5Wuo3tMV-RDB8-kh8Z _2iuoyPiKHN3kfOoeIQalDT _10BQ7pjWbeYP63SAPNS8Ts HNozj_dKjQZ59ZsfEegz8')
    }

    spoilerDisabled() {
        buttonDisabled('#footer-button-spoiler')
    }

    //later
    FlairDisabled() {
        buttonDisabled('#footer-button-flair')
    }

    nsfwEnable() {
        buttonEnabled('#footer-button-nsfw')
    }
    
}
export default createPostObjects