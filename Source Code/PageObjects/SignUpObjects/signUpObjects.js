class signUpObjects{
    navigate() {
    //?which one?    
        cy.visit(Cypress.env('CYPRESSBASEURL') +'/signup')
        //cy.visit('https://www.reddit.com/register/')
    }

    enterEmail(username) {
        cy.get('#email-input')
            .clear()
            .type(username);
        return this
    }

    continue() {
        //"CONTINUE" button
        cy.get('.submit-signup')
            .click();
    }

    urlChecker(url) {
        cy.url()
            .should('equal',url);
    }

    urlCheckerNot(url) {
        cy.url()
            .should('not.equal',url);
    }

    emailErrMsg(msg){       
        //error msg of Email box
        cy.get('.username-error-message')
            .should('have.text',msg);
    }

    //########################################### linking with other pages #######################################
    loginPage(){
        //LOG IN blue word , will lead to login page
        cy.get('[href="/login"]')
            .click();
    }
    userAgreementPage(){
        //User Agreement blue word , will lead to SIGN UP page
        cy.get('[href="https://www.redditinc.com/policies/user-agreement"]')
            .click();
    }

    privacyPolicyPage(){
        //Privacy Policy blue word , will lead to SIGN UP page
        cy.get('[href="https://www.redditinc.com/policies/privacy-policy"]')
            .click();
    }

    goSecondForm() {
        cy.get('.all-div')
            .should('be.visible')
    }

    goNotSecondForm() {
        cy.get('.all-div')
            .should('not.exist')
    }
    //###########################for the second form ##################

    enterUserName(username) {
        cy.get('#regUsername')
            .clear()
            .type(username);
        return this
    }

    enterPassword(pswd) {
        cy.get('#reg-password')
            .clear()
            .type(pswd);
        return this
    }

    signUpButton(){
        //SIGN UP button
        cy.get('#signup-button')
            .click();
    }

    backButton(){
        //Back button
        cy.get('#back-button')
            .click();
    }

    //later:important to update this function
    notRobot() {
        //?:-
        // cy.get('.all-div')
        //     .click()
        cy.get('#repatcha')
            .check()
    }
    //NOTE:userNameErrMsg and passwordErrMsg have the same id !! 
    //?what if both appears at the same time?
    userNameErrMsg(msg){       
        //error msg of username box
        cy.get('.username-error-message')
            .should('have.text',msg);
    }

    passwordErrMsg(msg){       
        //error msg of password box
        cy.get('.username-error-message')
            .should('have.text',msg);
    }

    noUserNameErrMsg() {       
        //error msg of username box
        cy.get('.username-error-message')
            .should('not.exist')
    }

    noPasswordErrMsg() {       
        //error msg of password box
        cy.get('.username-error-message')
            .should('not.exist')
    }

    signUpEnable() {
        cy.get('#signup-button')
            .should('be.enabled')
    }

    //#############  later  ########
    //?i do not know what is going on, i have to click twice on conyinuw with a delay between them!!:-
    contiuneTemporary() {
       //"CONTINUE" button
       cy.get('.submit-signup')
       .click();
        cy.wait(1000)
       //"CONTINUE" button
       cy.get('.submit-signup')
       .click();
    }

    goFirstForm() {
        cy.get('.largest-div')
            .should('be.visible')
    } 

    goNotFirstForm() {
        cy.get('.largest-div')
            .should('not.exist')
    }

    firstUsernameSugg() {
        cy.get('.username-generator')
            .children()
            .first()
            .click()
    }

    //later:update 'should' condition
    checkUsername() {
        cy.get('#regUsername')
            .should('not.be.empty')
    //later:you can use this later:-
    // cy.get('[data-username="Unlucky_Read_4488"]').click()
    // cy.get('[data-username="Unlucky_Read_4488"]').invoke('text').then(_arbitaty_username => {
    // cy.get('#regUsername').should('have.text',_arbitaty_username)
    // })
    }

    signUpDone() {
         cy.url()
            .should('equal','http://read-it.francecentral.cloudapp.azure.com/main')
    }

    signUpNotDone() {
        cy.url()
            .should('not.equal','http://read-it.francecentral.cloudapp.azure.com/main')
    }

}
export default signUpObjects