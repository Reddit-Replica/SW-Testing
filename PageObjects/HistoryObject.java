package PageObjects;

import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.remote.RemoteWebDriver;

import io.appium.java_client.MobileElement;
import io.appium.java_client.android.AndroidDriver;

public class HistoryObject {
	static AndroidDriver<MobileElement> driver2;
//	static RemoteWebDriver driver2;
	public HistoryObject(){}
	 public HistoryObject(AndroidDriver<MobileElement> driver_outer){
		driver2 = driver_outer;
	}
	
//	public HistoryObject(RemoteWebDriver driver_outer){
//		driver2 = driver_outer;
//	}
	
	public void RightLogo() throws Exception {
		MobileElement settingsObj = driver2.findElement(By.xpath ("//android.view.View[@bounds='[948,66][1080,220]']"));
		settingsObj.click();
	}
		
	public void GoHistory() throws Exception {
		MobileElement historyObj = driver2.findElementByXPath("//android.widget.Button[@content-desc='History']");
		historyObj.click();
	}
	
	public void Back() throws Exception {//[1003,304][1069,370]
		List<MobileElement> historyObj = driver2.findElements(By.xpath("//android.widget.Button"));	  
		historyObj.get(0).click();
	}
	
	public void OpenRightBar() throws Exception {//[1003,304][1069,370]
		MobileElement historyObj = driver2.findElement(By.xpath ("//android.view.View[@bounds='[987,66][1053,220]']"));	 
		historyObj.click();
	}
	
	public void ClearHistory() throws Exception {//Clear history //[745,110][1053,242]
		List<MobileElement> historyObj = driver2.findElements(By.xpath("//android.widget.Button"));	  
		historyObj.get(0).click();
	}

	public void ViewType() throws Exception {
		List<MobileElement> historyObj = driver2.findElements(By.xpath("//android.widget.Button"));
		  
		historyObj.get(2).click();
	}

//	public void SelectAll() throws Exception {
//		.driver2..
//	}
	
	public void Card() throws Exception {
		MobileElement historyObj = driver2.findElementByXPath("//android.view.View[@content-desc='Card']");
		  
		historyObj.click();
	}
	
	public void Classic() throws Exception {
		MobileElement historyObj = driver2.findElementByXPath("//android.view.View[@content-desc='Classic']");
		  
		historyObj.click();
	}
	
	
	public void OpenSortType() throws Exception {
		List<MobileElement> historyObj = driver2.findElements(By.xpath("//android.widget.Button"));
		  
		historyObj.get(1).click();
	}
	
	public void Recent() throws Exception {
		MobileElement historyObj = driver2.findElementByXPath("//android.view.View[@content-desc='Recent']");
		  
		historyObj.click();
	}
	
	public void Upvoted() throws Exception {
		MobileElement historyObj = driver2.findElementByXPath("//android.view.View[@content-desc='Upvoted']");
		  
		historyObj.click();
	}
	
	public void Downvoted() throws Exception {
		MobileElement historyObj = driver2.findElementByXPath("//android.view.View[@content-desc='Downvoted']");
		  
		historyObj.click();
	}
	
	public void Hidden() throws Exception {
		MobileElement historyObj = driver2.findElementByXPath("//android.view.View[@content-desc='Hidden']");
		  
		historyObj.click();
	}
}
