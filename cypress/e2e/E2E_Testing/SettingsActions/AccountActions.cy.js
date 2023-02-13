/// <reference types="cypress" />

import AccountObjects from "../PageObjects/SettingsObjects/AccountObjects.cy"
import EmailsObjects from "../PageObjects/SettingsObjects/EmailsObjects.cy"

const Emails = new EmailsObjects()
const Account = new AccountObjects()
  
beforeEach({scrollBehavior:false},() => {
    Emails.navigate()  
    Emails.enterUsername('karim22') 
    Emails.enterPassword('Karim@0107228700')     
    Emails.submit() 
    Emails.TopRightBar()
    Emails.UserSettings()
})

describe('Feed Settings Tab Tests',{scrollBehavior:false}, function () {
    
    //----------------------------------------ACCOUNT PREFERENCES Section----------------------------------------//
    //Test Case 1
    it('Email address',{scrollBehavior:false}, () =>  {    
        Account.EmailAddress()
        Account.CurrentPassword('Karim@0107228700')
        //Account.NewMail('karim.mohamed003@eng-st.cu.edu.eg')
        Account.NewMail('karimmahmoud862002@gmail.com')
        Account.SaveEmail()
        Account.EmailAddressAfterChanged('karimmahmoud862002@gmail.com')
    })

    //Test Case 11
    it('Change Password', {scrollBehavior:false},() =>  {    
        Account.EmailAddress()
        Account.CurrentPassword('Karim@0107228700')
        Account.NewMail('karimmahmoud862002@gmail.com')
        Account.EnabledSaveEmail()
        Account.SaveEmail()

    })

    //Test Case 2
    it('Gender',{scrollBehavior:false}, () =>  {    
        Account.EmailAddress()
        Account.Gender("Man")     
        Account.CheckGenderAfterChanged("MAN")
    })
    
    
    //Test Case 4
    it('Country', {scrollBehavior:false},() =>  {    
        Account.EmailAddress()
        Account.Country(0,0)

    })
    
    //----------------------------------------DELETE ACCOUNT Section----------------------------------------//
    //Test Case 10
    it('DELETE ACCOUNT',{scrollBehavior:false}, () =>  {    
        Account.EmailAddress()
        Account.DeleteAccount()
    })
      
})