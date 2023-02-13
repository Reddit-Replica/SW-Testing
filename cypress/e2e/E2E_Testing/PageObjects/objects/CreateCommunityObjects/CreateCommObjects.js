class CreateCommObjects{
 
    Navigate() {
        cy.visit(Cypress.env('CYPRESSBASEURL') +'/main')
        
    }

    UrlChecker(url) {
        cy.url() 
            .should('equal',url);
    } 

    HomeCreateComm() {
        cy.get('#create-community-sidebar')
            .click()
    }

    // urlInclude(tag) {
    //     cy.url()
    //         .should('include',tag);
    // }

    // urlNotInclude(tag) {
    //     cy.url()
    //         .should('not.include',tag);
    // }

    CreateCommunitySub() {
        //click on create community button
        cy.get('#create-button')
            .click()
    }

    NoCommNameErrMsg(msg) {
        //filtered
        // cy.get('#required-name')
        //     .should('have.text',msg)
        cy.get('#required-name')
            .should('contain.text',msg)
    }

    //filtered : each error msg has different ids
    InvalidCommNameErrMsg(msg) {
        //filtered
        // cy.get('#name-symbols')
        //     .should('have.text',msg)
        cy.get('#name-symbols')
            .should('contain.text',msg)
    }

    MoreErrMsgUrl() {
        cy.get('#more')
            .click()
    }

    ErrFormVisible() {
        cy.get('.transparent-background > dialog')
       // cy.get('#more-dialog')
            .should('be.exist')
    }

    ErrFormNotExist() {
        cy.get('.transparent-background > dialog')
       // cy.get('#more-dialog')
            .should('not.exist')
    }

    ErrFormText(msg) {
        //filtered
        // cy.get('.error-text')
        //     .should('have.text',msg)
        cy.get('.error-text')
            .should('contain.text',msg)
    }

    ErrFormOk() {
        cy.get('#ok')
            .click()
    }

    ErrFormX() {
        //NOTE: not '#exit-dialog' as this is the id for (x) of th Create Community form itself
        cy.get('.transparent-background > dialog > header > #exit-dialog')
            .click()
    }

    CommName(commName) {
        cy.get('#name-input')
            .clear()
            .type(commName)
    }

    CommNameMax() {
        cy.get('#name-input')
            .invoke('attr', 'maxlength')
            .should('equal','21')
    }

    CancelCreateCom() {
        cy.get('#cancel-button')
            .click()
    }

    CancelCreateComByX() {
        cy.get('#exit-dialog')
            .click()
    }

    CommFormVisible() {
        cy.get('#create-community-form')
            .should('be.exist')
    }

    CommFormNotExist() {
        //later:m.s of not exist
        cy.get('#create-community-form')
            .should('not.exist')
    }
    // GoHome() {
    //     this.UrlChecker(Cypress.env('CYPRESSBASEURL') +'/main')
    // }

    ClickOutForm() {
        cy.get('.backdrop')
            .click('left')
    }

    CommCategory(major) {
        cy.get('#category-input')
            .select(major)
    }

    CommCategoryErrMsg(msg) {
        //filteres
        // cy.get('#required-category')
        //     .should('have.text',msg)
        cy.get('#required-category')
            .should('contain.text',msg)
    }
    
    
}
export default CreateCommObjects
