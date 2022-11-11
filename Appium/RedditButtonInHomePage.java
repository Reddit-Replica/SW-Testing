import java.net.MalformedURLException;
import java.net.URL;
import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.remote.DesiredCapabilities;

import io.appium.java_client.android.AndroidDriver;
import io.appium.java_client.remote.MobileCapabilityType;

public class RedditButtonInHomePage {

	public static void main(String[] args) throws MalformedURLException, InterruptedException {

		DesiredCapabilities dc = new DesiredCapabilities();

		dc.setCapability(MobileCapabilityType.AUTOMATION_NAME, "Appium");

		dc.setCapability(MobileCapabilityType.PLATFORM_NAME, "Android");

		dc.setCapability(MobileCapabilityType.PLATFORM_VERSION, "10");

		dc.setCapability(MobileCapabilityType.NO_RESET, true);

		dc.setCapability(MobileCapabilityType.DEVICE_NAME, "Android");

		dc.setCapability(MobileCapabilityType.AUTOMATION_NAME, "UiAutomator2");

		dc.setCapability("appium:remoteAppsCacheLimit", "0");

		dc.setCapability("appium:appPackage", "com.example.reddit");
		dc.setCapability("appium:appActivity", "com.example.reddit.MainActivity");

		dc.setCapability("appium:adbExecTimeout", "10000");

		URL url = new URL("http://localhost:4723/wd/hub");

		AndroidDriver<WebElement> driver = new AndroidDriver<WebElement>(url, dc);

		// click on textButton
		List<WebElement> textButton = driver.findElements(By.className("android.widget.ImageView"));
		textButton.get(0).click();

		Thread.sleep(3000);
	}

}
