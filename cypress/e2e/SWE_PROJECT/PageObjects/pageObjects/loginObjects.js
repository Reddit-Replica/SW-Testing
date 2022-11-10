class loginObjects{
    navigate() {
        cy.visit('http://read-it.francecentral.cloudapp.azure.com/login/')
    }

    enterUsername(username) {
        cy.get('#user-name')
            .clear()
            .type(username) 
        return this
    }

    clearUsername() {
        cy.get('#user-name')
            .clear()
        return this
    }

    enterPassword(pswd) {
        cy.get('#password')
            .clear()
            .type(pswd)
        return this
    }

    submit() {
        //"LOG IN" button
        cy.get('.submit-login')
            .click()
    }

    urlChecker(url) {
        cy.url()
            .should('equal',url) 
    }

    doNotLog() {
        cy.url()
            .should('not.equal','http://read-it.francecentral.cloudapp.azure.com/main')   
    }

    doLog() {
        cy.url()
            .should('equal','http://read-it.francecentral.cloudapp.azure.com/main')   
    }
 
    userNameErrMsg(msg){       
        //error msg of username box
        cy.get('.username-error-message')
            .should('have.text',msg) 

    }

    // loginpassmsg() {
    // }
    forgetPassword(){
        //password blue word , will lead to forget password page
        cy.get('[href="/forgetPasswordpage"]')
            .click()
    }

    forgetUserName(){
        //UserName blue word , will lead to forget UserName page
        cy.get('[href="/forgetUsernamepage"]')
            .click() 
    }

    signUpPage(){
        //SIGN UP blue word , will lead to SIGN UP page
        cy.get('[href="/signup"]')
            .click() 
    }
    
    userAgreementPage(){
        //User Agreement blue word , will lead to SIGN UP page
        cy.get('[href="https://www.redditinc.com/policies/user-agreement"]')
            .click() 
    }

    privacyPolicyPage(){
        //Privacy Policy blue word , will lead to SIGN UP page
        cy.get('[href="https://www.redditinc.com/policies/privacy-policy"]')
            .click() 
    }

    body() {
        cy.get('.sec-largest-div')
            .click()
    }
}
export default loginObjects