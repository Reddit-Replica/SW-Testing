package appiumtests;

import org.testng.annotations.AfterMethod;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.Test;

import com.google.common.collect.ImmutableMap;

import PageObjects.SharePostObject;
import io.appium.java_client.MobileElement;
import io.appium.java_client.android.AndroidDriver;

public class SharePost {
	
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
				
				SharePostObject sharePostObj = new SharePostObject(driver2);
				sharePostObj.search();
				Thread.sleep(1000);
				sharePostObj.SearchFor("araf");
				Thread.sleep(1000);
		 		driver2.executeScript("mobile:performEditorAction", ImmutableMap.of("action", "done"));
				Thread.sleep(1000);
		 		sharePostObj.OpenCommunities();
				Thread.sleep(1000);
				sharePostObj.OpenFirstResult();
				Thread.sleep(1000);
			}
			
//			@Test//(groups = {"current"})
//			public void sharePostInACommunityWithEditTitle() throws Exception {
//				SharePostObject sharePostObj = new SharePostObject(driver2);
//				sharePostObj.Share();
//				Thread.sleep(1000);
//				sharePostObj.ShareInCommunity();
//				Thread.sleep(1000);
//				sharePostObj.ChooseACommunity("footbally");
//				Thread.sleep(1000);
//				sharePostObj.EditTitle("edied shared2");
//				Thread.sleep(1000);
//				sharePostObj.PostShared();
//				System.out.println("in test case1");
//			}
			
			@Test//(groups = {"current"})
			public void sharePostInACommunity() throws Exception {
				SharePostObject sharePostObj = new SharePostObject(driver2);
				sharePostObj.Share();
				Thread.sleep(1000);
				sharePostObj.ShareInCommunity();
				Thread.sleep(1000);
				sharePostObj.ChooseACommunity("footbally");
				Thread.sleep(1000);
				sharePostObj.PostShared();
				System.out.println("in test case4");
			}
			
			
			@Test//(groups = {"current"})
			public void BackFromLastStepInShareInComm() throws Exception {
				SharePostObject sharePostObj = new SharePostObject(driver2);
				sharePostObj.Share();
				Thread.sleep(1000);
				sharePostObj.ShareInCommunity();
				Thread.sleep(1000);
				sharePostObj.ChooseACommunity("footbally");
				Thread.sleep(1000);
				sharePostObj.EditTitle("edied shared4");
				Thread.sleep(1000);
				sharePostObj.Back();
				Thread.sleep(1000);
				sharePostObj.Back();
				
				System.out.println("in test case2");
			}
			
			@Test//(groups = {"current"})
			public void BackFromBeginningInShareInComm() throws Exception {
				SharePostObject sharePostObj = new SharePostObject(driver2);
				sharePostObj.Share();
				Thread.sleep(1000);
				sharePostObj.ShareInCommunity();
				Thread.sleep(1000);
				sharePostObj.Back();
				System.out.println("in test case3");
			}
			
			@Test//(groups = {"current"})
			public void sharePostInMyProfile() throws Exception {
				SharePostObject sharePostObj = new SharePostObject(driver2);
				sharePostObj.Share();
				Thread.sleep(1000);
				sharePostObj.ShareInMyProfile();
				Thread.sleep(1000);
				sharePostObj.PostShared();
				System.out.println("in test case5");
			}
			
			@Test//(groups = {"current"})
			public void sharePostInMyProfileWithEditTitle() throws Exception {
				SharePostObject sharePostObj = new SharePostObject(driver2);
				sharePostObj.Share();
				Thread.sleep(1000);
				sharePostObj.ShareInMyProfile();
				Thread.sleep(1000);
				sharePostObj.EditTitle("edied shared in profily 1");
				Thread.sleep(1000);
				sharePostObj.PostShared();
				System.out.println("in test case6");
			}
			
			@Test//(groups = {"current"})
			public void BackFromBeginningInShareInProfile() throws Exception {
				SharePostObject sharePostObj = new SharePostObject(driver2);
				sharePostObj.Share();
				Thread.sleep(1000);
				sharePostObj.ShareInMyProfile();
				Thread.sleep(1000);
				sharePostObj.Back();
				System.out.println("in test case7");
			}
			
			@Test//(groups = {"current"})
			public void BackFromLastStepInShareInProfile() throws Exception {
				SharePostObject sharePostObj = new SharePostObject(driver2);
				sharePostObj.Share();
				Thread.sleep(1000);
				sharePostObj.ShareInMyProfile();
				Thread.sleep(1000);
				sharePostObj.EditTitle("edied shared4");
				Thread.sleep(1000);
				sharePostObj.Back();
				Thread.sleep(1000);
				sharePostObj.Back();
				
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
