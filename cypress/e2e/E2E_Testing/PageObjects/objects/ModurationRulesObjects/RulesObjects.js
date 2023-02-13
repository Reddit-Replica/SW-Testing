class RulesObjects{

    Navigate(commName) {
        cy.visit(Cypress.env('CYPRESSBASEURL') +'/r/'+ commName+'/about/rules')
        
    }

    UrlChecker(url) {
        cy.url()
            .should('equal',url);
    } 

    GoRules() {
        cy.get('#rules-button')
            .click()
    }

    AddRuleExternal() {
        cy.get('#add-rules-button')
            .click()
    }

    CloseRulesFormByX() {
        cy.get('#exit-dialog')
            .click()
    }

    DisappearanceRuleForm() {
        cy.get('.rule-dialog flex-column')
            // .should('not.be.visible')
            .should('not.be.exist')
    }

    RuleText(text) {
        cy.get('#rule-input')
            .clear()
            .type(text)
    }

    ReportReasonText(text) {
        cy.get('#rule-report')
            .clear()
            .type(text)
    }

    FullDescripText(text) {
        cy.get('#description')
            .clear()
            .type(text)
    }

    checkMaxFullDesc() {
        //change this id :[maxlength] :-
        cy.get('#description')
            .invoke('attr', 'maxlength')
            .should('equal','500')
    }

    checkMaxReportReason() {
        //change this id :[maxlength] :-
        cy.get('#rule-report')
            .invoke('attr', 'maxlength')
            .should('equal','100')
    }

    AddRuleInternal() {
        cy.get('#create-rule-button')
            .click()
    }

    DisableAddRuleInternal() {
        cy.get('#create-rule-button')
            .should('be.disabled')
    }

    AbleAddRuleInternal() {
        cy.get('#create-rule-button')
            .should(' ')
    }

    CancelButton() {
        cy.get('#cancel-button')
            .click()
    }

    // ApplyRuleTo(appliedTo) {
    //     //cy.get('[type="radio"]')
    //     cy.get('#applied-to')
    //         .check(appliedTo)
    // }

    ApplyToComments() {
        cy.get('[value="private"]')
            .click()
    }

    ApplyToPosts() {
        cy.get('[value="restricted"]')
            .click()
    }
    
    ApplyToBoth() {
        cy.get('[value="public"]')
            .click()
    }

    RulesAddedMsg(msg) {
        cy.get('.pop-message')
            .should('have.text',msg)
       //Rule added
    }

    //m.s of this:-
    CloseRulesAddeMsgByX(msg) {
        cy.get('.left')
            .click()
       
    }


      

    //---------------------------------  Edit and Delete Rules  --------------------//

    EditRules() {
        cy.get('#edit-icon')
            .click()
    }
    
    SaveEditedRules() {
        cy.get('#save-button')
            .click()
    }

    // CancelEditButton() {
    //     cy.get('#cancel-button')
    //         .click()
    // }

    DeleteRules() {
        cy.get('#delete-button')
            .click()
    }

    CancelDeletingButton() {
        cy.get('#cancel-button')
            .click()
    }

    SubmitDelete() {
        cy.get('#delete-button')
            .click()
    }

    CancelDeleteByX() {
        cy.get('#exit-dialog')
            .click()
    }

    DeleteRuleSyntax(msg) {
        cy.get('.sure-text')
            .should('have.text',msg)
       
    }

    RuleTextErrMsg(msg) {
        cy.get('.zero-char')
        //filtered
            //.should('have.text',msg)
            .should('include.text',msg)
       
    }

    CheckExternalRuleText(rule) {    
        cy.get('.rule-name')
            .first()
            .should('have.text',rule)
    }

    ExistanceRuleText(rule) {    
        cy.contains(rule)
            .should('be.exist')
    }

    NotExistRuleText(rule) {    
        cy.contains(rule)
            .should('not.exist')//be.not.exist')
    }
 
    //---------------------------------  Rules  Collapse  --------------------//

    OpenCollapse() {
        cy.get('#expand-icon')
            .click()
    }
    CheckReportReasonRule_1(text) {
        cy.get(':nth-child(1) > .details-box > :nth-child(1) > .details-value')
            .should('have.text',text)

        //return cy.get('.details-box > :nth-child(1) > .details-value')
    }

    CheckAppliedToRule_1(text) {
         cy.get(':nth-child(1) > .details-box > .apply-box > :nth-child(1) > .details-value')
            .should('have.text',text)
        //return cy.get('.apply-box > :nth-child(1) > .details-value')
    }

    CheckCreatedTimeRule_1(text) {
       cy.get(':nth-child(1) > .details-box > .apply-box > :nth-child(2) > .details-value')
            .should('have.text',text)
        
        // return cy.get(':nth-child(2) > .details-value')
    }

    CheckFullDescripRule_1(text) {
         cy.get(':nth-child(1) > .details-box > :nth-child(3) > .details-value')
            .should('have.text',text)
        //return cy.get(':nth-child(3) > .details-value')
    }


    //------------------------------- Reorder Rules  -----------------------------------------//
    
    ReorderRules() {
        cy.get('#reorder-rules-button')
            .click()
    }

    
    ReorderSave() {
        cy.get('#save-reorder-rules-button')
            .click()
    }

    
    ReorderCancel() {
        cy.get('#cancel-reorder-rules-button')
            .click()
    }

    //-------------------//
    // GoCommunity() {

    // }

    // GoModerations() {
    //     cy.get('#view-mods > a')
    //         .click()
    // }

}
export default RulesObjects