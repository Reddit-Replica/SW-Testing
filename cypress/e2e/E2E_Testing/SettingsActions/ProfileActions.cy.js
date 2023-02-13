/// <reference types="cypress" />

import ProfileObjects from "../PageObjects/SettingsObjects/ProfileObjects.cy"
import EmailsObjects from "../PageObjects/SettingsObjects/EmailsObjects.cy"

const Emails = new EmailsObjects()
const Profile = new ProfileObjects()
  
beforeEach({scrollBehavior:false},() => {
    Emails.navigate()  
    Emails.enterUsername('karim22') 
    Emails.enterPassword('Karim@0107228700')     
    Emails.submit() 
    Emails.TopRightBar()
    Emails.UserSettings()
})

describe('Feed Settings Tab Tests',{scrollBehavior:false}, function () {
    
    //----------------------------------------PROFILE INFORMATION Section----------------------------------------//
    //Test Case 1
    it('Display name (optional)',{scrollBehavior:false}, () =>  {    
        Profile.ProfileButton()
        Profile.DisplayNameOptional("karim mahmoud")
        cy.reload()
        Profile.CheckDisplayedName("karim mahmoud")

    })

    //Test Case 2
    it('About (optional)',{scrollBehavior:false}, () =>  {    
        Profile.ProfileButton()
        Profile.AboutOptional("karim mahmoud")
        cy.reload()
        Profile.CheckDisplayedName("karim mahmoud")
        
    })
    
    //Test Case 3
    it('Social links (5 max)', () =>  {    
        Profile.ProfileButton()
        Profile.AddSocialLink()
        Profile.SelectAddingSOcialLink("[id=static-TikTok]","TikTok")
        Profile.DisabledSaveButoon()
        Profile.UserNameInAddSocialLink("karim")
        Profile.EnableSaveButton()
        Profile.CheckSocialLinkAfterAdded("[id=link-item-karim]","karim")
    })
    
    //----------------------------------------IMAGES Section----------------------------------------//
    
    //Test Case 4
    //TODO: CHECK HOW TO UPLOAD AN IMG HERE
    
    it('Profile picture', () =>  {    
        Profile.ProfileButton()
        
        
    })
    
    //Test Case 5
    //TODO: CHECK HOW TO UPLOAD AN IMG HERE
    
    it('banner image', () =>  {    
        Profile.ProfileButton()
        
    })
    
    //----------------------------------------PROFILE CATEGORY Section----------------------------------------//
    
    //Test Case 7
    //Has No Action From back and front
    it('NSFW', () =>  {    
        Profile.ProfileButton()
        Profile.DisabledNSFW()
        Profile.NSFW()
        Profile.EnabledNSFW()
        Profile.SettingsChangedSuccessfully()
        
    })
    
    //----------------------------------------ADVANCED Section----------------------------------------//
    //Test Case 8
    //Has No Action From back and front
    it('Allow people to follow you', () =>  {    
        Profile.ProfileButton()
        Profile.DisabledAllowPeopletoFollowYou()
        Profile.AllowPeopletoFollowYou()
        Profile.EnabledAllowPeopletoFollowYou()
        Profile.SettingsChangedSuccessfully()

    })
    
    
})