////////////////////later: Community category, Community type,Adult content/////////////////
//import { afterEach } from 'mocha'
import RulesObjects from '../PageObjects/ModurationRulesObjects/RulesObjects'
import loginObjects from '../PageObjects/LoginObjects/loginObjects'

const rulesObj = new RulesObjects() 
const login = new loginObjects()
//test visiting the rules page
beforeEach(function() {
    // Since we want to visit the same URL at the start of all our tests,
    // we include it in our beforeEach function so that it runs before each test        
        login.navigate() 
        login.enterUsername(this.loginData.UserName) 
        login.enterPassword(this.loginData.Password)   
        login.submit() 
        cy.wait(1000)     
        rulesObj.Navigate(this.data.CommName) 
        cy.wait(1000)   
    
    })

before( { scrollBehavior: false }, function() {
    cy.fixture('RulesData').then(function(data){
        this.data=data
    })

    cy.fixture('CommonLoginData').then(function(loginData){
        this.loginData=loginData
    })
})

describe('Test Moderation Rules :do not need to clean after it', function() {  
    it('Delete rule', function() {
        rulesObj.AddRuleExternal()       
        rulesObj.ReportReasonText(this.data.ReportReason)
        rulesObj.RuleText(this.data.RuleText)
        rulesObj.AddRuleInternal() 

        rulesObj.EditRules()
        cy.scrollTo('bottom',{ensureScrollable: false})
        rulesObj.DeleteRules()
        rulesObj.SubmitDelete()
        //check it is deleted
        rulesObj.NotExistRuleText(this.data.RuleText)

    })
     //maxiumam is 100 char
     it('Check the maximum numbers of characters of Report reason', function() {
        //const rulesObj = new RulesObjects()  
        rulesObj.AddRuleExternal()   
        rulesObj.checkMaxFullDesc()

    })

    //maxiumam is 500 char
    it('Check the maximum numbers of characters of Full description', function() {
        //const rulesObj = new RulesObjects() 
        rulesObj.AddRuleExternal()    
        rulesObj.checkMaxReportReason()

    })

    it('Cancelling adding the rule by X', function() {
        //const rulesObj = new RulesObjects() 
        rulesObj.AddRuleExternal()
        rulesObj.RuleText(this.data.RuleText2)    
        rulesObj.CloseRulesFormByX()
        rulesObj.DisappearanceRuleForm()
        rulesObj.NotExistRuleText(this.data.RuleText2)
    })

    it('Cancelling adding the rule by "Cancel" button', function() {
        //const rulesObj = new RulesObjects()   
        rulesObj.AddRuleExternal()  
        rulesObj.RuleText(this.data.RuleText2)
        rulesObj.CancelButton()
        rulesObj.DisappearanceRuleForm(this.data.RuleText2)
    })
    it('Disability to add rule without any information', function() {
        //const rulesObj = new RulesObjects() 
        rulesObj.AddRuleExternal()   
        //cy.scrollTo('bottom',{ensureScrollable: false})
        rulesObj.DisableAddRuleInternal()
        
    })

    it('Disability to add rule with "Full description" only', function() {
        //const rulesObj = new RulesObjects()  
        rulesObj.AddRuleExternal()   
        rulesObj.FullDescripText(this.data.FullDescription)
        rulesObj.DisableAddRuleInternal()
    })

    it('Disability to add rule with "Report reason" only', function() {
        //const rulesObj = new RulesObjects()  
        rulesObj.AddRuleExternal()   
        rulesObj.ReportReasonText('my resona') 
        rulesObj.DisableAddRuleInternal()
    })

    it('Disability to add rule with "Report reason" and "Full description" only ', function() {
        //const rulesObj = new RulesObjects() 
        rulesObj.AddRuleExternal()    
        rulesObj.FullDescripText(this.data.FullDescription)
        rulesObj.ReportReasonText('my resona') 
        rulesObj.DisableAddRuleInternal()
    })

})

//**************************************************************************

describe('Test Moderation Rules', function() {   

    // beforeEach(function() {
    //     rulesObj.AddRuleExternal()    
    //     rulesObj.RuleText(this.data.RuleText2)
    // })

    it('Ability to add rule with non existing "Rule" name only', function() {
        //const rulesObj = new RulesObjects() 
        rulesObj.AddRuleExternal()    
        rulesObj.RuleText(this.data.RuleText2)
        //rulesObj.AbleAddRuleInternal()
        rulesObj.AddRuleInternal()

        //thet it is added
        //rulesObj.CheckExternalRuleText(this.data.RuleText2)
        rulesObj.ExistanceRuleText(this.data.RuleText2)
    })

    // it('Ability to choose different "Applies to" ', function() {
    //     //const rulesObj = new RulesObjects()     
    //     rulesObj.
    //     rulesObj.
    // })

    //  it('Check the rule is added', function() {
    //     //const rulesObj = new RulesObjects()  
    //     rulesObj.AddRuleExternal()   
    //     rulesObj.FullDescripText(this.data.FullDescription)
    //     rulesObj.ReportReasonText('my resona') 
    //     rulesObj.RuleText(this.data.RuleText2)
    //     rulesObj.AddRuleInternal()
    // })

    it('Check the rule collapse: REPORT REASON', function() {
        //const rulesObj = new RulesObjects()   
        rulesObj.AddRuleExternal()       
        rulesObj.ReportReasonText(this.data.ReportReason) 
        rulesObj.RuleText('ruly header2_collaps')
        rulesObj.AddRuleInternal()  

        rulesObj.OpenCollapse()
        rulesObj.CheckReportReasonRule_1(this.data.ReportReason)

    })

    it('Check the rule collapse: APPLIES TO', function() {
        //const rulesObj = new RulesObjects()    
        rulesObj.AddRuleExternal()       
        //rulesObj.ApplyRuleTo(this.data.ApplyTo)
        rulesObj.ApplyToComments()
        rulesObj.RuleText('ruly header3_collaps')
        rulesObj.AddRuleInternal()  

        rulesObj.OpenCollapse()

        //filtered
        //rulesObj.CheckAppliedToRule_1(this.data.ApplyTo) 
        rulesObj.CheckAppliedToRule_1(this.data.ApplyTo) 
    })

    it('Check the rule collapse: FULL DESCRIPTION', function() {
        //const rulesObj = new RulesObjects()     
        rulesObj.AddRuleExternal()       
        rulesObj.FullDescripText(this.data.FullDescription2)
        rulesObj.RuleText('ruly header4_collaps')
        rulesObj.AddRuleInternal()  

        rulesObj.OpenCollapse()
        rulesObj.CheckFullDescripRule_1(this.data.FullDescription2) 
        
    })

    // it('Check the rule collapse: CREATED', function() {
    //     //const rulesObj = new RulesObjects()     
    //     rulesObj.
    //     rulesObj.
    // })

    //filtered
    // it.only('Edit rule name and check that it is edited', function() {
    //     //const rulesObj = new RulesObjects()    
    //     rulesObj.AddRuleExternal()       
    //     rulesObj.RuleText('ruly header33')
    //     rulesObj.AddRuleInternal() 

    //     rulesObj.EditRules()
    //     rulesObj.RuleText('edited namy')
    //     rulesObj.SaveEditedRules()

    //     //check the text from outside
    //     rulesObj.NotExistRuleText('ruly header33')
    //     rulesObj.ExistanceRuleText('edited namy')

    // })

    //filtered
//     it('Edit Report reason and check that it is edited', function() {
//         //const rulesObj = new RulesObjects()  
//         rulesObj.AddRuleExternal()       
//         rulesObj.ReportReasonText(this.data.ReportReason)
//         rulesObj.RuleText('ruly header33')
//         rulesObj.AddRuleInternal() 

//         rulesObj.EditRules()  
//         rulesObj.ReportReasonText('edited this is my resona')
//         rulesObj.SaveEditedRules()

//         rulesObj.CheckReportReasonRule_1('edited this is my resona')
   
//     })


//filtered
//     it('Edit Full description and check that it is edited', function() {
//         //const rulesObj = new RulesObjects()   
//         rulesObj.AddRuleExternal()       
//         rulesObj.FullDescripText(this.data.FullDescription2)
//         rulesObj.RuleText('ruly header33')
//         rulesObj.AddRuleInternal() 

//         rulesObj.EditRules()  
//         rulesObj.FullDescripText('edited this is my resona')
//         rulesObj.SaveEditedRules()

//        // rulesObj.EditRules()  
//         rulesObj.CheckFullDescripRule_1() 
  
//     })


    it('Cancel deleting rule by Cancel button', function() {
        //const rulesObj = new RulesObjects() 
        
        rulesObj.AddRuleExternal()       
        rulesObj.RuleText('ruly header33')
        rulesObj.AddRuleInternal() 
           
        rulesObj.EditRules()
         cy.scrollTo('bottom',{ensureScrollable: false})
        rulesObj.DeleteRules()
        rulesObj.CancelDeletingButton()

        // check it is not deleted
        rulesObj.ExistanceRuleText('ruly header33')

    })

    it('Cancel deleting rule by X', function() {
        //const rulesObj = new RulesObjects()  
        
        rulesObj.AddRuleExternal()       
        rulesObj.RuleText('ruly header388')
        rulesObj.AddRuleInternal() 
           
        cy.wait(1000)

        rulesObj.EditRules()
        cy.scrollTo('bottom',{ensureScrollable: false})
        rulesObj.DeleteRules()
        rulesObj.CancelDeleteByX()

        //check it is not deleted
        rulesObj.ExistanceRuleText('ruly header388')

    })

    it('Disability to add rule with existing "Rule" name ', function() {
        //const rulesObj = new RulesObjects() 
        rulesObj.AddRuleExternal()    
        rulesObj.RuleText('ruly header356')
        rulesObj.AddRuleInternal()

        rulesObj.AddRuleExternal()    
        rulesObj.RuleText('ruly header356')
        // rulesObj.AddRuleInternal()
        rulesObj.DisableAddRuleInternal()

        rulesObj.RuleTextErrMsg('You have another rule with this title. Please change.')
        rulesObj.CloseRulesFormByX()

    })


    //later:important 
    // it('Check that the max number of rules are 15', function() {
    //     //const rulesObj = new RulesObjects() 

    //     for loop to create 15

    //     rulesObj.
    //     rulesObj.
    //     rulesObj.
    //     rulesObj.

    //     for loop to delete it
    // })


    //later:important 
    //after applying the rule : check that the community is btb2 this rule

    afterEach(function() {
         //clean:
         rulesObj.EditRules()
         cy.scrollTo('bottom',{ensureScrollable: false})
         rulesObj.DeleteRules()
         rulesObj.SubmitDelete()
    })


 })