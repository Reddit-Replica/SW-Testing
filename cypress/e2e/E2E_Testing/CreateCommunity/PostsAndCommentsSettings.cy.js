/// <reference types="cypress" />

import UserMangementObjects from "../PageObjects/CreateCommunityObjects/UserManagementObjects.cy"
import RightSideBarObjects from "../PageObjects/CreateCommunityObjects/RightSideBarObjects.cy"
import TrafficStatusObjects from "../PageObjects/CreateCommunityObjects/TrafficStatusObjects.cy"
import PostsAndCommentsSettingsObjects from "../PageObjects/CreateCommunityObjects/PostsAndCommentsSettingsObjects.cy"

const UserMangement = new UserMangementObjects()
const RightSideBar = new RightSideBarObjects()
const TrafficStatus = new TrafficStatusObjects()
const PostsAndCommentsSettings = new PostsAndCommentsSettingsObjects()

beforeEach({scrollBehavior:false},() => {
    UserMangement.navigate()  
    UserMangement.enterUsername('karim10') 
    UserMangement.enterPassword('Karim@0107228700')     
    UserMangement.submit()
    //RightSideBar.SeeAll() 
    RightSideBar.GoToCommunity('[id=top-community-link2-1]')   
    cy.wait(1000)
    RightSideBar.ViewAllModerators()
    cy.wait(1000)
    cy.reload() 
    TrafficStatus.ScrollDown()
    PostsAndCommentsSettings.PostsAndCommentsSettingsButton()
}) 

describe('Posts And Comments Settings in Community Test Cases',{scrollBehavior:false}, function () {
 
    //Test Case 1
    it('Enable spoiler tag', {scrollBehavior:false},() =>  {   
        PostsAndCommentsSettings.DisableSpoilerTagSwitch()
        PostsAndCommentsSettings.SpoilerTagSwitch()
        PostsAndCommentsSettings.EnableSpoilerTagSwitch()
        PostsAndCommentsSettings.SaveChanges()
        PostsAndCommentsSettings.SettingsChangedSuccessfully()
        cy.wait(2000)
        PostsAndCommentsSettings.ClickOnSubReddit()
        cy.wait(2000)
        
        PostsAndCommentsSettings.ClickOnCreatePost()
        
        cy.wait(2000)
        PostsAndCommentsSettings.checkedSpoilerInPost()
    })

    //Test Case 2
    it('Disable spoiler tag', () =>  {   
        PostsAndCommentsSettings.SpoilerTagSwitch()
        PostsAndCommentsSettings.DisableSpoilerTagSwitch()
        PostsAndCommentsSettings.SaveChanges()
        PostsAndCommentsSettings.SettingsChangedSuccessfully()
        PostsAndCommentsSettings.ClickOnSubReddit()
        PostsAndCommentsSettings.ClickOnCreatePost()
        PostsAndCommentsSettings.DisabledSpoilerInPost()
    })
    
    //ALL SORTS DON NOT HAVE ACTIONS AS FRONT NOT COMPLETED IT
    //Test Case 3
    it('Suggested sort: none', () =>  {   
        PostsAndCommentsSettings.SelectFromSuggestSort()
        PostsAndCommentsSettings.SelectFromSuggestSort(0)
        PostsAndCommentsSettings.SaveChanges()
        PostsAndCommentsSettings.SettingsChangedSuccessfully()
        PostsAndCommentsSettings.SuggestSort()
        PostsAndCommentsSettings.NoneInSuggestSort()

    })
    
    //Test Case 4
    it('Suggested sort: best', () =>  {   
        PostsAndCommentsSettings.SelectFromSuggestSort()
        PostsAndCommentsSettings.SelectFromSuggestSort(1)
        PostsAndCommentsSettings.SaveChanges()
        PostsAndCommentsSettings.SettingsChangedSuccessfully()
        PostsAndCommentsSettings.SuggestSort()
        PostsAndCommentsSettings.BestInSuggestSort()
        
    })
    
    //Test Case 5
    it('Suggested sort: top', () =>  {   
        PostsAndCommentsSettings.SelectFromSuggestSort()
        PostsAndCommentsSettings.SelectFromSuggestSort(2)
        PostsAndCommentsSettings.SaveChanges()
        PostsAndCommentsSettings.SettingsChangedSuccessfully()
        PostsAndCommentsSettings.SuggestSort()
        PostsAndCommentsSettings.TopInSuggestSort()
        
    })
    
    //Test Case 6
    it('Suggested sort: new', () =>  {   
        PostsAndCommentsSettings.SelectFromSuggestSort()
        PostsAndCommentsSettings.SelectFromSuggestSort(3)
        PostsAndCommentsSettings.SaveChanges()
        PostsAndCommentsSettings.SettingsChangedSuccessfully()
        PostsAndCommentsSettings.SuggestSort()
        PostsAndCommentsSettings.NewInSuggestSort()
        
    })
    
    //Test Case 7
    it('Suggested sort: old', () =>  {   
        PostsAndCommentsSettings.SelectFromSuggestSort()
        PostsAndCommentsSettings.SelectFromSuggestSort(4)
        PostsAndCommentsSettings.SaveChanges()
        PostsAndCommentsSettings.SettingsChangedSuccessfully()
        PostsAndCommentsSettings.SuggestSort()
        PostsAndCommentsSettings.OldInSuggestSort()
        
    })
    
    //Test Case 8
    it('Images enable', () =>  {   
        PostsAndCommentsSettings.DisableImagesSwitch()
        PostsAndCommentsSettings.ImagesSwitch()
        PostsAndCommentsSettings.SaveChanges()
        PostsAndCommentsSettings.SettingsChangedSuccessfully()
        PostsAndCommentsSettings.EnableImagesSwitch()
        //TODO ==> complete it later with uploading an image
    })

    //Test Case 9
    it('Images disable', () =>  {   
        PostsAndCommentsSettings.EnableImagesSwitch()
        PostsAndCommentsSettings.ImagesSwitch()
        PostsAndCommentsSettings.SaveChanges()
        PostsAndCommentsSettings.SettingsChangedSuccessfully()
        PostsAndCommentsSettings.DisableImagesSwitch()
        //TODO ==> complete it later with trying to uploading an image but it must not uploaded    
    })
    

})  