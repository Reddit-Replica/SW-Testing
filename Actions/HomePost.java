package appiumtests;

import org.openqa.selenium.remote.RemoteWebDriver;
import org.testng.annotations.AfterMethod;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.BeforeTest;
import org.testng.annotations.Test;

import com.google.common.collect.ImmutableMap;

import PageObjects.HomePostObj;
import PageObjects.SharePostObject;
import io.appium.java_client.MobileElement;
import io.appium.java_client.android.AndroidDriver;

public class HomePost {
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

			//----------------------- Both Type of Posts ----------------------//
			@Test//(groups = {"current"})
			public void UpVotePost() throws Exception {
				HomePostObj postObj = new HomePostObj(driver2);
				postObj.UpVote();
				System.out.println("in test case1");
			}

			@Test//(groups = {"current"})
			public void DownVotePost() throws Exception {
				HomePostObj postObj = new HomePostObj(driver2);
				postObj.DownVote();
				System.out.println("in test case2");
			}
			
			@Test//(groups = {"current"})
			public void SavePost() throws Exception {
				HomePostObj postObj = new HomePostObj(driver2);
				postObj.DropDownHome();
				Thread.sleep(1000);
				postObj.SavePost();
				System.out.println("in test case3");
				
				//clean:
				postObj.DropDownHome();
				Thread.sleep(1000);
				postObj.UnsavePost();
			}
			
			//will fail
			@Test//(groups = {"current"})
			public void UnSavePost() throws Exception {
				HomePostObj postObj = new HomePostObj(driver2);
				postObj.DropDownHome();
				Thread.sleep(1000);
				postObj.SavePost();
				System.out.println("in test case4");
				
				//clean:
				postObj.DropDownHome();
				Thread.sleep(1000);
				postObj.UnsavePost();
			}
								
			//----------------------- My Posts ----------------------//
			@Test//(groups = {"current"})
			public void DeletePost() throws Exception {
				HomePostObj postObj = new HomePostObj(driver2);
				postObj.DropDownHome();
				Thread.sleep(1000);
				postObj.DeletePost();
				System.out.println("in test case5");
			}
			
			//-----------------------  Others Posts ----------------------//
			@Test//(groups = {"current"})
			public void HidePost() throws Exception {
				HomePostObj postObj = new HomePostObj(driver2);
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
				//----------------//
				postObj.DropDownInComm();
				Thread.sleep(1000);
				postObj.Hide();	
			}
//			
			@Test//(groups = {"current"})
			public void BlockAcount() throws Exception {
				HomePostObj postObj = new HomePostObj(driver2);
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
				//----------------//
				postObj.DropDownInComm();
				Thread.sleep(1000);
				postObj.BlockAcount();	
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
