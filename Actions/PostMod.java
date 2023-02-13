package appiumtests;

import org.testng.annotations.AfterMethod;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.Test;

import PageObjects.CreatePostObj;
import PageObjects.PostModObjects;
import io.appium.java_client.MobileElement;
import io.appium.java_client.android.AndroidDriver;

public class PostMod {

	static AndroidDriver<MobileElement> driver2;
//		static RemoteWebDriver driver2;
//		@BeforeTest
		@BeforeMethod
		public void beforetest() throws Exception {
	 		System.out.println("Application inter before.......");
			StartSession startSession = new StartSession();
			driver2 = startSession.StartApp();		
			Thread.sleep(1000); 				
//			LoginObjects loginObj = new LoginObjects(driver2);		
//			loginObj.EnterUserName("Samaa_Hazem");
//			Thread.sleep(1000);
//			loginObj.EnterPassword("cmp123456");
//	 		Thread.sleep(1000);	
//	 		driver2.executeScript("mobile:performEditorAction", ImmutableMap.of("action", "done"));
//	 		Thread.sleep(1000);
//	 		loginObj.ClickLogin();
//	 		Thread.sleep(1000);
			
//			PostModObjects postModObj = new PostModObjects(driver2);
//			postModObj.Mod();
//			Thread.sleep(1000);
		}
		//------------------------------  Mod  ----------------------------//
				
		@Test
		public void AddTextPost() throws Exception {
			CreatePostObj createObj = new CreatePostObj(driver2);
//			//1)pass post (text)
//			createObj.HomeCreatPost();
//			Thread.sleep(1000);		
//			createObj.TextClick();
//			Thread.sleep(100);
//			createObj.EnterTitle("text!!");
//			Thread.sleep(100);
//			createObj.EnterText("post body from samaa");
//			Thread.sleep(100);
//			createObj.NextClick();
//			Thread.sleep(100);
//			createObj.ChooseSubreddit("footbally");			
//			Thread.sleep(100);
//			createObj.PostSubmit();
//			System.out.println("in test case parent");
	
		}
		
		@Test(dependsOnMethods={"AddTextPost"})
		public void ModMarkAndUnmarkSpoiler() throws Exception {
			PostModObjects postModObj = new PostModObjects(driver2);
			postModObj.Mod();
			Thread.sleep(1000);
			//---------------//
			postModObj.MarkSpoiler();
			Thread.sleep(1000);
			postModObj.Mod();
			postModObj.UnmarkSpoiler();
			System.out.println("in test case1");
			
		}
		
//		@Test//(groups= {"current"})
//		public void ModUnmarkSpoiler() throws Exception {
//			PostModObjects postModObj = new PostModObjects(driver2);
//			postModObj.UnmarkSpoiler();
//			System.out.println("in test case6");
//		}

		@Test(dependsOnMethods={"AddTextPost"})
		public void ModMarkAndUnmarkNSFW() throws Exception {
			PostModObjects postModObj = new PostModObjects(driver2);
			postModObj.Mod();
			Thread.sleep(1000);
			//---------------//
			postModObj.MarkNSFW();
			Thread.sleep(1000);
			postModObj.Mod();
			postModObj.UnmarkNSFW();
			System.out.println("in test case2");
		}
		
//		@Test(dependsOnMethods={"AddTextPost"})
//		public void ModUnmarkNSFW() throws Exception {
//			PostModObjects postModObj = new PostModObjects(driver2);
//		postModObj.Mod();
//		Thread.sleep(1000);
//		//---------------//
//			postModObj.UnmarkNSFW();
//			System.out.println("in test case7");
//		}
		
		@Test(dependsOnMethods={"AddTextPost"})
		public void ModLockAndUnlockComments() throws Exception {
			PostModObjects postModObj = new PostModObjects(driver2);
			postModObj.Mod();
			Thread.sleep(1000);
			//---------------//
			postModObj.LockComments();
			Thread.sleep(1000);
			postModObj.Mod();
			postModObj.UnlockComments();
			System.out.println("in test case3");
		}
		
//		@Test(dependsOnMethods={"AddTextPost"})
//		public void ModUnlockComments() throws Exception {
//			PostModObjects postModObj = new PostModObjects(driver2);
//		postModObj.Mod();
//		Thread.sleep(1000);
//		//---------------//
//			postModObj.UnlockComments();
//			System.out.println("in test case8");
//		}
		
		@Test(dependsOnMethods={"AddTextPost"})
		public void ModUnstickyPost() throws Exception {
			PostModObjects postModObj = new PostModObjects(driver2);
			postModObj.Mod();
			Thread.sleep(1000);
			//---------------//
			postModObj.UnstickyPost();
			System.out.println("in test case4");
		}
		
		@Test(dependsOnMethods={"AddTextPost"})
		public void ModRemovePost() throws Exception {
			PostModObjects postModObj = new PostModObjects(driver2);
			postModObj.Mod();
			Thread.sleep(1000);
			//---------------//
			postModObj.RemovePost();
			System.out.println("in test case5");
		}
		
		@Test(dependsOnMethods={"AddTextPost"})
		public void ModRemoveAsSpam() throws Exception {
			PostModObjects postModObj = new PostModObjects(driver2);
			postModObj.Mod();
			Thread.sleep(1000);
			//---------------//
			postModObj.RemoveAsSpam();
			System.out.println("in test case6");
		}
		
		@Test(dependsOnMethods={"AddTextPost"})
		public void ModApprovePost() throws Exception {
			PostModObjects postModObj = new PostModObjects(driver2);
			postModObj.Mod();
			Thread.sleep(1000);
			//---------------//
			postModObj.ApprovePost();
			System.out.println("in test case7");
		}
		
		
		
//		@AfterTest
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
