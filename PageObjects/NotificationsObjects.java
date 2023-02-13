package PageObjects;

import org.testng.Assert;

import io.appium.java_client.MobileElement;
import io.appium.java_client.android.AndroidDriver;

public class NotificationsObjects {

	static AndroidDriver<MobileElement> driver2;

	public NotificationsObjects() {
	}

	public NotificationsObjects(AndroidDriver<MobileElement> driver_outer) {
		driver2 = driver_outer;
	}

	public void EnterUserName(String Username) throws Exception {
		MobileElement EnterUserName = driver2
				.findElementByXPath("//android.widget.EditText[@bounds='[30,753][690,862]']");
		EnterUserName.click();
		EnterUserName.sendKeys(Username);
	}

	public void EnterPassword(String password) throws Exception {
		MobileElement EnterPassword = driver2.findElementByXPath("//android.widget.EditText[@text='Password']");
		EnterPassword.click();
		EnterPassword.sendKeys(password);
	}

	public void ContinueButton() throws Exception {
		MobileElement ContinueButton = driver2.findElementByXPath("//android.widget.Button[@content-desc='Continue']");
		ContinueButton.click();
		Assert.assertEquals(ContinueButton.getAttribute("contentDescription"), "Continue");

	}

	// Start of Notifications objects

	public void ClickOnInboxButton() throws Exception {
		MobileElement ClickOnInboxButton = driver2
				.findElementByXPath("//android.view.View[@bounds='[576,1490][720,1598]']");
		ClickOnInboxButton.click();
		// Assert.assertEquals(ClickOnInboxButton.getAttribute("contentDescription"),
		// "Inbox\r\n" + "Tab 5 of 5");

	}

	public void CheckContentOfNotification(String notificationContent) throws Exception {
		MobileElement CheckContentOfNotification = driver2
				.findElementByXPath("//android.widget.ImageView[@bounds='[0,288][720,456]']");
		// Assert.assertEquals(CheckContentOfNotification.getAttribute("contentDescription"),
		// "inlaidbyword4544 followed you!\r\n" + "2022-12-23T23:34:53.324");

	}

	public void ClickOnThreeDots(String boundsOfNotification) throws Exception {
		MobileElement ClickOnThreeDots = driver2
				.findElementByXPath("//android.widget.Button[@bounds='[606,324][702,420]']");
		ClickOnThreeDots.click();
	}

	public void HideThisNotification() throws Exception {
		MobileElement HideThisNotification = driver2
				.findElementByXPath("//android.view.View[@bounds='[16,1314][704,1394]']");
		Assert.assertEquals(HideThisNotification.getAttribute("contentDescription"), "Hide this notification");

	}

	public void DisableUpdatesFromThisCommunity() throws Exception {
		MobileElement DisableUpdatesFromThisCommunity = driver2
				.findElementByXPath("//android.view.View[@bounds='[16,1394][704,1456]']");
		Assert.assertEquals(DisableUpdatesFromThisCommunity.getAttribute("contentDescription"),
				"Disable updates from this community");

	}

	public void TunOffThisNotification() throws Exception {
		MobileElement TunOffThisNotification = driver2
				.findElementByXPath("//android.view.View[@bounds='[16,1474][704,1554]']");
		Assert.assertEquals(TunOffThisNotification.getAttribute("contentDescription"), "Turn off this notification");

	}

}
