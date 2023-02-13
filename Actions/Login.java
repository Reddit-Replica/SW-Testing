package appiumtests;

import org.testng.annotations.AfterMethod;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.BeforeTest;
import org.testng.annotations.Test;

import com.google.common.collect.ImmutableMap;

import PageObjects.LoginObjects;
import io.appium.java_client.MobileElement;
import io.appium.java_client.android.AndroidDriver;

public class Login {

	static AndroidDriver<MobileElement> driver2;	
	//static RemoteWebDriver driver2;

 	//@BeforeMethod(alwaysRun = true)
	//@BeforeTest
	@BeforeMethod
	public void beforetest() throws Exception {
 		System.out.println("Application inter before.......");
		StartSession startSession = new StartSession();
		driver2 = startSession.StartApp();		
		Thread.sleep(1000);
	}
	
	@Test(priority=7)
	public void ValidLogin() throws Exception {
		LoginObjects loginObj = new LoginObjects(driver2);		
		loginObj.EnterUserName("Samaa_Hazem");
		Thread.sleep(1000);
		loginObj.EnterPassword("cmp123456");
 		Thread.sleep(1000);	
 		//click enter so that the "Continue" button appears
 		driver2.executeScript("mobile:performEditorAction", ImmutableMap.of("action", "done"));
 		Thread.sleep(1000);
 		loginObj.ClickLogin();
 		Thread.sleep(1000);
		System.out.println("in test case1");
	}
	
	@Test(priority=1)
	public void LoginWithUserNameOnly() throws Exception {
		LoginObjects loginObj = new LoginObjects(driver2);		
		loginObj.EnterUserName("Samaa_Hazem");
		Thread.sleep(1000);
 		//click enter so that the "Continue" button appears
 		driver2.executeScript("mobile:performEditorAction", ImmutableMap.of("action", "done"));
 		Thread.sleep(1000);
 		loginObj.DisableLogin();
 		Thread.sleep(1000);
		System.out.println("in test case2");
	}
	
	@Test(priority=2)
	public void LoginWithPasswordOnly() throws Exception {
		LoginObjects loginObj = new LoginObjects(driver2);		
		loginObj.EnterPassword("cmp123456");
 		Thread.sleep(1000);	
 		//click enter so that the "Continue" button appears
 		driver2.executeScript("mobile:performEditorAction", ImmutableMap.of("action", "done"));
 		Thread.sleep(1000);
 		loginObj.DisableLogin();
 		Thread.sleep(1000);
		System.out.println("in test case3");
	}
	
	
	
	
	@Test(priority=3)
	public void InValidUsername() throws Exception {
		LoginObjects loginObj = new LoginObjects(driver2);		
		loginObj.EnterUserName("Samankna_Hazem");
		Thread.sleep(1000);
		loginObj.EnterPassword("cmp123456");
 		Thread.sleep(1000);	
 		//click enter so that the "Continue" button appears
 		driver2.executeScript("mobile:performEditorAction", ImmutableMap.of("action", "done"));
 		Thread.sleep(1000);
 		loginObj.ClickLogin();
 		Thread.sleep(1000);
 		loginObj.AppearanceErrMsg("Username not found/deleted");
		System.out.println("in test case4");
	}
	
	
	@Test(priority=4)
	public void InValidPassword() throws Exception {
		LoginObjects loginObj = new LoginObjects(driver2);		
		loginObj.EnterUserName("Samaa_Hazem");
		Thread.sleep(1000);
		loginObj.EnterPassword("cmp124knf3456");
 		Thread.sleep(1000);	
 		//click enter so that the "Continue" button appears
 		driver2.executeScript("mobile:performEditorAction", ImmutableMap.of("action", "done"));
 		Thread.sleep(1000);
 		loginObj.ClickLogin();
 		Thread.sleep(1000);
 		loginObj.AppearanceErrMsg("Invalid password");
		System.out.println("in test case5");
	}
	
	@Test(priority=5)
	public void GoSignUp() throws Exception {
		LoginObjects loginObj = new LoginObjects(driver2);		
		loginObj.GoSignUp();
		System.out.println("in test case6");
	}
	
	@Test(priority=6)
	public void GoForgetPassword() throws Exception {
		LoginObjects loginObj = new LoginObjects(driver2);		
		loginObj.GoForgetPassword();
		System.out.println("in test case7");
	}

//	@AfterMethod(alwaysRun = true)
	@AfterMethod
	public void tearDown() {
		if (driver2 != null) {
			driver2.quit();
			System.out.println("Application not null .......");
		}
		System.out.println("Application after.......");
	}
 	
 	
}
