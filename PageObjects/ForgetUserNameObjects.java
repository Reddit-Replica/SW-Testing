package PageObjects;

import org.testng.Assert;
import org.testng.asserts.SoftAssert;

import io.appium.java_client.MobileElement;
import io.appium.java_client.android.AndroidDriver;

public class ForgetUserNameObjects {

	static AndroidDriver<MobileElement> driver2;
	SoftAssert softassert;
	String expectedTitle;
	String actualTitle;

	public ForgetUserNameObjects() {
	}

	public ForgetUserNameObjects(AndroidDriver<MobileElement> driver_outer) {
		driver2 = driver_outer;
	}

	public void ContinueButton() throws Exception {
		MobileElement ContinueButton = driver2.findElementByXPath("//android.widget.Button[@content-desc='Continue']");
		ContinueButton.click();

	}

	// Start of Notifications objects

	public void ClickOnForgetPassword() throws Exception {
		MobileElement ClickOnForgetPassword = driver2
				.findElementByXPath("//android.widget.Button[@bounds='[30,1001][274,1097]']");
		ClickOnForgetPassword.click();
		// Assert.assertEquals(ClickOnForgetPassword.getAttribute("contentDescription"),
		// "Forgot password");
	}

	public void ClickOnForgetUserName() throws Exception {
		MobileElement ClickOnForgetUserName = driver2
				.findElementByXPath("//android.widget.Button[@bounds='[28,913][692,1009]']");
		ClickOnForgetUserName.click();
		// Assert.assertEquals(ClickOnForgetUserName.getAttribute("contentDescription"),
		// "Forget username?");
	}

	public void EnterEmailInForgetUserName(String mail) throws Exception {
		MobileElement EnterEmailInForgetUserName = driver2
				.findElementByXPath("//android.widget.EditText[@bounds='[28,390][692,499]']");
		EnterEmailInForgetUserName.click();
		Thread.sleep(2000);
		EnterEmailInForgetUserName.sendKeys(mail);
	}

	public void ClickOnEmailMe() throws Exception {
		MobileElement ClickOnEmailMe = driver2
				.findElementByXPath("//android.widget.Button[@bounds='[42,1452][678,1456]']");
		ClickOnEmailMe.click();
	}

	public void MailNotExistMessage() throws Exception {
		MobileElement MailNotExistMessage = driver2
				.findElementByXPath("//android.view.View[@bounds='[0,1512][720,1600]']");
		Assert.assertEquals(MailNotExistMessage.getAttribute("contentDescription"),
				"this email or username doesn't exists");
	}

	public void MailNotValidMessage() throws Exception {
		MobileElement MailNotValidMessage = driver2
				.findElementByXPath("//android.view.View[@bounds='[0,1512][720,1600]']");
		Assert.assertEquals(MailNotValidMessage.getAttribute("contentDescription"),
				"Try inserting a valid and existing email address.");
	}

	public void EmailSent() throws Exception {
		MobileElement EmailSent = driver2.findElementByXPath("//android.view.View[@bounds='[0,1512][720,1600]']");
		Assert.assertEquals(EmailSent.getAttribute("contentDescription"), "Email has been sent!");
	}

	public void EnabledEmailMe() throws Exception {
		MobileElement EnabledEmailMe = driver2
				.findElementByXPath("//android.widget.Button[@bounds='[42,1452][678,1456]']");
		Assert.assertEquals(EnabledEmailMe.getAttribute("contentDescription"), "Email me");
		Assert.assertEquals(EnabledEmailMe.isEnabled(), true);
	}

	public void DisabledEmailMe() throws Exception {
		MobileElement DisabledEmailMe = driver2
				.findElementByXPath("//android.widget.Button[@bounds='[42,1452][678,1456]']");
		Assert.assertEquals(DisabledEmailMe.getAttribute("contentDescription"), "Email me");
		Assert.assertEquals(DisabledEmailMe.isEnabled(), false);
	}
}
