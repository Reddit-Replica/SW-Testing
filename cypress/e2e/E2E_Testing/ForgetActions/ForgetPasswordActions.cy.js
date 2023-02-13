/// <reference types="cypress" />
import ForgetPasswordObjects from "/home/karimmahmoud/Desktop/CypressAutomation/cypress/e2e/SWE_PROJECT/PageObjects/ForgetObjects/ForgetPasswordObjects.cy"

describe('Reset Password Page Tests', function () {
    
//Test Case 1

    //NOTE: CHECK THE EFFECT OF IT
    it('Forget Password', () =>  {    

        const forgetPassword = new ForgetPasswordObjects()
        forgetPassword.navigate()

        forgetPassword.ForgetPasswordHyperLink()
        forgetPassword.UrlEqualChecker(Cypress.env('CYPRESSBASEURL') +'/forgetPasswordpage')
        forgetPassword.EnterEmail('karimmahmoud2210@gmail.com')
        forgetPassword.EnterUserName('adasdwdx')  
        forgetPassword.ClickOnResetPasswordButton()
        
    })

    //Test Case 2
    //TODO : REVIEW IT 
    it('Forget Password then click on help', () =>  {    

        const forgetPassword = new ForgetPasswordObjects()
        forgetPassword.navigate()

        forgetPassword.ForgetPasswordHyperLink()
        forgetPassword.UrlEqualChecker(Cypress.env('CYPRESSBASEURL') +'/forgetPasswordpage')
        forgetPassword.EnterEmail('karimmahmoud2210@gmail.com')
        forgetPassword.EnterUserName('adasdwdx')
        forgetPassword.UrlNotEqualChecker(Cypress.env('CYPRESSBASEURL') +'/forgetPasswordpage')
    })
  
     
    
    //Test Case 3
    //email is : 1231565456@gmail.com which is invalid one
    it('Write Invalid Email - should appear error message1', () =>  {    

        const forgetPassword = new ForgetPasswordObjects()
        forgetPassword.navigate()

        forgetPassword.ForgetPasswordHyperLink()
        forgetPassword.UrlEqualChecker(Cypress.env('CYPRESSBASEURL') +'/forgetPasswordpage')
        forgetPassword.EnterEmail('1231565456@gmail.com')
        forgetPassword.EnterUserName('adasdwdx')
        forgetPassword.InvalidMessage()

    })

    //Test Case 6
    //email is : 1231565456a@gmail.com which is Valid one
    it('Write Valid Email - should not appear error message2', () =>  {    

        const forgetPassword = new ForgetPasswordObjects()
        forgetPassword.navigate()

        forgetPassword.ForgetPasswordHyperLink()
        forgetPassword.UrlEqualChecker(Cypress.env('CYPRESSBASEURL') +'/forgetPasswordpage')
        forgetPassword.EnterEmail('1231565456a@gmail.com')
        forgetPassword.EnterUserName('adasdwdx')
        forgetPassword.NotInValidMessage()
    
    })
    
    //Test Case 7
    //email is : as1231565456a which is InValid one
    it('Write Invalid Email - should appear error message3', () =>  {    

        const forgetPassword = new ForgetPasswordObjects()
        forgetPassword.navigate()

        forgetPassword.ForgetPasswordHyperLink()
        forgetPassword.UrlEqualChecker(Cypress.env('CYPRESSBASEURL') +'/forgetPasswordpage')
        forgetPassword.EnterEmail('as1231565456a')
        forgetPassword.EnterUserName('adasdwdx')
        forgetPassword.InvalidMessage()
    
    })

    //Test Case 8
    //email is : <html> which is InValid one
    it('Write Invalid Email - should appear error message4', () =>  {    

        const forgetPassword = new ForgetPasswordObjects()
        forgetPassword.navigate()

        forgetPassword.ForgetPasswordHyperLink()
        forgetPassword.UrlEqualChecker(Cypress.env('CYPRESSBASEURL') +'/forgetPasswordpage')
        forgetPassword.EnterEmail('as1231565456a')
        forgetPassword.EnterUserName('<html>')
        forgetPassword.InvalidMessage()
    
    })

    //Test Case 9
    //email is : #$%#$^$%#^ which is InValid one
    it('Write Invalid Email - should appear error message5', () =>  {    

        const forgetPassword = new ForgetPasswordObjects()
        forgetPassword.navigate()

        forgetPassword.ForgetPasswordHyperLink()
        forgetPassword.UrlEqualChecker(Cypress.env('CYPRESSBASEURL') +'/forgetPasswordpage')
        forgetPassword.EnterEmail('as1231565456a')
        forgetPassword.EnterUserName('#$%#$^$%#^')
        forgetPassword.InvalidMessage()
    
    })

    //Test Case 10
    //email is : @@@@@@@ which is InValid one
    it('Write Invalid Email - should appear error message6', () =>  {    

        const forgetPassword = new ForgetPasswordObjects()
        forgetPassword.navigate()

        forgetPassword.ForgetPasswordHyperLink()
        forgetPassword.UrlEqualChecker(Cypress.env('CYPRESSBASEURL') +'/forgetPasswordpage')
        forgetPassword.EnterEmail('as1231565456a')
        forgetPassword.EnterUserName('@@@@@@@')
        forgetPassword.InvalidMessage()
    
    })


    //Test Case 11
    //email is : 127.0.0.1 which is InValid one
    it('Write Invalid Email - should appear error message7', () =>  {    

        const forgetPassword = new ForgetPasswordObjects()
        forgetPassword.navigate()

        forgetPassword.ForgetPasswordHyperLink()
        forgetPassword.UrlEqualChecker(Cypress.env('CYPRESSBASEURL') +'/forgetPasswordpage')
        forgetPassword.EnterEmail('as1231565456a')
        forgetPassword.EnterUserName('127.0.0.1')
        forgetPassword.InvalidMessage()
    
    })
    
    
})