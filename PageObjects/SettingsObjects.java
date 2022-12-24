package PageObjects;

import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.remote.RemoteWebDriver;

import io.appium.java_client.MobileElement;
import io.appium.java_client.android.AndroidDriver;

public class SettingsObjects {
	static AndroidDriver<MobileElement> driver2;
//	static RemoteWebDriver driver2;
	public SettingsObjects(){}
	 public SettingsObjects(AndroidDriver<MobileElement> driver_outer){
		driver2 = driver_outer;
	}
	
//	public SettingsObjects(RemoteWebDriver driver_outer){
//		driver2 = driver_outer;
//	}
	
	public void RightLogo() throws Exception {
		MobileElement settingsObj = driver2.findElement(By.xpath ("//android.view.View[@bounds='[948,66][1080,220]']"));
		settingsObj.click();
	}
	
	public void GoSettings() throws Exception {
		MobileElement settingsObj = driver2.findElementByXPath("//android.widget.Button[@content-desc='Settings']");
		settingsObj.click();
	}
	
	public void GoAccountSettings() throws Exception {
		List<MobileElement> settingsObj = driver2.findElements(By.xpath("//android.widget.Button"));
		//Later: check this index 
		settingsObj.get(1).click();
	}
	
	//------------------------------  UpdateEmail  -----------------------------------//
	
	public void UpdateEmail() throws Exception {
		List<MobileElement> settingsObj = driver2.findElements(By.xpath("//android.widget.Button"));
		//Later: check this index 
		settingsObj.get(1).click();
	}
	

	public void NewEmail(String email) throws Exception {
		//[28,446][1053,656] : if the text with space case any problem
		MobileElement settingsObj = driver2.findElement(By.xpath("//android.widget.EditText[@text='New email address']"));//
		settingsObj.click();
		settingsObj.sendKeys(email);
	}
	
	public void UserPassword(String password) throws Exception {
		//[28,694][1053,935] : if the text with space case any problem
		MobileElement settingsObj = driver2.findElement(By.xpath("//android.widget.EditText[@text='Reddit password']"));//
		settingsObj.click();
		settingsObj.sendKeys(password);
	}
	
	public void Save() throws Exception {
		List<MobileElement> settingsObj = driver2.findElements(By.xpath("//android.widget.Button"));
		//Later: check this index 
		settingsObj.get(3).click();
	}
	
	public void Cancel() throws Exception {
//		List<MobileElement> settingsObj = driver2.findElements(By.xpath("//android.widget.Button"));
//		settingsObj.get(2).click();
		MobileElement settingsObj = driver2.findElementByXPath("//android.widget.Button[@content-desc='Cancel']");
		settingsObj.click();
	}
	
	public void Back() throws Exception {
		List<MobileElement> settingsObj = driver2.findElements(By.xpath("//android.widget.Button"));
		//Later: check this index 
		settingsObj.get(0).click();
	}
	
	//later
//	public void ForgetPassword() throws Exception {
//		List<MobileElement> settingsObj = driver2.findElements(By.xpath("//android.widget.Button"));
//		//Later: check this index 
//		settingsObj.get(1).click();
//	}
	//------------------------------  ChangePassword  -----------------------------------//
		
	public void ChangePassword() throws Exception {
		List<MobileElement> settingsObj = driver2.findElements(By.xpath("//android.widget.Button"));
		//Later: check this index 
		settingsObj.get(2).click();
	}
	
	public void UserPassword2(String password) throws Exception {
		//[30,391][1050,571] : if the text with space case any problem
		//MobileElement settingsObj = driver2.findElement(By.xpath("//android.widget.EditText[@text='Reddit password']"));//
		MobileElement settingsObj = driver2.findElement(By.xpath ("//android.widget.EditText[@bounds='[30,391][1050,571]']"));
		settingsObj.click();
		settingsObj.sendKeys(password);
	}
	
	public void NewPassword(String password) throws Exception {
		//[30,703][1050,883] : if the text with space case any problem
//		MobileElement settingsObj = driver2.findElement(By.xpath("//android.widget.EditText[@text='Reddit password']"));//
		MobileElement settingsObj = driver2.findElement(By.xpath ("//android.widget.EditText[@bounds='[30,703][1050,883]']"));
		settingsObj.click();
		settingsObj.sendKeys(password);
	}
	
	public void ConfirmNewPassword(String password) throws Exception {
		//[30,883][1050,1063] : if the text with space case any problem
//		MobileElement settingsObj = driver2.findElement(By.xpath("//android.widget.EditText[@text='Reddit password']"));//
		MobileElement settingsObj = driver2.findElement(By.xpath ("//android.widget.EditText[@bounds='[30,883][1050,1063]']"));
		settingsObj.click();
		settingsObj.sendKeys(password);
	}
	public void Save2() throws Exception {
		List<MobileElement> settingsObj = driver2.findElements(By.xpath("//android.widget.Button"));
		//Later: check this index 
		settingsObj.get(3).click();
	}
	
	public void Cancel2() throws Exception {
		//List<MobileElement> settingsObj = driver2.findElements(By.xpath("//android.widget.Button"));
		//settingsObj.get(1).click();
		MobileElement settingsObj = driver2.findElementByXPath("//android.widget.Button[@content-desc='Cancel']");
		settingsObj.click();
	}
	
	public void Back2() throws Exception {
		List<MobileElement> settingsObj = driver2.findElements(By.xpath("//android.widget.Button"));
		//Later: check this index 
		settingsObj.get(0).click();
	}
	
	//later
//	public void ForgetPassword2() throws Exception {
//		List<MobileElement> settingsObj = driver2.findElements(By.xpath("//android.widget.Button"));
//		//Later: check this index 
//		settingsObj.get(1).click();
//	}
	//------------------------------    -----------------------------------//
		
	public void Country() throws Exception {
		List<MobileElement> settingsObj = driver2.findElements(By.xpath("//android.widget.Button"));
		//Later: check this index 
		settingsObj.get(3).click();
	}
	
	public void ChooseACountry() throws Exception {
		//List<MobileElement> settingsObj = driver2.findElements(By.xpath("//android.widget.Button"));
		//settingsObj.get(1).click();
		MobileElement settingsObj = driver2.findElementByXPath("//android.widget.RadioButton[@content-desc='Andorra']");
		settingsObj.click();
	}
	
	//------------------------------ Gender   -----------------------------------//
		
	//?what the selector will be choosen? boundry or class name widget?
	public void Gender() throws Exception {
//		List<MobileElement> settingsObj = driver2.findElements(By.xpath("//android.widget.Button"));
//		//Later: check this index 
//		settingsObj.get(4).click();
		MobileElement settingsObj = driver2.findElement(By.xpath ("android.widget.Button[@bounds='[0,792][1080,946]']"));
		settingsObj.click();
				//[580,803][1080,935]
	}
	
	public void Female() throws Exception {
		//List<MobileElement> settingsObj = driver2.findElements(By.xpath("//android.widget.Button"));
		//settingsObj.get(1).click();
		MobileElement settingsObj = driver2.findElementByXPath("//android.widget.Button[@content-desc='Female']");
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
