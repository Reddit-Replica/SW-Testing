import commentObjects from './pageObjects/commentObjects'
import postActionObjects from './pageObjects/postActionObjects'
describe('Test some comments actions', () => {

  beforeEach(() => {
    // Since we want to visit the same URL at the start of all our tests,
    // we include it in our beforeEach function so that it runs before each test
    const postAct = new postActionObjects();
    const commentAct = new commentObjects();
    cy.visit('http://localhost:8085/')
  })


  it.only('Writing a comment ', () => {
    
  })

  // ################################################# delete comments #################################################
  it('Writing a comment and delete it', () => {
   
  })

  it('Disappearance of delete option of a comment of another one', () => {
  //Trying to delete a comment of another one
   
  })

  //  ################################################# edit comments #################################################
  it('', () => {
   
  })

  it('', () => {
   
  })

  //  ################################################# Hide comments #################################################
  it('', () => {
   
  })

  it('', () => {
   
  })

  //  ################################################# vote comments #################################################
  it('', () => {
   
  })

  it('', () => {
   
  })


})