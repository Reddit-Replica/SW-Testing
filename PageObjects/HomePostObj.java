package PageObjects;

import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.remote.RemoteWebDriver;

import io.appium.java_client.MobileElement;
import io.appium.java_client.android.AndroidDriver;

public class HomePostObj {
	static AndroidDriver<MobileElement> driver2;
//	static RemoteWebDriver driver2;
	public HomePostObj(){}
	 public HomePostObj(AndroidDriver<MobileElement> driver_outer){
		driver2 = driver_outer;
	}
	
//	public HomePostObj(RemoteWebDriver driver_outer){
//		driver2 = driver_outer;
//	}
			
	public void UpVote() throws Exception {//[63,719][123,779]
//		MobileElement settingsObj = driver2.findElementByXPath("//android.widget.Button[@content-desc='Continue']");
//		settingsObj.click();
		List<MobileElement> postObj = driver2.findElements(By.xpath("//android.widget.Button"));
		  
		postObj.get(3).click();
		System.out.println(postObj);

	}
	
	public void DownVote() throws Exception {//[252,719][311,779]
		List<MobileElement> postObj = driver2.findElements(By.xpath("//android.widget.Button"));
		  
		postObj.get(4).click();
	}

	//----------------------- Both Type of Posts ----------------------//

	public void DropDownHome() throws Exception {//[1003,304][1069,370]
		List<MobileElement> postObj = driver2.findElements(By.xpath("//android.widget.Button"));	  
		postObj.get(2).click();
	}
	
	public void DropDownInComm() throws Exception {//[1003,304][1069,370]
		List<MobileElement> postObj = driver2.findElements(By.xpath("//android.widget.Button"));	  
		postObj.get(4).click();
	}
	
	public void SavePost() throws Exception { 
		MobileElement postObj = driver2.findElementByXPath("//android.view.View[@content-desc='Save']");
		postObj.click();
	}
	
	public void UnsavePost() throws Exception { 
		MobileElement postObj = driver2.findElementByXPath("//android.view.View[@content-desc='UnSave']");
		postObj.click();
	}
	
	//-----------------------  Others Posts ----------------------//

	//it is "Hide Post" not "UnHide Post", right?!
	public void Hide() throws Exception { 
		MobileElement postObj = driver2.findElementByXPath("//android.view.View[@content-desc='UnHide post']");
		postObj.click();
	}
	
	public void BlockAcount() throws Exception { 
		MobileElement postObj = driver2.findElementByXPath("//android.view.View[@content-desc='Block Acount']");
		postObj.click();
	}
	
	//----------------------- My Posts ----------------------//

	public void DeletePost() throws Exception { 
		MobileElement postObj = driver2.findElementByXPath("//android.view.View[@content-desc='Delete']");
		postObj.click();
//		List<MobileElement> postObj = driver2.findElements(By.xpath("//android.view.View[@content-desc='Continue']");
//		postObj.get(3).click();
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
