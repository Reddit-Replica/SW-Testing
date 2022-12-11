/// <reference types="cypress" />
import ForgetUserNameObjects from "/home/karimmahmoud/Desktop/CypressAutomation/cypress/e2e/SWE_PROJECT/PageObjects/ForgetObjects/ForgetUserNameObjects.cy"

describe('Reset UserName Page Tests', function () {
    
    //Test Case 1
    //NOTE: CHECK THE EFFECT OF IT
    it('Forget UserName', () =>  {    

        const forgetUserName = new ForgetUserNameObjects()
        forgetUserName.navigate()

        forgetUserName.ForgetUserNameHyperLink()
        forgetUserName.UrlEqualChecker(Cypress.env('CYPRESSBASEURL') +'/forgetUsernamepage')
        forgetUserName.EnterEmail('karimmahmoud2210@gmail.com')
        forgetUserName.ClickOnEmailButton()

    })

    //Test Case 2
    it('Forget UserName - then click login - go back to show the email is still written ', () =>  {    

        const forgetUserName = new ForgetUserNameObjects()
        forgetUserName.navigate()

        forgetUserName.ForgetUserNameHyperLink()
        forgetUserName.UrlEqualChecker(Cypress.env('CYPRESSBASEURL') +'/forgetUsernamepage')
        forgetUserName.EnterEmail('karimmahmoud2210@gmail.com')
        forgetUserName.CLickOnLoginButton()
        forgetUserName.UrlEqualChecker(Cypress.env('CYPRESSBASEURL') +'/login')
        forgetUserName.GoBack()
        forgetUserName.UrlEqualChecker(Cypress.env('CYPRESSBASEURL') +'/forgetUsernamepage')
        forgetUserName.ContainsChecker('karimmahmoud2210@gmail.com')

    })
    
    
    //Test Case 3
    it('Forget UserName - then click sign up - go back to show the email is still written', () =>  {    

        const forgetUserName = new ForgetUserNameObjects()
        forgetUserName.navigate()

        forgetUserName.ForgetUserNameHyperLink()
        forgetUserName.UrlEqualChecker(Cypress.env('CYPRESSBASEURL') +'/forgetUsernamepage')
        forgetUserName.EnterEmail('karimmahmoud2210@gmail.com')
        forgetUserName.ClickOnSignUpButton()
        forgetUserName.UrlEqualChecker(Cypress.env('CYPRESSBASEURL') +':8085/signup')
        forgetUserName.GoBack()
        forgetUserName.UrlEqualChecker(Cypress.env('CYPRESSBASEURL') +'/forgetUsernamepage')
        forgetUserName.ContainsChecker('karimmahmoud2210@gmail.com')

    })

    //Test Case 4
    //TODO : REVIEW IT 
    it('Forget username then click on help', () =>  {    

        const forgetUserName = new ForgetUserNameObjects()
        forgetUserName.navigate()

        forgetUserName.ForgetUserNameHyperLink()
        forgetUserName.UrlEqualChecker(Cypress.env('CYPRESSBASEURL') +'/forgetUsernamepage')
        forgetUserName.EnterEmail('karimmahmoud2210@gmail.com')
        forgetUserName.UrlNotEqualChecker(Cypress.env('CYPRESSBASEURL') +'/forgetUsernamepage')
    })
      
    //Test Case 5
    //email is : 1231565456@gmail.com which is invalid one
    it('Write Invalid Email - should appear error message', () =>  {    

        const forgetUserName = new ForgetUserNameObjects()
        forgetUserName.navigate()

        forgetUserName.ForgetUserNameHyperLink()
        forgetUserName.UrlEqualChecker(Cypress.env('CYPRESSBASEURL') +'/forgetUsernamepage')
        forgetUserName.EnterEmail('1231565456@gmail.com')
        forgetUserName.InvalidMessage()

    })

    //Test Case 6
    //email is : 1231565456a@gmail.com which is Valid one
    it('Write Valid Email - should not appear error message', () =>  {    

        const forgetUserName = new ForgetUserNameObjects()
        forgetUserName.navigate()

        forgetUserName.ForgetUserNameHyperLink()
        forgetUserName.UrlEqualChecker(Cypress.env('CYPRESSBASEURL') +'/forgetUsernamepage')
        forgetUserName.EnterEmail('1231565456a@gmail.com')
        forgetUserName.NotInValidMessage()
    
    })

    //Test Case 7
    //email is : as1231565456a which is InValid one
    it('Write Invalid Email - should appear error message', () =>  {    

        const forgetUserName = new ForgetUserNameObjects()
        forgetUserName.navigate()

        forgetUserName.ForgetUserNameHyperLink()
        forgetUserName.UrlEqualChecker(Cypress.env('CYPRESSBASEURL') +'/forgetUsernamepage')
        forgetUserName.EnterEmail('as1231565456a')
        forgetUserName.InvalidMessage()
    
    })
    
    //----------------------------------------Valid Test Cases----------------------------------------// 

    //Test Case 8
    it('The email contains a dot with a subdomain', () =>  {    

        const forgetUserName = new ForgetUserNameObjects()
        forgetUserName.navigate()

        forgetUserName.ForgetUserNameHyperLink()
        forgetUserName.UrlEqualChecker(Cypress.env('CYPRESSBASEURL') +'/forgetUsernamepage')
        forgetUserName.EnterEmail('email@subdomain.domain.com')
        forgetUserName.InvalidMessage()
 
    })

    //Test Case 9
    it('Plus sign is considered a valid character', () =>  {    

        const forgetUserName = new ForgetUserNameObjects()
        forgetUserName.navigate()
               
        forgetUserName.ForgetUserNameHyperLink()
        forgetUserName.UrlEqualChecker(Cypress.env('CYPRESSBASEURL') +'/forgetUsernamepage')
        forgetUserName.EnterEmail('firstname+lastname@domain.com')
        forgetUserName.InvalidMessage()
 
    })

    //Test Case 10
    it('The domain is a valid IP address', () =>  {    

        const forgetUserName = new ForgetUserNameObjects()
        forgetUserName.navigate()
               
        forgetUserName.ForgetUserNameHyperLink()
        forgetUserName.UrlEqualChecker(Cypress.env('CYPRESSBASEURL') +'/forgetUsernamepage')
        forgetUserName.EnterEmail('email@123.123.123.123')
        forgetUserName.InvalidMessage()
 
    })

    //Test Case 11 
    it('A square bracket around IP address is considered valid', () =>  {    

        const forgetUserName = new ForgetUserNameObjects()
        forgetUserName.navigate()
               
        forgetUserName.ForgetUserNameHyperLink()
        forgetUserName.UrlEqualChecker(Cypress.env('CYPRESSBASEURL') +'/forgetUsernamepage')
        forgetUserName.EnterEmail('email@[123.123.123.123]')
        forgetUserName.InvalidMessage()
 
    })

    //Test Case 12 
    it('Quotes around email are considered valid', () =>  {    

        const forgetUserName = new ForgetUserNameObjects()
        forgetUserName.navigate()
               
        forgetUserName.ForgetUserNameHyperLink()
        forgetUserName.UrlEqualChecker(Cypress.env('CYPRESSBASEURL') +'/forgetUsernamepage')
        forgetUserName.EnterEmail('email”@domain.com')
        forgetUserName.InvalidMessage()
 
    })

    //Test Case 13 
    it('Digits with at least one char in the address are valid', () =>  {    

        const forgetUserName = new ForgetUserNameObjects()
        forgetUserName.navigate()
               
        forgetUserName.ForgetUserNameHyperLink()
        forgetUserName.UrlEqualChecker(Cypress.env('CYPRESSBASEURL') +'/forgetUsernamepage')
        forgetUserName.EnterEmail('1234567890a@domain.com')
        forgetUserName.InvalidMessage()
 
    })

    //Test Case 14
    it('Dash in the domain name is valid', () =>  {    

        const forgetUserName = new ForgetUserNameObjects()
        forgetUserName.navigate()
               
        forgetUserName.ForgetUserNameHyperLink()
        forgetUserName.UrlEqualChecker(Cypress.env('CYPRESSBASEURL') +'/forgetUsernamepage')
        forgetUserName.EnterEmail('email@domain-one.com')
        forgetUserName.InvalidMessage()
 
    })

    //Test Case 15 
    it('Underscore in the address field is valid', () =>  {    

        const forgetUserName = new ForgetUserNameObjects()
        forgetUserName.navigate()
               
        forgetUserName.ForgetUserNameHyperLink()
        forgetUserName.UrlEqualChecker(Cypress.env('CYPRESSBASEURL') +'/forgetUsernamepage')
        forgetUserName.EnterEmail('_______@domain.com')
        forgetUserName.InvalidMessage()
 
    })

    //Test Case 16
    it('.name is a valid Top Level Domain name', () =>  {    

        const forgetUserName = new ForgetUserNameObjects()
        forgetUserName.navigate()
               
        forgetUserName.ForgetUserNameHyperLink()
        forgetUserName.UrlEqualChecker(Cypress.env('CYPRESSBASEURL') +'/forgetUsernamepage')
        forgetUserName.EnterEmail('email@domain.name')
        forgetUserName.InvalidMessage()
 
    })

    //Test Case 17
    it('Dot in Top Level Domain name also considered valid (use co.jp as an example here)', () =>  {    

        const forgetUserName = new ForgetUserNameObjects()
        forgetUserName.navigate()
               
        forgetUserName.ForgetUserNameHyperLink()
        forgetUserName.UrlEqualChecker(Cypress.env('CYPRESSBASEURL') +'/forgetUsernamepage')
        forgetUserName.EnterEmail('email@domain.co.jp')
        forgetUserName.InvalidMessage()
 
    })

    //Test Case 18
    it('Dash in the address field is valid', () =>  {    

        const forgetUserName = new ForgetUserNameObjects()
        forgetUserName.navigate()
               
        forgetUserName.ForgetUserNameHyperLink()
        forgetUserName.UrlEqualChecker(Cypress.env('CYPRESSBASEURL') +'/forgetUsernamepage')
        forgetUserName.EnterEmail('firstname-lastname@domain.com')
        forgetUserName.InvalidMessage()
 
    })

    //----------------------------------------InValid Test Cases----------------------------------------// 

    //Test Case 19
    it('Garbage', () =>  {    

        const forgetUserName = new ForgetUserNameObjects()
        forgetUserName.navigate()
               
        forgetUserName.ForgetUserNameHyperLink()
        forgetUserName.UrlEqualChecker(Cypress.env('CYPRESSBASEURL') +'/forgetUsernamepage')
        forgetUserName.EnterEmail('#@%^%#$@#$@#.com')
        forgetUserName.InvalidMessage()
 
    })
    
    //Test Case 20
    it('Missing username', () =>  {    

        const forgetUserName = new ForgetUserNameObjects()
        forgetUserName.navigate()
               
        forgetUserName.ForgetUserNameHyperLink()
        forgetUserName.UrlEqualChecker(Cypress.env('CYPRESSBASEURL') +'/forgetUsernamepage')
        forgetUserName.EnterEmail('@domain.com')
        forgetUserName.InvalidMessage()
 
    })
    
    //Test Case 21
    it('Encoded HTML within an email is invalid', () =>  {    

        const forgetUserName = new ForgetUserNameObjects()
        forgetUserName.navigate()
               
        forgetUserName.ForgetUserNameHyperLink()
        forgetUserName.UrlEqualChecker(Cypress.env('CYPRESSBASEURL') +'/forgetUsernamepage')
        forgetUserName.EnterEmail('Joe Smith <email@domain.com>')
        forgetUserName.InvalidMessage()
 
    })
    
    //Test Case 22
    it('Missing @', () =>  {    

        const forgetUserName = new ForgetUserNameObjects()
        forgetUserName.navigate()
               
        forgetUserName.ForgetUserNameHyperLink()
        forgetUserName.UrlEqualChecker(Cypress.env('CYPRESSBASEURL') +'/forgetUsernamepage')
        forgetUserName.EnterEmail('email.domain.com')
        forgetUserName.InvalidMessage()
 
    })
    
    //Test Case 23
    it('Two @ sign', () =>  {    

        const forgetUserName = new ForgetUserNameObjects()
        forgetUserName.navigate()
               
        forgetUserName.ForgetUserNameHyperLink()
        forgetUserName.UrlEqualChecker(Cypress.env('CYPRESSBASEURL') +'/forgetUsernamepage')
        forgetUserName.EnterEmail('email@domain@domain.com')
        forgetUserName.InvalidMessage()
 
    })
    
    //Test Case 24
    it('Leading dot in address is not allowed', () =>  {    

        const forgetUserName = new ForgetUserNameObjects()
        forgetUserName.navigate()
               
        forgetUserName.ForgetUserNameHyperLink()
        forgetUserName.UrlEqualChecker(Cypress.env('CYPRESSBASEURL') +'/forgetUsernamepage')
        forgetUserName.EnterEmail('.email@domain.com')
        forgetUserName.InvalidMessage()
 
    })

    //Test Case 25
    it('Trailing dot in address is not allowed', () =>  {    

        const forgetUserName = new ForgetUserNameObjects()
        forgetUserName.navigate()
               
        forgetUserName.ForgetUserNameHyperLink()
        forgetUserName.UrlEqualChecker(Cypress.env('CYPRESSBASEURL') +'/forgetUsernamepage')
        forgetUserName.EnterEmail('email.@domain.com')
        forgetUserName.InvalidMessage()
 
    })

    //Test Case 26
    it('Multiple dots', () =>  {    

        const forgetUserName = new ForgetUserNameObjects()
        forgetUserName.navigate()
               
        forgetUserName.ForgetUserNameHyperLink()
        forgetUserName.UrlEqualChecker(Cypress.env('CYPRESSBASEURL') +'/forgetUsernamepage')
        forgetUserName.EnterEmail('email..email@domain.com')
        forgetUserName.InvalidMessage()
 
    })
    
    //Test Case 27
    it('Unicode char as address', () =>  {    

        const forgetUserName = new ForgetUserNameObjects()
        forgetUserName.navigate()
               
        forgetUserName.ForgetUserNameHyperLink()
        forgetUserName.UrlEqualChecker(Cypress.env('CYPRESSBASEURL') +'/forgetUsernamepage')
        forgetUserName.EnterEmail('あいうえお@domain.com')
        forgetUserName.InvalidMessage()
 
    })
    
    //Test Case 28
    it('Text followed email is not allowed', () =>  {    

        const forgetUserName = new ForgetUserNameObjects()
        forgetUserName.navigate()
               
        forgetUserName.ForgetUserNameHyperLink()
        forgetUserName.UrlEqualChecker(Cypress.env('CYPRESSBASEURL') +'/forgetUsernamepage')
        forgetUserName.EnterEmail('email@domain.com (Joe Smith)')
        forgetUserName.InvalidMessage()
 
    })

    //Test Case 29
    it('Missing top-level domain (.com/.net/.org/etc)', () =>  {    

        const forgetUserName = new ForgetUserNameObjects()
        forgetUserName.navigate()
               
        forgetUserName.ForgetUserNameHyperLink()
        forgetUserName.UrlEqualChecker(Cypress.env('CYPRESSBASEURL') +'/forgetUsernamepage')
        forgetUserName.EnterEmail('email@domain')
        forgetUserName.InvalidMessage()
 
    })

    //Test Case 30
    it('The leading dash in front of the domain is invalid', () =>  {    

        const forgetUserName = new ForgetUserNameObjects()
        forgetUserName.navigate()
               
        forgetUserName.ForgetUserNameHyperLink()
        forgetUserName.UrlEqualChecker(Cypress.env('CYPRESSBASEURL') +'/forgetUsernamepage')
        forgetUserName.EnterEmail('email@-domain.com')
        forgetUserName.InvalidMessage()
 
    })

    //Test Case 31
    it('.web is not a valid top-level domain', () =>  {    

        const forgetUserName = new ForgetUserNameObjects()
        forgetUserName.navigate()
               
        forgetUserName.ForgetUserNameHyperLink()
        forgetUserName.UrlEqualChecker(Cypress.env('CYPRESSBASEURL') +'/forgetUsernamepage')
        forgetUserName.EnterEmail('email@domain.web')
        forgetUserName.InvalidMessage()
 
    })

    //Test Case 32
    it('Invalid IP format', () =>  {    

        const forgetUserName = new ForgetUserNameObjects()
        forgetUserName.navigate()
               
        forgetUserName.ForgetUserNameHyperLink()
        forgetUserName.UrlEqualChecker(Cypress.env('CYPRESSBASEURL') +'/forgetUsernamepage')
        forgetUserName.EnterEmail('email@111.222.333.44444')
        forgetUserName.InvalidMessage()
 
    })

    //Test Case 33
    it('Multiple dots in the domain portion is invalid', () =>  {    

        const forgetUserName = new ForgetUserNameObjects()
        forgetUserName.navigate()
               
        forgetUserName.ForgetUserNameHyperLink()
        forgetUserName.UrlEqualChecker(Cypress.env('CYPRESSBASEURL') +'/forgetUsernamepage')
        forgetUserName.EnterEmail('email@domain..com')
        forgetUserName.InvalidMessage()
 
    })
    

})