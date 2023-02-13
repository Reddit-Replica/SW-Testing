package Appium;

import org.openqa.selenium.remote.RemoteWebDriver;
import org.testng.annotations.AfterMethod;
import org.testng.annotations.BeforeTest;
import org.testng.annotations.Test;

import com.google.common.collect.ImmutableMap;

import PageObjects.LoginObjects;

public class Login {

	static RemoteWebDriver driver2;

	@BeforeTest
	public void beforetest() throws Exception {
		System.out.println("Application inter before.......");
		StartSession startSession = new StartSession();
		driver2 = startSession.StartApp();
		Thread.sleep(1000);
	}

	@Test // (groups = {"current"})
	public void appiumFlutterTest() throws Exception {
		LoginObjects loginObj = new LoginObjects(driver2);
		loginObj.EnterUserName("Samaa_Hazem");
		Thread.sleep(1000);
		loginObj.EnterPassword("cmp123456");
		Thread.sleep(1000);
		driver2.executeScript("mobile:performEditorAction", ImmutableMap.of("action", "done"));
		Thread.sleep(1000);
		loginObj.ClickLogin();
		Thread.sleep(2000);
		System.out.println("in test case1");
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