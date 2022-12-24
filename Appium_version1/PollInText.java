import java.net.MalformedURLException;
import java.net.URL;
import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.remote.DesiredCapabilities;

import io.appium.java_client.android.AndroidDriver;
import io.appium.java_client.remote.MobileCapabilityType;

//---------------------------------------------------FAILED TEST---------------------------------------------------//

public class PollInText {

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
		List<WebElement> textButton = driver.findElements(By.className("android.view.View"));
		textButton.get(5).click();

		// Write the Title of the post
		List<WebElement> title = driver.findElements(By.className("android.widget.EditText"));

		// Write the body of the post
		List<WebElement> body = driver.findElements(By.className("android.widget.EditText"));
		title.get(0).click();
		title.get(0).sendKeys("Haitham");
		body.get(1).click();
		body.get(1).sendKeys("Haithooooooooooooooooom El Gamed Gde"); // then click on next button to

		// extend the options
		List<WebElement> extendOptions = driver.findElements(By.className("android.view.View"));
		extendOptions.get(2).click();
		body.get(0).sendKeys("Haithooooooooooooooooom1 El Gamed Gde");
		Thread.sleep(3000);
		body.get(1).sendKeys("Haithooooooooooooooooom1 El Gamed Gde");
		Thread.sleep(3000);
		body.get(2).sendKeys("Haithooooooooooooooooom1 El Gamed Gde");
		Thread.sleep(3000);
		body.get(3).sendKeys("Haithooooooooooooooooom1 El Gamed Gde");
		Thread.sleep(3000);

		// submit a post
		List<WebElement> nextButton = driver.findElements(By.className("android.widget.Button"));
		nextButton.get(1).click();

		Thread.sleep(3000);

	}

}
