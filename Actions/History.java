package appiumtests;

import org.openqa.selenium.remote.RemoteWebDriver;
import org.testng.annotations.AfterMethod;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.BeforeTest;
import org.testng.annotations.Test;

import com.google.common.collect.ImmutableMap;

import PageObjects.HistoryObject;
import PageObjects.LoginObjects;
import io.appium.java_client.MobileElement;
import io.appium.java_client.android.AndroidDriver;

public class History {
	
	static AndroidDriver<MobileElement> driver2;
	
		//static RemoteWebDriver driver2;
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
			
			HistoryObject historyObj = new HistoryObject(driver2);
			historyObj.RightLogo();
			Thread.sleep(1000);
			historyObj.GoHistory();
			Thread.sleep(1000);
		}
		
		@Test//(groups = {"current"})
		public void Back() throws Exception {
			HistoryObject historyObj = new HistoryObject(driver2);
			historyObj.Back();		
			System.out.println("in test case1");
		}
		
//		@Test//(groups = {"current"})
//		public void ClearHistory() throws Exception {
//			HistoryObject historyObj = new HistoryObject(driver2);
//			historyObj.OpenRightBar();
//			Thread.sleep(1000);
//			historyObj.ClearHistory();		
//			System.out.println("in test case2");
//		}
		
		@Test//(groups = {"current"})
		public void SortByUpvoted() throws Exception {
			HistoryObject historyObj = new HistoryObject(driver2);
			historyObj.OpenSortType();
			Thread.sleep(1000);
			historyObj.Upvoted();
			System.out.println("in test case3");
		}

		@Test//(groups = {"current"})
		public void SortByDownvoted() throws Exception {
			HistoryObject historyObj = new HistoryObject(driver2);
			historyObj.OpenSortType();
			Thread.sleep(1000);
			historyObj.Downvoted();
			System.out.println("in test case4");
		}
		
		@Test//(groups = {"current"})
		public void SortByHidden() throws Exception {
			HistoryObject historyObj = new HistoryObject(driver2);
			historyObj.OpenSortType();
			Thread.sleep(1000);
			historyObj.Hidden();
			System.out.println("in test case5");
		}
		
		@Test//(groups = {"current"})
		public void SortByRecent() throws Exception {
			HistoryObject historyObj = new HistoryObject(driver2);
			historyObj.OpenSortType();
			Thread.sleep(1000);
			historyObj.Recent();
			System.out.println("in test case6");
		} 
		
		@Test//(groups = {"current"})
		public void CardViewType() throws Exception {
			HistoryObject historyObj = new HistoryObject(driver2);
			historyObj.ViewType();
			Thread.sleep(1000);
			historyObj.Card();
			System.out.println("in test case7");
		} 
		
		@Test//(groups = {"current"})
		public void ClassicViewType() throws Exception {
			HistoryObject historyObj = new HistoryObject(driver2);
			historyObj.ViewType();
			Thread.sleep(1000);
			historyObj.Classic();
			System.out.println("in test case8");
		} 
		
//		@AfterMethod(alwaysRun = true)
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
