package Appium;

import org.openqa.selenium.WebElement;
import org.testng.annotations.BeforeMethod;

import PageObjects.ForgetUserNameObjects;
import io.appium.java_client.android.AndroidDriver;
import io.appium.java_client.android.nativekey.AndroidKey;
import io.appium.java_client.android.nativekey.KeyEvent;

public class ForgetUserName {

	static AndroidDriver<WebElement> driver2;

	@BeforeMethod
	public static void main(String[] args) throws Exception {

		StartSession startSession = new StartSession();
		driver2 = startSession.StartApp();
		ForgetUserNameObjects forgetUserNameObj = new ForgetUserNameObjects(driver2);

		forgetUserNameObj.ForgetPasswordButton();
		forgetUserNameObj.ForgetUserNameButton();
		forgetUserNameObj.Email("karimmahmoud2210@gmail.com");
		driver2.pressKey(new KeyEvent(AndroidKey.ENTER));

		forgetUserNameObj.Continue();

		System.out.println("Application finish.......");
	}

}
