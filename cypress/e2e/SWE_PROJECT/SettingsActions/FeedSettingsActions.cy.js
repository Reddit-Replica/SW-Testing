/// <reference types="cypress" />

import FeedSettingsObjects from "../PageObjects/SettingsObjects/FeedSettingsObjects.cy"

describe('Feed Settings Tab Tests', function () {
    
    //Test Case 1
    it('Adult content', () =>  {    
        
        const FeedSettings = new FeedSettingsObjects()
        FeedSettings.navigate()

        FeedSettings.AdultContent()


    })

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
    
    //Test Case 5
    it('Autoplay media', () =>  {    

        const FeedSettings = new FeedSettingsObjects()
        FeedSettings.navigate()

        FeedSettings.AutoplayMedia()
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
    
})