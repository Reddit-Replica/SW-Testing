package Appium;

import org.testng.annotations.AfterMethod;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.Test;

import PageObjects.ForgetUserNameObjects;
import io.appium.java_client.MobileElement;
import io.appium.java_client.android.AndroidDriver;
import io.appium.java_client.android.nativekey.AndroidKey;
import io.appium.java_client.android.nativekey.KeyEvent;

public class ForgetUserName {
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
		ForgetUserNameObjects ForgetUserNameObj = new ForgetUserNameObjects(driver2);
		Thread.sleep(2000);
		ForgetUserNameObj.ClickOnForgetPassword();
		Thread.sleep(2000);
		ForgetUserNameObj.ClickOnForgetUserName();
		Thread.sleep(2000);
		ForgetUserNameObj.DisabledEmailMe();
		Thread.sleep(2000);
		ForgetUserNameObj.EnterEmailInForgetUserName(ValidEmail);
		Thread.sleep(2000);
		driver2.pressKey(new KeyEvent(AndroidKey.ENTER));
		Thread.sleep(2000);
		ForgetUserNameObj.EnabledEmailMe();
		Thread.sleep(2000);
		ForgetUserNameObj.ClickOnEmailMe();
		Thread.sleep(2000);
		ForgetUserNameObj.EmailSent();
	}

	@Test
	public void TestCase2_UnValidEmail() throws Exception {
		ForgetUserNameObjects ForgetUserNameObj = new ForgetUserNameObjects(driver2);
		Thread.sleep(2000);
		ForgetUserNameObj.ClickOnForgetPassword();
		Thread.sleep(2000);
		ForgetUserNameObj.ClickOnForgetUserName();
		Thread.sleep(2000);
		ForgetUserNameObj.DisabledEmailMe();
		Thread.sleep(2000);
		ForgetUserNameObj.EnterEmailInForgetUserName(UnValidEmail1);
		Thread.sleep(2000);
		driver2.pressKey(new KeyEvent(AndroidKey.ENTER));
		Thread.sleep(2000);
		ForgetUserNameObj.EnabledEmailMe();
		Thread.sleep(2000);
		ForgetUserNameObj.ClickOnEmailMe();
		Thread.sleep(2000);
		ForgetUserNameObj.MailNotValidMessage();
	}

	@Test
	public void TestCase3_UnValidEmail() throws Exception {
		ForgetUserNameObjects ForgetUserNameObj = new ForgetUserNameObjects(driver2);
		Thread.sleep(2000);
		ForgetUserNameObj.ClickOnForgetPassword();
		Thread.sleep(2000);
		ForgetUserNameObj.ClickOnForgetUserName();
		Thread.sleep(2000);
		ForgetUserNameObj.DisabledEmailMe();
		Thread.sleep(2000);
		ForgetUserNameObj.EnterEmailInForgetUserName(UnValidEmail2);
		Thread.sleep(2000);
		driver2.pressKey(new KeyEvent(AndroidKey.ENTER));
		Thread.sleep(2000);
		ForgetUserNameObj.EnabledEmailMe();
		Thread.sleep(2000);
		ForgetUserNameObj.ClickOnEmailMe();
		Thread.sleep(2000);
		ForgetUserNameObj.MailNotValidMessage();
	}

	@Test
	public void TestCase4_UnValidEmail() throws Exception {
		ForgetUserNameObjects ForgetUserNameObj = new ForgetUserNameObjects(driver2);
		Thread.sleep(2000);
		ForgetUserNameObj.ClickOnForgetPassword();
		Thread.sleep(2000);
		ForgetUserNameObj.ClickOnForgetUserName();
		Thread.sleep(2000);
		ForgetUserNameObj.DisabledEmailMe();
		Thread.sleep(2000);
		ForgetUserNameObj.EnterEmailInForgetUserName(UnValidEmail3);
		Thread.sleep(2000);
		driver2.pressKey(new KeyEvent(AndroidKey.ENTER));
		Thread.sleep(2000);
		ForgetUserNameObj.EnabledEmailMe();
		Thread.sleep(2000);
		ForgetUserNameObj.ClickOnEmailMe();
		Thread.sleep(2000);
		ForgetUserNameObj.MailNotValidMessage();
	}

	@Test
	public void TestCase5_UnValidEmail() throws Exception {
		ForgetUserNameObjects ForgetUserNameObj = new ForgetUserNameObjects(driver2);
		Thread.sleep(2000);
		ForgetUserNameObj.ClickOnForgetPassword();
		Thread.sleep(2000);
		ForgetUserNameObj.ClickOnForgetUserName();
		Thread.sleep(2000);
		ForgetUserNameObj.DisabledEmailMe();
		Thread.sleep(2000);
		ForgetUserNameObj.EnterEmailInForgetUserName(UnValidEmail4);
		Thread.sleep(2000);
		driver2.pressKey(new KeyEvent(AndroidKey.ENTER));
		Thread.sleep(2000);
		ForgetUserNameObj.EnabledEmailMe();
		Thread.sleep(2000);
		ForgetUserNameObj.ClickOnEmailMe();
		Thread.sleep(2000);
		ForgetUserNameObj.MailNotValidMessage();
	}

	@Test
	public void TestCase6_UnValidEmail() throws Exception {
		ForgetUserNameObjects ForgetUserNameObj = new ForgetUserNameObjects(driver2);
		Thread.sleep(2000);
		ForgetUserNameObj.ClickOnForgetPassword();
		Thread.sleep(2000);
		ForgetUserNameObj.ClickOnForgetUserName();
		Thread.sleep(2000);
		ForgetUserNameObj.DisabledEmailMe();
		Thread.sleep(2000);
		ForgetUserNameObj.EnterEmailInForgetUserName(UnValidEmail5);
		Thread.sleep(2000);
		driver2.pressKey(new KeyEvent(AndroidKey.ENTER));
		Thread.sleep(2000);
		ForgetUserNameObj.EnabledEmailMe();
		Thread.sleep(2000);
		ForgetUserNameObj.ClickOnEmailMe();
		Thread.sleep(2000);
		ForgetUserNameObj.MailNotValidMessage();
	}

	@Test
	public void TestCase7_UnValidEmail() throws Exception {
		ForgetUserNameObjects ForgetUserNameObj = new ForgetUserNameObjects(driver2);
		Thread.sleep(2000);
		ForgetUserNameObj.ClickOnForgetPassword();
		Thread.sleep(2000);
		ForgetUserNameObj.ClickOnForgetUserName();
		Thread.sleep(2000);
		ForgetUserNameObj.DisabledEmailMe();
		Thread.sleep(2000);
		ForgetUserNameObj.EnterEmailInForgetUserName(UnValidEmail6);
		Thread.sleep(2000);
		driver2.pressKey(new KeyEvent(AndroidKey.ENTER));
		Thread.sleep(2000);
		ForgetUserNameObj.EnabledEmailMe();
		Thread.sleep(2000);
		ForgetUserNameObj.ClickOnEmailMe();
		Thread.sleep(2000);
		ForgetUserNameObj.MailNotValidMessage();
	}

	@Test
	public void TestCase8_NoEnteringEmailValidEmail() throws Exception {
		ForgetUserNameObjects ForgetUserNameObj = new ForgetUserNameObjects(driver2);
		Thread.sleep(2000);
		ForgetUserNameObj.ClickOnForgetPassword();
		Thread.sleep(2000);
		ForgetUserNameObj.ClickOnForgetUserName();
		Thread.sleep(2000);
		ForgetUserNameObj.DisabledEmailMe();
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