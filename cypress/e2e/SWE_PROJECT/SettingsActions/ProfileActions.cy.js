/// <reference types="cypress" />

describe('Feed Settings Tab Tests', function () {
    
    beforeEach(() => {
        //visit the URL before each test
        cy.visit('http://localhost:8085/settings/profile') 
    })
    
    
    //----------------------------------------PROFILE INFORMATION Section----------------------------------------//
    //Test Case 1
    //NOTE: it will have effect without clicking on any button
    it('Display name (optional)', () =>  {    
    
    })

    //Test Case 2
    it('About (optional)', () =>  {    
    
    })
    
    //Test Case 3
    it('Social links (5 max)', () =>  {    
    
    })
    
    //----------------------------------------IMAGES Section----------------------------------------//
    
    //Test Case 4
    it('Profile picture', () =>  {    
    
    })
    
    //Test Case 5
    it('banner image', () =>  {    
    
    })
    
    //Test Case 6
    it('Profile picture and banner image', () =>  {    
    
    })
    
    //----------------------------------------PROFILE CATEGORY Section----------------------------------------//
    
    //Test Case 7
    it('NSFW', () =>  {    
    
    })
    
    //----------------------------------------ADVANCED Section----------------------------------------//
    //Test Case 8
    it('Allow people to follow you', () =>  {    
    
    })
    
    //Test Case 9
    it('Content visibility', () =>  {    
    
    })
    
    //Test Case 10
    it('Active in communities visibility', () =>  {    
    
    })
    
    //----------------------------------------PROFILE MODERATION Section----------------------------------------//
    //Test Case 11
    it('Profile Moderation page', () =>  {    
    
    })
    
})