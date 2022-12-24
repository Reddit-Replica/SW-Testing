package PageObjects;

import java.util.List;

import org.openqa.selenium.By;

import io.appium.java_client.MobileElement;
import io.appium.java_client.android.AndroidDriver;

public class PostModObjects {
	static AndroidDriver<MobileElement> driver2;
//	static RemoteWebDriver driver2;
	public PostModObjects(){}
	 public PostModObjects(AndroidDriver<MobileElement> driver_outer){
		driver2 = driver_outer;
	}
	
//	public HomePostObj(RemoteWebDriver driver_outer){
//		driver2 = driver_outer;
//	}
	
	//------------------------------ Mod  ----------------------------//
	
	public void Mod() throws Exception { //[807,716][958,782]
		MobileElement postObj = driver2.findElementByXPath("//android.view.View[@content-desc='Mod']");
		postObj.click();
//		List<MobileElement> postObj = driver2.findElements(By.xpath("//android.view.View[@content-desc='Continue']");
//		  
//		postObj.get(3).click();
	}
	
	public void MarkSpoiler() throws Exception { 
		MobileElement postObj = driver2.findElementByXPath("//android.view.View[@content-desc='MarkSpoiler']");
		postObj.click();
	}
	
	public void UnmarkSpoiler() throws Exception { 
		MobileElement postObj = driver2.findElementByXPath("//android.view.View[@content-desc='UnmarkSpoiler']");
		postObj.click();
	}
	
	public void MarkNSFW() throws Exception {//[155,873][925,978]
		MobileElement postObj = driver2.findElementByXPath("//android.view.View[@content-desc='Mark NSFW']");
		postObj.click();
	}
	
	public void UnmarkNSFW() throws Exception {//[155,873][925,978]
		MobileElement postObj = driver2.findElementByXPath("//android.view.View[@content-desc='Unmark NSFW']");
		postObj.click();
	}
	
	public void LockComments() throws Exception { //[155,978][925,1082]
		MobileElement postObj = driver2.findElementByXPath("//android.view.View[@content-desc='Lock Comments']");
		postObj.click();
	}
	
	public void UnlockComments() throws Exception { //[155,978][925,1082]
		MobileElement postObj = driver2.findElementByXPath("//android.view.View[@content-desc='Unlock Comments']");
		postObj.click();
	}
	
	public void UnstickyPost() throws Exception { //[155,1082][925,1187]
		MobileElement postObj = driver2.findElementByXPath("//android.view.View[@content-desc='Unsticky Post']");
		postObj.click();
	}
	
	public void RemovePost() throws Exception { //[155,1187][925,1291]
		MobileElement postObj = driver2.findElementByXPath("//android.view.View[@content-desc='Remove Post']");
		postObj.click();
	}
	
	public void RemoveAsSpam() throws Exception { //[155,1291][925,1396]
		MobileElement postObj = driver2.findElementByXPath("//android.view.View[@content-desc='Remove as Spam']");
		postObj.click();
	}
	
	public void ApprovePost() throws Exception { //[155,1396][925,1500]
		MobileElement postObj = driver2.findElementByXPath("//android.view.View[@content-desc='Approve Post']");
		postObj.click();
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
