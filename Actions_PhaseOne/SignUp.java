package Appium;

import org.openqa.selenium.WebElement;

import com.google.common.collect.ImmutableMap;

import PageObjects.LoginObjects;
import PageObjects.SignUpObjects;
import io.appium.java_client.android.AndroidDriver;

public class SignUp {

	static AndroidDriver<WebElement> driver2;

	public static void main(String[] args) throws Exception {

		StartSession startSession = new StartSession();
		driver2 = startSession.StartApp();

		SignUpObjects signUpObj = new SignUpObjects(driver2);
		LoginObjects loginObj = new LoginObjects(driver2);

		loginObj.GoSignUp();

//		Thread.sleep(5000); 
//		GoLogin();

		Thread.sleep(1000);
		signUpObj.EnterEmailSignUp("samaa.abdellatif975@gmail.com");
		Thread.sleep(1000);
		signUpObj.EnterUserNameSignUp("Samaa");
		Thread.sleep(1000);
		signUpObj.EnterPasswordSignUp("cmp2024");

		// click enter so that the "Continue" button appears
		driver2.executeScript("mobile:performEditorAction", ImmutableMap.of("action", "done"));

		signUpObj.ContinueButton();
		System.out.println("Application finish.......");
	}

}
