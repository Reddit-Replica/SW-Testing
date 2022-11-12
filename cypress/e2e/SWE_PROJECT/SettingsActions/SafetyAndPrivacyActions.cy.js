/// <reference types="cypress" />

import SafetyAndPrivacyObjects from "../PageObjects/SettingsObjects/SafetyAndPrivacyObjects.cy"

describe('Safety And Privacy Settings Tab Tests', function () {
        
    //Test Case 1
    it(' Privacy & Security FAQs Hyper Link', () =>  {    
        
        const SafetyAndPrivacy = new SafetyAndPrivacyObjects()
        SafetyAndPrivacy.navigate()

        SafetyAndPrivacy

    })

    //----------------------------------------Safety Section----------------------------------------//
    
    //Test Case 2
    it('People You’ve Blocked - Block a User', () =>  {    

        const SafetyAndPrivacy = new SafetyAndPrivacyObjects()
        SafetyAndPrivacy.navigate()

    })
    
    //Test Case 3
    it('People You’ve Blocked - UnBlock(Remove) a User', () =>  {    

        const SafetyAndPrivacy = new SafetyAndPrivacyObjects()
        SafetyAndPrivacy.navigate()

    })
    
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

})