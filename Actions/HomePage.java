package Appium;

import org.testng.annotations.AfterMethod;
import org.testng.annotations.BeforeTest;
import org.testng.annotations.Test;

import PageObjects.HomePageObjects;
import io.appium.java_client.MobileElement;
import io.appium.java_client.android.AndroidDriver;
import io.appium.java_client.android.nativekey.AndroidKey;
import io.appium.java_client.android.nativekey.KeyEvent;

public class HomePage {
	public String username = "karim10";
	public String password = "Karim@0107228700";
	public String SubRedditNameFav = "karim";
	public String SubRedditName = "karim";
	public String searchContent = "karim";

	public AndroidDriver<MobileElement> driver2;
	public HomePageObjects homeObj = new HomePageObjects(driver2);

	@BeforeTest
	public void beforetest() throws Exception {
		System.out.println("Application inter before.......");
		StartSession startSession = new StartSession();
		driver2 = startSession.StartApp();
		Thread.sleep(2000);
	}

	@Test
	public void TestCase1_Favourities() throws Exception {
		HomePageObjects homeObj = new HomePageObjects(driver2);
		Thread.sleep(2000);
		homeObj.EnterUserName(username);
		Thread.sleep(2000);
		homeObj.EnterPassword(password);
		Thread.sleep(2000);
		driver2.pressKey(new KeyEvent(AndroidKey.ENTER));
		Thread.sleep(2000);
		homeObj.ContinueButton();
		Thread.sleep(4000);
		homeObj.ThreeSmallLines();
		Thread.sleep(2000);
		homeObj.ClickOnFavourities();
		Thread.sleep(2000);
		homeObj.ClickOnFavourities();
		Thread.sleep(2000);
		homeObj.ClickOnASubReddit(SubRedditNameFav);
		Thread.sleep(2000);
		homeObj.CheckModToolsInSubreddit();
		Thread.sleep(2000);
		homeObj.CheckOnHotInSubReddit();

	}

	@Test
	public void TestCase2_ModFeed() throws Exception {
		HomePageObjects homeObj = new HomePageObjects(driver2);
		Thread.sleep(2000);
		homeObj.EnterUserName(username);
		Thread.sleep(2000);
		homeObj.EnterPassword(password);
		Thread.sleep(2000);
		driver2.pressKey(new KeyEvent(AndroidKey.ENTER));
		Thread.sleep(2000);
		homeObj.ContinueButton();
		Thread.sleep(2000);
		homeObj.ThreeSmallLines();
		Thread.sleep(2000);
		homeObj.ModeratingButton();
		Thread.sleep(2000);
		homeObj.ModeratingButton();
		Thread.sleep(2000);
		homeObj.ModFeedButton();
	}

	@Test
	public void TestCase3_ModQueue() throws Exception {
		HomePageObjects homeObj = new HomePageObjects(driver2);
		Thread.sleep(2000);
		homeObj.EnterUserName(username);
		Thread.sleep(2000);
		homeObj.EnterPassword(password);
		Thread.sleep(2000);
		driver2.pressKey(new KeyEvent(AndroidKey.ENTER));
		Thread.sleep(2000);
		homeObj.ContinueButton();
		Thread.sleep(2000);
		homeObj.ThreeSmallLines();
		Thread.sleep(2000);
		homeObj.ModeratingButton();
		Thread.sleep(2000);
		homeObj.ModeratingButton();
		Thread.sleep(2000);
		homeObj.ModQueueButton();
	}

	@Test
	public void TestCase4_YourCommunities_CreateCommunity() throws Exception {
		HomePageObjects homeObj = new HomePageObjects(driver2);
		Thread.sleep(2000);
		homeObj.EnterUserName(username);
		Thread.sleep(2000);
		homeObj.EnterPassword(password);
		Thread.sleep(2000);
		driver2.pressKey(new KeyEvent(AndroidKey.ENTER));
		Thread.sleep(2000);
		homeObj.ContinueButton();
		Thread.sleep(2000);
		homeObj.ThreeSmallLines();
		Thread.sleep(2000);
		homeObj.ModeratingButton();
		Thread.sleep(2000);
		homeObj.ModeratingButton();
		Thread.sleep(2000);
		homeObj.ClickOnYourCommunities();
		Thread.sleep(2000);
		homeObj.ClickOnYourCommunities();
		Thread.sleep(2000);
		homeObj.ClickOnCreateCommunity(SubRedditName);

	}

	@Test
	public void TestCase5_Home() throws Exception {
		HomePageObjects homeObj = new HomePageObjects(driver2);
		Thread.sleep(2000);
		homeObj.EnterUserName(username);
		Thread.sleep(2000);
		homeObj.EnterPassword(password);
		Thread.sleep(2000);
		driver2.pressKey(new KeyEvent(AndroidKey.ENTER));
		Thread.sleep(2000);
		homeObj.ContinueButton();
		Thread.sleep(2000);
		homeObj.ClickOnHomeButton();
	}

	@Test
	public void TestCase6_Discover() throws Exception {
		HomePageObjects homeObj = new HomePageObjects(driver2);
		Thread.sleep(2000);
		homeObj.EnterUserName(username);
		Thread.sleep(2000);
		homeObj.EnterPassword(password);
		Thread.sleep(2000);
		driver2.pressKey(new KeyEvent(AndroidKey.ENTER));
		Thread.sleep(2000);
		homeObj.ContinueButton();
		Thread.sleep(2000);
		homeObj.ClickOnDiscoverButton();
	}

	@Test
	public void TestCase7_Create() throws Exception {
		HomePageObjects homeObj = new HomePageObjects(driver2);
		Thread.sleep(2000);
		homeObj.EnterUserName(username);
		Thread.sleep(2000);
		homeObj.EnterPassword(password);
		Thread.sleep(2000);
		driver2.pressKey(new KeyEvent(AndroidKey.ENTER));
		Thread.sleep(2000);
		homeObj.ContinueButton();
		Thread.sleep(2000);
		homeObj.ClickOnCreateButton();
	}

	@Test
	public void TestCase8_Inbox() throws Exception {
		HomePageObjects homeObj = new HomePageObjects(driver2);
		Thread.sleep(2000);
		homeObj.EnterUserName(username);
		Thread.sleep(2000);
		homeObj.EnterPassword(password);
		Thread.sleep(2000);
		driver2.pressKey(new KeyEvent(AndroidKey.ENTER));
		Thread.sleep(2000);
		homeObj.ContinueButton();
		Thread.sleep(2000);
		homeObj.ClickOnInboxButton();
	}

	@Test
	public void TestCase9_Search() throws Exception {
		HomePageObjects homeObj = new HomePageObjects(driver2);
		Thread.sleep(2000);
		homeObj.EnterUserName(username);
		Thread.sleep(2000);
		homeObj.EnterPassword(password);
		Thread.sleep(2000);
		driver2.pressKey(new KeyEvent(AndroidKey.ENTER));
		Thread.sleep(2000);
		homeObj.ContinueButton();
		Thread.sleep(2000);
		homeObj.ClickOnSearchIconButton();
		Thread.sleep(2000);
		homeObj.SearchTab(searchContent);
	}

	@Test
	public void TestCase10_RedditLogo() throws Exception {
		HomePageObjects homeObj = new HomePageObjects(driver2);
		Thread.sleep(2000);
		homeObj.EnterUserName(username);
		Thread.sleep(2000);
		homeObj.EnterPassword(password);
		Thread.sleep(2000);
		driver2.pressKey(new KeyEvent(AndroidKey.ENTER));
		Thread.sleep(2000);
		homeObj.ContinueButton();
		Thread.sleep(2000);
		homeObj.ClickOnRedditIcon();
	}

	@AfterMethod
	public void tearDown() throws InterruptedException {
		if (driver2 != null) {
			driver2.quit();
			System.out.println("Application not null .......");
			Thread.sleep(2000);
		}
		System.out.println("Application after.......");
	}

}