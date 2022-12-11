/// <reference types="cypress" />

import ChatAndMessagingObjects from "/home/karimmahmoud/Desktop/CypressAutomation/cypress/e2e/SWE_PROJECT/PageObjects/SettingsObjects/ChatAndMessagingObjects.cy"

describe('Chat And Messaging Tab Tests', function () {
    


    //Test Case 1
    //TODO : NEED TO CHECK THE EFFECT OF EACH CHOICE LATER
    it('Who can send you chat requests', () =>  {    

        const ChatAndMessaging = new ChatAndMessagingObjects()
        ChatAndMessaging.navigate()
    
        ChatAndMessaging.WhoCanSendYouChatRequests()
        ChatAndMessaging.AccountsOlderThan30DaysChatRequests()
        ChatAndMessaging.EveryOneChatRequests()
        ChatAndMessaging.NoBodyChatRequests()
    
    })
    
    //Test Case 2 
    //TODO : NEED TO CHECK THE EFFECT OF EACH CHOICE LATER
    it('Who can send you private messages',  () => {  

        const ChatAndMessaging = new ChatAndMessagingObjects()
        ChatAndMessaging.navigate()
    
        ChatAndMessaging.WhoCanSendYouPrivateMessages()
        ChatAndMessaging.EveryOnePrivateMessages()
        ChatAndMessaging.NoBodyPrivateMessages()        
    
    })

    //Test Case 3 
    //Click on Who can send you private messages and keep it open, then click on Who can send you chat requests ==> Who can send you private messages should be closed, otherwise bug
    it('Who can send you private messages opened, THEN click on Who can send you chat requests',  () => {  
    
        const ChatAndMessaging = new ChatAndMessagingObjects()
        ChatAndMessaging.navigate()
    
        ChatAndMessaging.WhoCanSendYouPrivateMessages()
        ChatAndMessaging.WhoCanSendYouChatRequests()
        ChatAndMessaging.InvisbleWhoCanSendYouPrivateMessages()
                
    })

    //Test Case 4 
    //Click on Who can send you chat requests and keep it open, then click on Who can send you private messages ==> Who can send you private messages should be closed, otherwise bug
    it('Who can send you chat requests opened, THEN Who can send you private messages',  () => {  
    
        const ChatAndMessaging = new ChatAndMessagingObjects()
        ChatAndMessaging.navigate()
    
        //TODO: [class=title] ==>need to be changed later ==> Who can send you chat requests
        ChatAndMessaging.WhoCanSendYouChatRequests()
        ChatAndMessaging.WhoCanSendYouPrivateMessages()
        ChatAndMessaging.InvisbleWhoCanSendYouChatRequests()

    })

    //Test Case 5 
    // I choose nobody from Who can send you private messages, then i open Who can send you chat requests and keep it open
    //Now I need to get the combo box of the Who can send you private messages ==> but it is invesible
    it('choice nobody from Who can send you private messages,THEN open Who can send you chat requests and keep it open , THEN open Who can send you private messages',  () => {  
    
        const ChatAndMessaging = new ChatAndMessagingObjects()
        ChatAndMessaging.navigate()
    
        ChatAndMessaging.WhoCanSendYouPrivateMessages()
        ChatAndMessaging.NoBodyPrivateMessages()
        ChatAndMessaging.WhoCanSendYouChatRequests()
        ChatAndMessaging.WhoCanSendYouPrivateMessages()
        
    })

    //Test Case 6 
    //TODO: NEED TO CHECK THE EFFECT OF THE INVITATION TO A PERSON
    it('Invite someone to chat',  () => {  

        const ChatAndMessaging = new ChatAndMessagingObjects()
        ChatAndMessaging.navigate()
    
        ChatAndMessaging.InviteSomeoneToChat()

    })

    //Test Case 7 
    //TODO: NEED TO CHECK THE EFFECT OF THE MARK AS READ
    it('Mark all as read',  () => {  
    
        const ChatAndMessaging = new ChatAndMessagingObjects()
        ChatAndMessaging.navigate()
    
        ChatAndMessaging.MarkAllAsread()        
        
    })

    
})