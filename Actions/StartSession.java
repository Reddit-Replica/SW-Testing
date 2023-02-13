package Appium;

import java.net.URL;

import org.openqa.selenium.remote.DesiredCapabilities;

import io.appium.java_client.MobileElement;
import io.appium.java_client.android.AndroidDriver;
import io.appium.java_client.remote.MobileCapabilityType;

public class StartSession {

	public AndroidDriver<MobileElement> StartApp() throws Exception {

		DesiredCapabilities dc = new DesiredCapabilities();

		dc.setCapability(MobileCapabilityType.AUTOMATION_NAME, "Appium");

		dc.setCapability(MobileCapabilityType.PLATFORM_NAME, "Android");

		dc.setCapability(MobileCapabilityType.PLATFORM_VERSION, "10");

		dc.setCapability(MobileCapabilityType.DEVICE_NAME, "Android");

		dc.setCapability(MobileCapabilityType.APP, "C:\\Program Files\\read.apk");

		URL url = new URL("http://127.0.0.1:4723/wd/hub");

		AndroidDriver<MobileElement> driver2 = new AndroidDriver<MobileElement>(url, dc);
		System.out.println("Application Started.......");

		return driver2;
	}

}
