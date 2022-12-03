package Appium;

import org.openqa.selenium.WebElement;
import org.testng.annotations.BeforeMethod;

import PageObjects.ForgetPasswordObjects;
import io.appium.java_client.android.AndroidDriver;
import io.appium.java_client.android.nativekey.AndroidKey;
import io.appium.java_client.android.nativekey.KeyEvent;

public class ForgetPassword {

	static AndroidDriver<WebElement> driver2;

	@BeforeMethod
	public static void main(String[] args) throws Exception {

		StartSession startSession = new StartSession();
		driver2 = startSession.StartApp();
		ForgetPasswordObjects forgetPasswordObj = new ForgetPasswordObjects(driver2);

		forgetPasswordObj.ForgetPasswordButton();

		forgetPasswordObj.UserName("karim");

		forgetPasswordObj.Email("karimmahmoud2210@gmail.com");
		driver2.pressKey(new KeyEvent(AndroidKey.ENTER));

		forgetPasswordObj.Continue();

		System.out.println("Application finish.......");
	}

}
