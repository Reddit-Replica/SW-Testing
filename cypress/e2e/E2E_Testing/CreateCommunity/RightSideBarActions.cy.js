/// <reference types="cypress" />
import '@cypress/code-coverage/support'

import UserMangementObjects from "../PageObjects/CreateCommunityObjects/UserManagementObjects.cy"
import RightSideBarObjects from "../PageObjects/CreateCommunityObjects/RightSideBarObjects.cy"

//TODO: CHECK THE EFFECT OF ALL TEST CASES LATER

const UserMangement = new UserMangementObjects()
const RightSideBar = new RightSideBarObjects()

beforeEach(() => {
    UserMangement.navigate()  
    cy.wait(1000)
    UserMangement.enterUsername('karim10') 
    cy.wait(1000)
    UserMangement.enterPassword('Karim@0107228700')     
    cy.wait(1000)
    UserMangement.submit()
})

describe('Right Side Bar in Create Community Test Cases',{scrollBehavior:false}, function () {

    //Test Case 1
    it('Mod Tools', () =>  {    
        RightSideBar.SeeAll() 
        RightSideBar.GoToCommunity('[id=top-community-link2-1]')    
        RightSideBar.ModTools()
        //rest ot testing it in moderators in user management
    })
    
    //Test Case 2
    it('Add to favourites', () =>  {    
        RightSideBar.SeeAll() 
        RightSideBar.GoToCommunity('[id=top-community-link2-1]')    
        RightSideBar.ThreeDots()
        RightSideBar.AddToFavourites() 
        cy.reload()
        RightSideBar.ThreeDots()
        RightSideBar.RemoveFromFavourites()   
    })

    //Test Case 3
    it('Add Description',{scrollBehavior:false}, () =>  {    
        RightSideBar.SeeAll() 
        RightSideBar.GoToCommunity('[id=top-community-link2-1]')    
        RightSideBar.WriteDescription("karim mahmoud")
        RightSideBar.AddDescription('karim mahmoud ')
        RightSideBar.WriteDescription("karim mahmoud")
        RightSideBar.CancelAddedDescription()
        RightSideBar.AddDescription('karim mahmoud ')
        RightSideBar.WriteDescription("karim mahmoud")
        RightSideBar.SaveAddedDescription()
        RightSideBar.CheckDesciptionContent("karim mahmoud ")
    
    })

    //Test Case 4
    it('Edit Description',{scrollBehavior:false}, () =>  {    
        RightSideBar.SeeAll() 
        RightSideBar.GoToCommunity('[id=top-community-link2-1]')    
        RightSideBar.AddDescription('karim mahmoud ')
        RightSideBar.WIthoutClearWriteDescription("kamal")
        RightSideBar.SaveAddedDescription()
        RightSideBar.CheckDesciptionContent("kamal ")
    })

    //Test Case 5
    it('Number of members in the community', {scrollBehavior:false},() =>  {    
        RightSideBar.SeeAll() 
        RightSideBar.GoToCommunity('[id=top-community-link2-1]')    
        RightSideBar.NumberOfMembersInTheCOmmunity('5')
    })

    //Test Case 6
    it('Click on Create Post',{scrollBehavior:false}, () =>  {    
        RightSideBar.SeeAll() 
        RightSideBar.GoToCommunity('[id=top-community-link2-1]')    
        RightSideBar.CreatePostButton()
        RightSideBar.checkURL('/submit')
        //rest of testing it in post
    })

    //Test Case 7
    it('Community Options',{scrollBehavior:false}, () =>  {    
        RightSideBar.SeeAll() 
        RightSideBar.GoToCommunity('[id=top-community-link2-1]')    
        RightSideBar.AddedAPrimaryTopic("#topic-0")
        RightSideBar.CheckTopicAdded('Animals And Pets')
        RightSideBar.AddedSubTopic()
        RightSideBar.SelectSubTopic("#topic-0")
        RightSideBar.SaveSubToicName()
        cy.reload()
        RightSideBar.CheckSubTopicNameAfterAdded("Animals And Pets")
    })
  

    //Test Case 8
    it('Message the Mods',{scrollBehavior:false}, () =>  {    
        RightSideBar.SeeAll() 
        RightSideBar.GoToCommunity('[id=top-community-link2-1]')    
        RightSideBar.MessageTheMods()
        RightSideBar.checkURL('/message/compose')
        //rest of testing it in messages
    })

 
    //Test Case 9
    it('View All Moderators',{scrollBehavior:false}, () =>  {    
        RightSideBar.SeeAll() 
        RightSideBar.GoToCommunity('[id=top-community-link2-1]')    
        RightSideBar.ViewAllModerators()
        RightSideBar.checkURL('/r//about/moderators')
        //rest of testing it in moderation
    })
    
    

})  