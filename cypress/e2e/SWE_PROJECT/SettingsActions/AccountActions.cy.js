/// <reference types="cypress" />

import AccountObjects from "../PageObjects/SettingsObjects/AccountObjects.cy"

describe('Feed Settings Tab Tests', function () {
    
    //----------------------------------------ACCOUNT PREFERENCES Section----------------------------------------//
    //Test Case 1
    it('Email address', () =>  {    

        const Account = new AccountObjects()
        Account.navigate()

    })

    //Test Case 2
    it('Gender', () =>  {    
    
        const Account = new AccountObjects()
        Account.navigate()
        
        
    })
    
    //Test Case 3
    it('Display language (beta)', () =>  {    
    
        const Account = new AccountObjects()
        Account.navigate()
        
    })
    
    //Test Case 4
    it('Country', () =>  {    
    
        const Account = new AccountObjects()
        Account.navigate()
        
    })
    
    //----------------------------------------CONNECTED ACCOUNTS Section----------------------------------------//
    //Test Case 5
    it('Connect to Twitter', () =>  {    
    
        const Account = new AccountObjects()
        Account.navigate()
        
    })
    
    //Test Case 6
    it('Connect to Apple', () =>  {    
    
        const Account = new AccountObjects()
        Account.navigate()
        
    })
    
    
    //Test Case 7
    it('Connected to Google', () =>  {    
    
        const Account = new AccountObjects()
        Account.navigate()
        
    })
    
    //----------------------------------------BETA TESTS Section----------------------------------------//
    //Test Case 8
    it('Opt into beta tests', () =>  {    
    
        const Account = new AccountObjects()
        Account.navigate()
        
    })
    
    //Test Case 9
    it('Opt out of the redesign', () =>  {    
    
        const Account = new AccountObjects()
        Account.navigate()
        
    })
    
    //----------------------------------------DELETE ACCOUNT Section----------------------------------------//
    //Test Case 10
    it('DELETE ACCOUNT', () =>  {    
    
        const Account = new AccountObjects()
        Account.navigate()
        
    })
      
})