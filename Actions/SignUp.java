package appiumtests;

import org.testng.annotations.AfterMethod;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.Test;
import org.testng.asserts.SoftAssert;

import com.google.common.collect.ImmutableMap;

import PageObjects.HomePostObj;
import PageObjects.LoginObjects;
import PageObjects.SharePostObject;
import PageObjects.SignUpObjects;
import io.appium.java_client.MobileElement;
import io.appium.java_client.android.AndroidDriver;

public class SignUp {

	static AndroidDriver<MobileElement> driver2;
	
	@BeforeMethod
	public void beforetest() throws Exception {
		
		StartSession startSession = new StartSession();
		driver2 = startSession.StartApp();
		LoginObjects loginObj = new LoginObjects(driver2);		
		loginObj.GoSignUp();
		Thread.sleep(1000); 
	
	}
	
	@Test(priority=1)
	public void SignUpWithUserNameAndEmailOnly() throws Exception {
		SignUpObjects signUpObj = new SignUpObjects(driver2);

		signUpObj.EnterEmailSignUp("samaareddittest@gmail.com");
		Thread.sleep(1000);
		signUpObj.EnterUserNameSignUp("Samaa");		
		Thread.sleep(1000);
		driver2.executeScript("mobile:performEditorAction", ImmutableMap.of("action", "done"));
		Thread.sleep(1000);
		signUpObj.DisableSignUp();
		
		System.out.println("test case1");
	}
//	
	@Test(priority=2)
	public void SignUpWithPasswordAndEmailOnly() throws Exception {
		SignUpObjects signUpObj = new SignUpObjects(driver2);
		
		signUpObj.EnterEmailSignUp("samaareddittest@gmail.com");
		Thread.sleep(1000);
		signUpObj.EnterPasswordSignUp("cmp20242024");
		Thread.sleep(1000);
		driver2.executeScript("mobile:performEditorAction", ImmutableMap.of("action", "done"));
		Thread.sleep(1000);
		signUpObj.DisableSignUp();
		
		System.out.println("test case2");
	}
	
	@Test(priority=3)
	public void SignUpWithPasswordAndUserNameOnly() throws Exception {
		SignUpObjects signUpObj = new SignUpObjects(driver2);
		
		signUpObj.EnterUserNameSignUp("Samaa");
		Thread.sleep(1000);
		signUpObj.EnterPasswordSignUp("cmp20242024");
		Thread.sleep(1000);
		driver2.executeScript("mobile:performEditorAction", ImmutableMap.of("action", "done"));
		Thread.sleep(1000);
		signUpObj.DisableSignUp();
		
		System.out.println("test case3");
	}
//
	@Test(priority=4)
	public void SignUpWithUserNameOnly() throws Exception {
		SignUpObjects signUpObj = new SignUpObjects(driver2);
		signUpObj.EnterUserNameSignUp("Samaa");
		Thread.sleep(1000);
		
		driver2.executeScript("mobile:performEditorAction", ImmutableMap.of("action", "done"));
		Thread.sleep(1000);
		signUpObj.DisableSignUp();
		
		System.out.println("test case4");
	}
	
	@Test(priority=5)
	public void SignUpWithPasswordOnly() throws Exception {
		SignUpObjects signUpObj = new SignUpObjects(driver2);

		signUpObj.EnterPasswordSignUp("cmp20242024");
		Thread.sleep(1000);
		driver2.executeScript("mobile:performEditorAction", ImmutableMap.of("action", "done"));
		Thread.sleep(1000);
		signUpObj.DisableSignUp();
		
		System.out.println("test case5");
	}
	
	@Test(priority=6)
	public void SignUpWithEmailOnly() throws Exception {
		SignUpObjects signUpObj = new SignUpObjects(driver2);
		
		signUpObj.EnterEmailSignUp("samaareddittest@gmail.com");
		Thread.sleep(1000);
		signUpObj.EnterPasswordSignUp("cmp20242024");
		Thread.sleep(1000);
		driver2.executeScript("mobile:performEditorAction", ImmutableMap.of("action", "done"));
		Thread.sleep(1000);
		signUpObj.DisableSignUp();
		
		System.out.println("test case6");
	}
	
//	
	@Test(priority=7)
	public void GoLogin() throws Exception {
		SignUpObjects signUpObj = new SignUpObjects(driver2);
		signUpObj.GoLogin();
		System.out.println("test case7");
	}
	

	@Test(priority=8)
	public void SignUpWithExistingUserName() throws Exception {
		SignUpObjects signUpObj = new SignUpObjects(driver2);

		signUpObj.EnterEmailSignUp("samaareddittest@gmail.com");
		Thread.sleep(1000);
		signUpObj.EnterUserNameSignUp("Samaa_Hazem");		
		Thread.sleep(1000);
		signUpObj.EnterPasswordSignUp("cmp20242024");
		Thread.sleep(1000);
		driver2.executeScript("mobile:performEditorAction", ImmutableMap.of("action", "done"));
		Thread.sleep(1000);
		signUpObj.ContinueButton();
		Thread.sleep(1000);	
		signUpObj.AppearanceErrMsg("Username is already in use");

		System.out.println("test case9");
	}
	
//	@Test(priority=1)
//	public void SignUpWithWeakPassword() throws Exception {
//		SignUpObjects signUpObj = new SignUpObjects(driver2);
//
//		signUpObj.EnterEmailSignUp("samaareddittest@gmail.com");
//		Thread.sleep(1000);
//		signUpObj.EnterUserNameSignUp("Samaa_Hazem");		
//		Thread.sleep(1000);
//		signUpObj.EnterPasswordSignUp("cmp20");
//		Thread.sleep(1000);
//		driver2.executeScript("mobile:performEditorAction", ImmutableMap.of("action", "done"));
//		Thread.sleep(1000);
//		signUpObj.ContinueButton();
//		Thread.sleep(1000);	
//		signUpObj.AppearanceErrMsg("email, username or password are invalid");
//
//		System.out.println("test case10");
//	}
	
	@Test(priority=9)
	public void SignUpWithInvalidEmail() throws Exception {
		SignUpObjects signUpObj = new SignUpObjects(driver2);

		signUpObj.EnterEmailSignUp("samaareddittest");
		Thread.sleep(1000);
		signUpObj.EnterUserNameSignUp("Samaa_Ha_roka");		
		Thread.sleep(1000);
		signUpObj.EnterPasswordSignUp("cmp24545780");
		Thread.sleep(1000);
		driver2.executeScript("mobile:performEditorAction", ImmutableMap.of("action", "done"));
		Thread.sleep(1000);
		signUpObj.ContinueButton();
		Thread.sleep(1000);	
		signUpObj.AppearanceErrMsg("email, username or password are invalid");

		System.out.println("test case111");
	}
	

	@Test(priority=10)
	public void SignUpWithWeakPassword() throws Exception {
		SignUpObjects signUpObj = new SignUpObjects(driver2);

		signUpObj.EnterEmailSignUp("samaareddittest@gmail.com");
		Thread.sleep(1000);
		signUpObj.EnterUserNameSignUp("Samaa_Hazem");		
		Thread.sleep(1000);
		signUpObj.EnterPasswordSignUp("cmp20");
		Thread.sleep(1000);
		driver2.executeScript("mobile:performEditorAction", ImmutableMap.of("action", "done"));
		Thread.sleep(1000);
		signUpObj.ContinueButton();
		Thread.sleep(1000);	
		signUpObj.AppearanceErrMsg("email, username or password are invalid");

		System.out.println("test case10");
	}
	
	//later:check it
	@Test(priority=11)
	public void SignUpWithValidData() throws Exception {
		SignUpObjects signUpObj = new SignUpObjects(driver2);

		signUpObj.EnterEmailSignUp("samagjdlgndl@gmail.com");
		Thread.sleep(1000);
		signUpObj.EnterUserNameSignUp("Samaa_Ha_roka");		
		Thread.sleep(1000);
		signUpObj.EnterPasswordSignUp("cmp123456");
		Thread.sleep(1000);
		driver2.executeScript("mobile:performEditorAction", ImmutableMap.of("action", "done"));
		Thread.sleep(1000);
		signUpObj.ContinueButton();
		System.out.println("test case111");
	}
	
//	@AfterTest
	@AfterMethod
	public void tearDown() throws InterruptedException {
		Thread.sleep(3000);
		if (driver2 != null) {
			driver2.quit();
			System.out.println("Application not null .......");
		}
		System.out.println("Application after.......");
	}


	
}


