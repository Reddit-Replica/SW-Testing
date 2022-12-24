package Appium;

import org.testng.annotations.AfterMethod;
import org.testng.annotations.BeforeTest;
import org.testng.annotations.Test;

import PageObjects.NotificationsObjects;
import io.appium.java_client.MobileElement;
import io.appium.java_client.android.AndroidDriver;
import io.appium.java_client.android.nativekey.AndroidKey;
import io.appium.java_client.android.nativekey.KeyEvent;

public class NotificationsActions {
	public String username = "karim10";
	public String password = "Karim@0107228700";
	public String notificationContent;
	public String boundsOfThreeDots;

	public AndroidDriver<MobileElement> driver2;

	@BeforeTest
	public void beforetest() throws Exception {
		System.out.println("Application inter before.......");
		StartSession startSession = new StartSession();
		driver2 = startSession.StartApp();
		Thread.sleep(2000);
	}

	@Test(priority = 1)
	public void TestCase1_Follow() throws Exception {
		NotificationsObjects notificationObj = new NotificationsObjects(driver2);
		Thread.sleep(2000);
		notificationObj.EnterUserName(username);
		Thread.sleep(2000);
		notificationObj.EnterPassword(password);
		Thread.sleep(2000);
		driver2.pressKey(new KeyEvent(AndroidKey.ENTER));
		Thread.sleep(2000);
		notificationObj.ContinueButton();
		Thread.sleep(2000);
		notificationObj.ClickOnInboxButton();
		Thread.sleep(2000);
		notificationContent = "inlaidbyword4544 followed you!\r\n" + "2022-12-23T23:34:53.324";
		Thread.sleep(2000);
		notificationObj.CheckContentOfNotification(notificationContent);
		Thread.sleep(2000);
		boundsOfThreeDots = "[606,324][702,420]";
		Thread.sleep(2000);
		notificationObj.ClickOnThreeDots(boundsOfThreeDots);
		Thread.sleep(2000);
		notificationObj.TunOffThisNotification();
	}

	@Test(priority = 2)
	public void TestCase2_Follow() throws Exception {
		NotificationsObjects notificationObj = new NotificationsObjects(driver2);
		Thread.sleep(5000);
		notificationObj.EnterUserName(username);
		Thread.sleep(2000);
		notificationObj.EnterPassword(password);
		Thread.sleep(2000);
		driver2.pressKey(new KeyEvent(AndroidKey.ENTER));
		Thread.sleep(2000);
		notificationObj.ContinueButton();
		Thread.sleep(2000);
		notificationObj.ClickOnInboxButton();
		Thread.sleep(2000);
		notificationContent = "inlaidbyword4544 followed you!\r\n" + "2022-12-23T23:34:53.324";
		Thread.sleep(2000);
		notificationObj.CheckContentOfNotification(notificationContent);
		Thread.sleep(2000);
		boundsOfThreeDots = "[606,324][702,420]";
		Thread.sleep(2000);
		notificationObj.ClickOnThreeDots(boundsOfThreeDots);
		Thread.sleep(2000);
		notificationObj.HideThisNotification();
	}

	@Test(priority = 3)
	public void TestCase3_Follow() throws Exception {
		NotificationsObjects notificationObj = new NotificationsObjects(driver2);
		Thread.sleep(2000);
		notificationObj.EnterUserName(username);
		Thread.sleep(2000);
		notificationObj.EnterPassword(password);
		Thread.sleep(2000);
		driver2.pressKey(new KeyEvent(AndroidKey.ENTER));
		Thread.sleep(2000);
		notificationObj.ContinueButton();
		Thread.sleep(2000);
		notificationObj.ClickOnInboxButton();
		Thread.sleep(2000);
		notificationContent = "inlaidbyword4544 followed you!\r\n" + "2022-12-23T23:34:53.324";
		Thread.sleep(2000);
		notificationObj.CheckContentOfNotification(notificationContent);
		Thread.sleep(2000);
		boundsOfThreeDots = "[606,324][702,420]";
		Thread.sleep(2000);
		notificationObj.ClickOnThreeDots(boundsOfThreeDots);
		Thread.sleep(2000);
		notificationObj.DisableUpdatesFromThisCommunity();
	}

	@Test(priority = 4)
	public void TestCase4_RepliedToYourComment() throws Exception {
		NotificationsObjects notificationObj = new NotificationsObjects(driver2);
		notificationObj.EnterUserName(username);
		Thread.sleep(2000);
		notificationObj.EnterPassword(password);
		Thread.sleep(2000);
		driver2.pressKey(new KeyEvent(AndroidKey.ENTER));
		Thread.sleep(2000);
		notificationObj.ContinueButton();
		Thread.sleep(2000);
		notificationObj.ClickOnInboxButton();
		Thread.sleep(2000);
		notificationContent = "karim22 replied to your comment!" + "2022-12-20T19:54:58.973";
		Thread.sleep(2000);
		notificationObj.CheckContentOfNotification(notificationContent);
		Thread.sleep(2000);
		boundsOfThreeDots = "[606,1188][702,1284]]";
		Thread.sleep(2000);
		notificationObj.ClickOnThreeDots(boundsOfThreeDots);
		Thread.sleep(2000);
		notificationObj.DisableUpdatesFromThisCommunity();
	}

	@Test(priority = 5)
	public void TestCase5_RepliedToYourComment() throws Exception {
		NotificationsObjects notificationObj = new NotificationsObjects(driver2);
		notificationObj.EnterUserName(username);
		Thread.sleep(2000);
		notificationObj.EnterPassword(password);
		Thread.sleep(2000);
		driver2.pressKey(new KeyEvent(AndroidKey.ENTER));
		Thread.sleep(2000);
		notificationObj.ContinueButton();
		Thread.sleep(2000);
		notificationObj.ClickOnInboxButton();
		Thread.sleep(2000);
		notificationContent = "karim22 replied to your comment!" + "2022-12-20T19:54:58.973";
		Thread.sleep(2000);
		notificationObj.CheckContentOfNotification(notificationContent);
		Thread.sleep(2000);
		boundsOfThreeDots = "[606,1188][702,1284]]";
		Thread.sleep(2000);
		notificationObj.ClickOnThreeDots(boundsOfThreeDots);
		Thread.sleep(2000);
		notificationObj.TunOffThisNotification();
	}

	@Test(priority = 6)
	public void TestCase6_RepliedToYourComment() throws Exception {
		NotificationsObjects notificationObj = new NotificationsObjects(driver2);
		notificationObj.EnterUserName(username);
		Thread.sleep(2000);
		notificationObj.EnterPassword(password);
		Thread.sleep(2000);
		driver2.pressKey(new KeyEvent(AndroidKey.ENTER));
		Thread.sleep(2000);
		notificationObj.ContinueButton();
		Thread.sleep(2000);
		notificationObj.ClickOnInboxButton();
		Thread.sleep(2000);
		notificationContent = "karim22 replied to your comment!" + "2022-12-20T19:54:58.973";
		Thread.sleep(2000);
		notificationObj.CheckContentOfNotification(notificationContent);
		Thread.sleep(2000);
		boundsOfThreeDots = "[606,1188][702,1284]]";
		Thread.sleep(2000);
		notificationObj.ClickOnThreeDots(boundsOfThreeDots);
		Thread.sleep(2000);
		notificationObj.HideThisNotification();
	}

	@Test(priority = 7)
	public void TestCase7_CommentedOnAPostYouAreFollowing() throws Exception {
		NotificationsObjects notificationObj = new NotificationsObjects(driver2);
		notificationObj.EnterUserName(username);
		Thread.sleep(2000);
		notificationObj.EnterPassword(password);
		Thread.sleep(2000);
		driver2.pressKey(new KeyEvent(AndroidKey.ENTER));
		Thread.sleep(2000);
		notificationObj.ContinueButton();
		Thread.sleep(2000);
		notificationObj.ClickOnInboxButton();
		Thread.sleep(2000);
		notificationContent = "karim22 commented on a post you are following!" + "2022-12-20T19:55:28.949";
		Thread.sleep(2000);
		notificationObj.CheckContentOfNotification(notificationContent);
		Thread.sleep(2000);
		boundsOfThreeDots = "[606,1020][702,1116]";
		Thread.sleep(2000);
		notificationObj.ClickOnThreeDots(boundsOfThreeDots);
		Thread.sleep(2000);
		notificationObj.DisableUpdatesFromThisCommunity();
	}

	@Test(priority = 8)
	public void TestCase8_CommentedOnAPostYouAreFollowing() throws Exception {
		NotificationsObjects notificationObj = new NotificationsObjects(driver2);
		notificationObj.EnterUserName(username);
		Thread.sleep(2000);
		notificationObj.EnterPassword(password);
		Thread.sleep(2000);
		driver2.pressKey(new KeyEvent(AndroidKey.ENTER));
		Thread.sleep(2000);
		notificationObj.ContinueButton();
		Thread.sleep(2000);
		notificationObj.ClickOnInboxButton();
		Thread.sleep(2000);
		notificationContent = "karim22 commented on a post you are following!" + "2022-12-20T19:55:28.949";
		Thread.sleep(2000);
		notificationObj.CheckContentOfNotification(notificationContent);
		Thread.sleep(2000);
		boundsOfThreeDots = "[606,1020][702,1116]";
		Thread.sleep(2000);
		notificationObj.ClickOnThreeDots(boundsOfThreeDots);
		Thread.sleep(2000);
		notificationObj.HideThisNotification();
	}

	@Test(priority = 9)
	public void TestCase9_CommentedOnAPostYouAreFollowing() throws Exception {
		NotificationsObjects notificationObj = new NotificationsObjects(driver2);
		notificationObj.EnterUserName(username);
		Thread.sleep(2000);
		notificationObj.EnterPassword(password);
		Thread.sleep(2000);
		driver2.pressKey(new KeyEvent(AndroidKey.ENTER));
		Thread.sleep(2000);
		notificationObj.ContinueButton();
		Thread.sleep(2000);
		notificationObj.ClickOnInboxButton();
		Thread.sleep(2000);
		notificationContent = "karim22 commented on a post you are following!" + "2022-12-20T19:55:28.949";
		Thread.sleep(2000);
		notificationObj.CheckContentOfNotification(notificationContent);
		Thread.sleep(2000);
		boundsOfThreeDots = "[606,1020][702,1116]";
		Thread.sleep(2000);
		notificationObj.ClickOnThreeDots(boundsOfThreeDots);
		Thread.sleep(2000);
		notificationObj.TunOffThisNotification();
	}

	@Test(priority = 10)
	public void TestCase10_RepliedToACommentYouAreFollowing() throws Exception {
		NotificationsObjects notificationObj = new NotificationsObjects(driver2);
		notificationObj.EnterUserName(username);
		Thread.sleep(2000);
		notificationObj.EnterPassword(password);
		Thread.sleep(2000);
		driver2.pressKey(new KeyEvent(AndroidKey.ENTER));
		Thread.sleep(2000);
		notificationObj.ContinueButton();
		Thread.sleep(2000);
		notificationObj.ClickOnInboxButton();
		Thread.sleep(2000);
		notificationContent = "karim22 replied to a comment you are following!" + "2022-12-20T19:56:08.138";
		notificationObj.CheckContentOfNotification(notificationContent);
		boundsOfThreeDots = "[606,852][702,948]";
		Thread.sleep(2000);
		notificationObj.ClickOnThreeDots(boundsOfThreeDots);
		Thread.sleep(2000);
		notificationObj.TunOffThisNotification();
	}

	@Test(priority = 11)
	public void TestCase11_RepliedToACommentYouAreFollowing() throws Exception {
		NotificationsObjects notificationObj = new NotificationsObjects(driver2);
		notificationObj.EnterUserName(username);
		Thread.sleep(2000);
		notificationObj.EnterPassword(password);
		Thread.sleep(2000);
		driver2.pressKey(new KeyEvent(AndroidKey.ENTER));
		Thread.sleep(2000);
		notificationObj.ContinueButton();
		Thread.sleep(2000);
		notificationObj.ClickOnInboxButton();
		Thread.sleep(2000);
		notificationContent = "karim22 replied to a comment you are following!" + "2022-12-20T19:56:08.138";
		notificationObj.CheckContentOfNotification(notificationContent);
		boundsOfThreeDots = "[606,852][702,948]";
		Thread.sleep(2000);
		notificationObj.ClickOnThreeDots(boundsOfThreeDots);
		Thread.sleep(2000);
		notificationObj.DisableUpdatesFromThisCommunity();
	}

	@Test(priority = 12)
	public void TestCase12_RepliedToACommentYouAreFollowing() throws Exception {
		NotificationsObjects notificationObj = new NotificationsObjects(driver2);
		notificationObj.EnterUserName(username);
		Thread.sleep(2000);
		notificationObj.EnterPassword(password);
		Thread.sleep(2000);
		driver2.pressKey(new KeyEvent(AndroidKey.ENTER));
		Thread.sleep(2000);
		notificationObj.ContinueButton();
		Thread.sleep(2000);
		notificationObj.ClickOnInboxButton();
		Thread.sleep(2000);
		notificationContent = "karim22 replied to a comment you are following!" + "2022-12-20T19:56:08.138";
		notificationObj.CheckContentOfNotification(notificationContent);
		boundsOfThreeDots = "[606,852][702,948]";
		Thread.sleep(2000);
		notificationObj.ClickOnThreeDots(boundsOfThreeDots);
		Thread.sleep(2000);
		notificationObj.HideThisNotification();
	}

	@Test(priority = 13)
	public void TestCase13_RepliedToYourCommentOnYourPost() throws Exception {
		NotificationsObjects notificationObj = new NotificationsObjects(driver2);
		notificationObj.EnterUserName(username);
		Thread.sleep(2000);
		notificationObj.EnterPassword(password);
		Thread.sleep(2000);
		driver2.pressKey(new KeyEvent(AndroidKey.ENTER));
		Thread.sleep(2000);
		notificationObj.ContinueButton();
		Thread.sleep(2000);
		notificationObj.ClickOnInboxButton();
		Thread.sleep(2000);
		notificationContent = "karim22 replied to a comment in your post!" + "2022-12-22T10:05:08.092";
		notificationObj.CheckContentOfNotification(notificationContent);
		boundsOfThreeDots = "[606,324][702,420]";
		Thread.sleep(2000);
		notificationObj.ClickOnThreeDots(boundsOfThreeDots);
		notificationObj.DisableUpdatesFromThisCommunity();
	}

	@Test(priority = 14)
	public void TestCase14_RepliedToYourCommentOnYourPost() throws Exception {
		NotificationsObjects notificationObj = new NotificationsObjects(driver2);
		notificationObj.EnterUserName(username);
		Thread.sleep(2000);
		notificationObj.EnterPassword(password);
		Thread.sleep(2000);
		driver2.pressKey(new KeyEvent(AndroidKey.ENTER));
		Thread.sleep(2000);
		notificationObj.ContinueButton();
		Thread.sleep(2000);
		notificationObj.ClickOnInboxButton();
		Thread.sleep(2000);
		notificationContent = "karim22 replied to a comment in your post!" + "2022-12-22T10:05:08.092";
		notificationObj.CheckContentOfNotification(notificationContent);
		boundsOfThreeDots = "[606,324][702,420]";
		Thread.sleep(2000);
		notificationObj.ClickOnThreeDots(boundsOfThreeDots);
		Thread.sleep(2000);
		notificationObj.TunOffThisNotification();
	}

	@Test(priority = 15)
	public void TestCase15_RepliedToYourCommentOnYourPost() throws Exception {
		NotificationsObjects notificationObj = new NotificationsObjects(driver2);
		notificationObj.EnterUserName(username);
		Thread.sleep(2000);
		notificationObj.EnterPassword(password);
		Thread.sleep(2000);
		driver2.pressKey(new KeyEvent(AndroidKey.ENTER));
		Thread.sleep(2000);
		notificationObj.ContinueButton();
		Thread.sleep(2000);
		notificationObj.ClickOnInboxButton();
		Thread.sleep(2000);
		notificationContent = "karim22 replied to a comment in your post!" + "2022-12-22T10:05:08.092";
		notificationObj.CheckContentOfNotification(notificationContent);
		boundsOfThreeDots = "[606,324][702,420]";
		Thread.sleep(2000);
		notificationObj.ClickOnThreeDots(boundsOfThreeDots);
		Thread.sleep(2000);
		notificationObj.HideThisNotification();
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