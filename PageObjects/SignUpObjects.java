package PageObjects;

import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

import io.appium.java_client.android.AndroidDriver;

public class SignUpObjects {
	
	static AndroidDriver<WebElement> driver2;
	public SignUpObjects(){}
	 public SignUpObjects(AndroidDriver<WebElement> driver_outer){
		driver2 = driver_outer;
	}
	
	public void ContinueButton() throws Exception {
		///Test1:submit first form (click on continue)
		List<WebElement> continueButton = driver2.findElements(By.xpath("//android.widget.Button"));//
		continueButton.get(6).click();
	}
//	
	public void EnterEmailSignUp(String emailAddr) throws Exception {
 		///Test3:enter a password
 		List<WebElement> email = driver2.findElements(By.xpath("//android.widget.EditText"));//
 		email.get(0).click();
 		Thread.sleep(1000);
 		email.get(0).sendKeys(emailAddr);
	}
	
	public void EnterUserNameSignUp(String name) throws Exception {
		///Test2:enter a username
 		List<WebElement> userName = driver2.findElements(By.xpath("//android.widget.EditText"));//
 		userName.get(1).click();
 		Thread.sleep(1000);
 		userName.get(1).sendKeys(name);
	}
	
	public void EnterPasswordSignUp(String passwordText) throws Exception {
 		///Test3:enter a password
 		List<WebElement> password = driver2.findElements(By.xpath("//android.widget.EditText"));//
 		password.get(2).click();
 		Thread.sleep(1000);
 		password.get(2).sendKeys(passwordText);
	}
	
	public void GoLogin() throws Exception {
 		//Test2:go to login page from the sign up
		List<WebElement> goLogin = driver2.findElements(By.xpath("//android.widget.Button"));
		goLogin.get(0).click();
	}

}
