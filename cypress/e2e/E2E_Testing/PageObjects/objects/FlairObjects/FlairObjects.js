class FlairObjects{
 
    Navigate() {
        cy.visit(Cypress.env('CYPRESSBASEURL') +'/r/footbally/about/postflair')
        
    }

    UrlChecker(url) {
        cy.url()
            .should('equal',url);
    } 

    DisableMsg() {
        cy.get('div.disabled')
            .click()
    }

    AddFlair() {
        cy.get('#add-flair-button')
            .click()
    }

    DisableAddFlair() {
        cy.get('#add-flair-button')
            .should('be.disabled')
    }

    AbleAddFlair() {
        cy.get('#add-flair-button')
            .should(' ')
    }

    FlairText(text) {
        cy.get('#flair-text')
        .clear()
        .type(text)
    }

    SaveFlair() {
        cy.get('#save-button')
            .click()
    }

    CancelFlair() {
        cy.get('#cancel-button')
            .click()
    }

    DisappearanceFlairForm() {
        cy.get('.add-flair-box')
            // .should('not.be.visible')
            .should('not.be.exist')
    }

    EditFlair() {
       // cy.get('#edit-button')
        cy.get('*[id^="edit-flair"]')
            .first()
            .click()
    }

    FlairTextColor() {
        cy.get('#flair-text-color')
            .click()
    }

    OpenBackgroundColors() {
        cy.get('#flair-color')
            .click()
    }

    ChooseOrangeColor(){
        cy.get(':nth-child(5) > .color')
            .click()
    }

    // FlairFinalText(){
    //     cy.get('.flair-text')
    //         .click()

    // }

    ExistanceFlair(flair) {    
        cy.contains(flair)
            .should('be.exist')
    }

    NotExistFlair(flair) {    
        cy.contains(flair)
            .should('not.exist')//be.not.exist')
    }

    CheckBackground(rgb){
        cy.get('.flair-text')
            .should("have.css", "background-color", rgb);

           // .should("have.css","te");

    }

    FlairTextErrMsg(msg) {
        cy.get('.error')
            .should('have.text',msg)
       
    }

      //-----------------------------  Delete Flairs  --------------------//
    DeleteFlair() {
        //cy.get('#delete-button-0')
        //cy.get('#delete-flair-0')
        cy.get('*[id^="delete-flair"]')
            .first()
            .click()
    }

    SubmitDeleteFlair() {
        cy.get('#delete-flair-button')
            .click()
    }

    CancelDeleteFlair() {
        cy.get('#cancel-button')
            .click()
    }

    CancelDeleteFlairByX() {
        cy.get('#exit-dialog')
            .click()
    }

    //-----------------------------  Reorder Flairs  --------------------//
    
    ReorderFlairs() {
        cy.get('#reorder-flairs-button')
            .click()
    }

    SaveReorder() {
        cy.get('#save-reorder-flairs-button')
            .click()
    }
    

   /* Reorder*/PopMsg(msg) {
    cy.log( cy.get('.pop-message').invoke('text'))
        cy.get('.pop-message')
            .should('have.text',msg)
       
           
    }

    /*Reorder*/ClosePopMsgByX() {
        cy.get('.left')
            .click()
       
    }
      
    DisappearancePopMsg() {
        cy.get('.pop-message')
            .should('not.be.exist')    
    }
}
export default FlairObjects

