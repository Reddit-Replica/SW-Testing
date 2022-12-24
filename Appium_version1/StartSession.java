package appiumtests;

import java.net.URL;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.remote.DesiredCapabilities;

import io.appium.java_client.android.AndroidDriver;
import io.appium.java_client.remote.MobileCapabilityType;

public class StartSession {
	 AndroidDriver<WebElement> driver2;
	public  AndroidDriver<WebElement> StartApp( ) throws Exception {
	 		
	 		DesiredCapabilities cap = new DesiredCapabilities();
	 		
	 		cap.setCapability(MobileCapabilityType.AUTOMATION_NAME, "Appium");
	 		cap.setCapability("platformName", "Android");
	 		cap.setCapability("platformVersion", "13");
	 		cap.setCapability(MobileCapabilityType.NO_RESET, true);
	 		cap.setCapability("deviceName", "phony122");
	 		cap.setCapability("udid", "emulator-5554");
	 		cap.setCapability(MobileCapabilityType.AUTOMATION_NAME, "UiAutomator2");
	
			cap.setCapability("appium:remoteAppsCacheLimit", "0");
			cap.setCapability("appPackage", "com.example.readdit");
	 		cap.setCapability("appActivity","com.example.reddit.MainActivity");
			cap.setCapability("appium:adbExecTimeout", "10000");		  
	
	        driver2 = new AndroidDriver<WebElement>(new URL("http://127.0.0.1:4723/wd/hub"), cap);
	 		System.out.println("Application Started.......");
	 		
	 		return driver2;
		}

}
