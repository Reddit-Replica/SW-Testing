class CreateCommObjects{
 
    Navigate() {
        cy.visit('http://localhost/main')
        
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

    CommNameErrMsg(msg) {
        cy.get('.name-error')
            .should('have.text',msg)
       
    }

    MoreErrMsgUrl() {
        cy.get('#more')
            .click()
    }

    ErrFormVisible() {
        cy.get('#more-dialog')
            .should('be.exist')
    }

    ErrFormNotExist() {
        cy.get('#more-dialog')
            .should('not.exist')
    }

    ErrFormText() {
        cy.get('.error-text')
            .should('have.text','Community names must be between 3–21 characters, and can only contain letters, numbers, or underscores.')
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
        cy.get('')
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
    //     this.UrlChecker('http://localhost/main')
    // }

    ClickOutForm() {
        cy.get('.backdrop')
            .click()
    }

    CommCategory() {
        cy.get('.error-text')
            .sele
    }

    
    
}
export default CreateCommObjects