class MessagesObjects{

    NavigateToSendAPrivateMessage(){
        cy.visit(Cypress.env('CYPRESSBASEURL') + '/message/compose')
    }

    NavigateToInboxAll(){
        cy.visit(Cypress.env('CYPRESSBASEURL') + '/message/inbox')
    }
    
    NavigateToInboxUnread(){
        cy.visit(Cypress.env('CYPRESSBASEURL') + '/message/unread')
    }
    
    NavigateToInboxMessages(){
        cy.visit(Cypress.env('CYPRESSBASEURL') + '/message/messages')
    }
    
    NavigateToInboxPostReply(){
        cy.visit(Cypress.env('CYPRESSBASEURL') + '/message/selfreply')
    }

    NavigateToUserNameMentions(){
        cy.visit(Cypress.env('CYPRESSBASEURL') + '/message/mentions')
    }
    
    
    NavigateToSent(){
        cy.visit(Cypress.env('CYPRESSBASEURL') + '/message/sent')
    }
    

    //messages objects
    MessagesIcon(){
        cy.get('[id=chat-icon]')
            .should('be.visible')
            .click()
    }

    SendAPrivateMessage(){
        cy.get('[id=go-to-send-private-message]')
            .should('be.visible')
            .click()
    }

    InboxMessage(){
        cy.get('[id=go-to-inbox-message]')
            .should('be.visible')
            .click()
    }

    SentMessage(){
        cy.get('[id=go-to-sent-message]')
            .should('be.visible')
            .click()
    }

    //start of send a private message
    MessageFrom(messageFrom1){
        cy.get('[id=message-from]')
            .should('be.visible')
            .select(messageFrom1)
    }

    SelectUserNameMessageFrom(){
        cy.get('id="message-from-options-karim22"')
            .click()
    }

    SelectUserNameMessageTO(username2){
        cy.get('[id=message-to]')
            .clear()
            .type(username2)
    }

    SubjectOfTheMessage(subject){
        cy.get('[id=subject]')
            .should('be.visible')
            .clear()
            .type(subject)
    }

    MessageBody(body){
        cy.get('[id=message]')
            .clear()
            .type(body)
    }

    PleaseEnterAUserName(){
        cy.get('[class=error]')
            .should('be.visible')
            .should('have.text',' please enter a username ')
    }

    PleaseEnterASubject(){
        cy.get('[class=error]')
            .should('be.visible')
            .should('have.text','please enter a subject')
    }

    PleaseEnterAMessage(){
        cy.get('[class=error]')
            .should('be.visible')
            .should('have.text','we need something here')
    }

    PleaseChooseSender(){
        cy.get('[class=error]')
            .should('have.text',' please choose sender ')
    }

    SendMessage(){
        cy.get('[id=submit-form]')
            .should('be.visible')
            .click()
    }

    DeliveredMessage(){
        cy.get('[class=delivered]')
            .should('have.text',"your message has been delivered")
    }

    DeliveredReply(){
        cy.get('[class=delivered]')
            .should('have.text','your reply has been delivered')
    }

    AllInInbox(){
        cy.get('[id=go-to-all-messages]')
            .should('be.visible')
            .click()
    }

    UnreadInMessages(){
        cy.get('[id=go-to-unread-messages]')
            .should('be.visible')
            .click()
    }

    MessagesInInbox(){
        cy.get('[id=go-to-messages-messages]')
            .click()
    }

    PostRepliesInInbox(){
        cy.get('[id=go-to-post-replies-messages]')
            .should('be.visible')
            .click()
    }

    UserNameMentionsInInbox(){
        cy.get('[id=go-to-username-mentions]')
            .should('be.visible')
            .click()
    }

    //All in INbox
    DeleteInInbox(){
        cy.get('[id=click-delete-4]')
            .click()
    }

    YesSureTODeleteIt(){
        cy.get('[id=yes-delete-message-4]')
            .click()
    }

    NoSureTODeleteIt(){
        cy.get('[id=no-delete-message-4]')
            .click()
    }

    SpamInInbox(){
        cy.get('[id=click-spam-4]')
            .click({force: true})
    }

    YesSureToSpamIt(){
        cy.get('id=yes-spam-user-4')
            .click()
    }

    NoSureTOSpamIt(){
        cy.get('[id=no-spam-message-4]')
            .click()
    }

    BlockUserInInbox(){
        cy.get('[id=block-user-4]')
            .click()
    }

    YesSureBLockIt(){
        cy.get('[id=yes-block-user-4]')
    }

    NoSureToBlockIt(){
        cy.get('[id=no-block-message-4]')
            .click()
    }

    MarkUnreadInInbox(){
        cy.get('[id=mark-un-read-4]')
            .click()
    }

    ReplyInInbox(){
        cy.get('[id=reply-4]')
            .click()
    }

    WriteRepliedMessage(body2){
        cy.get('[id=message-4]')
            .should('be.visible')
            .clear()
            .type(body2)
    }

    SaveInReplyInInbox(){
        cy.get('[id=submit-form-4]')
            .should('be.visible')
            .click()
    }

    CancelInReplyInInbox(){
        cy.get('[id=cancel-form-4]')
            .should('be.visible')
            .click()
    }

    //start of Unread
    NoAnythingInMessages(){
        cy.get('[class=no-messages]')
            .should('be.visible')
            .should('have.text'," there doesn't seem to be anything here ")
    }

    //UserNameMentions
    NoAnythingInUserNameMentions(){
        cy.get('[class=no-messages]')
            .should('be.visible')
            .should('have.text'," there doesn't seem to be anything here ")
    }

    NotAppearNoAnythingInUnread(){
        cy.get('[class=no-messages]')
            .should('be.visible')
            .should('not.have.text',"there doesn't seem to be anything here")
    }


    //Start of Messages
    ExpandAll(){
        cy.get('[id=expand-all-4]')
            .click({ force: true })
    }

    CollapseAll(){
        cy.get('[id=collapse-all-4]')
            .click({ force: true })
    }

    HiddenAfterCollapseAll(){
        cy.get('[class=md]')
            .first()
            //.should('not.be.visible')
    }

    AppearedAfterExpandAll(){
        cy.get('[class=md]')
            .first()
            .should('be.visible')
    }
    

    UserNameAfterCollapseAll(username4){
        cy.get('[id=message-sender-2-4]')
            .should('have.text','/u/'+username4)
    }

    //Sent
    SentTab(){
        cy.get('[id=go-to-sent-message]')
            .click()
    }

    InvitationToModerate(subRedditName){
        cy.get('[class=subject-text]')
            .first()
            .should('have.text',"invitation to moderate /r/"+subRedditName)
    }

    TitleOfIncomingMessage(title){
        cy.get('[class=subject-text]')
            .first()
            .should('have.text',title)
    }

    TitleOfIncomingMessageNotExist(title){
        cy.get('[class=subject-text]')
            .first()
            //.should('not.be.visible')
    }

    RecievedInvitationFrom(username3){
        cy.get('[id=message-receiver-4]')
            .should('have.text',"/u/"+username3)
    }

    SpammedMessage(){
        cy.get('[id=spam-box-1]')
            .should('have.text',"spammed")
    }

    FullComments(){
        cy.get('[id=full-comment-a-4]')
            .click({force: true})
    }

    Context(){
        cy.get('[id=context-a-4]')
            .click({force: true})
    }
}

export default MessagesObjects