class NavBarObjects{

    Navigate() {
        cy.visit(Cypress.env('CYPRESSBASEURL') +'/main')
        
    }

    UrlChecker(url) {
        cy.url()
            .should('equal',url);
    } 

    //---------------------------------- Drop Left -----------------------------//
    OpenDropLeft() {
        cy.get('.header-icon-home')
            .click()

    }
    
    CreatPostDropDownLeft() {
        cy.get('#go-to-submit-page')
            .click()
    }

    SettingsDropDownLeft() {
        cy.get('#go-to-user-settings')
            .click()
    }

    HomeDropDownLeft() {
        cy.get('#go-to-home-page')
            .click()
    }

    CreateCommunity() {
        cy.get('#home-sub-menu-1 > :nth-child(2)')
        //cy.contains('Create Community')
            .click()
    }

    GoCommunity(commName) {
        cy.contains(commName)
            .click({force: true})
    }
    //---------------------------------- Drop Right -----------------------------//
    OpenDropRight() {
        cy.get('#show-settings-submenu')
            .click()

    }
    
    SettingsDropDownRight() {
        cy.get('#go-to-settings')
            .click()
    }

    ProfileDropDownRight() {
        cy.get('#go-to-user-page')
            .click()
    }

    //later:-
    //View options
    //Logout

    //---------------------------------- Logos -----------------------------//

    RedditLogo() {
        cy.get('#logo-img')
            .click()
    }

    HomeLogo() {
        //later: update this id
        cy.get('.header-user-nav > :nth-child(5)')
            .click()
    }

    CreatPostPlus() {
        cy.get('#go-to-submit-box')
            .click()
    }

    MessagesLogo() {
        cy.get('#chat-icon-box')
            .click()
    }

    //later: check what?
    NotificationLogo() {
        cy.get('#notifications-icon-box')
            .click()
    }

    SettingsLogo() {
         //later: update this id
        cy.get('.header-user-nav > :nth-child(1)')
            .click()
    }

    ProfileLogo() {
         //later: update this id
        cy.get('.header-user-nav > :nth-child(4)')
            .click()
    }

    //----------------- urls checks -----------------------//
    CreatePostPage() {
        this.UrlChecker(Cypress.env('CYPRESSBASEURL') +'/submit')
    }

    SettingsPage() {
        this.UrlChecker(Cypress.env('CYPRESSBASEURL') +'/settings')
    }

    ChatPage() {
        this.UrlChecker(Cypress.env('CYPRESSBASEURL') +'/message/inbox')
    }

    ProfilePage(userName) {
        this.UrlChecker(Cypress.env('CYPRESSBASEURL') +'/user/' + userName)
    }

    ACommunity(commName) {
        this.UrlChecker(Cypress.env('CYPRESSBASEURL') +'/r/' + commName)
    }

    HomePage() {
        this.UrlChecker(Cypress.env('CYPRESSBASEURL') +'/main')
    }
    
}
export default NavBarObjects