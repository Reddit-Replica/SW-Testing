package PageObjects;

import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.remote.RemoteWebDriver;
import org.testng.Assert;
import org.testng.asserts.SoftAssert;

import io.appium.java_client.MobileElement;
import io.appium.java_client.android.AndroidDriver;

public class LoginObjects {
	
	static AndroidDriver<MobileElement> driver2;
	SoftAssert softassert; 
//	static RemoteWebDriver driver2;
	
	public LoginObjects(){}
	 public LoginObjects(AndroidDriver<MobileElement> driver_outer){
		driver2 = driver_outer;
		softassert = new SoftAssert();
	}
	
//	public LoginObjects(RemoteWebDriver driver_outer){
//		driver2 = driver_outer;
	 //softassert = new SoftAssert();
//	}
	
	public void GoSignUp() throws Exception {
 		//Test1:go to sign up page from the login
 		List<MobileElement> goSignUp = driver2.findElements(By.xpath("//android.widget.Button"));
 		goSignUp.get(0).click();
	}
	
	public void EnterUserName(String name) throws Exception {
		///Test2:enter a username By.xpath("//android.widget.TextView[@text='"+songname+"']");
		//List<MobileElement> userName = driver2.findElements(By.xpath("//android.widget.EditText[@text='\"+Username+\"']"));//
		//List<MobileElement> userName = driver2.findElements(By.xpath("//android.widget.EditText"));//
// 		userName.get(0).click();
		MobileElement userName = driver2.findElement(By.xpath("//android.widget.EditText[@text='Username']"));//
		userName.click();
 		Thread.sleep(1000);
 		userName.sendKeys(name);
// 		userName.get(0).sendKeys(name);
 		
	}
	
	public void EnterPassword(String passwordText) throws Exception {
 		///Test3:enter a password
 		List<MobileElement> password = driver2.findElements(By.xpath("//android.widget.EditText"));//
 		password.get(1).click();
 		Thread.sleep(1000);
 		password.get(1).sendKeys(passwordText);
	}
//	
//	public static void GoForgetusername() throws Exception {
// 		///Test4:go to forgetusername page
// 		List<MobileElement> forgetUsername = driver2.findElements(By.xpath("//android.widget.Button[@content-desc=\"username\"]"));//
// 		forgetUsername.get(0).click();
//	}
//	
	public void GoForgetPassword() throws Exception {
 		///Test5:go to forgetpassword page
 		List<MobileElement> forgetPassword = driver2.findElements(By.xpath("//android.widget.Button"));
 		forgetPassword.get(1).click();
	}
//	
	public void ClickLogin() throws Exception {
 		///Test6:submit (click on login)
//		List<MobileElement> login = driver2.findElements(By.xpath("//android.widget.Button"));
// 		login.get(6).click();
		MobileElement loginObj = driver2.findElementByXPath("//android.widget.Button[@content-desc='Continue']");
		loginObj.click();
	}
	
	public void DisableLogin() throws Exception {
		MobileElement loginObj2 = driver2.findElementByXPath("//android.widget.Button[@content-desc='Continue']");
		Assert.assertFalse(loginObj2.isEnabled());
	}
	
	public void EnableLogin() throws Exception {
		MobileElement loginObj2 = driver2.findElementByXPath("//android.widget.Button[@content-desc='Continue']");
		Assert.assertTrue(loginObj2.isEnabled());
	}
	
	public void AppearanceErrMsg(String msg) throws Exception {
//		MobileElement loginObj2 = driver2.findElementByXPath("//android.widget.Button[@content-desc='Username is already in use']");
		MobileElement loginObj2 = driver2.findElement(By.xpath ("//android.view.View[@bounds='[0,2093][1080,2214]']"));
		softassert.assertEquals(loginObj2.getAttribute("contentDescription"),msg, "userbame Check Failed");
		softassert.assertAll();
		//Assert.assertTrue(loginObj2.getAttribute("contentDescription") == "Usejefknfkrname");
	}
	
	public void GoHome() throws Exception {
		//later: isDisplay for create post button for ex
	}
	
}
