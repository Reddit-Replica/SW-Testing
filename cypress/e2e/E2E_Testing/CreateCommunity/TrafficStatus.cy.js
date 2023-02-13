/// <reference types="cypress" />

import UserMangementObjects from "../PageObjects/CreateCommunityObjects/UserManagementObjects.cy"
import RightSideBarObjects from "../PageObjects/CreateCommunityObjects/RightSideBarObjects.cy"
import TrafficStatusObjects from "../PageObjects/CreateCommunityObjects/TrafficStatusObjects.cy"

const UserMangement = new UserMangementObjects()
const RightSideBar = new RightSideBarObjects()
const TrafficStatus = new TrafficStatusObjects()

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
    TrafficStatus.TrafficStatusButton()
})

describe('Taffic Status in Community Test Cases',{scrollBehavior:false}, function () {
 
    //Test Case 1
    it('Total - Last 24 hours', () =>  {   
        TrafficStatus.TotalLast24Hour('0')
    })

    //Test Case 2
    it('Total - Last 7 days', () =>  {    
        TrafficStatus.TotalLast7Days('2')
    })

    //Test Case 3
    it('Total - Last month', () =>  {    
        TrafficStatus.TotalLastMonth('2')
    })
    
    //Test Case 4
    it('Day Test', () =>  {    
        TrafficStatus.DayButton()
        TrafficStatus.GetDateInTheDayTable('2022 / 12 / 23')
        TrafficStatus.GetMembersJoinedInTheDayTable('3')
    })
    
    //Test Case 5
    it('Day of week test', () =>  {    
        TrafficStatus.DayOfWeekButton()
        TrafficStatus.GetDayOfTheWeekInTheDayTable('Wednesday')
        TrafficStatus.GetMembersJoinedInTheDayOfWeekTable('0')
        TrafficStatus.GetDayOfTheWeekInTheDayTable('Tuesday')
        TrafficStatus.GetMembersJoinedInTheDayOfWeekTable('2')
                  
    })
    
    //Test Case 6
    it('Month', () =>  {    
        TrafficStatus.MonthButton()
        TrafficStatus.GetMonthInTheDayTable('December')
        TrafficStatus.GetMembersJoinedInTheMonthTable('5')
        TrafficStatus.GetMonthInTheDayTable('November')
        TrafficStatus.GetMembersJoinedInTheMonthTable('0')
        
    })
    

})  