/// <reference types="cypress" />

import SafetyAndPrivacyObjects from "../PageObjects/SettingsObjects/SafetyAndPrivacyObjects.cy"
import EmailsObjects from "../PageObjects/SettingsObjects/EmailsObjects.cy"
import SearchObjects from "../PageObjects/SearchObjects/SearchObjects.cy"

const Emails = new EmailsObjects()
const SafetyAndPrivacy = new SafetyAndPrivacyObjects()
const Search = new SearchObjects()
  
beforeEach({scrollBehavior:false},() => {
    Emails.navigate()  
    Emails.enterUsername('karim22') 
    Emails.enterPassword('Karim@0107228700')     
    Emails.submit() 
    Emails.TopRightBar()
    Emails.UserSettings()
})

describe('Safety And Privacy Settings Tab Tests', function () {
        
    //Test Case 1
    it(' Privacy & Security FAQs Hyper Link',{scrollBehavior:false}, () =>  {    
        SafetyAndPrivacy.SafetyAndPrivacyButton()
        SafetyAndPrivacy.PrivacyAndSecurityFAQs()        
    })

    //----------------------------------------Safety Section----------------------------------------//
    
    //Test Case 2
    it('People You’ve Blocked - Block an invalid User',{scrollBehavior:false}, () =>  {    
        SafetyAndPrivacy.SafetyAndPrivacyButton()
        SafetyAndPrivacy.BlockANewUser("waer123")
        SafetyAndPrivacy.ClickOnAddToBLockAUser()
        SafetyAndPrivacy.ErrorMessage()
    })

    //Test Case 2
    it('People You’ve Blocked - Block a valid User',{scrollBehavior:false}, () =>  {    
        SafetyAndPrivacy.SafetyAndPrivacyButton()
        SafetyAndPrivacy.BlockANewUser("karim55")
        SafetyAndPrivacy.ClickOnAddToBLockAUser()
        SafetyAndPrivacy.NowBLocked("karim55")
        Search.SearchReddit("karim55")
        Search.CLickOnSearchIcon()
        Search.People()
        Search.NotFoundInSearchPeople('“karim55”')
    })
    
    
    //Test Case 3
    it('People You’ve Blocked - UnBlock(Remove) a User',{scrollBehavior:false}, () =>  {    
        SafetyAndPrivacy.SafetyAndPrivacyButton()
        SafetyAndPrivacy.RemovedABlockedUser()
        cy.wait(1000)
        SafetyAndPrivacy.NowUnBLocked("kairm55")
    })
    
    
    /*
    //----------------------------------------Privacy Section----------------------------------------//
    //Test Case 4
    it('Personalize all of Reddit based on the outbound links you click on', () =>  {    

        const SafetyAndPrivacy = new SafetyAndPrivacyObjects()
        SafetyAndPrivacy.navigate()

    })
    
    //Test Case 5
    it('Personalize ads based on information from our partners', () =>  {    

        const SafetyAndPrivacy = new SafetyAndPrivacyObjects()
        SafetyAndPrivacy.navigate()

    })
    
    //Test Case 6
    it('Personalize ads based on your activity with our partners', () =>  {    

        const SafetyAndPrivacy = new SafetyAndPrivacyObjects()
        SafetyAndPrivacy.navigate()

    })
    
    //Test Case 7
    it('Personalize recommendations based on your general location', () =>  {    

        const SafetyAndPrivacy = new SafetyAndPrivacyObjects()
        SafetyAndPrivacy.navigate()

    })
    
    //Test Case 8
    it('Personalize recommendations based on your activity with our partners', () =>  {    

        const SafetyAndPrivacy = new SafetyAndPrivacyObjects()
        SafetyAndPrivacy.navigate()

    })
    
    //Test Case 9
    it('Use two-factor authentication', () =>  {    

        const SafetyAndPrivacy = new SafetyAndPrivacyObjects()
        SafetyAndPrivacy.navigate()

    })
    
    //Test Case 10
    it('Manage third-party app authorization', () =>  {    

        const SafetyAndPrivacy = new SafetyAndPrivacyObjects()
        SafetyAndPrivacy.navigate()

    })
    
    */

})