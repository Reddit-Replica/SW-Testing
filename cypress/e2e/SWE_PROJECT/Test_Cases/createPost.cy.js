import createPostObjects from './pageObjects/createPostObjects'
describe('Test Craete Post', () =>   {

  //test visiting the submit page
  beforeEach(() =>   {
    // Since we want to visit the same URL at the start of all our tests,
    // we include it in our beforeEach function so that it runs before each test
    const createPost = new createPostObjects();  
    createPost.navigate()
  })

 //################################################ test chosing the community with title and post body ###############################################
  it('Enable to choose the community or not ', () =>   {
    const createPost = new createPostObjects(); 
    createPost.showMyCommunities()
    createPost.chooseMyprofile()
  })

  it('Try to click on (post) with choosing the community and without writing any thing', () =>   {
    const createPost = new createPostObjects(); 
    createPost.showMyCommunities()
    createPost.chooseMyprofile()
    createPost.postDisabled()    
  })

  it('Try to click on (post) without choosing the community and without writing any thing', () =>   {
    const createPost = new createPostObjects(); 
    createPost.postDisabled()    
  })

  it('Try to click on (post) without choosing the community and with writing title and text', () =>   {
    const createPost = new createPostObjects(); 
    createPost.title('hi for all')
    createPost.postText('this is my first post')
    createPost.postDisabled()   
  })

  it('Try to click on (post) without choosing the community and with writing the title only', () =>   {
    const createPost = new createPostObjects();  
    createPost.title('hi for all')
    createPost.postDisabled()     
  })

  it('Try to click on (post) without choosing the community and with writing the text only', () =>   {
    const createPost = new createPostObjects();    
    createPost.postText('this is my first post')
    createPost.postDisabled()   
  })

  it('Click (post) with choosing the community and with writing the title only', () =>   {
    const createPost = new createPostObjects();    
    createPost.showMyCommunities()
    createPost.chooseMyprofile()
    createPost.title('hi for all')
    createPost.post()
    createPost.postDone()
    //should pass
  })

  it('Try to click on (post) with choosing the community and with writing the text only', () =>   {
    const createPost = new createPostObjects(); 
    createPost.showMyCommunities()
    createPost.chooseMyprofile()
    createPost.postText('this is my first post')
    createPost.postDisabled() 
    //should NOT pass
  })

  // it('Delete the chosen community and choose another', () =>   {
  //  const createPost = new createPostObjects(); 
  //   createPost.showMyCommunities()
  //   createPost.chooseMyprofile()
  //   createPost.clearCommunity()
  //   createPost.chooseACommunity()
    
  // })

  it('Try to click on (post) after deleting  the chosen community and without choosing another', () =>   {
    const createPost = new createPostObjects(); 
    createPost.showMyCommunities()
    createPost.chooseMyprofile()
    createPost.clearCommunity()
    createPost.postDisabled()  
  })

  it('Try to click on (post) after deleting  the chosen community and without choosing another and with writing the title only', () =>   {
    const createPost = new createPostObjects(); 
    createPost.showMyCommunities()
    createPost.chooseMyprofile()
    createPost.clearCommunity()
    createPost.title('hi for all')
    createPost.postDisabled() 
    //should NOT pass
  })

  it('Try to click on (post) after deleting  the chosen community and without choosing another and with writing the text only', () =>   {
    const createPost = new createPostObjects(); 
    createPost.showMyCommunities()
    createPost.chooseMyprofile()
    createPost.clearCommunity()
    createPost.postText('this is my first post')
    createPost.postDisabled() 
  })

  //Later;i think the 2 tests here are repeated:--
  // it('Click (post) after deleting the chosen community and with choosing another and with writing the title only', () =>   {
  //  const createPost = new createPostObjects(); 
  //   createPost.showMyCommunities()
  //   createPost.chooseMyprofile()
  //   createPost.clearCommunity()
  //   createPost.chooseACommunity()
  //   createPost.title('hi for all')
  //   createPost.postDone()
  //   //should pass
    
  // })

  // it('Click (post) after deleting the chosen community and with choosing another and with writing the text only', () =>   {
  //  const createPost = new createPostObjects(); 
  //   createPost.showMyCommunities()
  //   createPost.chooseMyprofile()
  //   createPost.clearCommunity()
  //   createPost.chooseACommunity()
  //   createPost.postText('this is my first post')
  //   createPost.postDisabled() 
  //   //should NOT pass
    
  // })

   //################################################# another tests about  the title  ###############################################
   it('Check max length of Title', () =>   {
    const createPost = new createPostObjects(); 
    createPost.checkMaxTitle()
    //should the text box of the title disaalowed 
    //createPost.title('ggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggSS') 
  })

  //#################################################   Image & Videos  #################################################
  //later:check this test case:(check ->checkTitle<-)
  it('Title is the same after switching to Image & Videos', () =>   {
    const createPost = new createPostObjects(); 
    createPost.title('hi for all')
    createPost.imageAndVideoTap()
    createPost.checkTitle('hi for all')
  })

  it('Uploading an image using drag and drop', () =>   {
    const createPost = new createPostObjects();  
    createPost.imageAndVideoTap()
    createPost.dragDropImg('test1.jpeg')
    createPost.checkUploadImgOrVideo('test1')
  })

  // it('Uploading an image using (upload) button', () =>   {
  //  const createPost = new createPostObjects();    
  //   createPost.imageAndVideoTap()
  //   createPost.uploadImgOrVideo()
  //   createPost.selectImg('test1.jpeg')
  //   createPost.checkUploadImgOrVideo('test1')   
  // })

  it('Try to click on (post) with uploading an image and with writing title and without choosing the community', () =>   {
    const createPost = new createPostObjects(); 
    createPost.imageAndVideoTap()
    createPost.dragDropImg('test1.jpeg')
    //createPost.checkUploadImgOrVideo('test1')
    createPost.title('hi for all')
    createPost.postDisabled() 
  })

  //this test is repeated:-
  // it('Click (post) without uploading an image without writing title and without choosing the community', () =>   {
  //  const createPost = new createPostObjects();  
  //   createPost.postDisabled() 
  // })

  it('Try to click on (post) without uploading an image with writing title and with choosing the community', () =>   {
    const createPost = new createPostObjects(); 
    createPost.showMyCommunities()
    createPost.chooseMyprofile()
    createPost.title('hi for all')
    createPost.postDisabled() 
    //should NOT pass
  })

  it('Try to click on (post) with uploading an image without writing title and with choosing the community', () =>   {
    const createPost = new createPostObjects(); 
    createPost.showMyCommunities()
    createPost.chooseMyprofile()
    createPost.imageAndVideoTap()
    createPost.dragDropImg('test1.jpeg')
    createPost.postDisabled() 
    //should NOT pass
  })

  it('Click (post) with uploading an image with writing title and with choosing the community', () =>   {
    const createPost = new createPostObjects(); 
    createPost.imageAndVideoTap()
    createPost.dragDropImg('test1.jpeg')
    createPost.showMyCommunities()
    createPost.chooseMyprofile()
    createPost.title('hi for all')
    createPost.postDone()
     //should pass
  })

  //#################################################   Link  #################################################

  it('Try to click on (post) with writing a link and with writing title and without choosing the community', () =>   {
    const createPost = new createPostObjects(); 
    createPost.typeUrl('https://testup.io/how-to-implement-drag-and-drop-in-cypress/')
    createPost.title('hi for all')
    createPost.postDisabled() 
  })

  //this test is repeated:-
  // it('Click (post) without writing a link without writing title and without choosing the community', () =>   {
   // const createPost = new createPostObjects();  
  //   createPost.postDisabled() 
  // })

  it('Try to click on (post) without writing a link with writing title and with choosing the community', () =>   {
    const createPost = new createPostObjects(); 
    createPost.showMyCommunities()
    createPost.chooseMyprofile()
    createPost.title('hi for all')
    createPost.postDisabled() 
    //should NOT pass
  })

  it('Try to click on (post) with writing a link without writing title and with choosing the community', () =>   {
    const createPost = new createPostObjects(); 
    createPost.showMyCommunities()
    createPost.chooseMyprofile()
    createPost.typeUrl('https://testup.io/how-to-implement-drag-and-drop-in-cypress/')
    createPost.postDisabled() 
    //should NOT pass
  })

  it('Click (post) with writing a link with writing title and with choosing the community', () =>   {
    const createPost = new createPostObjects(); 
    createPost.typeUrl('https://testup.io/how-to-implement-drag-and-drop-in-cypress/')
    createPost.showMyCommunities()
    createPost.chooseMyprofile()
    createPost.title('hi for all')
    createPost.postDone()
     //should pass
  })

  //#################################################   other buttons  #################################################
  
  it('Try to click on (Spoiler) Without choosing the community', () =>   {
    const createPost = new createPostObjects(); 
      createPost.spoiler()
      createPost.spoilerDisabled()    
  })

  //later:check the flair later
  it('Try to click on (Flair) Without choosing the community', () =>   {
    const createPost = new createPostObjects(); 
      createPost.flair()
      createPost.FlairDisabled()  
  })

  it('Try to click on (nsfw) Without choosing the community', () =>   {
    const createPost = new createPostObjects(); 
    createPost.nsfw()
    createPost.nsfwEnable()  
    //NOTE:enable not diabled
}) 
  //#################################################  Later  #################################################
 
  //later:-
  // it('Try to click on (Spoiler) Without choosing the community that enable spoiler', () =>   {
  //  const createPost = new createPostObjects(); 
  //     createPost.
  //     createPost.
  //     createPost.
  // })

  // //later:-
  // it('Try to click on (flair) Without choosing the community that enable spoiler', () =>   {
  //  const createPost = new createPostObjects(); 
  //     createPost.
  //     createPost.
  //     createPost.
  // })

  //test NSFW button

  //test Event button

  //test Live chat button

  //check all styles
})