package PageObjects;

import java.util.List;

import org.openqa.selenium.By;

import io.appium.java_client.MobileElement;
import io.appium.java_client.android.AndroidDriver;

public class SavedPageObjects {
	
	static AndroidDriver<MobileElement> driver2;
//	static RemoteWebDriver driver2;
	public SavedPageObjects(){}
	 public SavedPageObjects(AndroidDriver<MobileElement> driver_outer){
		driver2 = driver_outer;
	}	
	 
//	public SavedPageObjects(RemoteWebDriver driver_outer){
//		driver2 = driver_outer;
//	}
	 
	 public void RightLogo() throws Exception {
		MobileElement settingsObj = driver2.findElement(By.xpath ("//android.view.View[@bounds='[948,66][1080,220]']"));
		settingsObj.click();
	}
	 
	 public void GoSaved() throws Exception { //[155,1396][925,1500]
			MobileElement settingsObj2 = driver2.findElementByXPath("//android.widget.Button[@content-desc='Saved']");
			settingsObj2.click();
		}
	
	 
	 public void Back() throws Exception {//[1003,304][1069,370]
		List<MobileElement> postObj = driver2.findElements(By.xpath("//android.widget.Button"));	  
		postObj.get(0).click();
	}
	 
	 public void ChoosePost() throws Exception { //[155,1396][925,1500]
//		MobileElement postObj = driver2.findElementByXPath("//android.view.View[@content-desc='r/"+"Posts\r\n"
//				+ "Tab 1 of 2"+"']");
//		postObj.click();
		 MobileElement settingsObj = driver2.findElement(By.xpath ("//android.view.View[@bounds='[0,220][540,349]']"));
			settingsObj.click();
	}
		
	 public void ChooseComment() throws Exception { //[155,1396][925,1500]
//			MobileElement postObj = driver2.findElementByXPath("//android.view.View[@content-desc='r/"+"Comments\r\n"
//					+ "Tab 2 of 2"']");
//			postObj.click();
			 MobileElement settingsObj = driver2.findElement(By.xpath ("//android.view.View[@bounds='[540,220][1080,349]']"));
				settingsObj.click();
		}
	
//	public void DisableLogin() throws Exception {
//		MobileElement settingsObj2 = driver2.findElementByXPath("//android.widget.Button[@content-desc='Continue']");
//		Assert.assertFalse(settingsObj2.isEnabled());
//	}
//	
//	public void EnableLogin() throws Exception {
//		MobileElement settingsObj2 = driver2.findElementByXPath("//android.widget.Button[@content-desc='Continue']");
//		Assert.assertTrue(settingsObj2.isEnabled());
//	}


}
