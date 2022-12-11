/// <reference types="cypress" />

import ProfileObjects from "../PageObjects/SettingsObjects/ProfileObjects.cy"
describe('Feed Settings Tab Tests', function () {
    
    //----------------------------------------PROFILE INFORMATION Section----------------------------------------//
    //Test Case 1
    //NOTE: it will have effect without clicking on any button
    it('Display name (optional)', () =>  {    

        const Profile = new ProfileObjects()
        Profile.navigate()


    })

    //Test Case 2
    it('About (optional)', () =>  {    
    
        const Profile = new ProfileObjects()
        Profile.navigate()

        
    })
    
    //Test Case 3
    it('Social links (5 max)', () =>  {    
    
        const Profile = new ProfileObjects()
        Profile.navigate()

        
    })
    
    //----------------------------------------IMAGES Section----------------------------------------//
    
    //Test Case 4
    it('Profile picture', () =>  {    
    
        const Profile = new ProfileObjects()
        Profile.navigate()

        
    })
    
    //Test Case 5
    it('banner image', () =>  {    
    
        const Profile = new ProfileObjects()
        Profile.navigate()

        
    })
    
    //Test Case 6
    it('Profile picture and banner image', () =>  {    
    
        const Profile = new ProfileObjects()
        Profile.navigate()

        
    })
    
    //----------------------------------------PROFILE CATEGORY Section----------------------------------------//
    
    //Test Case 7
    it('NSFW', () =>  {    
    
        const Profile = new ProfileObjects()
        Profile.navigate()

        
    })
    
    //----------------------------------------ADVANCED Section----------------------------------------//
    //Test Case 8
    it('Allow people to follow you', () =>  {    
    
        const Profile = new ProfileObjects()
        Profile.navigate()

        
    })
    
    //Test Case 9
    it('Content visibility', () =>  {    
    
        const Profile = new ProfileObjects()
        Profile.navigate()

        
    })
    
    //Test Case 10
    it('Active in communities visibility', () =>  {    
    
        const Profile = new ProfileObjects()
        Profile.navigate()

        
    })
    
    //----------------------------------------PROFILE MODERATION Section----------------------------------------//
    //Test Case 11
    it('Profile Moderation page', () =>  {    
    
        const Profile = new ProfileObjects()
        Profile.navigate()

        
    })
    
})