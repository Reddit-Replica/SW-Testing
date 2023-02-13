package appiumtests;

import org.testng.annotations.AfterMethod;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.Test;

import PageObjects.CreatePostObj;
import PageObjects.HomePostObj;
import PageObjects.SavedPageObjects;
import io.appium.java_client.MobileElement;
import io.appium.java_client.android.AndroidDriver;

public class SavedPage {

	static AndroidDriver<MobileElement> driver2;
	//		static RemoteWebDriver driver2;
//			@BeforeTest
			@BeforeMethod
			public void beforetest() throws Exception {
		 		System.out.println("Application inter before.......");
				StartSession startSession = new StartSession();
				driver2 = startSession.StartApp();		
				Thread.sleep(1000); 				
//				LoginObjects loginObj = new LoginObjects(driver2);		
//				loginObj.EnterUserName("Samaa_Hazem");
//				Thread.sleep(1000);
//				loginObj.EnterPassword("cmp123456");
//		 		Thread.sleep(1000);	
//		 		driver2.executeScript("mobile:performEditorAction", ImmutableMap.of("action", "done"));
//		 		Thread.sleep(1000);
//		 		loginObj.ClickLogin();
//		 		Thread.sleep(1000);
				
			}
			
			@Test
			public void AddTextPost() throws Exception {
				CreatePostObj createObj = new CreatePostObj(driver2);
//				//1)pass post (text)
//				createObj.HomeCreatPost();
//				Thread.sleep(1000);		
//				createObj.TextClick();
//				Thread.sleep(100);
//				createObj.EnterTitle("text!!");
//				Thread.sleep(100);
//				createObj.EnterText("post body from samaa");
//				Thread.sleep(100);
//				createObj.NextClick();
//				Thread.sleep(100);
//				createObj.ChooseSubreddit("footbally");			
//				Thread.sleep(100);
//				createObj.PostSubmit();
//				System.out.println("in test case parent");
		
			}

			@Test(dependsOnMethods={"AddTextPost"})
			public void SavedPosts() throws Exception {
				SavedPageObjects savedPageObj = new SavedPageObjects(driver2);
				HomePostObj postObj = new HomePostObj(driver2);
				postObj.DropDownHome();
				Thread.sleep(1000);
				postObj.SavePost();
				Thread.sleep(1000);
				//-----------//
				savedPageObj.RightLogo();
				Thread.sleep(1000);	
				savedPageObj.GoSaved();
				Thread.sleep(1000);	
				savedPageObj.ChoosePost();
				System.out.println("in test case1");
			}	
			
			@Test(dependsOnMethods={"AddTextPost"})
			public void SavedComments() throws Exception {
				SavedPageObjects savedPageObj = new SavedPageObjects(driver2);
				savedPageObj.RightLogo();
				Thread.sleep(1000);	
				savedPageObj.GoSaved();
				Thread.sleep(1000);	
				savedPageObj.ChooseComment();
				System.out.println("in test case2");
			}
			
//			@AfterTest
			@AfterMethod
			public void tearDown() throws InterruptedException {
				Thread.sleep(3000);
				if (driver2 != null) {
					driver2.quit();
					System.out.println("Application not null .......");
				}
				System.out.println("Application after.......");
			}
}
