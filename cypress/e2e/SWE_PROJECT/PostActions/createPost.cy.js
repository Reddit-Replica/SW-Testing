
import createPostObjects from '../PageObjects/CreatePostObjects/createPostObjects'
import loginObjects from '../PageObjects/LoginObjects/loginObjects'

const createPost = new createPostObjects() 
const login = new loginObjects()

//test visiting the submit page
beforeEach( function() {
  // Since we want to visit the same URL at the start of all our tests,
  // we include it in our beforeEach function so that it runs before each test
  //const createPost = new createPostObjects()   
  
    login.navigate() 
    login.enterUsername(this.loginData.UserName) 
    login.enterPassword(this.loginData.Password)  
    login.submit()  
    cy.wait(1000)  
  createPost.navigate()
})

before( { scrollBehavior: false }, function() {

  cy.fixture('CreatePostData').then(function(data){
      this.data=data
  })

  cy.fixture('CommonLoginData').then(function(loginData){
    this.loginData=loginData
   })
})

describe('Test Craete Post',  function() {

 // -------------------------------------------------------------------## test chosing the community with title and post body  -------------------------------------------------------------------#
  it('Enable to choose the community or not ', { scrollBehavior: false }, function() {
    //const createPost = new createPostObjects()  
    createPost.showMyCommunities() 
    createPost.chooseMyprofile()
  })

  it('Try to click on (post) with choosing the community and without writing any thing',  function() {
    //const createPost = new createPostObjects()  
    createPost.showMyCommunities()
    createPost.chooseMyprofile()
    //createPost.postNotDone()
    createPost.postDisabled()    
  })

  it('Try to click on (post) without choosing the community and without writing any thing',  function() {
    //const createPost = new createPostObjects()  
    createPost.postNotDone()
    createPost.postDisabled()    
  })

  it('Try to click on (post) without choosing the community and with writing title and text',  function() {
    //const createPost = new createPostObjects()  
    createPost.title(this.data.PostTitle)
    createPost.postText(this.data.PostText)
    createPost.postNotDone()
    createPost.postDisabled()   
  })

  it('Try to click on (post) without choosing the community and with writing the title only',  function() {
    //const createPost = new createPostObjects()   
    createPost.title(this.data.PostTitle)
    createPost.postNotDone()
    createPost.postDisabled()     
  })

  it('Try to click on (post) without choosing the community and with writing the text only',  function() {
    //const createPost = new createPostObjects()     
    createPost.postText(this.data.PostText)
    createPost.postNotDone()
    createPost.postDisabled()   
  })

  it('Click (post) with choosing the community and with writing the title only',  function() {
    //const createPost = new createPostObjects()     
    createPost.showMyCommunities()
    createPost.chooseMyprofile()
    createPost.title(this.data.PostTitle)
    createPost.post()
    cy.wait(2000)
    createPost.postDone()
    //should pass
  })

  it('Try to click on (post) with choosing the community and with writing the text only',  function() {
    //const createPost = new createPostObjects()  
    createPost.showMyCommunities()
    createPost.chooseMyprofile()
    createPost.postText(this.data.PostText)
    createPost.postNotDone()
    createPost.postDisabled() 
    //should NOT pass
  })

  // it('Delete the chosen community and choose another',  function() {
  //  //const createPost = new createPostObjects()  
  //   createPost.showMyCommunities()
  //   createPost.chooseMyprofile()
  //   createPost.clearCommunity()
  //   createPost.chooseACommunity('footbally')
    
  // })

  // it('Try to click on (post) after deleting  the chosen community and without choosing another',  function() {
  //   //const createPost = new createPostObjects()  
  //   createPost.showMyCommunities()
  //   createPost.chooseMyprofile()
  //   createPost.clearCommunity()
  //   createPost.postNotDone()
  //   createPost.postDisabled()  
  // })

  // it('Try to click on (post) after deleting  the chosen community and without choosing another and with writing the title only',  function() {
  //   //const createPost = new createPostObjects()  
  //   createPost.showMyCommunities()
  //   createPost.chooseMyprofile()
  //   createPost.clearCommunity()
  //   createPost.title(this.data.PostTitle)
  //   createPost.postNotDone()
  //   createPost.postDisabled() 
  //   //should NOT pass
  // })

  // it('Try to click on (post) after deleting  the chosen community and without choosing another and with writing the text only',  function() {
  //   //const createPost = new createPostObjects()  
  //   createPost.showMyCommunities()
  //   createPost.chooseMyprofile()
  //   createPost.clearCommunity()
  //   createPost.postText(this.data.PostText)
  //   createPost.postNotDone()
  //   createPost.postDisabled() 
  // })

  //Later i think the 2 tests here are repeated:--
  // it('Click (post) after deleting the chosen community and with choosing another and with writing the title only',  function() {
  //  //const createPost = new createPostObjects()  
  //   createPost.showMyCommunities()
  //   createPost.chooseMyprofile()
  //   createPost.clearCommunity()
  //   createPost.chooseACommunity('footbally')
  //   createPost.title(this.data.PostTitle)
  //   createPost.post()
  //    cy.wait(2000)
  //   createPost.postDone()
  //   //should pass
    
  // })

  // it('Click (post) after deleting the chosen community and with choosing another and with writing the text only',  function() {
  //  //const createPost = new createPostObjects()  
  //   createPost.showMyCommunities()
  //   createPost.chooseMyprofile()
  //   createPost.clearCommunity()
  //   createPost.chooseACommunity('footbally')
  //   createPost.postText(this.data.PostText)
  //   createPost.postDisabled() 
  //   //should NOT pass
    
  // })

   //-------------------------------------------------------- another tests about  the title   -------------------------------------------------------------------#
   it('Check max length of Title',  function() {
    //const createPost = new createPostObjects()  
    createPost.checkMaxTitle()
    //should the text box of the title disaalowed 
  })

  //--------------------------------------------------------   Image & Videos  --------------------------------------------------------
  //later:check this test case:(check ->checkTitle<-)
  it('Title is the same after switching to Image & Videos',  function() {
    //const createPost = new createPostObjects()  
    createPost.title(this.data.PostTitle)
    createPost.imageAndVideoTap()
    createPost.checkTitle(this.data.PostTitle)
  })

  //later:check "checkUploadImgOrVideo"
  // it('Uploading an image using drag and drop',  function() {
  //   //const createPost = new createPostObjects()   
  //   createPost.imageAndVideoTap()
  //   createPost.dragDropImg(this.data.ImgFileName)
  //   createPost.checkUploadImgOrVideo('test1')
  // })

  // it('Uploading an image using (upload) button',  function() {
  //  //const createPost = new createPostObjects()     
  //   createPost.imageAndVideoTap()
  //   createPost.uploadImgOrVideo()
  //   createPost.selectImg(this.data.ImgFileName)
  //   createPost.checkUploadImgOrVideo('test1')   
  // })

  // //later:13-12
  // it.only('Try to click on (post) with uploading an image and with writing title and without choosing the community',  function() {
  //   //const createPost = new createPostObjects()  
  //   createPost.imageAndVideoTap()
  //   createPost.dragDropImg(this.data.ImgFileName)
  //   createPost.checkUploadImgOrVideo('test1')
  //   // createPost.title(this.data.PostTitle)
  //   // createPost.postNotDone()
  //   createPost.postDisabled() 
  // })

  //this test is repeated:-
  // it('Click (post) without uploading an image without writing title and without choosing the community',  function() {
  //  //const createPost = new createPostObjects()   
  //   createPost.postDisabled() 
  // })

  it('Try to click on (post) without uploading an image with writing title and with choosing the community',  function() {
    //const createPost = new createPostObjects()  
    createPost.showMyCommunities()
    createPost.chooseMyprofile()
    createPost.title(this.data.PostTitle)
    createPost.postNotDone()
    createPost.postDisabled() 
    //should NOT pass
  })

  it('Try to click on (post) with uploading an image without writing title and with choosing the community',  function() {
    //const createPost = new createPostObjects()  
    createPost.showMyCommunities()
    createPost.chooseMyprofile()
    createPost.imageAndVideoTap()
    createPost.dragDropImg(this.data.ImgFileName)
    createPost.postNotDone()
    createPost.postDisabled() 
    //should NOT pass
  })

  //filtered
  // it('Click (post) with uploading an image with writing title and with choosing the community',  function() {
  //   //const createPost = new createPostObjects()  
  //   createPost.imageAndVideoTap()
  //   createPost.dragDropImg(this.data.ImgFileName)
  //   createPost.showMyCommunities()
  //   createPost.chooseMyprofile()
  //   createPost.title(this.data.PostTitle)
  //    createPost.post()
  //    cy.wait(2000)
  //   createPost.postDone()
  //    //should pass
  // })

  
  // it('Click (post) with uploading an image with writing title and with choosing the community',  function() {
  //   //const createPost = new createPostObjects()  
  //   createPost.showMyCommunities()
  //   createPost.chooseMyprofile()
  //   createPost.title(this.data.PostTitle)
  //   createPost.imageAndVideoTap()
  //   createPost.dragDropImg(this.data.ImgFileName)
  //   createPost.post()
  //   cy.wait(2000)
  //   createPost.postDone()
  //    //should pass
  // })
  //--------------------------------------------------------   Link  --------------------------------------------------------

  //filtered
  // it('Try to click on (post) with writing a link and with writing title and without choosing the community',  function() {
  //   //const createPost = new createPostObjects()  
  //   createPost.linkTap()
  //   createPost.typeUrl(this.data.AnyURL)
  //   createPost.title(this.data.PostTitle)
  //   createPost.postNotDone()
  //   createPost.postDisabled() 
  // })


  it('Try to click on (post) with writing a link and with writing title and without choosing the community',  function() {
    //const createPost = new createPostObjects()  
    createPost.title(this.data.PostTitle)
    createPost.linkTap()
    createPost.typeUrl(this.data.AnyURL)
    createPost.postNotDone()
    createPost.postDisabled() 
  })


  //this test is repeated:-
  // it('Click (post) without writing a link without writing title and without choosing the community',  function() {
   // //const createPost = new createPostObjects()   
  //   createPost.postDisabled() 
  // })

  it('Try to click on (post) without writing a link with writing title and with choosing the community',  function() {
    //const createPost = new createPostObjects()  
    createPost.showMyCommunities()
    createPost.chooseMyprofile()
    createPost.title(this.data.PostTitle)
    createPost.postNotDone()
    createPost.postDisabled() 
    //should NOT pass
  })

  it('Try to click on (post) with writing a link without writing title and with choosing the community',  function() {
    //const createPost = new createPostObjects()  
    createPost.showMyCommunities()
    createPost.chooseMyprofile()
    createPost.linkTap()
    createPost.typeUrl(this.data.AnyURL)
    createPost.postNotDone()
    createPost.postDisabled() 
    //should NOT pass
  })

  //filtered
  // it('Click (post) with writing a link with writing title and with choosing the community',  function() {
  //   //const createPost = new createPostObjects()  
  //   createPost.linkTap()
  //   createPost.typeUrl(this.data.AnyURL)
  //   createPost.showMyCommunities()
  //   createPost.chooseMyprofile()
  //   createPost.title(this.data.PostTitle)
  //   createPost.post()
  //    cy.wait(2000)
  //   createPost.postDone()
  //    //should pass
  // })

  it('Click (post) with writing a link with writing title and with choosing the community',  function() {
    //const createPost = new createPostObjects()  
    createPost.showMyCommunities()
    createPost.chooseMyprofile()
    createPost.title(this.data.PostTitle)
    createPost.linkTap()
    createPost.typeUrl(this.data.AnyURL)
    createPost.post()
    cy.wait(2000)
    createPost.postDone()
     //should pass
  })
  //--------------------------------------------------------   other buttons  --------------------------------------------------------
  
  it('Try to click on (Spoiler) Without choosing the community',  function() {
    //const createPost = new createPostObjects()  
      //createPost.spoiler()
      createPost.spoilerDisabled()    
  })

  //later:check the flair later
  it('Try to click on (Flair) Without choosing the community',  function() {
    //const createPost = new createPostObjects()  
     // createPost.flair()
      createPost.FlairDisabled()  
  })

  it('Try to click on (nsfw) Without choosing the community',  function() {
    //const createPost = new createPostObjects()  
    createPost.nsfw()
    createPost.nsfwEnable()  
    //NOTE:enable not diabled
}) 
  //--------------------------------------------------------  Later  --------------------------------------------------------
 
  it('Try to click on (Spoiler) Without choosing the community that enable spoiler',  function() {
   //const createPost = new createPostObjects()  
      createPost.spoilerDisabled()
  })

  
  it('Try to click on (flair) Without choosing the community that enable spoiler',  function() {
   //const createPost = new createPostObjects()  
      createPost.FlairDisabled()
  })

  //check all styles
})
