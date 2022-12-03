package PageObjects;

import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

import io.appium.java_client.android.AndroidDriver;

public class ForgetPasswordObjects {

	static AndroidDriver<WebElement> driver2;

	public ForgetPasswordObjects() {
	}

	public ForgetPasswordObjects(AndroidDriver<WebElement> driver_outer) {
		driver2 = driver_outer;
	}

	public void ForgetPasswordButton() throws Exception {
		List<WebElement> forgetPasswordButton = driver2.findElements(By.xpath("//android.widget.Button"));
		forgetPasswordButton.get(1).click();
	}

	public void UserName(String username2) throws Exception {
		List<WebElement> userName = driver2.findElements(By.xpath("//android.widget.EditText"));
		userName.get(0).sendKeys(username2);
	}

	public void Email(String mail) throws Exception {
		List<WebElement> email = driver2.findElements(By.xpath("//android.widget.EditText"));
		email.get(1).sendKeys(mail);
	}

	public void Continue() throws Exception {
		List<WebElement> continue2 = driver2.findElements(By.xpath("//android.widget.Button"));
		continue2.get(1).click();
	}

}