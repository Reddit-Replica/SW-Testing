package PageObjects;

import java.util.List;

import org.openqa.selenium.By;

import io.appium.java_client.MobileElement;
import io.appium.java_client.android.AndroidDriver;

public class SharePostObject {
	static AndroidDriver<MobileElement> driver2;
//	static RemoteWebDriver driver2;
	public SharePostObject(){}
	 public SharePostObject(AndroidDriver<MobileElement> driver_outer){
		driver2 = driver_outer;
	}
	
//	public HomePostObj(RemoteWebDriver driver_outer){
//		driver2 = driver_outer;
//	}
	
	//------------------------------  share  ----------------------------//
	
	public void Share() throws Exception { 
		MobileElement postObj = driver2.findElementByXPath("//android.view.View[@content-desc='Share']");
		postObj.click();
	}
	
	public void ShareInCommunity() throws Exception {//[1003,304][1069,370]
		MobileElement postObj = driver2.findElement(By.xpath ("//android.view.View[@bounds='[267,1947][432,2112]']"));	 
		postObj.click();
	}
	
	public void ShareInMyProfile() throws Exception {//[1003,304][1069,370]
		MobileElement postObj = driver2.findElement(By.xpath ("//android.view.View[@bounds='[678,1947][843,2112]']"));	 
		postObj.click();
	}
	
	public void ChooseACommunity(String commName) throws Exception { //[155,1396][925,1500]
		MobileElement postObj = driver2.findElementByXPath("//android.view.View[@content-desc='r/"+commName+"']");
		postObj.click();
	}
	
	public void Back() throws Exception {//[1003,304][1069,370]
		List<MobileElement> postObj = driver2.findElements(By.xpath("//android.widget.Button"));	  
		postObj.get(0).click();
	}
	
	public void PostShared() throws Exception {//[1003,304][1069,370]
		List<MobileElement> postObj = driver2.findElements(By.xpath("//android.widget.Button"));	  
		postObj.get(1).click();
	}
	
	public void EditTitle(String newtitle) throws Exception {
 		///Test3:enter a password
 		List<MobileElement> postObj = driver2.findElements(By.xpath("//android.widget.EditText"));//
 		postObj.get(0).click();
 		Thread.sleep(100);
 		postObj.get(0).sendKeys(newtitle);
	}
	
	//------------------------------        --------------------------------//
	public void search() throws Exception {//[1003,304][1069,370]
		List<MobileElement> postObj = driver2.findElements(By.xpath("//android.widget.Button"));	  
		postObj.get(1).click();
	}
	
	public void SearchFor(String newtitle) throws Exception {
 		///Test3:enter a password
 		List<MobileElement> postObj = driver2.findElements(By.xpath("//android.widget.EditText"));//
 		postObj.get(0).click();
 		Thread.sleep(100);
 		postObj.get(0).sendKeys(newtitle);
	}
	
//	public void Cancel() throws Exception {//[1003,304][1069,370]
//		List<MobileElement> postObj = driver2.findElements(By.xpath("//android.widget.Button"));	  
//		postObj.get(1).click();
//	}
	
	public void OpenCommunities() throws Exception {//[1003,304][1069,370]
		MobileElement postObj = driver2.findElement(By.xpath ("//android.view.View[@bounds='[510,220][829,349]']"));	 
		postObj.click();
	}
	
	public void OpenFirstResult() throws Exception {//[1003,304][1069,370]
		MobileElement postObj = driver2.findElement(By.xpath ("//android.view.View[@bounds='[0,349][1080,528]']"));	 
		postObj.click();
	}

}
