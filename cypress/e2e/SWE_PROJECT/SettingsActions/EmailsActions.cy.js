/// <reference types="cypress" />

import EmilsObjects from "/home/karimmahmoud/Desktop/CypressAutomation/cypress/e2e/SWE_PROJECT/PageObjects/SettingsObjects/EmailsObjects.cy"

describe('Emails Tab Tests', function () {
    
    beforeEach(() => {
        //visit the URL before each test
    })
    

    //----------------------------------------Messages Section----------------------------------------//
    //Test Case 1
    it('Inbox messages', () =>  {
        const Emails = new EmilsObjects()
        Emails.navigate()
    
        Emails.InboxMessages()
    
    })
    
    //Test Case 2
    it('Chat requests', () =>  {    
        const Emails = new EmilsObjects()
        Emails.navigate()
    
        Emails.ChatRequests()

    })
    
    //----------------------------------------Activity Section----------------------------------------//
    //Test Case 3
    it('New user welcome', () =>  {    
        const Emails = new EmilsObjects()
        Emails.navigate()
    
        Emails.NewUserWelcome()

    })
    
    //Test Case 4
    it('Comments on your posts', () =>  {    
        const Emails = new EmilsObjects()
        Emails.navigate()
    
        Emails.CommentsOnYourPosts()

    })
    
    //Test Case 5
    it('Replies to your comments', () =>  {    
        const Emails = new EmilsObjects()
        Emails.navigate()
    
        Emails.RepliesToYourComments()

    })

    //Test Case 6
    it('Upvotes on your posts', () =>  {    
        const Emails = new EmilsObjects()
        Emails.navigate()
    
        Emails.UpvotesOnYourPosts()

    })
    
    //Test Case 7
    it('Upvotes on your comments', () =>  {    
        const Emails = new EmilsObjects()
        Emails.navigate()
    
        Emails.UpvotesOnYourComments()

    })
    
    //Test Case 8
    it('Username mentions', () =>  {    
        const Emails = new EmilsObjects()
        Emails.navigate()
    
        Emails.UsernameMentions()
    
    })
    
    //Test Case 9
    it('New followers', () =>  {    
        const Emails = new EmilsObjects()
        Emails.navigate()
    
        Emails.NewFollowers()
    
    })
    
    //----------------------------------------NEWSLETTERS Section----------------------------------------//
    //Test Case 10
    it('Daily Digest', () =>  {    
        const Emails = new EmilsObjects()
        Emails.navigate()
    
        Emails.DailyDigest()
    
    })
    
    //Test Case 11
    it('Weekly Recap', () =>  {    
        const Emails = new EmilsObjects()
        Emails.navigate()
    
        Emails.WeeklyRecap()
    
    })
    
    //Test Case 12
    it('Community Discovery', () =>  {    
        const Emails = new EmilsObjects()
        Emails.navigate()
    
        Emails.CommunityDiscovery()
    
    })

    //Test Case 13
    it('Unsubscribe from all emails', () =>  {    
        const Emails = new EmilsObjects()
        Emails.navigate()
    
        Emails.UnsubscribeFromAllEmails()
    
    })
    
})
