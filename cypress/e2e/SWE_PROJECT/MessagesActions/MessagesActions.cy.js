/// <reference types="cypress" />

import UserMangementObjects from "../PageObjects/CreateCommunityObjects/UserManagementObjects.cy"
import MessagesObjects from "../PageObjects/MessagesObjects/MessagesObjects.cy"
import SearchObjects from "../PageObjects/SearchObjects/SearchObjects.cy"

const Search = new SearchObjects()
const UserMangement = new UserMangementObjects()
const Messages = new MessagesObjects()

beforeEach({scrollBehavior:false},() => {
    UserMangement.navigate()  
    UserMangement.enterUsername('karim10') 
    UserMangement.enterPassword('Karim@0107228700')     
    UserMangement.submit()
    Messages.MessagesIcon()
})


describe('Messages Test Cases',{scrollBehavior:false}, function () {

    //Test Case 1
    it('Send A private Message', () =>  {    
        Messages.NavigateToSendAPrivateMessage()
        //Messages.SendAPrivateMessage()
        Messages.MessageFrom(0)
        Messages.SelectUserNameMessageTO("/u/karim55")
        Messages.SubjectOfTheMessage("Lol Ya Negm")
        Messages.MessageBody("Hellllllllllllllo")
        Messages.SendMessage()
        Messages.DeliveredMessage()
        
    })
    
   
    //Test Case 2
    it('Send A private Message Without any filled data', () =>  {    
        Messages.NavigateToSendAPrivateMessage()
        //Messages.SendAPrivateMessage()
        Messages.SendMessage()
        Messages.PleaseChooseSender()
    })

    //Test Case 3
    it('Send A private Message Without without the person the message will send To ', () =>  {    
        Messages.NavigateToSendAPrivateMessage()
        //Messages.SendAPrivateMessage()
        Messages.MessageFrom(0)
        Messages.SubjectOfTheMessage("Lol Ya Negm")
        Messages.MessageBody("Hellllllllllllllo")
        Messages.SendMessage()
        Messages.PleaseEnterAUserName()
    })

    //Test Case 4
    it('Send A private Message without a subject', () =>  {    
        Messages.NavigateToSendAPrivateMessage()
        //Messages.SendAPrivateMessage()
        Messages.MessageFrom(0)
        Messages.SelectUserNameMessageTO("/u/karim55")
        Messages.MessageBody("Hellllllllllllllo")
        Messages.SendMessage()
        Messages.PleaseEnterASubject()
    
    })

    //Test Case 5
    it('Send A private Message without a Body messsage', () =>  {    
        Messages.NavigateToSendAPrivateMessage()
        //Messages.SendAPrivateMessage()
        Messages.MessageFrom(0)
        Messages.SelectUserNameMessageTO("/u/karim55")
        Messages.SubjectOfTheMessage("Lol Ya Negm")
        Messages.SendMessage()
        Messages.PleaseEnterAMessage()
    
    })

})



describe('Unread in Messages Test Cases',{scrollBehavior:false}, function () {
    //No Actions of it from back and front as Original Reddit make it like this
    //Test Case 1
    it('There is nothing to be here', () =>  {    
        Messages.MessagesIcon()
        Messages.NavigateToInboxUnread()
        //Messages.UnreadInMessages()
        Messages.NoAnythingInMessages()

    })

})

describe('Messages in Messages Test Cases',{scrollBehavior:false}, function () {
    
    //Test Case 1
    it('collapse all', () =>  {    
        Messages.MessagesIcon()
        Messages.NavigateToInboxMessages()
        //Messages.MessagesInInbox()
        Messages.CollapseAll()
        Messages.HiddenAfterCollapseAll()
        Messages.UserNameAfterCollapseAll("karim22")

    })

    //Test Case 2
    it('expand all:Delete with no', () =>  {    
        Messages.MessagesIcon()
        Messages.NavigateToInboxMessages()
        //Messages.MessagesInInbox()
        Messages.ExpandAll()
        Messages.AppearedAfterExpandAll()
        Messages.TitleOfIncomingMessage("/u/karim22karim")
        Messages.DeleteInInbox()
        Messages.NoSureTODeleteIt()
        Messages.TitleOfIncomingMessage("/u/karim22karim")

    })
    
    //Test Case 1
    it('expand all:Delete with yes', () =>  {    
        Messages.MessagesIcon()
        Messages.NavigateToInboxMessages()
        //Messages.MessagesInInbox()
        Messages.ExpandAll()
        Messages.AppearedAfterExpandAll()
        Messages.TitleOfIncomingMessage("karim")
        Messages.DeleteInInbox()
        Messages.YesSureTODeleteIt()
        cy.reload()
        Messages.TitleOfIncomingMessageNotExist("karim")
        
    })
    
    
    //Test Case 3
    it('Spam with no', () =>  {    
        Messages.MessagesIcon()
        Messages.NavigateToInboxMessages()
        //Messages.MessagesInInbox()
        Messages.ExpandAll()
        Messages.AppearedAfterExpandAll()
        Messages.SpamInInbox()
        Messages.TitleOfIncomingMessage("karim")
        Messages.NoSureTOSpamIt()
        Messages.TitleOfIncomingMessage("karim")
        
    })
    
    //Test Case 4
    it('Spam with yes', () =>  {    
        Messages.MessagesIcon()
        Messages.NavigateToInboxMessages()
        //Messages.MessagesInInbox()
        Messages.ExpandAll()
        Messages.AppearedAfterExpandAll()
        Messages.SpamInInbox()
        Messages.TitleOfIncomingMessage("karim")
        Messages.SpamInInbox()
        Messages.YesSureToSpamIt()
        Messages.SpammedMessage()
    })
    
    
    //Test Case 4
    it('Block A user with No', () =>  {    
        Messages.MessagesIcon()
        Messages.NavigateToInboxMessages()
        //Messages.MessagesInInbox()
        Messages.ExpandAll()
        Messages.AppearedAfterExpandAll()
        Messages.BlockUserInInbox()
        Messages.NoSureToBlockIt()
    })
    
    //Test Case 6
    it('Block A User with yes', () =>  {    
        Messages.MessagesIcon()
        Messages.NavigateToInboxMessages()
        //Messages.MessagesInInbox()
        Messages.ExpandAll()
        Messages.AppearedAfterExpandAll()
        Messages.BlockUserInInbox()
        Messages.YesSureBLockIt()
        Search.SearchReddit("karim22")
        Search.CLickOnSearchIcon()
        Search.People()
        Search.NotFoundInSearchPeople('“karim22”')

    })
    
    //Test Case 7
    it('Mark Unread', () =>  {    
        Messages.MessagesIcon()
        Messages.NavigateToInboxMessages()
        //Messages.MessagesInInbox()
        Messages.ExpandAll()
        Messages.AppearedAfterExpandAll()
        Messages.MarkUnreadInInbox()
        Messages.UnreadInMessages()
        Messages.NotAppearNoAnythingInUnread()

    })
    
    //Test Case 8
    it('Reply', () =>  {    
        Messages.MessagesIcon()
        Messages.NavigateToInboxMessages()
        //Messages.MessagesInInbox()
        Messages.ExpandAll()
        Messages.AppearedAfterExpandAll()
        Messages.ReplyInInbox()
        Messages.WriteRepliedMessage("Lol B2a Ya Negm")
        Messages.CancelInReplyInInbox()
        Messages.ReplyInInbox()
        Messages.WriteRepliedMessage("Lol B2a Ya Negm")
        Messages.SaveInReplyInInbox()
        Messages.DeliveredMessage()

    })

})


describe('Post Replies in Messages Test Cases',{scrollBehavior:false}, function () {
    
    //Test Case 1
    //NEED TO CHECK
    it('full comments', () =>  {    
        Messages.MessagesIcon()
        Messages.NavigateToInboxPostReply()
        //Messages.PostRepliesInInbox()
        Messages.FullComments()


    })

    //Test Case 2
    //NEED TO CHECK
    it('context', () =>  {    
        Messages.MessagesIcon()
        Messages.NavigateToInboxPostReply()
        //Messages.PostRepliesInInbox()
        Messages.Context()
    })
    
    //Test Case 3
    it('Spam with no', () =>  {    
        Messages.MessagesIcon()
        Messages.NavigateToInboxPostReply()
        //Messages.PostRepliesInInbox()
        Messages.SpamInInbox()
        Messages.TitleOfIncomingMessage("karim")
        Messages.NoSureTOSpamIt()
        Messages.TitleOfIncomingMessage("karim")
        
    })
    
    //Test Case 4
    it('Spam with yes', () =>  {    
        Messages.MessagesIcon()
        Messages.NavigateToInboxPostReply()
        //Messages.PostRepliesInInbox()
        Messages.SpamInInbox()
        Messages.TitleOfIncomingMessage("karim")
        Messages.SpamInInbox()
        Messages.YesSureToSpamIt()
        Messages.SpammedMessage()
    })
    
    
    //Test Case 4
    it('Block A user with No', () =>  {    
        Messages.MessagesIcon()
        Messages.NavigateToInboxPostReply()
        //Messages.PostRepliesInInbox()
        Messages.BlockUserInInbox()
        Messages.NoSureToBlockIt()
    })
    
    //Test Case 6
    it('Block A User with yes', () =>  {    
        Messages.MessagesIcon()
        Messages.NavigateToInboxPostReply()
        //Messages.PostRepliesInInbox()
        Messages.BlockUserInInbox()
        Messages.YesSureBLockIt()
        Search.SearchReddit("karim22")
        Search.CLickOnSearchIcon()
        Search.People()
        Search.NotFoundInSearchPeople('“karim22”')

    })
    
    //Test Case 7
    it('Mark Unread', () =>  {    
        Messages.MessagesIcon()
        Messages.NavigateToInboxPostReply()
        //Messages.PostRepliesInInbox()
        Messages.MarkUnreadInInbox()
        Messages.UnreadInMessages()
        Messages.NotAppearNoAnythingInUnread()

    })
    
    //Test Case 8
    it('Reply', () =>  {    
        Messages.MessagesIcon()
        Messages.NavigateToInboxPostReply()
        //Messages.PostRepliesInInbox()
        Messages.ReplyInInbox()
        Messages.WriteRepliedMessage("Lol B2a Ya Negm")
        Messages.CancelInReplyInInbox()
        Messages.ReplyInInbox()
        Messages.WriteRepliedMessage("Lol B2a Ya Negm")
        Messages.SaveInReplyInInbox()
        Messages.DeliveredMessage()

    })
    

})

describe('UserNameMentions in Messages Test Cases',{scrollBehavior:false}, function () {
    
    //Test Case 1
    //NEED TO CHECK
    it('full comments', () =>  {    
        Messages.MessagesIcon()
        Messages.NavigateToUserNameMentions()
        //Messages.UserNameMentionsInInbox()
        Messages.FullComments()
    })

    //Test Case 2
    //NEED TO CHECK
    it('context', () =>  {    
        Messages.MessagesIcon()
        Messages.NavigateToUserNameMentions()
        //Messages.UserNameMentionsInInbox()
        Messages.Context()
    })
    
    //Test Case 3
    it('Spam with no', () =>  {    
        Messages.MessagesIcon()
        Messages.NavigateToUserNameMentions()
        //Messages.UserNameMentionsInInbox()
        Messages.SpamInInbox()
        Messages.TitleOfIncomingMessage("karim")
        Messages.NoSureTOSpamIt()
        Messages.TitleOfIncomingMessage("karim")
        
    })
    
    //Test Case 4
    it('Spam with yes', () =>  {    
        Messages.MessagesIcon()
        Messages.NavigateToUserNameMentions()
        //Messages.UserNameMentionsInInbox()
        Messages.SpamInInbox()
        Messages.TitleOfIncomingMessage("karim")
        Messages.SpamInInbox()
        Messages.YesSureToSpamIt()
        Messages.SpammedMessage()
    })
    
    
    //Test Case 4
    it('Block A user with No', () =>  {    
        Messages.MessagesIcon()
        Messages.NavigateToUserNameMentions()
        //Messages.UserNameMentionsInInbox()
        Messages.BlockUserInInbox()
        Messages.NoSureToBlockIt()
    })
    
    //Test Case 6
    it('Block A User with yes', () =>  {    
        Messages.MessagesIcon()
        Messages.NavigateToUserNameMentions()
        //Messages.UserNameMentionsInInbox()
        Messages.BlockUserInInbox()
        Messages.YesSureBLockIt()
        Search.SearchReddit("karim22")
        Search.CLickOnSearchIcon()
        Search.People()
        Search.NotFoundInSearchPeople('“karim22”')

    })
    
    //Test Case 7
    it('Mark Unread', () =>  {    
        Messages.MessagesIcon()
        Messages.NavigateToUserNameMentions()
        //Messages.UserNameMentionsInInbox()
        Messages.MarkUnreadInInbox()
        Messages.UnreadInMessages()
        Messages.NotAppearNoAnythingInUnread()

    })
    
    //Test Case 8
    it('Reply', () =>  {    
        Messages.MessagesIcon()
        Messages.NavigateToUserNameMentions()
        //Messages.UserNameMentionsInInbox()
        Messages.ReplyInInbox()
        Messages.WriteRepliedMessage("Lol B2a Ya Negm")
        Messages.CancelInReplyInInbox()
        Messages.ReplyInInbox()
        Messages.WriteRepliedMessage("Lol B2a Ya Negm")
        Messages.SaveInReplyInInbox()
        Messages.DeliveredMessage()

    })
})

describe('All in Messages Test Cases',{scrollBehavior:false}, function () {
    
    //Test Case 1
    it('Delete with no', () =>  {    
        Messages.MessagesIcon()
        Messages.NavigateToInboxAll()
        //Messages.AllInInbox()
        Messages.TitleOfIncomingMessage("karim:")
        Messages.DeleteInInbox()
        Messages.NoSureTODeleteIt()
        Messages.TitleOfIncomingMessage("karim:")
        
    })
    
    //Test Case 2
    it('Delete with yes', () =>  {    
        Messages.MessagesIcon()
        Messages.NavigateToInboxAll()
        //Messages.AllInInbox()
        Messages.TitleOfIncomingMessage("karim:")
        Messages.DeleteInInbox()
        Messages.YesSureTODeleteIt()
        cy.reload()
        Messages.TitleOfIncomingMessageNotExist("karim:")
    })
    
    //Test Case 3
    it('Spam with no', () =>  {    
        Messages.MessagesIcon()
        Messages.NavigateToInboxAll()
        //Messages.AllInInbox()
        Messages.SpamInInbox()
        Messages.TitleOfIncomingMessage("karim:")
        Messages.NoSureTOSpamIt()
        Messages.TitleOfIncomingMessage("karim:")
        
    })
    
    //Test Case 4
    it('Spam with yes', () =>  {    
        Messages.MessagesIcon()
        Messages.NavigateToInboxAll("karim:")
        //Messages.AllInInbox()
        Messages.TitleOfIncomingMessage("karim:")
        Messages.SpamInInbox()
        Messages.YesSureToSpamIt()
        Messages.SpammedMessage()
    })
    
    
    //Test Case 4
    it('Block A user with No', () =>  {    
        Messages.MessagesIcon()
        Messages.NavigateToInboxAll()
        //Messages.AllInInbox()
        Messages.BlockUserInInbox()
        Messages.NoSureToBlockIt()
    })
    
    //Test Case 6
    it('Block A User with yes', () =>  {    
        Messages.MessagesIcon()
        Messages.NavigateToInboxAll()
        //Messages.AllInInbox()
        Messages.BlockUserInInbox()
        Messages.YesSureBLockIt()
        Search.SearchReddit("karim22")
        Search.CLickOnSearchIcon()
        Search.People()
        Search.NotFoundInSearchPeople('“karim22”')

    })
    
    //Test Case 7
    it('Mark Unread', () =>  {    
        Messages.MessagesIcon()
        Messages.NavigateToInboxAll()
        //Messages.AllInInbox()
        Messages.MarkUnreadInInbox()
        Messages.UnreadInMessages()
        Messages.NotAppearNoAnythingInUnread()

    })
    
    //Test Case 8
    it('Reply', () =>  {    
        Messages.MessagesIcon()
        Messages.NavigateToInboxAll()
        //Messages.AllInInbox()
        Messages.ReplyInInbox()
        Messages.WriteRepliedMessage("Lol B2a Ya Negm")
        Messages.CancelInReplyInInbox()
        Messages.ReplyInInbox()
        Messages.WriteRepliedMessage("Lol B2a Ya Negm")
        Messages.SaveInReplyInInbox()
        Messages.DeliveredReply()

    })
    
    

})