package appiumtests;

import java.net.URL;
import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.testng.annotations.BeforeMethod;

import com.google.common.collect.ImmutableMap;

import PageObjects.LoginObjects;
import PageObjects.SignUpObjects;
import io.appium.java_client.TouchAction;
import io.appium.java_client.android.AndroidDriver;
import io.appium.java_client.remote.MobileCapabilityType;

public class Login {

	static AndroidDriver<WebElement> driver2;
	
	@SuppressWarnings("unused")
 	@BeforeMethod
	public static void main(String[] args) throws Exception {
		
		
		StartSession startSession = new StartSession();
		driver2 = startSession.StartApp();
		LoginObjects loginObj = new LoginObjects(driver2);
 		
//		//GoForgetPassword();	
		loginObj.EnterUserName("Samaa_Hazem");
		Thread.sleep(1000);
		loginObj.EnterPassword("cmp123456");
 		Thread.sleep(1000);
 	
 		//click enter so that the "Continue" button appears
 		driver2.executeScript("mobile:performEditorAction", ImmutableMap.of("action", "done"));

 		Thread.sleep(1000);
 		loginObj.ClickLogin();
 		
 		Thread.sleep(1000);
 		System.out.println("Application finish.......");
	}
	
}
