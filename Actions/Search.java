package Appium;

import org.testng.annotations.AfterMethod;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.Test;

import PageObjects.SearchObjects;
import io.appium.java_client.MobileElement;
import io.appium.java_client.android.AndroidDriver;
import io.appium.java_client.android.nativekey.AndroidKey;
import io.appium.java_client.android.nativekey.KeyEvent;

public class Search {
	public String username = "karim10";
	public String password = "Karim@0107228700";
	public String searchContent = "karim";
	public String postContent = "Karim";
	public String commentContent = "karimmmmm";
	public String communityContent = "r/karim 3 members kamal";
	public String peopleContent = "u/karim22 3 karma";

	public AndroidDriver<MobileElement> driver2;

	@BeforeMethod
	public void beforetest() throws Exception {
		System.out.println("Application inter before.......");
		StartSession startSession = new StartSession();
		driver2 = startSession.StartApp();
		Thread.sleep(2000);
	}

	@Test // (groups = {"current"})
	public void TestCase1_Posts() throws Exception {
		SearchObjects searchObj = new SearchObjects(driver2);
		Thread.sleep(2000);
		searchObj.EnterUserName(username);
		Thread.sleep(2000);
		searchObj.EnterPassword(password);
		Thread.sleep(2000);
		driver2.pressKey(new KeyEvent(AndroidKey.ENTER));
		Thread.sleep(2000);
		searchObj.ContinueButton();
		Thread.sleep(2000);
		searchObj.ClickOnSearchIcon();
		Thread.sleep(2000);
		searchObj.SearchTab(searchContent);
		Thread.sleep(2000);
		// searchObj.PostsButton();
		Thread.sleep(2000);
		searchObj.CheckContentInPosts(postContent);
	}

	@Test
	public void TestCase2_Comments() throws Exception {
		SearchObjects searchObj = new SearchObjects(driver2);
		Thread.sleep(2000);
		searchObj.EnterUserName(username);
		Thread.sleep(2000);
		searchObj.EnterPassword(password);
		Thread.sleep(2000);
		driver2.pressKey(new KeyEvent(AndroidKey.ENTER));
		Thread.sleep(2000);
		searchObj.ContinueButton();
		Thread.sleep(2000);
		searchObj.ClickOnSearchIcon();
		Thread.sleep(2000);
		searchObj.SearchTab(searchContent);
		Thread.sleep(2000);
		searchObj.CommentsButton();
		searchObj.CheckCommentContent(commentContent);
		searchObj.ClickOnViewComments();
		searchObj.CheckCommentContent(commentContent);
	}

	@Test
	public void TestCase3_Communities() throws Exception {
		SearchObjects searchObj = new SearchObjects(driver2);
		Thread.sleep(2000);
		searchObj.EnterUserName(username);
		Thread.sleep(2000);
		searchObj.EnterPassword(password);
		Thread.sleep(2000);
		driver2.pressKey(new KeyEvent(AndroidKey.ENTER));
		Thread.sleep(2000);
		searchObj.ContinueButton();
		Thread.sleep(2000);
		searchObj.ClickOnSearchIcon();
		Thread.sleep(2000);
		searchObj.SearchTab(searchContent);
		Thread.sleep(2000);
		searchObj.CommunitiesButton();
		searchObj.CheckCommunityContent(communityContent);

	}

	@Test
	public void TestCase4_People() throws Exception {
		SearchObjects searchObj = new SearchObjects(driver2);
		Thread.sleep(2000);
		searchObj.EnterUserName(username);
		Thread.sleep(2000);
		searchObj.EnterPassword(password);
		Thread.sleep(2000);
		driver2.pressKey(new KeyEvent(AndroidKey.ENTER));
		Thread.sleep(2000);
		searchObj.ContinueButton();
		Thread.sleep(2000);
		searchObj.ClickOnSearchIcon();
		Thread.sleep(2000);
		searchObj.SearchTab(searchContent);
		Thread.sleep(2000);
		searchObj.PeopleButton();
		searchObj.CheckPeople(peopleContent);

	}

	@Test
	public void TestCase5_ClickOnXTab() throws Exception {
		SearchObjects searchObj = new SearchObjects(driver2);
		Thread.sleep(2000);
		searchObj.EnterUserName(username);
		Thread.sleep(2000);
		searchObj.EnterPassword(password);
		Thread.sleep(2000);
		driver2.pressKey(new KeyEvent(AndroidKey.ENTER));
		Thread.sleep(2000);
		searchObj.ContinueButton();
		Thread.sleep(2000);
		searchObj.ClickOnSearchIcon();
		Thread.sleep(2000);
		searchObj.SearchTab(searchContent);
		Thread.sleep(2000);
		searchObj.ClickOnXInSearchTab();

	}

	@AfterMethod
	public void tearDown() {
		if (driver2 != null) {
			driver2.quit();
			System.out.println("Application not null .......");
		}
		System.out.println("Application after.......");
	}

}