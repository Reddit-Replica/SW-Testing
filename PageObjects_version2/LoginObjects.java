package PageObjects;

import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

import io.appium.java_client.android.AndroidDriver;

public class LoginObjects {
	
	static AndroidDriver<WebElement> driver2;
	public LoginObjects(){}
	 public LoginObjects(AndroidDriver<WebElement> driver_outer){
		driver2 = driver_outer;
	}
	
	public void GoSignUp() throws Exception {
 		//Test1:go to sign up page from the login
 		List<WebElement> goSignUp = driver2.findElements(By.xpath("//android.widget.Button"));
 		goSignUp.get(0).click();
	}
	
	public void EnterUserName(String name) throws Exception {
		///Test2:enter a username
		List<WebElement> userName = driver2.findElements(By.xpath("//android.widget.EditText"));//
 		userName.get(0).click();
 		Thread.sleep(1000);
 		userName.get(0).sendKeys(name);
	}
	
	public void EnterPassword(String passwordText) throws Exception {
 		///Test3:enter a password
 		List<WebElement> password = driver2.findElements(By.xpath("//android.widget.EditText"));//
 		password.get(1).click();
 		Thread.sleep(1000);
 		password.get(1).sendKeys(passwordText);
	}
//	
//	public static void GoForgetusername() throws Exception {
// 		///Test4:go to forgetusername page
// 		List<WebElement> forgetUsername = driver2.findElements(By.xpath("//android.widget.Button[@content-desc=\"username\"]"));//
// 		forgetUsername.get(0).click();
//	}
//	
	public void GoForgetPassword() throws Exception {
 		///Test5:go to forgetpassword page
 		List<WebElement> forgetPassword = driver2.findElements(By.xpath("//android.widget.Button"));
 		forgetPassword.get(1).click();
	}
//	
	public void ClickLogin() throws Exception {
 		///Test6:submit (click on login)
		List<WebElement> login = driver2.findElements(By.xpath("//android.widget.Button"));
 		login.get(6).click();
	}

}
