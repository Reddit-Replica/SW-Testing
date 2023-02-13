package Appium;

import org.testng.annotations.AfterMethod;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.Test;

import PageObjects.CreateCommunityObjects;
import io.appium.java_client.MobileElement;
import io.appium.java_client.android.AndroidDriver;
import io.appium.java_client.android.nativekey.AndroidKey;
import io.appium.java_client.android.nativekey.KeyEvent;

public class CreateCommunity {
	public String username = "karim55";
	public String password = "Karim@0107228700";
	public String commName = "karim789";
	public String commType = "Restricted";
	public String commCategory = "Gaming";
	public String boundsOfCreateCommunity = "[0,836][364,932]";

	public AndroidDriver<MobileElement> driver2;

	@BeforeMethod
	public void beforetest() throws Exception {
		System.out.println("Application inter before.......");
		StartSession startSession = new StartSession();
		driver2 = startSession.StartApp();
		Thread.sleep(2000);
	}

	@Test
	public void TestCase1_DisabilityCreateCommunityWithoutNaming() throws Exception {
		CreateCommunityObjects createCommunityObj = new CreateCommunityObjects(driver2);
		createCommunityObj.EnterUserName(username);
		Thread.sleep(2000);
		createCommunityObj.EnterPassword(password);
		Thread.sleep(2000);
		driver2.pressKey(new KeyEvent(AndroidKey.ENTER));
		Thread.sleep(2000);
		createCommunityObj.ContinueButton();
		Thread.sleep(2000);
		createCommunityObj.ThreeSmallLines();
		Thread.sleep(2000);
		createCommunityObj.ClickOnCreateCommunity(boundsOfCreateCommunity);
		Thread.sleep(2000);
		createCommunityObj.DisabledCreateCommunity();
	}

	@Test
	public void TestCase2_ChangingCommunityTypeChangingNotAppearRestrictedCreateCommunity() throws Exception {
		CreateCommunityObjects createCommunityObj = new CreateCommunityObjects(driver2);
		createCommunityObj.EnterUserName(username);
		Thread.sleep(2000);
		createCommunityObj.EnterPassword(password);
		Thread.sleep(2000);
		driver2.pressKey(new KeyEvent(AndroidKey.ENTER));
		Thread.sleep(2000);
		createCommunityObj.ContinueButton();
		Thread.sleep(2000);
		createCommunityObj.ThreeSmallLines();
		Thread.sleep(2000);
		createCommunityObj.ClickOnCreateCommunity(boundsOfCreateCommunity);
		Thread.sleep(2000);
		createCommunityObj.CommunityName(commName);
		Thread.sleep(2000);
		driver2.pressKey(new KeyEvent(AndroidKey.ENTER));
		Thread.sleep(2000);
		createCommunityObj.CommunityType();
		Thread.sleep(2000);
		createCommunityObj.CommunityType_Resticted();
		Thread.sleep(2000);
		createCommunityObj.CheckCommunityType_Resticted();
	}

	@Test
	public void TestCase3_ChangingCommunityTypeChangingNotAppearPrivateCreateCommunity() throws Exception {
		CreateCommunityObjects createCommunityObj = new CreateCommunityObjects(driver2);
		createCommunityObj.EnterUserName(username);
		Thread.sleep(2000);
		createCommunityObj.EnterPassword(password);
		Thread.sleep(2000);
		driver2.pressKey(new KeyEvent(AndroidKey.ENTER));
		Thread.sleep(2000);
		createCommunityObj.ContinueButton();
		Thread.sleep(2000);
		createCommunityObj.ThreeSmallLines();
		Thread.sleep(2000);
		createCommunityObj.ClickOnCreateCommunity(boundsOfCreateCommunity);
		Thread.sleep(2000);
		createCommunityObj.CommunityName(commName);
		Thread.sleep(2000);
		driver2.pressKey(new KeyEvent(AndroidKey.ENTER));
		Thread.sleep(2000);
		createCommunityObj.CommunityType();
		Thread.sleep(2000);
		createCommunityObj.CommunityType_Private();
		Thread.sleep(2000);
		createCommunityObj.CheckCommunityType_Private();
	}

	@Test
	public void TestCase4_ChangingCommunityCategoryChangingNotAppearGamingCreateCommunity() throws Exception {
		CreateCommunityObjects createCommunityObj = new CreateCommunityObjects(driver2);
		createCommunityObj.EnterUserName(username);
		Thread.sleep(2000);
		createCommunityObj.EnterPassword(password);
		Thread.sleep(2000);
		driver2.pressKey(new KeyEvent(AndroidKey.ENTER));
		Thread.sleep(2000);
		createCommunityObj.ContinueButton();
		Thread.sleep(2000);
		createCommunityObj.ThreeSmallLines();
		Thread.sleep(2000);
		createCommunityObj.ClickOnCreateCommunity(boundsOfCreateCommunity);
		Thread.sleep(2000);
		createCommunityObj.CommunityName(commName);
		Thread.sleep(2000);
		driver2.pressKey(new KeyEvent(AndroidKey.ENTER));
		Thread.sleep(2000);
		createCommunityObj.CommunityCategory(commCategory);
		Thread.sleep(2000);
		createCommunityObj.CommunityCategory_Gaming();

	}

	@Test
	public void TestCase5_CreateCommunityAlreadyExist() throws Exception {
		commName = "karim88";
		CreateCommunityObjects createCommunityObj = new CreateCommunityObjects(driver2);
		createCommunityObj.EnterUserName(username);
		Thread.sleep(2000);
		createCommunityObj.EnterPassword(password);
		Thread.sleep(2000);
		driver2.pressKey(new KeyEvent(AndroidKey.ENTER));
		Thread.sleep(2000);
		createCommunityObj.ContinueButton();
		Thread.sleep(2000);
		createCommunityObj.ThreeSmallLines();
		Thread.sleep(2000);
		createCommunityObj.ClickOnCreateCommunity(boundsOfCreateCommunity);
		Thread.sleep(2000);
		createCommunityObj.CommunityName(commName);
		Thread.sleep(2000);
		driver2.pressKey(new KeyEvent(AndroidKey.ENTER));
		Thread.sleep(2000);
		createCommunityObj.Community18plus();
		Thread.sleep(2000);
		createCommunityObj.EnablededCreateCommunity();
		Thread.sleep(2000);
		createCommunityObj.ClickOnCreateCommunityButton();
		Thread.sleep(2000);
		// error message here
		createCommunityObj.FailedToCreateCommunity(commName);
	}

	@Test
	public void TestCase6_CreateCommunityNotExistBefore() throws Exception {
		commName = "karim456";
		CreateCommunityObjects createCommunityObj = new CreateCommunityObjects(driver2);
		createCommunityObj.EnterUserName(username);
		Thread.sleep(2000);
		createCommunityObj.EnterPassword(password);
		Thread.sleep(2000);
		driver2.pressKey(new KeyEvent(AndroidKey.ENTER));
		Thread.sleep(2000);
		createCommunityObj.ContinueButton();
		Thread.sleep(2000);
		createCommunityObj.ThreeSmallLines();
		Thread.sleep(2000);
		createCommunityObj.ClickOnCreateCommunity(boundsOfCreateCommunity);
		Thread.sleep(2000);
		createCommunityObj.CommunityName(commName);
		Thread.sleep(2000);
		driver2.pressKey(new KeyEvent(AndroidKey.ENTER));
		Thread.sleep(2000);
		createCommunityObj.Community18plus();
		Thread.sleep(2000);
		createCommunityObj.EnablededCreateCommunity();
		Thread.sleep(2000);
		createCommunityObj.ClickOnCreateCommunityButton();
		Thread.sleep(2000);
		createCommunityObj.CheckCommunityName(commName);
		Thread.sleep(2000);
		createCommunityObj.CheckModToolsInSubreddit();
		Thread.sleep(2000);
		createCommunityObj.CheckOnHotInSubReddit();

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