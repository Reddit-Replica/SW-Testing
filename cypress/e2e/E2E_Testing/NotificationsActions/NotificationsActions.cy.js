/// <reference types="cypress" />

import NotificationObjects from "../PageObjects/NotificationsObjects/NotificationObjects.cy"
import UserManagementObjects from "../PageObjects/CreateCommunityObjects/UserManagementObjects.cy"

//TODO: CHECK THE EFFECT OF ALL TEST CASES LATER

const Notification = new NotificationObjects()
const UserManagement = new UserManagementObjects()

beforeEach(() => {
    UserManagement.navigate()  
    UserManagement.enterUsername('karim10') 
    UserManagement.enterPassword('Karim@0107228700')     
    UserManagement.submit() 
})

describe('Notifications Test Cases', function () {

    /*-------------When enable send notifications on the post----*/
    //Test Case 1
    it('Notification of the follow', () =>  {    
        Notification.NotificationIcon()
        Notification.SeeAllInNotifications()
        //Notification.NotificationText()
        Notification.UserNameOfTheNotification('14-8',"u/karim22")
        Notification.TitleOfNotification('7-8',"karim22 followed you!")
        Notification.CheckProfileUserName("u/karim22")
        Notification.CheckURL("/user/karim22")
    })
    
   
    //Test Case 2
    it('Notification of comment on my post ', () =>  {    
        Notification.NotificationIcon()
        Notification.SeeAllInNotifications()
        
        Notification.UserNameOfTheNotification('14-7',"u/karim22")
        Notification.TitleOfNotification('7-7',"karim22 commented on your post!")
        //Notification.CheckPostContentOfThePostAfterClickOnNotification("asdasdasdasd")    
    })

    //Test Case 3
    it('Notification of Reply on my comment in a post', () =>  {    
        Notification.NotificationIcon()
        //Notification.SeeAllInNotifications()
        
        Notification.UserNameOfTheNotification('14-6',"u/karim22")
        Notification.TitleOfNotification('7-6',"karim22 replied to your comment!")
        //Notification.ReplyBack("16-6")
        //Notification.CheckPostContentOfThePostAfterClickOnNotification("asdasdasdasd")            
    })

    //Test Case 4
    it('Notifiaction of A comment on A post that I follow', () =>  {    
        Notification.NotificationIcon()
        //Notification.SeeAllInNotifications()
        Notification.UserNameOfTheNotification('14-1',"u/karim22")
        Notification.TitleOfNotification('7-1',"karim22 replied to a comment in a postyou are following!")
        //Notification.ReplyBack("16-6")
        //Notification.CheckUserNameOfThePostAfterClickOnNotification("karim10")           
    })

    //Test Case 5
    it('Notifiaction of A comment on A Reply that I follow', () =>  {    
        Notification.NotificationIcon()
        //Notification.SeeAllInNotifications()
        Notification.UserNameOfTheNotification('14-2',"u/karim22")
        Notification.TitleOfNotification('7-2',"karim22 replied to a comment you are following!")
        //Notification.ReplyBack("16-6")
        //Notification.CheckUserNameOfThePostAfterClickOnNotification("karim10")           
    })

        //Test Case 12
    it('Hide Notification of Follow', () =>  {    
        Notification.NotificationIcon()
        Notification.SeeAllInNotifications()
        Notification.ThreePointsOnTheLeft("11-8")
        Notification.HideThisNotification("12-8")
        cy.reload()
        Notification.NotificationIcon()
        //Notification.AfterHiddenTitleOfTheNotification('12-8',"karim22 followed you!")
    })

    //Hide Test Cases

    //Test Case 13
    it('Hide Notification of comment on my post', () =>  {    
        Notification.NotificationIcon()
        //Notification.SeeAllInNotifications()
        Notification.ThreePointsOnTheLeft("11-7")
        Notification.HideThisNotification("12-7")
        cy.reload()
        Notification.NotificationIcon()
        //Notification.AfterHiddenTitleOfTheNotification('12-7',"karim22 commented on your post!")
    
    })
    
    //Test Case 14
    it('Hide Notification of Reply on my post', () =>  {    
        Notification.NotificationIcon()
        //Notification.SeeAllInNotifications()
        Notification.ThreePointsOnTheLeft("11-6")
        Notification.HideThisNotification("12-6")
        cy.reload()
        Notification.NotificationIcon()
        //Notification.AfterHiddenTitleOfTheNotification('12-6',"karim22 replied to your comment!")
    
    })

    //Test Case 15
    it('Hide Notification of A comment on A post that I follow', () =>  {    
        Notification.NotificationIcon()
        //Notification.SeeAllInNotifications()
        Notification.ThreePointsOnTheLeft("11-5")
        Notification.HideThisNotification("12-5")
        cy.reload()
        Notification.NotificationIcon()
        //Notification.AfterHiddenTitleOfTheNotification('12-5',"karim22 commented in a post you are following!")
    
    })

    //Test Case 16
    it('Hide Notification of A comment on A Reply that I follow', () =>  {    
        Notification.NotificationIcon()
        //Notification.SeeAllInNotifications()
        Notification.ThreePointsOnTheLeft("11-4")
        Notification.HideThisNotification("12-4")
        cy.reload()
        Notification.NotificationIcon()
        //Notification.AfterHiddenTitleOfTheNotification('7-4',"karim22 replied to a comment in your post!"  )
    
    })

    /*----When disable send notifications on the post----*/
    //No NOtification will be send in the following cases

    //Test Case 7
    it('Notification of comment on my post when disable replies', () =>  {    
        Notification.NotificationIcon()
        Notification.NumberOfNotifications("5") 
    })

    //Test Case 11
    it('Click on messages from Notifications, rest of the test about messages in messages itself', () =>  {    
        Notification.NotificationIcon()
        Notification.MessagesFromNotifications()
    })

    //Test Case 17
    it('Check The Number of The Notifications ', () =>  {    
        Notification.NotificationIcon()
        Notification.NumberOfNotifications("5") 
    })

    

})