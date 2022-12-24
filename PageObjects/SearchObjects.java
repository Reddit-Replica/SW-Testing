package PageObjects;

import org.testng.Assert;
import org.testng.asserts.SoftAssert;

import io.appium.java_client.MobileElement;
import io.appium.java_client.android.AndroidDriver;
import io.appium.java_client.android.nativekey.AndroidKey;
import io.appium.java_client.android.nativekey.KeyEvent;

public class SearchObjects {

	static AndroidDriver<MobileElement> driver2;
	SoftAssert softassert;
	String expectedTitle;
	String actualTitle;

	public SearchObjects() {
	}

	public SearchObjects(AndroidDriver<MobileElement> driver_outer) {
		driver2 = driver_outer;
	}

	public void EnterUserName(String Username) throws Exception {
		MobileElement EnterUserName = driver2.findElementByXPath("//android.widget.EditText[@text='Username']");
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

	public void ClickOnSearchIcon() throws Exception {
		MobileElement ClickOnSearchIcon = driver2
				.findElementByXPath("//android.widget.Button[@bounds='[528,64][624,176]']");
		ClickOnSearchIcon.click();
	}

	public void CancelButton() throws Exception {
		MobileElement CancelButton = driver2.findElementByXPath("//android.widget.Button[@content-desc='Cancel']");
		CancelButton.click();

	}

	public void SearchTab(String searchContent) throws Exception {
		MobileElement SearchTab = driver2.findElementByXPath("//android.widget.EditText[@text='Search Reddit']");
		SearchTab.click();
		Thread.sleep(1000);
		SearchTab.sendKeys(searchContent);
		driver2.pressKey(new KeyEvent(AndroidKey.ENTER));
	}

	public void PostsButton() throws Exception {
		MobileElement PostsButton = driver2.findElementByXPath("//android.view.View[@bounds='[0,176][136,270]'");
		PostsButton.click();

	}

	public void CommentsButton() throws Exception {
		MobileElement CommentsButton = driver2.findElementByXPath("//android.view.View[@bounds='[136,176][338,270]']");
		CommentsButton.click();
		// Assert.assertEquals(CommentsButton.getAttribute("contentDescription"),
		// "Comments\r\n" + "Tab 2 of 4");
	}

	public void CommunitiesButton() throws Exception {
		MobileElement CommunitiesButton = driver2
				.findElementByXPath("//android.view.View[@bounds='[338,176][570,270]']");
		CommunitiesButton.click();
		// Assert.assertEquals(CommunitiesButton.getAttribute("contentDescription"),
		// "Comments\r\n" + "Tab 2 of 4");
	}

	public void PeopleButton() throws Exception {
		MobileElement PeopleButton = driver2.findElementByXPath("//android.view.View[@bounds='[570,176][720,270]']");
		PeopleButton.click();
		// Assert.assertEquals(PeopleButton.getAttribute("contentDescription"),
		// "people\r\n" + "Tab 3 of 4");
	}

	public void CheckuserNameInPosts(String userName) throws Exception {
		MobileElement CheckuserNameInPosts = driver2
				.findElementByXPath("//android.view.View[@content-desc='u/'" + userName + "' • ']");
	}

	public void CheckContentInPosts(String content) throws Exception {
		MobileElement CheckContentInPosts = driver2
				.findElementByXPath("//android.view.View[@bounds='[7,688][713,752]']");
		Assert.assertEquals(CheckContentInPosts.getAttribute("contentDescription"), "Karim");
	}

	public void ClickOnViewComments() throws Exception {
		MobileElement ClickOnViewComments = driver2
				.findElementByXPath("//android.widget.Button[@content-desc='View comments']");
		ClickOnViewComments.click();
		// Assert.assertEquals(ClickOnViewComments.getAttribute("contentDescription"),
		// "View comments");
	}

	public void CheckCommentContent(String commentContent) throws Exception {
		MobileElement CheckCommentContent = driver2
				.findElementByXPath("//android.view.View[@content-desc='" + commentContent + "']");
		CheckCommentContent.click();

	}

	public void CheckCommunityContent(String communityContent) throws Exception {
		MobileElement CheckCommunityContent = driver2
				.findElementByXPath("//android.view.View[@bounds='[0,270][720,406]']");
		// Assert.assertEquals(CheckCommunityContent.getAttribute("contentDescription"),
		// "r/karim\r\n" + "6 members\r\n" + "d");

	}

	public void CheckPeople(String peopleContent) throws Exception {
		MobileElement CheckPeople = driver2.findElementByXPath("//android.widget.Button[@bounds='[502,286][704,382]']");
		Assert.assertEquals(CheckPeople.getAttribute("contentDescription"), "Following");

	}

	public void ClickOnXInSearchTab() throws Exception {
		MobileElement ClickOnXInSearchTab = driver2
				.findElementByXPath("//android.widget.Button[@bounds='[592,72][688,168]']");
		ClickOnXInSearchTab.click();
	}

}
