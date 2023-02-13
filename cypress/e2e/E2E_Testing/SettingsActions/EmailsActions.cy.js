/// <reference types="cypress" />

import EmailsObjects from "../PageObjects/SettingsObjects/EmailsObjects.cy"

const Emails = new EmailsObjects()
  
beforeEach({scrollBehavior:false},() => {
    Emails.navigate()  
    Emails.enterUsername('karim22') 
    Emails.enterPassword('Karim@0107228700')     
    Emails.submit() 
    Emails.TopRightBar()
    Emails.UserSettings()
})

describe('Emails Tab Tests',{scrollBehavior:false}, function () {


    //CHECK IT LATER
    //Test Case 1
    it('New followers',{scrollBehavior:false}, () =>  {    
        Emails.EmailSettings()
        Emails.EnableNewFollowers()
        Emails.NewFollowers()
        Emails.SettingsChangedSuccessfully()
        Emails.DisableNewFollowers()
        Emails.SettingsChangedSuccessfully()
    })
    
    //CHECK IT LATER
    //Test Case 2
    it('Unsubscribe from all emails',{scrollBehavior:false}, () =>  {    
        Emails.EmailSettings()
        Emails.EnableUnsubscribeFromAllEmails()
        Emails.UnsubscribeFromAllEmails()
        Emails.SettingsChangedSuccessfully()
        Emails.DisableNewFollowers()
        Emails.SettingsChangedSuccessfully()
    })
    

    /*
    //----------------------------------------Messages Section----------------------------------------//
    //Test Case 1
    it('Inbox messages', () =>  {
        Emails.TopRightBar()
        Emails.UserSettings()
        Emails.InboxMessages()
    })
    
    //Test Case 2
    it('Chat requests', () =>  {    
        Emails.TopRightBar()
        Emails.UserSettings()
        Emails.ChatRequests()
    })
    
    //----------------------------------------Activity Section----------------------------------------//
    //Test Case 3
    it('New user welcome', () =>  {    
        const Emails = new EmailsObjects()
        Emails.navigate()  
        cy.wait(2000)
      
        Emails.enterUsername('karim22') 
        Emails.enterPassword('Karim@0107228700')     
        Emails.submit()
        Emails.TopRightBar()
        Emails.UserSettings()
        Emails.NewUserWelcome()

    })
    
    //Test Case 4
    it('Comments on your posts', () =>  {    
        const Emails = new EmailsObjects()
        Emails.navigate()  
        cy.wait(2000)
      
        Emails.enterUsername('karim22') 
        Emails.enterPassword('Karim@0107228700')     
        Emails.submit()
        Emails.TopRightBar()
        Emails.UserSettings()
        Emails.CommentsOnYourPosts()

    })
    
    //Test Case 5
    it('Replies to your comments', () =>  {    
        const Emails = new EmailsObjects()
        Emails.navigate()  
        cy.wait(2000)
      
        Emails.enterUsername('karim22') 
        Emails.enterPassword('Karim@0107228700')     
        Emails.submit()
        Emails.TopRightBar()
        Emails.UserSettings()
        Emails.RepliesToYourComments()

    })

    //Test Case 6
    it('Upvotes on your posts', () =>  {    
        const Emails = new EmailsObjects()
        Emails.navigate()  
        cy.wait(2000)
      
        Emails.enterUsername('karim22') 
        Emails.enterPassword('Karim@0107228700')     
        Emails.submit()
        Emails.TopRightBar()
        Emails.UserSettings()
        Emails.UpvotesOnYourPosts()

    })
    
    //Test Case 7
    it('Upvotes on your comments', () =>  {    
        const Emails = new EmailsObjects()
        Emails.navigate()  
        cy.wait(2000)
      
        Emails.enterUsername('karim22') 
        Emails.enterPassword('Karim@0107228700')     
        Emails.submit()
        Emails.TopRightBar()
        Emails.UserSettings()
    
        Emails.UpvotesOnYourComments()

    })
    
    //Test Case 8
    it('Username mentions', () =>  {    
        const Emails = new EmailsObjects()
        Emails.navigate()  
        cy.wait(2000)
      
        Emails.enterUsername('karim22') 
        Emails.enterPassword('Karim@0107228700')     
        Emails.submit()
        Emails.TopRightBar()
        Emails.UserSettings()
    
        Emails.UsernameMentions()
    
    })
     //----------------------------------------NEWSLETTERS Section----------------------------------------//
    //Test Case 10
    it('Daily Digest', () =>  {    
        const Emails = new EmailsObjects()
        Emails.navigate()  
        cy.wait(2000)
      
        Emails.enterUsername('karim22') 
        Emails.enterPassword('Karim@0107228700')     
        Emails.submit()
        Emails.TopRightBar()
        Emails.UserSettings()
        Emails.DailyDigest()
    
    })
    
    //Test Case 11
    it('Weekly Recap', () =>  {    
        const Emails = new EmailsObjects()
        Emails.navigate()  
        cy.wait(2000)
      
        Emails.enterUsername('karim22') 
        Emails.enterPassword('Karim@0107228700')     
        Emails.submit()
        Emails.TopRightBar()
        Emails.UserSettings()
        Emails.WeeklyRecap()
    
    })
    
    //Test Case 12
    it('Community Discovery', () =>  {    
        const Emails = new EmailsObjects()
        Emails.navigate()  
        cy.wait(2000)
      
        Emails.enterUsername('karim22') 
        Emails.enterPassword('Karim@0107228700')     
        Emails.submit()
        Emails.TopRightBar()
        Emails.UserSettings()
        Emails.CommunityDiscovery()
    
    })


    */

})
