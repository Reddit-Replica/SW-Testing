/// <reference types="cypress" />

import SearchObjects from "../PageObjects/SearchObjects/SearchObjects.cy"

const Search = new SearchObjects()

beforeEach(() => {
    Search.navigate()  
    Search.enterUsername('karim10') 
    Search.enterPassword('Karim@0107228700')     
    Search.submit()  
    Search.SearchReddit("karim")
    Search.CLickOnSearchIcon() 
})

describe('Search Tests', function () {

    //Test Case 1
    it('Search for posts', () =>  {    
        Search.Posts()
        Search.CheckCommunityName('karim')
        Search.CheckUserNameOfThePost('u/karim22 ')
        //Search.ClickOnAPost()
        //Search.CheckContentOfThePost("Karim from from application ")
    })
    
   
    //Test Case 2
    it('Search for comments', () =>  {    
        Search.Comments()
        Search.CheckTheComment("Karim")
        Search.ClickOnAComment()
        Search.CheckUserNameOfTheComment()
    })

    //Test Case 3
    it('Search for communities', () =>  {    
        Search.Communities()
        Search.NameOfTheCommunity("karim")
        Search.NUmberOfMembersInACommunity(2)
        Search.JoinTheCommunity("karim")
        Search.SuccessfullyJoinedACommunity("karim")
        Search.LeftTheCommunity("karim")

    })

    //Test Case 4
    it('Search for people', () =>  {    
        Search.People()
        Search.CheckUserNameInPeople("karim22")
        Search.ClickOnFollowButton("karim22")
        Search.SuccessfullyFollowAUserName("karim22")
        Search.ClickOnUnFollowButton("karim22")
        Search.SuccessfullyUnFollowAUserName("karim22")
    })

    //Test Case 5
    it('Sort by relevance', () =>  {    
        Search.Posts()
        Search.Sort(0)
        Search.CheckCommunityName("r/karim")
        Search.CheckUserNameOfThePost("u/karim22")
        Search.CheckContentOfThePost("Karim from from application ")
        
    })

    //Test Case 6
    it('Sort by hot', () =>  {    
        Search.Posts()
        Search.Sort(1)
        Search.CheckCommunityName("r/karim")
        Search.CheckUserNameOfThePost("u/karim22")
        Search.CheckContentOfThePost("Karim from from application ")
    })

    //Test Case 7
    it('Sort by new', () =>  {    
        Search.Posts()
        Search.Sort(2)
        Search.CheckCommunityName("r/karim")
        Search.CheckUserNameOfThePost("u/karim22")
        Search.CheckContentOfThePost("Karim from from application ")
    })

    //Test Case 8
    it('Sort by top', () =>  {    
        Search.Posts()
        Search.Sort(3)
        Search.CheckCommunityName("r/karim")
        Search.CheckUserNameOfThePost("u/karim22")
        Search.CheckContentOfThePost("Karim from from application ")
    })


    //Test Case 9
    it('Sort by most comments', () =>  {    
        Search.Posts()
        Search.Sort(4)
        Search.CheckCommunityName("r/karim")
        Search.CheckUserNameOfThePost("u/karim22")
        Search.CheckContentOfThePost("Karim from from application ")
    })

    /*---------------Time----------*/

    //Test Case 9
    it('Time : All Time', () =>  {    
        Search.Posts()
        Search.Time()
        Search.TimeType(1)
        Search.CheckCommunityName("r/karim")
        Search.CheckUserNameOfThePost("u/karim22")
        Search.CheckContentOfThePost("Karim from from application ") 
    })


    //Test Case 10
    it('Time : Last year', () =>  {    
        Search.Posts()
        Search.Time()
        Search.TimeType(2)
        Search.CheckCommunityName("r/karim")
        Search.CheckUserNameOfThePost("u/karim22")
        Search.CheckContentOfThePost("Karim from from application ")
    })
    
    //Test Case 11
    it('Time : Last Month', () =>  {    
        Search.Posts()
        Search.Time()
        Search.TimeType(3)
        Search.CheckCommunityName("r/karim")
        Search.CheckUserNameOfThePost("u/karim22")
        Search.CheckContentOfThePost("Karim from from application ")
    
    })
    
    //Test Case 12
    it('Time : Last week', () =>  {    
        Search.Posts()
        Search.Time()
        Search.TimeType(4)
        Search.CheckCommunityName("r/karim")
        Search.CheckUserNameOfThePost("u/karim22")
        Search.CheckContentOfThePost("Karim from from application ")
    
    })

    
    //Test Case 13
    it('Time : Last 24 hours', () =>  {    
        Search.Posts()
        Search.Time()
        Search.TimeType(5)
        Search.CheckCommunityName("r/karim")
        Search.CheckUserNameOfThePost("u/karim22")
        Search.CheckContentOfThePost("Karim from from application ")
    
    })
    
    //Test Case 14
    it('Time : Last Hour', () =>  {    
        Search.Posts()
        Search.Time()
        Search.TimeType(6)
        Search.CheckEmptyPosts()
    })
    
    //Test Case 15
    it('Communities on right side bar', () =>  {    
        Search.Posts()
        Search.SeeMoreCOmmunities()
        //rest is tested in communities tests
    })
    

    //Test Case 16
    it('People in right side bar', () =>  {    
        Search.Posts()
        Search.CheckPeopleNameInRightSideBar("karim22")
    })

    

})