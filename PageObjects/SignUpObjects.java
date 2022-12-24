package PageObjects;

import java.util.List;

import org.openqa.selenium.By;
import org.testng.Assert;
import org.testng.asserts.SoftAssert;

import io.appium.java_client.MobileElement;
import io.appium.java_client.android.AndroidDriver;

public class SignUpObjects {
	
	static AndroidDriver<MobileElement> driver2;
	SoftAssert softassert; 
	public SignUpObjects(){}
	 public SignUpObjects(AndroidDriver<MobileElement> driver_outer){
		driver2 = driver_outer;
		softassert = new SoftAssert();
	}
	
	public void ContinueButton() throws Exception {
		///Test1:submit first form (click on continue)
		List<MobileElement> continueButton = driver2.findElements(By.xpath("//android.widget.Button"));//
		continueButton.get(6).click();
	}
//	
	public void EnterEmailSignUp(String emailAddr) throws Exception {
 		///Test3:enter a password
 		List<MobileElement> email = driver2.findElements(By.xpath("//android.widget.EditText"));//
 		email.get(0).click();
 		Thread.sleep(1000);
 		email.get(0).sendKeys(emailAddr);
	}
	
	public void EnterUserNameSignUp(String name) throws Exception {
		///Test2:enter a username
 		List<MobileElement> userName = driver2.findElements(By.xpath("//android.widget.EditText"));//
 		userName.get(1).click();
 		Thread.sleep(1000);
 		userName.get(1).sendKeys(name);
	}
	
	public void EnterPasswordSignUp(String passwordText) throws Exception {
 		///Test3:enter a password
 		List<MobileElement> password = driver2.findElements(By.xpath("//android.widget.EditText"));//
 		password.get(2).click();
 		Thread.sleep(1000);
 		password.get(2).sendKeys(passwordText);
	}
	
	public void GoLogin() throws Exception {
 		//Test2:go to login page from the sign up
		List<MobileElement> goLogin = driver2.findElements(By.xpath("//android.widget.Button"));
		goLogin.get(0).click();
	}

	public void DisableSignUp() throws Exception {
		MobileElement SignUp = driver2.findElementByXPath("//android.widget.Button[@content-desc='Continue']");
		Assert.assertFalse(SignUp.isEnabled());
	}
	
	public void EnableSignUp() throws Exception {
		MobileElement SignUp = driver2.findElementByXPath("//android.widget.Button[@content-desc='Continue']");
		Assert.assertTrue(SignUp.isEnabled());
	}
	
	public void AppearanceErrMsg(String msg) throws Exception {
//		MobileElement SignUp = driver2.findElementByXPath("//android.widget.Button[@content-desc='Username is already in use']");
		MobileElement SignUp = driver2.findElement(By.xpath ("//android.view.View[@bounds='[0,2093][1080,2214]']"));
		softassert.assertEquals(SignUp.getAttribute("contentDescription"),msg, "userbame Check Failed");
		softassert.assertAll();
		//Assert.assertTrue(SignUp.getAttribute("contentDescription") == "Usejefknfkrname");
	}
	
	
}
