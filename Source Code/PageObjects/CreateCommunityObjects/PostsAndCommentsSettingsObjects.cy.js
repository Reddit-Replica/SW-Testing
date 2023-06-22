class PostsAndCommentsSettingsObjects{

    PostsAndCommentsSettingsButton(){
        cy.get('[id=postsandcomments-button]')
            .click()
    }

    SaveChanges(){
        cy.get('[id=save]')
            .first()
            .click()
    }

    DisableSpoilerTagSwitch(){
        cy.get('[id=btn101]')
            .first()
            .should('not.be.checked')
    }

    EnableSpoilerTagSwitch(){
        cy.get('[id=btn101]')
            .first()
            .should('be.checked')
    }

    SpoilerTagSwitch(){
        cy.get('[id=btn101]')
            .first()
            .click()
    }

    SuggestSort(idOfseggestSort){
        cy.get('[id=vs9__combobox]')
            .click()
    }
    
    NoneInSuggestSort(){
        cy.get('[id=vs1__option-0]')
            .click()
    }
    
    BestInSuggestSort(){
        cy.get('[id=vs1__option-1]')
            .click()
    }
    
    TopInSuggestSort(){
        cy.get('[id=vs1__option-2]')
            .click()
    }
    
    NewInSuggestSort(){
        cy.get('[id=vs1__option-3]')
            .click()
    }
    
    OldInSuggestSort(){
        cy.get('[id=vs1__option-4]')
            .click()
    }
    

    ImagesSwitch(){
        cy.get('[id=btnimageincomment]')
            .first()
            .click()
    }
    
    EnableImagesSwitch(){
        cy.get('[id=btnimageincomment]')
            .first()
            .should('be.checked')
    }
    
    DisableImagesSwitch(){
        cy.get('[id=btnimageincomment]')
            .first()
            .should('not.be.checked')
    }
    
    SettingsChangedSuccessfully(){
        cy.get('[class=right]')
            .should('have.text',"settings changed successfully")
    }

    ClickOnSubReddit(){
        cy.get('[id=subreddit-link0]')
            .first()
            .click()
    }

    ClickOnCreatePost(){
        cy.get('[id=create-post-subreddit-bar]')
            .click()
    }

    SelectSubRedditName(){
        cy.get('[class=comm-box]')
            .first()
            .click()
    }

    checkedSpoilerInPost(){
        cy.get('[id=footer-button-spoiler]')
            .should('be.checked')
            .click()
    }

    DisabledSpoilerInPost(){
        cy.get('[id=footer-button-spoiler]')
            .should('not.be.checked')
    }
    
    


}

export default PostsAndCommentsSettingsObjects