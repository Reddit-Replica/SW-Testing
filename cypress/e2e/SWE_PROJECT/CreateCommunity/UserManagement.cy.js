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
})
  
describe('User Management: Moderators Test Cases',{scrollBehavior:false}, function () {

    //Test Case 1
    it('Invite User As Mod with everything', () =>  {    
        UserMangement.Moderators()
        UserMangement.InviteUserAsModerator()
        UserMangement.InvitedUSerName("karim22")
        UserMangement.CancelInviteModerator()
        UserMangement.InviteUserAsModerator()
        UserMangement.InvitedUSerName("karim22")
        //UserMangement.selectedGiveModeratorAccessTOEverything()
        UserMangement.SubmitInviteModerator()
        //UserMangement.InvitedSuccessfully()
        cy.wait(2000)
        cy.reload()
        UserMangement.CheckInvitedUserName('karim22')

    })
    
   
    //Test Case 2
    it('Invite User As Mod with with Manage Users', () =>  {    
        UserMangement.Moderators()
        UserMangement.InviteUserAsModerator()
        UserMangement.InvitedUSerName("karim22")
        

        UserMangement.GiveModeratorAccessTOEverything()
        UserMangement.GiveModeratorAccessTOManageSettings()
        UserMangement.GiveModeratorAccessTOManageFlairs()
        UserMangement.GiveModeratorAccessTOPostsANdComments()
        
        UserMangement.UnselectedGiveModeratorAccessTOEverything()
        UserMangement.UnselectedGiveModeratorAccessTOManageSettings()
        UserMangement.UnselectedGiveModeratorAccessTOManageFlairs()
        UserMangement.UnselectedGiveModeratorAccessTOPostsANdComments()
        
        //UserMangement.selectedGiveModeratorAccessTOManageUsers()

        UserMangement.SubmitInviteModerator()
        //UserMangement.InvitedSuccessfully()
        cy.reload()
        UserMangement.CheckInvitedUserName('karim22')
        
    })


    //Test Case 4
    it('Invite User As Mod with with Manage Settings', () =>  {    
        UserMangement.Moderators()
        UserMangement.InviteUserAsModerator()
        UserMangement.InvitedUSerName("karim22")
        
        UserMangement.GiveModeratorAccessTOEverything()
        UserMangement.GiveModeratorAccessTOManageUsers()
        UserMangement.GiveModeratorAccessTOManageFlairs()
        UserMangement.GiveModeratorAccessTOPostsANdComments()
        
        UserMangement.UnselectedGiveModeratorAccessTOEverything()
        UserMangement.UnselectedGiveModeratorAccessTOManageUsers()
        UserMangement.UnselectedGiveModeratorAccessTOManageFlairs()
        UserMangement.UnselectedGiveModeratorAccessTOPostsANdComments()
        
        //UserMangement.selectedGiveModeratorAccessTOManageSettings()

        UserMangement.SubmitInviteModerator()
        //UserMangement.InvitedSuccessfully()
        cy.reload()
        UserMangement.CheckInvitedUserName('karim22')
    })

    //Test Case 5
    it('Invite User As Mod with with Manage Flair', () =>  {    
        UserMangement.Moderators()
        UserMangement.InviteUserAsModerator()
        UserMangement.InvitedUSerName("karim22")
        //UserMangement.selectedGiveModeratorAccessTOManageUsers()
        
        UserMangement.GiveModeratorAccessTOEverything()
        UserMangement.GiveModeratorAccessTOManageSettings()
        UserMangement.GiveModeratorAccessTOManageUsers()
        UserMangement.GiveModeratorAccessTOPostsANdComments()
        
        UserMangement.UnselectedGiveModeratorAccessTOEverything()
        UserMangement.UnselectedGiveModeratorAccessTOManageSettings()
        UserMangement.UnselectedGiveModeratorAccessTOManageUsers()
        UserMangement.UnselectedGiveModeratorAccessTOPostsANdComments()
        
        //UserMangement.selectedGiveModeratorAccessTOManageFlairs()

        UserMangement.SubmitInviteModerator()
        //UserMangement.InvitedSuccessfully()
        cy.reload()
        UserMangement.CheckInvitedUserName('karim22')
    })


    //Test Case 7
    it('Invite User As Mod with with Manage POsts and comments', () =>  {    
        UserMangement.Moderators()
        UserMangement.InviteUserAsModerator()
        UserMangement.InvitedUSerName("karim22")
        //UserMangement.selectedGiveModeratorAccessTOManageUsers()
        
        UserMangement.GiveModeratorAccessTOEverything()
        UserMangement.GiveModeratorAccessTOManageSettings()
        UserMangement.GiveModeratorAccessTOManageFlairs()
        UserMangement.GiveModeratorAccessTOManageUsers()
        
        UserMangement.UnselectedGiveModeratorAccessTOEverything()
        UserMangement.UnselectedGiveModeratorAccessTOManageSettings()
        UserMangement.UnselectedGiveModeratorAccessTOManageFlairs()
        UserMangement.UnselectedGiveModeratorAccessTOManageUsers()
        
        //UserMangement.selectedGiveModeratorAccessTOPostsANdComments()

        UserMangement.SubmitInviteModerator()
        //UserMangement.InvitedSuccessfully()
        cy.reload()
        UserMangement.CheckInvitedUserName('karim22')
    })


    //Test Case 9
    it('Search for a user', () =>  {    
        UserMangement.Moderators()
        UserMangement.SearchModerators('karim22')
        UserMangement.SearchIconModerators()
        UserMangement.SearchedModeratorUserName('karim22')

    })
    
    //Test Case 10
    it('Leave as Mod', () =>  {    
        UserMangement.LeaveAsMod()
        UserMangement.CancelLeaveAsMod()
    })

})

describe('User Management: Banned Test Cases',{scrollBehavior:false}, function () {

    //Test Case 1
    it('Ban A user', () =>  {    
        UserMangement.Banned()
        UserMangement.BanUser()
        UserMangement.BanAUser("karim55")
        UserMangement.ReasonForBan(0)
        //UserMangement.SpamReason()
        UserMangement.ModNote('Lol')
        UserMangement.BannedFor('lolll')
        UserMangement.SubmitBanUser()
        UserMangement.BannedSuccessfully()
    })

    //Test Case 2
    it('Ban A user without writing username', () =>  {    
        UserMangement.Banned()
        UserMangement.BanUser()
        UserMangement.ReasonForBan(1)
        //UserMangement.SpamReason()
        UserMangement.ModNote('Lol')
        UserMangement.BannedFor('lolll')
        UserMangement.UnEnabledSubmitBanUser()

    })

    //Test Case 3
    it('Ban A user without Mod Note', () =>  {    
        UserMangement.Banned()
        UserMangement.BanUser()
        UserMangement.BanAUser("karim55")
        UserMangement.ReasonForBan(2)
        //UserMangement.SpamReason()
        UserMangement.BannedFor('lolll')
        UserMangement.EnabledSubmitBanUser()

    })

    //Test Case 4
    it('Ban A user: Permanent', () =>  {    
        UserMangement.Banned()
        UserMangement.BanUser()
        UserMangement.BanAUser("karim55")
        UserMangement.ReasonForBan(3)
        //UserMangement.SpamReason()
        UserMangement.ModNote('Lol')
        UserMangement.BannedFor('lolll')
        UserMangement.SubmitBanUser()
        UserMangement.BannedSuccessfully()

    })

    //Test Case 5
    it('Ban A user for specific time', () =>  {    
        UserMangement.Banned()
        UserMangement.BanUser()
        UserMangement.BanAUser("karim55")
        UserMangement.ReasonForBan(0)
        UserMangement.SpamReason()
        UserMangement.selectedHowLongBanningPermanent()
        UserMangement.BanPeriodDays(6)
        UserMangement.ModNote('Lol')
        UserMangement.BannedFor('lolll')
        UserMangement.SubmitBanUser()
        UserMangement.BannedSuccessfully()
    })

    //Test Case 6
    it('Ban A user without reason ', () =>  {    
        UserMangement.Banned()
        UserMangement.BanUser()
        UserMangement.BanAUser("karim55")
        UserMangement.ModNote('Lol')
        UserMangement.BannedFor('lolll')
        UserMangement.UnEnabledSubmitBanUser()
    })

    
})

describe('User Management: Muted Test Cases', {scrollBehavior:false},function () {

    //Test Case 1
    it('Cancel Mute A user', () =>  {    
        UserMangement.Muted()
        UserMangement.MuteUser()
        UserMangement.MuteUserName("karim55")
        UserMangement.ReasonMuted("Lol Ya Negm")
        UserMangement.CancelMutedUser()

    })

    it('Mute A user', () =>  {    
        UserMangement.Muted()
        UserMangement.MuteUser()
        UserMangement.MuteUserName("karim55")
        UserMangement.ReasonMuted("Lol Ya Negm")
        UserMangement.SubmitMutedUser()
        UserMangement.MutedSuccessfully()

    })

    //Test Case 2
    it('Mute A user without user name', () =>  {    
        UserMangement.Muted()
        UserMangement.MuteUser()
        UserMangement.ReasonMuted("Lol Ya Negm")
        UserMangement.DisabledSubmitMutedUser()
        
    })

    //Test Case 3
    it('Mute A user without note', () =>  {    
        UserMangement.Muted()
        UserMangement.MuteUser()
        UserMangement.MuteUserName("karim22")
        UserMangement.SubmitMutedUser()
        UserMangement.MutedSuccessfully()
    })

    //Test Case 4
    it('Mute A user with unAuthorized', () =>  {    
        UserMangement.Muted()
        UserMangement.MuteUser()
        UserMangement.MuteUserName("karim22")
        UserMangement.ReasonMuted("Lol Ya Negm")
        UserMangement.SubmitMutedUser()
        UserMangement.MutedUnauthorizedMessage()
    })

    //Test Case 5
    it('Search for existed muted user', () =>  {    
        UserMangement.Muted()
        UserMangement.SearchModerators('karim22')
        UserMangement.SearchIconModerators()
        UserMangement.SearchedModeratorUserName('karim22')
    })

    //Test Case 6
    it('Search for UnExisted muted user', () =>  {    
        UserMangement.Muted()
        UserMangement.SearchModerators('karim22as')
        UserMangement.SearchIconModerators()
        UserMangement.SeeAll()
    })
        
})


describe('User Management: Approved Test Cases', {scrollBehavior:false},function () {

    //Test Case 1
    it('Cancel Approved A user', () =>  {    
        UserMangement.Approved()
        UserMangement.ApproveUser()
        UserMangement.AddApprovUser('karim55')
        UserMangement.CancelAddUser()
    })

    it('Approved A user', () =>  {    
        UserMangement.Approved()
        UserMangement.ApproveUser()
        UserMangement.AddApprovUser('karim55')
        UserMangement.SubmitAddUser()
        UserMangement.AddUserSuccessfully()
    
    })
    
    //Test Case 4
    it('Approve A user with unAuthorized', () =>  {    
        UserMangement.Approved()
        UserMangement.ApproveUser()
        UserMangement.AddApprovUser('karim55asd')
        UserMangement.SubmitAddUser()
        UserMangement.MutedUnauthorizedMessage()

    })

    //Test Case 2
    it('Approved A user without user name', () =>  {    
        UserMangement.Approved()
        UserMangement.ApproveUser()
        UserMangement.SubmitAddUser()
        UserMangement.AddUserSuccessfully()
        UserMangement.DisabledSubmitAddUser()
    })

    //Test Case 4
    it('Search for existed Approved user', () =>  {    
        UserMangement.Approved()
        UserMangement.SearchModerators('karim55')
        UserMangement.SearchIconModerators()
        UserMangement.CheckInvitedUserName("karim55")
    })

    //Test Case 6
    it('Search for UnExisted Approved user', () =>  {    
        UserMangement.Approved()
        UserMangement.SearchModerators('karim55asd')
        UserMangement.SearchIconModerators()
        UserMangement.SeeAll()
    
    })

        
})
