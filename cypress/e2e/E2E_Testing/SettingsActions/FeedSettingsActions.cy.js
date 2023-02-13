/// <reference types="cypress" />

import FeedSettingsObjects from "../PageObjects/SettingsObjects/FeedSettingsObjects.cy"
import EmailsObjects from "../PageObjects/SettingsObjects/EmailsObjects.cy"

const Emails = new EmailsObjects()
const FeedSettings = new FeedSettingsObjects()
        
beforeEach({scrollBehavior:false},() => {
    Emails.navigate()  
    Emails.enterUsername('karim22') 
    Emails.enterPassword('Karim@0107228700')     
    Emails.submit() 
    Emails.TopRightBar()
    Emails.UserSettings()
        
})

describe('Feed Settings Tab Tests', function () {
    
    //CHECK IT LATER
    //Test Case 1
    it('Adult content',{scrollBehavior:false}, () =>  {    
        FeedSettings.FeedSettingsButton()
        FeedSettings.DisableAdultContent()
        FeedSettings.AdultContent()
        FeedSettings.SettingsChangedSuccessfully()
        FeedSettings.EnableAdultContent()
        FeedSettings.SettingsChangedSuccessfully()

    })
    
    //CHECK IT LATER
    //Test Case 2
    it('Autoplay media', {scrollBehavior:false},() =>  {    
        FeedSettings.FeedSettingsButton()
        FeedSettings.EnableAutoplayMedia()
        FeedSettings.AutoplayMedia()
        FeedSettings.SettingsChangedSuccessfully()
        FeedSettings.DisableAutoplayMedia()
        FeedSettings.SettingsChangedSuccessfully()
    })
    
    /*
        //Test Case 2
    it('Safe browsing mode', () =>  {    

        const FeedSettings = new FeedSettingsObjects()
        FeedSettings.navigate()

        FeedSettings.SafeBrowsingMode()
    })
    
    //Test Case 3
    it('Enable home feed recommendations', () =>  {    

        const FeedSettings = new FeedSettingsObjects()
        FeedSettings.navigate()

        FeedSettings.EnableHomeFeedRecommendations()
    })
    
    //Test Case 4
    it('Enable live recommendations', () =>  {    

        const FeedSettings = new FeedSettingsObjects()
        FeedSettings.navigate()

        FeedSettings.EnableLiveRecommendations()
    })

    //Test Case 6
    it('Reduce Animations', () =>  {    

        const FeedSettings = new FeedSettingsObjects()
        FeedSettings.navigate()

        FeedSettings.ReduceAnimations()
    })
    
    //Test Case 7
    it('Community themes', () =>  {    

        const FeedSettings = new FeedSettingsObjects()
        FeedSettings.navigate()

        FeedSettings.CommunityThemes()
    })
    
    //Test Case 8
    it('Community content sort', () =>  {    

        const FeedSettings = new FeedSettingsObjects()
        FeedSettings.navigate()

        FeedSettings.CommunityContentSort()
    })
    
    //Test Case 9
    it('Remember per community', () =>  {    

        const FeedSettings = new FeedSettingsObjects()
        FeedSettings.navigate()

        FeedSettings.RememberPerCommunity()
    })
    
    //Test Case 10
    it('Open posts in new tab', () =>  {    

        const FeedSettings = new FeedSettingsObjects()
        FeedSettings.navigate()
    
        FeedSettings.OpenPostsInNewTab()
    })
    
    //Test Case 11
    it('Default to markdown', () =>  {    

        const FeedSettings = new FeedSettingsObjects()
        FeedSettings.navigate()
    
        FeedSettings.DefaultToMarkdown()
    })
  
    */
})