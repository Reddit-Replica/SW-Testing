package PageObjects;

import org.testng.Assert;
import org.testng.asserts.SoftAssert;

import io.appium.java_client.MobileElement;
import io.appium.java_client.android.AndroidDriver;

public class CreateCommunityObjects {

	static AndroidDriver<MobileElement> driver2;
	SoftAssert softassert;
	String expectedTitle;
	String actualTitle;

	public CreateCommunityObjects() {

	}

	public CreateCommunityObjects(AndroidDriver<MobileElement> driver_outer) {
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
		Assert.assertEquals(ContinueButton.getAttribute("contentDescription"), "Continue");
		ContinueButton.click();
	}

	// Start of Notifications objects

	public void ThreeSmallLines() throws Exception {
		MobileElement ThreeSmallLines = driver2
				.findElementByXPath("//android.widget.Button[@bounds='[0,64][112,176]']");
		ThreeSmallLines.click();
	}

	public void ClickOnCreateCommunity(String bounds) throws Exception {
		MobileElement ClickOnCreateCommunity = driver2
				.findElementByXPath("//android.widget.Button[@bounds='" + bounds + "']");
		Assert.assertEquals(ClickOnCreateCommunity.getAttribute("contentDescription"), "Create a community");
		ClickOnCreateCommunity.click();
	}

	public void CommunityName(String commName) throws Exception {
		MobileElement CommunityName = driver2
				.findElementByXPath("//android.widget.EditText[@bounds='[30,256][690,364]']");
		CommunityName.click();
		Thread.sleep(2000);
		CommunityName.sendKeys(commName);
	}

	// NotWorking from flutter team
	public void CommunityType() throws Exception {
		MobileElement CommunityType = driver2.findElementByXPath("//android.view.View[@bounds='[30,412][690,572]']");
		CommunityType.click();
	}

	public void CommunityType_Public() throws Exception {
		MobileElement CommunityType_Public = driver2
				.findElementByXPath("//android.view.View[@bounds='[16,1314][704,1394]']");
		Assert.assertEquals(CommunityType_Public.getAttribute("contentDescription"), "Public");
		CommunityType_Public.click();
	}

	public void CommunityType_Resticted() throws Exception {
		MobileElement CommunityType_Resticted = driver2
				.findElementByXPath("//android.view.View[@bounds='[16,1394][704,1456]']");
		CommunityType_Resticted.click();
	}

	public void CheckCommunityType_Resticted() throws Exception {
		MobileElement CheckCommunityType_Resticted = driver2
				.findElementByXPath("//android.view.View[@bounds='[30,412][690,572]']");
		Assert.assertEquals(CheckCommunityType_Resticted.getAttribute("contentDescription"), "Restricted");
	}

	public void CheckCommunityType_Private() throws Exception {
		MobileElement CheckCommunityType_Private = driver2
				.findElementByXPath("//android.view.View[@bounds='[30,412][690,572]']");
		Assert.assertEquals(CheckCommunityType_Private.getAttribute("contentDescription"), "Private");
	}

	public void CommunityType_Private() throws Exception {
		MobileElement CommunityType_Private = driver2
				.findElementByXPath("//android.view.View[@bounds='[16,1474][704,1554]']");
		CommunityType_Private.click();
	}

	public void CommunityCategory(String commCategory) throws Exception {
		MobileElement CommunityCategory = driver2
				.findElementByXPath("//android.widget.Button[@bounds='[30,670][290,766]']");
		CommunityCategory.click();
	}

	public void CommunityCategory_Gaming() throws Exception {
		MobileElement CommunityCategory_Gaming = driver2
				.findElementByXPath("//android.view.View[@bounds='[0,208][340,304]']");
		Assert.assertEquals(CommunityCategory_Gaming.getAttribute("contentDescription"), "Gaming");
		CommunityCategory_Gaming.click();
	}

	public void CheckCommunityCategory_Gaming() throws Exception {
		MobileElement CheckCommunityCategory_Gaming = driver2
				.findElementByXPath("//android.widget.Button[@bounds='[30,670][290,766]']");
		Assert.assertEquals(CheckCommunityCategory_Gaming.getAttribute("contentDescription"), "Gaming");
	}

	public void Community18plus() throws Exception {
		MobileElement Community18plus = driver2.findElementByXPath("//android.view.View[@bounds='[582,814][690,878]']");
		Community18plus.click();
	}

	public void EnabledCommunity18plus() throws Exception {
		MobileElement EnabledCommunity18plus = driver2
				.findElementByXPath("//android.view.View[@bounds='[582,844][690,908]']");
		Assert.assertEquals(EnabledCommunity18plus.isEnabled(), true);
	}

	public void DisabledCommunity18plus() throws Exception {
		MobileElement DisabledCommunity18plus = driver2
				.findElementByXPath("//android.view.View[@bounds='[582,844][690,908]']");
		Assert.assertEquals(DisabledCommunity18plus.isEnabled(), false);
	}

	public void ClickOnCreateCommunityButton() throws Exception {
		MobileElement ClickOnCreateCommunityButton = driver2
				.findElementByXPath("//android.widget.Button[@bounds='[30,926][690,1026]']");
		Assert.assertEquals(ClickOnCreateCommunityButton.getAttribute("contentDescription"), "Create community");
		ClickOnCreateCommunityButton.click();
	}

	public void CheckCommunityName(String rcommName) throws Exception {
		MobileElement CheckCommunityName = driver2
				.findElementByXPath("//android.view.View[@content-desc='" + rcommName + "']");
		Assert.assertEquals(CheckCommunityName.getAttribute("contentDescription"), "r/" + rcommName);
	}

	public void DisabledCreateCommunity() throws Exception {
		MobileElement DisabledCreateCommunity = driver2
				.findElementByXPath("//android.widget.Button[@bounds='[30,926][690,1026]']");
		Thread.sleep(2000);
		Assert.assertEquals(DisabledCreateCommunity.isEnabled(), false);
	}

	public void EnablededCreateCommunity() throws Exception {
		MobileElement EnablededCreateCommunity = driver2
				.findElementByXPath("//android.widget.Button[@bounds='[30,926][690,1026]']");
		Assert.assertEquals(EnablededCreateCommunity.isEnabled(), true);
	}

	public void CheckOnHotInSubReddit() throws Exception {
		MobileElement CheckOnHotInSubReddit = driver2
				.findElementByXPath("//android.widget.Button[@bounds='[0,470][266,566]']");
		Assert.assertEquals(CheckOnHotInSubReddit.getAttribute("contentDescription"), "Hot");
	}

	public void CheckModToolsInSubreddit() throws Exception {
		MobileElement CheckModToolsInSubreddit = driver2
				.findElementByXPath("//android.widget.Button[@bounds='[452,200][680,296]']");
		Assert.assertEquals(CheckModToolsInSubreddit.getAttribute("contentDescription"), "Mod Tool");
	}

	public void FailedToCreateCommunity(String commName) throws Exception {
		MobileElement FailedToCreateCommunity = driver2
				.findElementByXPath("//android.view.View[@bounds='[36,1470][684,1600]']");
		Assert.assertEquals(FailedToCreateCommunity.getAttribute("contentDescription"),
				"Failed to create r/" + commName);
	}

}
