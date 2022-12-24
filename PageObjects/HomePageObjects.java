package PageObjects;

import org.testng.Assert;
import org.testng.asserts.SoftAssert;

import io.appium.java_client.MobileElement;
import io.appium.java_client.android.AndroidDriver;
import io.appium.java_client.android.nativekey.AndroidKey;
import io.appium.java_client.android.nativekey.KeyEvent;

public class HomePageObjects {

	static AndroidDriver<MobileElement> driver2;
	SoftAssert softassert;
	String expectedTitle;
	String actualTitle;

	public HomePageObjects() {
	}

	public HomePageObjects(AndroidDriver<MobileElement> driver_outer) {
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

	// Start of Home objects

	public void ThreeSmallLines() throws Exception {
		MobileElement ThreeSmallLines = driver2
				.findElementByXPath("//android.widget.Button[@bounds='[0,64][112,176]']");
		ThreeSmallLines.click();
	}

	public void ModeratingButton() throws Exception {
		MobileElement ModeratingButton = driver2
				.findElementByXPath("//android.widget.Button[@content-desc='Moderating']");
		ModeratingButton.click();
	}

	public void ModFeedButton() throws Exception {
		MobileElement ModFeedButton = driver2.findElementByXPath("//android.widget.Button[@content-desc='Mod Feed']");
		ModFeedButton.click();
	}

	public void ModQueueButton() throws Exception {
		MobileElement ModQueueButton = driver2.findElementByXPath("//android.widget.Button[@content-desc='Mod Queue']");
		ModQueueButton.click();
	}

	public void ClickOnASubReddit(String subridditname) throws Exception {
		MobileElement ClickOnASubReddit = driver2
				.findElementByXPath("//android.view.View[@bounds='[20,580][608,708]']");
		ClickOnASubReddit.click();
		Assert.assertEquals(ClickOnASubReddit.getAttribute("contentDescription"), "r/karim");

	}

	public void CheckOnHotInSubReddit() throws Exception {
		MobileElement CheckOnHotInSubReddit = driver2
				.findElementByXPath("//android.widget.Button[@bounds='[0,470][266,566]']");
		Assert.assertEquals(CheckOnHotInSubReddit.getAttribute("contentDescription"), "Hot");
	}

	public void ClickOnYourCommunities() throws Exception {
		MobileElement ClickOnYourCommunities = driver2
				.findElementByXPath("//android.widget.Button[@content-desc='Your Communities']");
		ClickOnYourCommunities.click();
	}

	public void ClickOnCreateCommunity(String subridditname) throws Exception {
		MobileElement ClickOnCreateCommunity = driver2
				.findElementByXPath("//android.widget.Button[@content-desc='Create a community']");
		ClickOnCreateCommunity.click();
	}

	public void ClickOnFavourities() throws Exception {
		MobileElement ClickOnFavourities = driver2
				.findElementByXPath("//android.widget.Button[@content-desc='Favorites']");
		ClickOnFavourities.click();

	}

	public void CheckModToolsInSubreddit() throws Exception {
		MobileElement CheckModToolsInSubreddit = driver2
				.findElementByXPath("//android.widget.Button[@bounds='[452,200][680,296]']");
		Assert.assertEquals(CheckModToolsInSubreddit.getAttribute("contentDescription"), "Mod Tool");

	}

	public void ClickOnHomeButton() throws Exception {
		MobileElement ClickOnHomeButton = driver2
				.findElementByXPath("//android.view.View[@bounds='[0,1490][144,1598]']");
		ClickOnHomeButton.click();
		// Assert.assertEquals(ClickOnHomeButton.getAttribute("contentDescription"),
		// "Home\r\n" + "Tab 1 of 5");

	}

	public void ClickOnDiscoverButton() throws Exception {
		MobileElement ClickOnDiscoverButton = driver2
				.findElementByXPath("//android.view.View[@bounds='[144,1490][288,1598]']");
		ClickOnDiscoverButton.click();
		// Assert.assertEquals(ClickOnDiscoverButton.getAttribute("contentDescription"),
		// "Discover\r\n" + "Tab 2 of 5");

	}

	public void ClickOnCreateButton() throws Exception {
		MobileElement ClickOnCreateButton = driver2
				.findElementByXPath("//android.view.View[@bounds='[288,1490][432,1598]']");
		ClickOnCreateButton.click();
		// Assert.assertEquals(ClickOnCreateButton.getAttribute("contentDescription"),
		// "Inbox\r\n" + "Tab 5 of 5");

	}

	public void ClickOnInboxButton() throws Exception {
		MobileElement ClickOnInboxButton = driver2
				.findElementByXPath("//android.view.View[@bounds='[576,1490][720,1598]']");
		ClickOnInboxButton.click();
		// Assert.assertEquals(ClickOnInboxButton.getAttribute("contentDescription"),
		// "Mod Tool");

	}

	public void ClickOnSearchIconButton() throws Exception {
		MobileElement ClickOnSearchIconButton = driver2
				.findElementByXPath("//android.widget.Button[@bounds=\"[528,64][624,176]\"]");
		ClickOnSearchIconButton.click();
	}

	public void SearchTab(String searchContent) throws Exception {
		MobileElement SearchTab = driver2.findElementByXPath("//android.widget.EditText[@text=\"Search Reddit\"]");
		SearchTab.click();
		SearchTab.sendKeys(searchContent);
		driver2.pressKey(new KeyEvent(AndroidKey.ENTER));
	}

	public void ClickOnRedditIcon() throws Exception {
		MobileElement ClickOnRedditIcon = driver2
				.findElementByXPath("//android.view.View[@bounds=\"[624,64][720,176]\"]");
		ClickOnRedditIcon.click();
	}

}
