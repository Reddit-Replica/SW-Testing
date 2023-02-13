package appiumtests;

import java.net.URL;

import org.openqa.selenium.ie.InternetExplorerDriver;
import org.openqa.selenium.remote.DesiredCapabilities;

import io.appium.java_client.MobileElement;
import io.appium.java_client.android.AndroidDriver;
import io.appium.java_client.remote.MobileCapabilityType;

public class StartSession {
	/*static*/ AndroidDriver<MobileElement> driver2;
	public /*static*/  AndroidDriver<MobileElement> StartApp( ) throws Exception {
	 		
	 		DesiredCapabilities cap = new DesiredCapabilities();
	 		
	 		cap.setCapability(MobileCapabilityType.AUTOMATION_NAME, "Appium");
	 		cap.setCapability("platformName", "Android");
	 		cap.setCapability("platformVersion", "13");
	 		cap.setCapability(MobileCapabilityType.NO_RESET, true);
//	 		cap.setCapability("deviceName", "phony122");#
	 		cap.setCapability("deviceName", "phony155");
	 		cap.setCapability("udid", "emulator-5554");
	 		cap.setCapability(MobileCapabilityType.AUTOMATION_NAME, "UiAutomator2");
	
	 		cap.setCapability(InternetExplorerDriver.IE_ENSURE_CLEAN_SESSION, true);
	 		
			cap.setCapability("appium:remoteAppsCacheLimit", "0");
			cap.setCapability("appPackage", "com.example.reddit");
	 		cap.setCapability("appActivity","com.example.reddit.MainActivity");
			cap.setCapability("appium:adbExecTimeout", "10000");		  
	
	        driver2 = new AndroidDriver<MobileElement>(new URL("http://127.0.0.1:4723/wd/hub"), cap);
	 		System.out.println("Application Started.......");
	 		
	 		return driver2;
		}

}
