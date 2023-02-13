package Appium;

import java.net.MalformedURLException;
import java.net.URL;
import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.remote.DesiredCapabilities;

import io.appium.java_client.android.AndroidDriver;
import io.appium.java_client.remote.MobileCapabilityType;

//---------------------------------------------------SUCCESS TEST---------------------------------------------------//

public class LinkInPost {

	public static void main(String[] args) throws MalformedURLException, InterruptedException {

		DesiredCapabilities dc = new DesiredCapabilities();

		dc.setCapability(MobileCapabilityType.AUTOMATION_NAME, "Appium");

		dc.setCapability(MobileCapabilityType.PLATFORM_NAME, "Android");

		dc.setCapability(MobileCapabilityType.PLATFORM_VERSION, "10");

		dc.setCapability(MobileCapabilityType.NO_RESET, true);

		dc.setCapability(MobileCapabilityType.DEVICE_NAME, "Android");

		dc.setCapability(MobileCapabilityType.AUTOMATION_NAME, "UiAutomator2");

		dc.setCapability("appium:remoteAppsCacheLimit", "0");

		dc.setCapability("appium:appPackage", "com.example.add_post");
		dc.setCapability("appium:appActivity", "com.example.add_post.MainActivity");

		dc.setCapability("appium:adbExecTimeout", "10000");

		URL url = new URL("http://localhost:4723/wd/hub");

		AndroidDriver<WebElement> driver = new AndroidDriver<WebElement>(url, dc);

		// click on textButton
		List<WebElement> pollButton = driver.findElements(By.className("android.view.View"));
		pollButton.get(4).click();

		// Write the Title of the post
		List<WebElement> title = driver.findElements(By.className("android.widget.EditText"));
		title.get(0).click();
		title.get(0).sendKeys("Youtube link");

		// Write the body of the post
		List<WebElement> body = driver.findElements(By.className("android.widget.EditText"));
		body.get(1).click();
		body.get(1).sendKeys("https://www.youtube.com/"); // then click on next button to submit a post

		List<WebElement> nextButton = driver.findElements(By.className("android.widget.Button"));
		nextButton.get(1).click();

		Thread.sleep(3000);

	}

}
