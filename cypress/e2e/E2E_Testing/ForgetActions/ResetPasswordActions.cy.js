/// <reference types="cypress" />

import ResetPasswordObjects from "../PageObjects/ForgetObjects/ResetPasswordObjects.cy"
describe('Reset Password Page Tests', function () {
    
    //Test Case 1
    it('Verify the title of the page', () =>  {            
    
        const ResetPassword = new ResetPasswordObjects()
        ResetPassword.navigate()

        ResetPassword.TitleChecker()
    })

    //Test Case 2
    it('Reset pasword with same length and same content', () =>  {            
    
        const ResetPassword = new ResetPasswordObjects()
        ResetPassword.navigate()

        ResetPassword.NewPassword('123456789')
        ResetPassword.VerifyPassword('123456789')
        ResetPassword.NotInValidMessageNewPassword()
        ResetPassword.NotInValidMessageVerifyPassword()
        ResetPassword.ClickOnSetPasswordButton()
        ResetPassword.UrlEqualChecker(Cypress.env('CYPRESSBASEURL') +'/reset-password/:id/:token')
    
    })

    //Test Case 3
    it('Reset pasword with same length and different content', () =>  {            
    
        const ResetPassword = new ResetPasswordObjects()
        ResetPassword.navigate()
        
        ResetPassword.NewPassword('123456789')
        ResetPassword.VerifyPassword('123456788')
        ResetPassword.NotInValidMessageNewPassword()
        ResetPassword.InvalidMessageVerifyPassword()
        ResetPassword.ClickOnSetPasswordButton()
        ResetPassword.UrlEqualChecker(Cypress.env('CYPRESSBASEURL') +'/reset-password/:id/:token')
        
    })

    //Test Case 4
    it('Reset pasword with different length', () =>  {            
    
        const ResetPassword = new ResetPasswordObjects()
        ResetPassword.navigate()

        ResetPassword.NewPassword('123456789')
        ResetPassword.VerifyPassword('123456788a')
        ResetPassword.NotInValidMessageNewPassword()
        ResetPassword.InvalidMessageVerifyPassword()
        ResetPassword.ClickOnSetPasswordButton()
        ResetPassword.UrlEqualChecker(Cypress.env('CYPRESSBASEURL') +'/reset-password/:id/:token')
        
    })

    //Test Case 6
    it('Click on Reset Button With empty passwords', () =>  {            
    
        const ResetPassword = new ResetPasswordObjects()
        ResetPassword.navigate()
        
        ResetPassword.ClickOnSetPasswordButton()
        ResetPassword.UrlEqualChecker(Cypress.env('CYPRESSBASEURL') +'/reset-password/:id/:token')
        ResetPassword.InvalidMessageNewPassword()

    })

    //Test Case 7
    it('Enter Password then go Back then return to Reset Password Page', () =>  {            
    
        const ResetPassword = new ResetPasswordObjects()
        ResetPassword.navigate()

        ResetPassword.NewPassword('123456789')
        ResetPassword.VerifyPassword('123456789')
        ResetPassword.NotInValidMessageNewPassword()
        ResetPassword.NotInValidMessageVerifyPassword()
        ResetPassword.GoBack()
        ResetPassword.GoForward()
        ResetPassword.EmptyCheckerNewPassword()
        ResetPassword.EmptyCheckerVerifyPassword()

    })

    //Test Case 8
    it('Enter Password then click on Sign In then return to Reset Password Page', () =>  {            
    
        const ResetPassword = new ResetPasswordObjects()
        ResetPassword.navigate()

        ResetPassword.NewPassword('123456789')
        ResetPassword.VerifyPassword('123456789')
        ResetPassword.NotInValidMessageNewPassword()
        ResetPassword.NotInValidMessageVerifyPassword()
        ResetPassword.ClickOnSignUpButton()
        ResetPassword.GoBack()
        ResetPassword.EmptyCheckerNewPassword()
        ResetPassword.EmptyCheckerVerifyPassword()
    })

    //Test Case 9
    it('Enter Password then click on Sign Up then return to Reset Password Page', () =>  {            
    
        const ResetPassword = new ResetPasswordObjects()
        ResetPassword.navigate()

        ResetPassword.NewPassword('123456789')
        ResetPassword.VerifyPassword('123456789')
        ResetPassword.NotInValidMessageNewPassword()
        ResetPassword.NotInValidMessageVerifyPassword()
        ResetPassword.CLickOnLoginButton()
        ResetPassword.GoBack()
        ResetPassword.EmptyCheckerNewPassword()
        ResetPassword.EmptyCheckerVerifyPassword()
    
    })

    
})