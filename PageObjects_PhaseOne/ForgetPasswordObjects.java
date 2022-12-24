package PageObjects;

import org.testng.Assert;
import org.testng.asserts.SoftAssert;

import io.appium.java_client.MobileElement;
import io.appium.java_client.android.AndroidDriver;

public class ForgetPasswordObjects {

	static AndroidDriver<MobileElement> driver2;
	SoftAssert softassert;
	String expectedTitle;
	String actualTitle;

	public ForgetPasswordObjects() {
	}

	public ForgetPasswordObjects(AndroidDriver<MobileElement> driver_outer) {
		driver2 = driver_outer;
	}

	// Start of Notifications objects

	public void ClickOnForgetPassword() throws Exception {
		MobileElement ClickOnForgetPassword = driver2
				.findElementByXPath("//android.widget.Button[@bounds='[30,1001][274,1097]']");
		ClickOnForgetPassword.click();
		// Assert.assertEquals(ClickOnForgetPassword.getAttribute("contentDescription"),
		// "Forgot password");
	}

	public void EnterEmailInForgetPassword(String mail) throws Exception {
		MobileElement EnterEmailInForgetPassword = driver2
				.findElementByXPath("//android.widget.EditText[@bounds='[28,566][692,675]']");
		EnterEmailInForgetPassword.click();
		Thread.sleep(2000);
		EnterEmailInForgetPassword.sendKeys(mail);
	}

	public void EnterUserNameInForgetPassword(String userName) throws Exception {
		MobileElement EnterEmailInForgetPassword = driver2
				.findElementByXPath("//android.widget.EditText[@bounds='[28,370][692,479]']");
		EnterEmailInForgetPassword.click();
		Thread.sleep(2000);
		EnterEmailInForgetPassword.sendKeys(userName);
	}

	public void ClickOnEmailMe() throws Exception {
		MobileElement ClickOnEmailMe = driver2
				.findElementByXPath("//android.widget.Button[@bounds='[30,1456][690,1552]']");
		ClickOnEmailMe.click();
		Assert.assertEquals(ClickOnEmailMe.getAttribute("contentDescription"), "Email me");
	}

	public void MailNotExistMessage() throws Exception {
		MobileElement MailNotExistMessage = driver2
				.findElementByXPath("//android.view.View[@bounds='[0,1512][720,1600]']");
		Assert.assertEquals(MailNotExistMessage.getAttribute("contentDescription"),
				"this email or username doesn't exists");
	}

	public void MailNotValidMessage() throws Exception {
		MobileElement MailNotValidMessage = driver2
				.findElementByXPath("//android.view.View[@bounds='[0,1480][720,1600]']");
		Assert.assertEquals(MailNotValidMessage.getAttribute("contentDescription"),
				"Try inserting a valid and existing email address and user name.");
	}

	public void EmailSent() throws Exception {
		MobileElement EmailSent = driver2.findElementByXPath("//android.view.View[@bounds='[0,1512][720,1600]']");
		Assert.assertEquals(EmailSent.getAttribute("contentDescription"), "Email has been sent!");
	}

	public void EnabledEmailMe() throws Exception {
		MobileElement EnabledEmailMe = driver2
				.findElementByXPath("//android.widget.Button[@bounds='[30,1456][690,1552]']");
		Assert.assertEquals(EnabledEmailMe.getAttribute("contentDescription"), "Email me");
		Assert.assertEquals(EnabledEmailMe.isEnabled(), true);
	}

	public void DisabledEmailMe() throws Exception {
		MobileElement DisabledEmailMe = driver2
				.findElementByXPath("//android.widget.Button[@bounds='[30,1456][690,1552]']");
		Assert.assertEquals(DisabledEmailMe.getAttribute("contentDescription"), "Email me");
		Assert.assertEquals(DisabledEmailMe.isEnabled(), false);
	}
}
