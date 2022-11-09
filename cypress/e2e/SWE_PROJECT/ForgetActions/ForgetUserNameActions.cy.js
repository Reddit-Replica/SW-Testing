/// <reference types="cypress" />
import ForgetUserNameObjects from "/home/karimmahmoud/Desktop/CypressAutomation/cypress/e2e/SWE_PROJECT/PageObjects/ForgetObjects/ForgetUserNameObjects.cy"

describe('Reset UserName Page Tests', function () {
    
    //Test Case 1
    //NOTE: CHECK THE EFFECT OF IT
    it('Forget UserName', () =>  {    

        const forgetUserName = new ForgetUserNameObjects()
        forgetUserName.navigate()

        forgetUserName.ForgetUserNameHyperLink()
        forgetUserName.UrlEqualChecker('http://localhost:8085/forgetUsernamepage')
        forgetUserName.EnterEmail('karimmahmoud2210@gmail.com')
        forgetUserName.ClickOnEmailButton()

    })

    //Test Case 2
    it('Forget UserName - then click login - go back to show the email is still written ', () =>  {    

        const forgetUserName = new ForgetUserNameObjects()
        forgetUserName.navigate()

        forgetUserName.ForgetUserNameHyperLink()
        forgetUserName.UrlEqualChecker('http://localhost:8085/forgetUsernamepage')
        forgetUserName.EnterEmail('karimmahmoud2210@gmail.com')
        forgetUserName.CLickOnLoginButton()
        forgetUserName.UrlEqualChecker('http://localhost:8085/login')
        forgetUserName.GoBack()
        forgetUserName.UrlEqualChecker('http://localhost:8085/forgetUsernamepage')
        forgetUserName.ContainsChecker('karimmahmoud2210@gmail.com')

    })
    
    
    //Test Case 3
    it('Forget UserName - then click sign up - go back to show the email is still written', () =>  {    

        const forgetUserName = new ForgetUserNameObjects()
        forgetUserName.navigate()

        forgetUserName.ForgetUserNameHyperLink()
        forgetUserName.UrlEqualChecker('http://localhost:8085/forgetUsernamepage')
        forgetUserName.EnterEmail('karimmahmoud2210@gmail.com')
        forgetUserName.ClickOnSignUpButton()
        forgetUserName.UrlEqualChecker('http://localhost:8085/signup')
        forgetUserName.GoBack()
        forgetUserName.UrlEqualChecker('http://localhost:8085/forgetUsernamepage')
        forgetUserName.ContainsChecker('karimmahmoud2210@gmail.com')

    })

    //Test Case 4
    //TODO : REVIEW IT 
    it('Forget username then click on help', () =>  {    

        const forgetUserName = new ForgetUserNameObjects()
        forgetUserName.navigate()

        forgetUserName.ForgetUserNameHyperLink()
        forgetUserName.UrlEqualChecker('http://localhost:8085/forgetUsernamepage')
        forgetUserName.EnterEmail('karimmahmoud2210@gmail.com')
        forgetUserName.UrlNotEqualChecker('http://localhost:8085/forgetUsernamepage')
    })
      
    //Test Case 5
    //email is : 1231565456@gmail.com which is invalid one
    it('Write Invalid Email - should appear error message', () =>  {    

        const forgetUserName = new ForgetUserNameObjects()
        forgetUserName.navigate()

        forgetUserName.ForgetUserNameHyperLink()
        forgetUserName.UrlEqualChecker('http://localhost:8085/forgetUsernamepage')
        forgetUserName.EnterEmail('1231565456@gmail.com')
        forgetUserName.InvalidMessage()

    })

    //Test Case 6
    //email is : 1231565456a@gmail.com which is Valid one
    it('Write Valid Email - should not appear error message', () =>  {    

        const forgetUserName = new ForgetUserNameObjects()
        forgetUserName.navigate()

        forgetUserName.ForgetUserNameHyperLink()
        forgetUserName.UrlEqualChecker('http://localhost:8085/forgetUsernamepage')
        forgetUserName.EnterEmail('1231565456a@gmail.com')
        forgetUserName.NotInValidMessage()
    
    })

    //Test Case 7
    //email is : as1231565456a which is InValid one
    it('Write Invalid Email - should appear error message', () =>  {    

        const forgetUserName = new ForgetUserNameObjects()
        forgetUserName.navigate()

        forgetUserName.ForgetUserNameHyperLink()
        forgetUserName.UrlEqualChecker('http://localhost:8085/forgetUsernamepage')
        forgetUserName.EnterEmail('as1231565456a')
        forgetUserName.InvalidMessage()
    
    })
    
})