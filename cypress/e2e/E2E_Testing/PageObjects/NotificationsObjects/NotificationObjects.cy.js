class NotificationObjects{

    NotificationIcon(){
        cy.get('[id=notifications-icon]')
            .click()
    }

    SeeAllInNotifications(){
        cy.get('[id=ntf-list-12]')
            .should('have.text',"See All")
            .click()
    }

    CheckProfileUserName(userNameProfile){
        cy.get('[id=profile-pic-user-name]')
            .should('have.text',userNameProfile)
    }
    MessagesFromNotifications(){
        cy.get('[id=ntf-list-6]')
            .should('have.text',"Messages")
            .click()
    }

    NotificationText(){
        cy.get('[id=ntf-page-5]')
            .should('have.text',"Notifications")
    }

    TitleOfNotification(indexofNotification,notificationContent){
        cy.get('[id=ntf-msg-'+indexofNotification+']')
            .should('have.text',notificationContent)
            .click()
    }

    ThreePointsOnTheLeft(indexOfThreePoints){
        cy.get('[id=ntf-msg-'+indexOfThreePoints+']')
            .click()
    }

    HideThisNotification(indexOfHide){
        cy.get('[id=ntf-msg-'+indexOfHide+']')
            //.should('have.text',"Hide this Notification")
            .click()
    }

    UserNameOfTheNotification(indexofUserNameInNotification,userName){
        cy.get('[id=ntf-msg-'+indexofUserNameInNotification+']')
            .should('have.text',userName)
    }

    CheckPostContentOfThePostAfterClickOnNotification(content){
        cy.get('[id=post-by-router]')
            .first()
            .should('have.text',content)
    }
    
    AfterHiddenTitleOfTheNotification(indexOfhidden,title2){
        cy.get('[id=ntf-msg-'+indexOfhidden+']')
            .should('not.have.text',title2)
            .click()
    }
    

    CheckURL(newPage){
        cy.url()
            .should('eq', Cypress.env('CYPRESSBASEURL') + newPage)
    }

    UserNameInProfilePage(userName1){
        cy.get('UserNameOfTheNotification')
            .should('have.text',userName1)
    }

    ReplyBack(indexOfReplyBack){
        cy.get('[id=ntf-msg-'+indexOfReplyBack+']')
            .click()
    }

    NumberOfNotifications(numberOfNotificatiosn){
        cy.get('[id=num-notification-notification]')
            .should('have.text',numberOfNotificatiosn)
    }

    
}

export default NotificationObjects