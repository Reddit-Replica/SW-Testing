package Appium;

import org.testng.annotations.AfterMethod;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.Test;

import PageObjects.ForgetPasswordObjects;
import io.appium.java_client.MobileElement;
import io.appium.java_client.android.AndroidDriver;
import io.appium.java_client.android.nativekey.AndroidKey;
import io.appium.java_client.android.nativekey.KeyEvent;

public class ForgetPassword {
	public String ValidUserName = "karim55";
	public String ValidEmail = "karimmahmoud862002@gmail.com";
	public String UnValidEmail1 = "karimmahmoud862002 @gmail.com";
	public String UnValidEmail2 = "karimmahmoud862002@gmail";
	public String UnValidEmail3 = "123456@gmail.com";
	public String UnValidEmail4 = "123456";
	public String UnValidEmail5 = "<html>@gmail.com";
	public String UnValidEmail6 = "128.0.0.1@gmail.com";

	public AndroidDriver<MobileElement> driver2;

	@BeforeMethod
	public void beforetest() throws Exception {
		System.out.println("Application inter before.......");
		StartSession startSession = new StartSession();
		driver2 = startSession.StartApp();
		Thread.sleep(2000);
	}

	@Test
	public void TestCase1_ValidEmail() throws Exception {
		ForgetPasswordObjects ForgetPasswordObj = new ForgetPasswordObjects(driver2);
		Thread.sleep(2000);
		ForgetPasswordObj.ClickOnForgetPassword();
		Thread.sleep(2000);
		ForgetPasswordObj.EnterUserNameInForgetPassword(ValidUserName);
		Thread.sleep(2000);
		ForgetPasswordObj.EnterEmailInForgetPassword(ValidEmail);
		Thread.sleep(2000);
		driver2.pressKey(new KeyEvent(AndroidKey.ENTER));
		Thread.sleep(2000);
		ForgetPasswordObj.EnabledEmailMe();
		Thread.sleep(2000);
		ForgetPasswordObj.ClickOnEmailMe();
		Thread.sleep(2000);
		ForgetPasswordObj.EmailSent();
	}

	@Test
	public void TestCase2_UnValidEmail1Spacing() throws Exception {
		ForgetPasswordObjects ForgetPasswordObj = new ForgetPasswordObjects(driver2);
		Thread.sleep(2000);
		ForgetPasswordObj.ClickOnForgetPassword();
		Thread.sleep(2000);
		Thread.sleep(2000);
		ForgetPasswordObj.EnterUserNameInForgetPassword(ValidUserName);
		Thread.sleep(2000);
		driver2.pressKey(new KeyEvent(AndroidKey.ENTER));
		Thread.sleep(2000);
		ForgetPasswordObj.DisabledEmailMe();
		Thread.sleep(2000);
		ForgetPasswordObj.EnterEmailInForgetPassword(UnValidEmail1);
		Thread.sleep(2000);
		driver2.pressKey(new KeyEvent(AndroidKey.ENTER));
		Thread.sleep(2000);
		ForgetPasswordObj.EnabledEmailMe();
		Thread.sleep(2000);
		ForgetPasswordObj.ClickOnEmailMe();
		Thread.sleep(2000);
		ForgetPasswordObj.MailNotValidMessage();
	}

	@Test
	public void TestCase3_UnValidEmail1() throws Exception {
		ForgetPasswordObjects ForgetPasswordObj = new ForgetPasswordObjects(driver2);
		Thread.sleep(2000);
		ForgetPasswordObj.ClickOnForgetPassword();
		Thread.sleep(2000);
		ForgetPasswordObj.EnterUserNameInForgetPassword(ValidUserName);
		Thread.sleep(2000);
		driver2.pressKey(new KeyEvent(AndroidKey.ENTER));
		Thread.sleep(2000);
		ForgetPasswordObj.DisabledEmailMe();
		Thread.sleep(2000);
		ForgetPasswordObj.EnterEmailInForgetPassword(UnValidEmail2);
		Thread.sleep(2000);
		driver2.pressKey(new KeyEvent(AndroidKey.ENTER));
		Thread.sleep(2000);
		ForgetPasswordObj.EnabledEmailMe();
		Thread.sleep(2000);
		ForgetPasswordObj.ClickOnEmailMe();
		Thread.sleep(2000);
		ForgetPasswordObj.MailNotValidMessage();
	}

	@Test
	public void TestCase4_UnValidEmail2() throws Exception {
		ForgetPasswordObjects ForgetPasswordObj = new ForgetPasswordObjects(driver2);
		Thread.sleep(2000);
		ForgetPasswordObj.ClickOnForgetPassword();
		Thread.sleep(2000);
		ForgetPasswordObj.EnterUserNameInForgetPassword(ValidUserName);
		Thread.sleep(2000);
		driver2.pressKey(new KeyEvent(AndroidKey.ENTER));
		Thread.sleep(2000);
		ForgetPasswordObj.DisabledEmailMe();
		Thread.sleep(2000);
		ForgetPasswordObj.EnterEmailInForgetPassword(UnValidEmail3);
		Thread.sleep(2000);
		driver2.pressKey(new KeyEvent(AndroidKey.ENTER));
		Thread.sleep(2000);
		ForgetPasswordObj.EnabledEmailMe();
		Thread.sleep(2000);
		ForgetPasswordObj.ClickOnEmailMe();
		Thread.sleep(2000);
		ForgetPasswordObj.MailNotExistMessage();
	}

	@Test
	public void TestCase5_UnValidEmail3() throws Exception {
		ForgetPasswordObjects ForgetPasswordObj = new ForgetPasswordObjects(driver2);
		Thread.sleep(2000);
		ForgetPasswordObj.ClickOnForgetPassword();
		Thread.sleep(2000);
		ForgetPasswordObj.EnterUserNameInForgetPassword(ValidUserName);
		Thread.sleep(2000);
		driver2.pressKey(new KeyEvent(AndroidKey.ENTER));
		Thread.sleep(2000);
		ForgetPasswordObj.DisabledEmailMe();
		Thread.sleep(2000);
		ForgetPasswordObj.EnterEmailInForgetPassword(UnValidEmail4);
		Thread.sleep(2000);
		driver2.pressKey(new KeyEvent(AndroidKey.ENTER));
		Thread.sleep(2000);
		ForgetPasswordObj.EnabledEmailMe();
		Thread.sleep(2000);
		ForgetPasswordObj.ClickOnEmailMe();
		Thread.sleep(2000);
		ForgetPasswordObj.MailNotValidMessage();
	}

	@Test
	public void TestCase6_UnValidEmail4() throws Exception {
		ForgetPasswordObjects ForgetPasswordObj = new ForgetPasswordObjects(driver2);
		Thread.sleep(2000);
		ForgetPasswordObj.ClickOnForgetPassword();
		Thread.sleep(2000);
		ForgetPasswordObj.EnterUserNameInForgetPassword(ValidUserName);
		Thread.sleep(2000);
		driver2.pressKey(new KeyEvent(AndroidKey.ENTER));
		Thread.sleep(2000);
		ForgetPasswordObj.DisabledEmailMe();
		Thread.sleep(2000);
		ForgetPasswordObj.EnterEmailInForgetPassword(UnValidEmail5);
		Thread.sleep(2000);
		driver2.pressKey(new KeyEvent(AndroidKey.ENTER));
		Thread.sleep(2000);
		ForgetPasswordObj.EnabledEmailMe();
		Thread.sleep(2000);
		ForgetPasswordObj.ClickOnEmailMe();
		Thread.sleep(2000);
		ForgetPasswordObj.MailNotValidMessage();
	}

	@Test
	public void TestCase7_UnValidEmail5() throws Exception {
		ForgetPasswordObjects ForgetPasswordObj = new ForgetPasswordObjects(driver2);
		Thread.sleep(2000);
		ForgetPasswordObj.ClickOnForgetPassword();
		Thread.sleep(2000);
		ForgetPasswordObj.EnterUserNameInForgetPassword(ValidUserName);
		Thread.sleep(2000);
		driver2.pressKey(new KeyEvent(AndroidKey.ENTER));
		Thread.sleep(2000);
		ForgetPasswordObj.DisabledEmailMe();
		Thread.sleep(2000);
		ForgetPasswordObj.EnterEmailInForgetPassword(UnValidEmail6);
		Thread.sleep(2000);
		driver2.pressKey(new KeyEvent(AndroidKey.ENTER));
		Thread.sleep(2000);
		ForgetPasswordObj.EnabledEmailMe();
		Thread.sleep(2000);
		ForgetPasswordObj.ClickOnEmailMe();
		Thread.sleep(2000);
		ForgetPasswordObj.MailNotValidMessage();
	}

	@Test
	public void TestCase8_EmailMeWithoutEnterringMail() throws Exception {
		ForgetPasswordObjects ForgetPasswordObj = new ForgetPasswordObjects(driver2);
		Thread.sleep(2000);
		ForgetPasswordObj.ClickOnForgetPassword();
		Thread.sleep(2000);
		ForgetPasswordObj.EnterUserNameInForgetPassword(ValidUserName);
		Thread.sleep(2000);
		driver2.pressKey(new KeyEvent(AndroidKey.ENTER));
		Thread.sleep(2000);
		ForgetPasswordObj.DisabledEmailMe();
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