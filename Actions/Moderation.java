package Appium;

import org.testng.annotations.AfterMethod;
import org.testng.annotations.BeforeTest;
import org.testng.annotations.Test;

import PageObjects.ModerationObjects;
import io.appium.java_client.MobileElement;
import io.appium.java_client.android.AndroidDriver;
import io.appium.java_client.android.nativekey.AndroidKey;
import io.appium.java_client.android.nativekey.KeyEvent;

public class Moderation {
	public String username = "karim55";
	public String username2 = "karim22";
	public String password = "Karim@0107228700";
	public String commName = "karim88";
	public String commDes = "karim";
	public String topicType = "Activism";
	public String message = "karim";
	public String country = "Cairo";
	public String flair = "karim";

	public AndroidDriver<MobileElement> driver2;

	@BeforeTest
	public void beforetest() throws Exception {
		System.out.println("Application inter before.......");
		StartSession startSession = new StartSession();
		driver2 = startSession.StartApp();
	}

	@Test
	public void TestCase1_DescriptionOfTheCommunity() throws Exception {
		ModerationObjects moderationObj = new ModerationObjects(driver2);
		moderationObj.EnterUserName(username);
		Thread.sleep(2000);
		moderationObj.EnterPassword(password);
		Thread.sleep(2000);
		driver2.pressKey(new KeyEvent(AndroidKey.ENTER));
		Thread.sleep(2000);
		moderationObj.ContinueButton();
		Thread.sleep(2000);
		moderationObj.ThreeSmallLines();
		Thread.sleep(2000);
		moderationObj.ClickOnSpecificCommunity(commName);
		Thread.sleep(2000);
		moderationObj.ClickoNModTools();
		Thread.sleep(2000);
		moderationObj.CheckDescription();
		Thread.sleep(2000);
		moderationObj.DescribeYourCommunity(commDes);
		Thread.sleep(2000);
		driver2.pressKey(new KeyEvent(AndroidKey.ENTER));
		Thread.sleep(2000);
		moderationObj.SaveDescribeYourCommunity();
		Thread.sleep(2000);
		driver2.pressKey(new KeyEvent(AndroidKey.BACK));
		Thread.sleep(2000);
		moderationObj.CheckDescription();
		Thread.sleep(2000);
		moderationObj.CheckContentOfDescribeYourCommunity(commDes);

	}

	@Test
	public void TestCase2_WelcomeMessageOfTheCommunity() throws Exception {
		ModerationObjects moderationObj = new ModerationObjects(driver2);
		moderationObj.EnterUserName(username);
		Thread.sleep(2000);
		moderationObj.EnterPassword(password);
		Thread.sleep(2000);
		driver2.pressKey(new KeyEvent(AndroidKey.ENTER));
		Thread.sleep(2000);
		moderationObj.ContinueButton();
		Thread.sleep(2000);
		moderationObj.ThreeSmallLines();
		Thread.sleep(2000);
		moderationObj.ClickOnSpecificCommunity(commName);
		Thread.sleep(2000);
		moderationObj.ClickoNModTools();
		Thread.sleep(2000);
		moderationObj.CheckWelcomemessage();
		Thread.sleep(2000);
		moderationObj.AddorEditMessage();
		Thread.sleep(2000);
		moderationObj.WelcomeToOutCommunity(message);
		Thread.sleep(2000);
		driver2.pressKey(new KeyEvent(AndroidKey.ENTER));
		Thread.sleep(2000);
		moderationObj.SaveDescribeYourCommunity();
		Thread.sleep(2000);
		driver2.pressKey(new KeyEvent(AndroidKey.BACK));
		Thread.sleep(2000);
		moderationObj.AddorEditMessage();
		Thread.sleep(2000);
		moderationObj.CheckWelcomeToOutCommunity(message);
	}

	@Test
	public void TestCase3_CheckTopicsOfTheCommunity() throws Exception {
		ModerationObjects moderationObj = new ModerationObjects(driver2);
		moderationObj.EnterUserName(username);
		Thread.sleep(2000);
		moderationObj.EnterPassword(password);
		Thread.sleep(2000);
		driver2.pressKey(new KeyEvent(AndroidKey.ENTER));
		Thread.sleep(2000);
		moderationObj.ContinueButton();
		Thread.sleep(2000);
		moderationObj.ThreeSmallLines();
		Thread.sleep(2000);
		moderationObj.ClickOnSpecificCommunity(commName);
		Thread.sleep(2000);
		moderationObj.ClickoNModTools();
		Thread.sleep(2000);
		moderationObj.CheckTopics();
		Thread.sleep(2000);
		moderationObj.SelectTopic(topicType);
		Thread.sleep(2000);
		moderationObj.SaveDescribeYourCommunity();
		Thread.sleep(2000);
		moderationObj.TopicAddedSuccessfully();
	}

	@Test
	public void TestCase4_CheckCommunityTypeOfTheCommunity() throws Exception {
		ModerationObjects moderationObj = new ModerationObjects(driver2);
		moderationObj.EnterUserName(username);
		Thread.sleep(2000);
		moderationObj.EnterPassword(password);
		Thread.sleep(2000);
		driver2.pressKey(new KeyEvent(AndroidKey.ENTER));
		Thread.sleep(2000);
		moderationObj.ContinueButton();
		Thread.sleep(2000);
		moderationObj.ThreeSmallLines();
		Thread.sleep(2000);
		moderationObj.ClickOnSpecificCommunity(commName);
		Thread.sleep(2000);
		moderationObj.ClickoNModTools();
		Thread.sleep(2000);
		moderationObj.CheckCommunityType();
		Thread.sleep(2000);
		moderationObj.plus18();
		Thread.sleep(2000);
		moderationObj.SaveDescribeYourCommunity();
		Thread.sleep(2000);
		moderationObj.Checkplus18();

	}

	@Test
	public void TestCase5_CheckPosttypesOfTheCommunity() throws Exception {
		ModerationObjects moderationObj = new ModerationObjects(driver2);
		moderationObj.EnterUserName(username);
		Thread.sleep(2000);
		moderationObj.EnterPassword(password);
		Thread.sleep(2000);
		driver2.pressKey(new KeyEvent(AndroidKey.ENTER));
		Thread.sleep(2000);
		moderationObj.ContinueButton();
		Thread.sleep(2000);
		moderationObj.ThreeSmallLines();
		Thread.sleep(2000);
		moderationObj.ClickOnSpecificCommunity(commName);
		Thread.sleep(2000);
		moderationObj.ClickoNModTools();
		Thread.sleep(2000);
		moderationObj.CheckPosttypes();
		Thread.sleep(2000);
		moderationObj.ImageLinks();
		Thread.sleep(2000);
		moderationObj.SaveDescribeYourCommunity();

	}

	@Test
	public void TestCase6_CheckDiscoveryOfTheCommunity() throws Exception {
		ModerationObjects moderationObj = new ModerationObjects(driver2);
		moderationObj.EnterUserName(username);
		Thread.sleep(2000);
		moderationObj.EnterPassword(password);
		Thread.sleep(2000);
		driver2.pressKey(new KeyEvent(AndroidKey.ENTER));
		Thread.sleep(2000);
		moderationObj.ContinueButton();
		Thread.sleep(2000);
		moderationObj.ThreeSmallLines();
		Thread.sleep(2000);
		moderationObj.ClickOnSpecificCommunity(commName);
		Thread.sleep(2000);
		moderationObj.ClickoNModTools();
		Thread.sleep(2000);
		moderationObj.CheckDiscovery();
		Thread.sleep(2000);
		moderationObj.ShowUpHighTrafficFeeds();
		Thread.sleep(2000);
		moderationObj.SaveDescribeYourCommunity();

	}

	@Test
	public void TestCase7_CheckModnotificationsOfTheCommunity() throws Exception {
		ModerationObjects moderationObj = new ModerationObjects(driver2);
		moderationObj.EnterUserName(username);
		Thread.sleep(2000);
		moderationObj.EnterPassword(password);
		Thread.sleep(2000);
		driver2.pressKey(new KeyEvent(AndroidKey.ENTER));
		Thread.sleep(2000);
		moderationObj.ContinueButton();
		Thread.sleep(2000);
		moderationObj.ThreeSmallLines();
		Thread.sleep(2000);
		moderationObj.ClickOnSpecificCommunity(commName);
		Thread.sleep(2000);
		moderationObj.ClickoNModTools();
		Thread.sleep(2000);
		moderationObj.CheckModnotifications();
		Thread.sleep(2000);
		moderationObj.SaveDescribeYourCommunity();

	}

	@Test
	public void TestCase8_CheckLocationOfTheCommunity() throws Exception {
		ModerationObjects moderationObj = new ModerationObjects(driver2);
		moderationObj.EnterUserName(username);
		Thread.sleep(2000);
		moderationObj.EnterPassword(password);
		Thread.sleep(2000);
		driver2.pressKey(new KeyEvent(AndroidKey.ENTER));
		Thread.sleep(2000);
		moderationObj.ContinueButton();
		Thread.sleep(2000);
		moderationObj.ThreeSmallLines();
		Thread.sleep(2000);
		moderationObj.ClickOnSpecificCommunity(commName);
		Thread.sleep(2000);
		moderationObj.ClickoNModTools();
		Thread.sleep(2000);
		moderationObj.CheckLocation();
		Thread.sleep(2000);
		moderationObj.Country(country);
		Thread.sleep(2000);
		moderationObj.SaveDescribeYourCommunity();
		Thread.sleep(2000);
		driver2.pressKey(new KeyEvent(AndroidKey.ENTER));
		Thread.sleep(2000);
		driver2.pressKey(new KeyEvent(AndroidKey.BACK));
		Thread.sleep(2000);
		moderationObj.CheckLocation();
		Thread.sleep(2000);
		moderationObj.CheckCheckLocation(country);
	}

	@Test
	public void TestCase9_CheckArchivePostsOfTheCommunity() throws Exception {
		ModerationObjects moderationObj = new ModerationObjects(driver2);
		moderationObj.EnterUserName(username);
		Thread.sleep(2000);
		moderationObj.EnterPassword(password);
		Thread.sleep(2000);
		driver2.pressKey(new KeyEvent(AndroidKey.ENTER));
		Thread.sleep(2000);
		moderationObj.ContinueButton();
		Thread.sleep(2000);
		moderationObj.ThreeSmallLines();
		Thread.sleep(2000);
		moderationObj.ClickOnSpecificCommunity(commName);
		Thread.sleep(2000);
		moderationObj.ClickoNModTools();
		Thread.sleep(2000);
		moderationObj.CheckArchivePosts();
		Thread.sleep(2000);
		moderationObj.SaveDescribeYourCommunity();

	}

	@Test
	public void TestCase10_CheckMediaincommentsOfTheCommunity() throws Exception {
		ModerationObjects moderationObj = new ModerationObjects(driver2);
		moderationObj.EnterUserName(username);
		Thread.sleep(2000);
		moderationObj.EnterPassword(password);
		Thread.sleep(2000);
		driver2.pressKey(new KeyEvent(AndroidKey.ENTER));
		Thread.sleep(2000);
		moderationObj.ContinueButton();
		Thread.sleep(2000);
		moderationObj.ThreeSmallLines();
		Thread.sleep(2000);
		moderationObj.ClickOnSpecificCommunity(commName);
		Thread.sleep(2000);
		moderationObj.ClickoNModTools();
		Thread.sleep(2000);
		moderationObj.CheckMediaincomments();
		Thread.sleep(2000);
		moderationObj.SaveDescribeYourCommunity();

	}

	@Test
	public void TestCase11_CheckPostflairOfTheCommunity() throws Exception {
		ModerationObjects moderationObj = new ModerationObjects(driver2);
		moderationObj.EnterUserName(username);
		Thread.sleep(2000);
		moderationObj.EnterPassword(password);
		Thread.sleep(2000);
		driver2.pressKey(new KeyEvent(AndroidKey.ENTER));
		Thread.sleep(2000);
		moderationObj.ContinueButton();
		Thread.sleep(2000);
		moderationObj.ThreeSmallLines();
		Thread.sleep(2000);
		moderationObj.ClickOnSpecificCommunity(commName);
		Thread.sleep(2000);
		moderationObj.ClickoNModTools();
		Thread.sleep(2000);
		moderationObj.CheckPostflair();
		Thread.sleep(2000);
		moderationObj.ClickOnCreateFlair();
		Thread.sleep(2000);
		moderationObj.TypeToCreateFlair(flair);
		Thread.sleep(2000);
		driver2.pressKey(new KeyEvent(AndroidKey.ENTER));
		Thread.sleep(2000);
		moderationObj.AddFlair();
		Thread.sleep(2000);
		moderationObj.SuccessfullyAddFlair();
	}

	@Test
	public void TestCase12_CheckModeratorsOfTheCommunity() throws Exception {
		ModerationObjects moderationObj = new ModerationObjects(driver2);
		moderationObj.EnterUserName(username);
		Thread.sleep(2000);
		moderationObj.EnterPassword(password);
		Thread.sleep(2000);
		driver2.pressKey(new KeyEvent(AndroidKey.ENTER));
		Thread.sleep(2000);
		moderationObj.ContinueButton();
		Thread.sleep(2000);
		moderationObj.ThreeSmallLines();
		Thread.sleep(2000);
		moderationObj.ClickOnSpecificCommunity(commName);
		Thread.sleep(2000);
		moderationObj.ClickoNModTools();
		Thread.sleep(2000);
		moderationObj.CheckModerators();
		Thread.sleep(2000);
		moderationObj.InviteModeratorplus();
		Thread.sleep(2000);
		moderationObj.UserNameOfInvitedModerator(username2);
		Thread.sleep(2000);
		moderationObj.ClickOnAddToInviteModerator();
		Thread.sleep(2000);
		moderationObj.SuccessfullyInvitedUser(username2);

	}

	@Test
	public void TestCase13_CheckApprovedusersOfTheCommunity() throws Exception {
		ModerationObjects moderationObj = new ModerationObjects(driver2);
		moderationObj.EnterUserName(username);
		Thread.sleep(2000);
		moderationObj.EnterPassword(password);
		Thread.sleep(2000);
		driver2.pressKey(new KeyEvent(AndroidKey.ENTER));
		Thread.sleep(2000);
		moderationObj.ContinueButton();
		Thread.sleep(2000);
		moderationObj.ThreeSmallLines();
		Thread.sleep(2000);
		moderationObj.ClickOnSpecificCommunity(commName);
		Thread.sleep(2000);
		moderationObj.ClickoNModTools();
		Thread.sleep(2000);
		moderationObj.CheckApprovedusers();
		Thread.sleep(2000);
		moderationObj.InviteModeratorplus();
		Thread.sleep(2000);
		moderationObj.UserNameOfInvitedModerator(username2);
		Thread.sleep(2000);
		moderationObj.ClickOnAddToInviteModerator();
		Thread.sleep(2000);
		moderationObj.SuccessfullyInvitedUser(username2);
	}

	@Test
	public void TestCase14_CheckMutedusersOfTheCommunity() throws Exception {
		ModerationObjects moderationObj = new ModerationObjects(driver2);
		moderationObj.EnterUserName(username);
		Thread.sleep(2000);
		moderationObj.EnterPassword(password);
		Thread.sleep(2000);
		driver2.pressKey(new KeyEvent(AndroidKey.ENTER));
		Thread.sleep(2000);
		moderationObj.ContinueButton();
		Thread.sleep(2000);
		moderationObj.ThreeSmallLines();
		Thread.sleep(2000);
		moderationObj.ClickOnSpecificCommunity(commName);
		Thread.sleep(2000);
		moderationObj.ClickoNModTools();
		Thread.sleep(2000);
		moderationObj.CheckMutedusers();
		Thread.sleep(2000);
		moderationObj.InviteModeratorplus();
		Thread.sleep(2000);
		moderationObj.UserNameOfInvitedModerator(username2);
		Thread.sleep(2000);
		moderationObj.ClickOnAddToInviteModerator();
		Thread.sleep(2000);
		moderationObj.SuccessfullyInvitedUser(username2);
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