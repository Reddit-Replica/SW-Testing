/// <reference types="cypress" />

import EmailsObjects from "/home/karimmahmoud/Desktop/CypressAutomation/cypress/e2e/SWE_PROJECT/PageObjects/SettingsObjects/EmailsObjects.cy"

//TODO: CHECK THE EFFECT OF ALL TEST CASES LATER

describe('Emails Tab Tests', function () {

    //----------------------------------------Messages Section----------------------------------------//
    //Test Case 1
    it('Inbox messages', () =>  {
        const Emails = new EmailsObjects()
        Emails.navigate()
    
        Emails.InboxMessages()
    
    })
    
    //Test Case 2
    it('Chat requests', () =>  {    
        const Emails = new EmailsObjects()
        Emails.navigate()
    
        Emails.ChatRequests()

    })
    
    //----------------------------------------Activity Section----------------------------------------//
    //Test Case 3
    it('New user welcome', () =>  {    
        const Emails = new EmailsObjects()
        Emails.navigate()
    
        Emails.NewUserWelcome()

    })
    
    //Test Case 4
    it('Comments on your posts', () =>  {    
        const Emails = new EmailsObjects()
        Emails.navigate()
    
        Emails.CommentsOnYourPosts()

    })
    
    //Test Case 5
    it('Replies to your comments', () =>  {    
        const Emails = new EmailsObjects()
        Emails.navigate()
    
        Emails.RepliesToYourComments()

    })

    //Test Case 6
    it('Upvotes on your posts', () =>  {    
        const Emails = new EmailsObjects()
        Emails.navigate()
    
        Emails.UpvotesOnYourPosts()

    })
    
    //Test Case 7
    it('Upvotes on your comments', () =>  {    
        const Emails = new EmailsObjects()
        Emails.navigate()
    
        Emails.UpvotesOnYourComments()

    })
    
    //Test Case 8
    it('Username mentions', () =>  {    
        const Emails = new EmailsObjects()
        Emails.navigate()
    
        Emails.UsernameMentions()
    
    })
    
    //Test Case 9
    it('New followers', () =>  {    
        const Emails = new EmailsObjects()
        Emails.navigate()
    
        Emails.NewFollowers()
    
    })
    
    //----------------------------------------NEWSLETTERS Section----------------------------------------//
    //Test Case 10
    it('Daily Digest', () =>  {    
        const Emails = new EmailsObjects()
        Emails.navigate()
    
        Emails.DailyDigest()
    
    })
    
    //Test Case 11
    it('Weekly Recap', () =>  {    
        const Emails = new EmailsObjects()
        Emails.navigate()
    
        Emails.WeeklyRecap()
    
    })
    
    //Test Case 12
    it('Community Discovery', () =>  {    
        const Emails = new EmailsObjects()
        Emails.navigate()
    
        Emails.CommunityDiscovery()
    
    })

    //Test Case 13
    it('Unsubscribe from all emails', () =>  {    
        const Emails = new EmailsObjects()
        Emails.navigate()
    
        Emails.UnsubscribeFromAllEmails()
    
    })
    
})
