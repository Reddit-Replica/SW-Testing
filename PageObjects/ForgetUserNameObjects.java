package PageObjects;

import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

import io.appium.java_client.android.AndroidDriver;

public class ForgetUserNameObjects {

	static AndroidDriver<WebElement> driver2;

	public ForgetUserNameObjects() {
	}

	public ForgetUserNameObjects(AndroidDriver<WebElement> driver_outer) {
		driver2 = driver_outer;
	}

	public void ForgetPasswordButton() throws Exception {
		List<WebElement> forgetPasswordButton = driver2.findElements(By.xpath("//android.widget.Button"));
		forgetPasswordButton.get(1).click();
	}

	public void ForgetUserNameButton() throws Exception {
		List<WebElement> forgetUserNameButton = driver2.findElements(By.xpath("//android.widget.Button"));
		forgetUserNameButton.get(1).click();
	}

	public void Email(String mail) throws Exception {
		List<WebElement> email = driver2.findElements(By.xpath("//android.widget.EditText"));
		email.get(0).sendKeys(mail);
	}

	public void Continue() throws Exception {
		List<WebElement> continue2 = driver2.findElements(By.xpath("//android.widget.Button"));
		continue2.get(1).click();
	}

}