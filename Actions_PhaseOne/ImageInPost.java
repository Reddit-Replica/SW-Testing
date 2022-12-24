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

public class ImageInPost {

	public static void main(String[] args) throws InterruptedException, MalformedURLException {

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
		List<WebElement> imageButton = driver.findElements(By.className("android.view.View"));
		imageButton.get(1).click();

		Thread.sleep(3000);

		// Write the Title of the post
		List<WebElement> images = driver.findElements(By.className("android.widget.LinearLayout"));
		images.get(1).click();

		Thread.sleep(3000);

		List<WebElement> image = driver.findElements(By.className("android.widget.ImageView"));
		image.get(28).click();

		Thread.sleep(3000);

		List<WebElement> cropButton = driver.findElements(By.className("android.widget.Button"));
		cropButton.get(2).click();

		Thread.sleep(3000);

		List<WebElement> imageCrop = driver.findElements(By.className("android.widget.FrameLayout"));
		imageCrop.get(3).click();

		Thread.sleep(3000);

		List<WebElement> submitCrop = driver.findElements(By.className("android.widget.Button"));
		submitCrop.get(0).click();

		Thread.sleep(3000);

		List<WebElement> addButton = driver.findElements(By.className("android.widget.Button"));
		addButton.get(4).click();

		Thread.sleep(3000);

		List<WebElement> title = driver.findElements(By.className("android.widget.EditText"));
		title.get(0).click();
		title.get(0).sendKeys("HaithoOom");

		Thread.sleep(3000);

		List<WebElement> nextButton = driver.findElements(By.className("android.widget.Button"));
		nextButton.get(1).click();

		Thread.sleep(3000);

	}

}
