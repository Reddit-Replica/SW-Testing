class AccountObjects {
    
    navigate(){
        cy.visit(Cypress.env('CYPRESSBASEURL') +'/settings/account')
    }

    //----------------------------------------ACCOUNT PREFERENCES----------------------------------------// 
    EmailAddress(){
        cy.get('[id=change]')
            .first()
            .should('be.visible')
            .click()
    }

    ChangePassword(){
        cy.get('[id=change]')
            .last()
            .click()
    }

    CurrentPassword(newPassword){
        cy.get('[type=password]')
            .clear()
            .type(newPassword)
    }

    NewMail(newMail2){
        cy.get('[type=email]')
            .clear()
            .type(newMail2)
    }

    DisabledSaveEmail(){
        cy.get('[id=saveEmailid]')
            .should('not.be.selected')
    }

    SaveEmail(){
        cy.get('[id=saveEmailid]')
            .click()
    }

    EmailAddressAfterChanged(newMail3){
        cy.get('[class=p-title-description]')
            //.should('have.text',newMail3)
    }

    EnabledSaveEmail(){
        cy.get('[id=saveEmailid]')
            .should('be.enabled')
    }
    
    SaveEmail(){
        cy.get('[id=saveEmailid]')
            .click()
    }

    UpdateYourEmailTitle(){
        cy.get('[class=change-email-header]')
            .should('have.text',"Update your email")
    }



    InvalidMessage(){
        cy.get('[class=invalid]')
            .should('have.text'," Password must be at least 8 characters long ")
    }


    InCorrectPasswordMessage(){
        cy.get('[class=error]')
            .first()
            .should('have.text',"incorrect password")
    }

    PasswordMustMatchMessage(){
        cy.get('[class=error]')
            .last()
            .should('have.text',"Password must match")
    }


    //TODO: CHECK THE ID OF IT LATER
    Gender(genderType2) {
        cy.get('[class=span-blue]')
            //.should('be.visible') 
            .click({force:true})
            .select(genderType2)
    }

    CheckGenderAfterChanged(genderType3){
        cy.get('[class=span-blue]')
            .should('have.text',genderType3)
    }

    Country(indexOfCountry,countryName) {
        cy.get('[id=select1]')
            .select(indexOfCountry)
    }
    
    //----------------------------------------CONNECTED ACCOUNTS----------------------------------------// 

    ConnectToFaceBook(){
        cy.get('[id=apple]')
            .first()
            .should('be.visible')
            .click()
    }

    ConnectedToGoogle() {
        cy.get('[id=apple]')
            .last()
            .should('be.visible')
            .click()
    }
 
    DeleteAccount(){
        cy.get('[id=delete-account]')
            .should('have.text',"Delete Account")
            .click()
    }
    
}

export default AccountObjects