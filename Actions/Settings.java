package appiumtests;

import org.openqa.selenium.remote.RemoteWebDriver;
import org.testng.annotations.AfterMethod;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.BeforeTest;
import org.testng.annotations.Test;

import com.google.common.collect.ImmutableMap;

import PageObjects.SettingsObjects;
import io.appium.java_client.MobileElement;
import io.appium.java_client.android.AndroidDriver;

public class Settings {
	
		static AndroidDriver<MobileElement> driver2;
		//static RemoteWebDriver driver2;
		
		//@BeforeTest
		@BeforeMethod
		public void beforetest() throws Exception {
	 		System.out.println("Application inter before.......");
			StartSession startSession = new StartSession();
			driver2 = startSession.StartApp();		
			Thread.sleep(1000); 
			
//			LoginObjects loginObj = new LoginObjects(driver2);
			
			SettingsObjects settingsObj = new SettingsObjects(driver2);
			settingsObj.RightLogo();
			Thread.sleep(3000);
			settingsObj.GoSettings();
			Thread.sleep(3000);
			
		}

		@Test//(groups = {"current"})
		public void CancelUpdateEmail() throws Exception {
			SettingsObjects settingsObj = new SettingsObjects(driver2);
			settingsObj.GoAccountSettings();
			Thread.sleep(3000);
			settingsObj.UpdateEmail();
			Thread.sleep(3000);
			//settingsObj.Cancel();
			MobileElement settingsObj5 = driver2.findElementByXPath("//android.widget.Button[@content-desc='Cancel']");
			settingsObj5.click();
			Thread.sleep(3000);
			//later:
			//check that login with new password fail and the old password pass
		}

		@Test//(groups = {"current"})
		public void BackFromUpdateEmail() throws Exception {
			SettingsObjects settingsObj = new SettingsObjects(driver2);
			settingsObj.GoAccountSettings();
			Thread.sleep(3000);
			settingsObj.UpdateEmail();
			Thread.sleep(3000);
			settingsObj.Back();
			//Thread.sleep(3000);
			//later:
			//check that login with new password fail and the old password pass
		}		
		
		
		@Test//(groups = {"current"})
		public void UpdateEmail() throws Exception {
			SettingsObjects settingsObj = new SettingsObjects(driver2);
			settingsObj.GoAccountSettings();
			Thread.sleep(3000);
			settingsObj.UpdateEmail();
			Thread.sleep(3000);
			settingsObj.NewEmail("samaareddittest@gmail.com");
			Thread.sleep(3000);
			settingsObj.UserPassword("cmp123456");
			Thread.sleep(3000);		
	 		driver2.executeScript("mobile:performEditorAction", ImmutableMap.of("action", "done"));
	 		Thread.sleep(3000);
	 		settingsObj.Save();
			Thread.sleep(3000);
//			List<MobileElement> settingsObj4 = driver2.findElements(By.xpath("//android.widget.Button"));
//			settingsObj4.get(3).click();
			Thread.sleep(3000);

		}
//		
		@Test//(groups = {"current"})
		public void CancelChangePassword() throws Exception {
			SettingsObjects settingsObj = new SettingsObjects(driver2);
			settingsObj.GoAccountSettings();
			Thread.sleep(3000);
			settingsObj.ChangePassword();
			Thread.sleep(3000);
			settingsObj.Cancel2();	
			Thread.sleep(3000);
			//later:
			//check that login with new password fail and the old password pass
		}

		@Test//(groups = {"current"})
		public void BackFromChangePassword() throws Exception {
			SettingsObjects settingsObj = new SettingsObjects(driver2);
			settingsObj.GoAccountSettings();
			Thread.sleep(3000);
			settingsObj.ChangePassword();
			Thread.sleep(3000);
			settingsObj.Back2();
			Thread.sleep(3000);
			//later:
			//check that login with new password fail and the old password pass
		}
		
		@Test//(groups = {"current"})
		public void ChangePassword() throws Exception {
			SettingsObjects settingsObj = new SettingsObjects(driver2);
			settingsObj.GoAccountSettings();
			Thread.sleep(3000);
			settingsObj.ChangePassword();
			Thread.sleep(3000);
			settingsObj.UserPassword2("cmp123456");
			Thread.sleep(3000);
			settingsObj.NewPassword("cmp12345678");
			Thread.sleep(3000);
			settingsObj.ConfirmNewPassword("cmp12345678");
			Thread.sleep(3000);		
	 		driver2.executeScript("mobile:performEditorAction", ImmutableMap.of("action", "done"));
	 		Thread.sleep(3000);
	 		settingsObj.Save2();
			Thread.sleep(3000);
			
			//later:
			//check that login with old password fail and the new password pass	
		}

		@Test//(groups = {"current"})
		public void ChooseCountry() throws Exception {
			SettingsObjects settingsObj = new SettingsObjects(driver2);
			settingsObj.GoAccountSettings();
			Thread.sleep(3000);
			settingsObj.Country();
			Thread.sleep(3000);	
			settingsObj.ChooseACountry();
			Thread.sleep(3000);	
		}
//		
		
		
		
		
		
		//error
		@Test//(groups = {"current"})
		public void ChangeGender() throws Exception {
			SettingsObjects settingsObj = new SettingsObjects(driver2);
			settingsObj.GoAccountSettings();
			Thread.sleep(3000);
			settingsObj.Gender();
			Thread.sleep(3000);	
		}
//		@AfterTest
		@AfterMethod
		public void tearDown() {
			if (driver2 != null) {
				driver2.quit();
				System.out.println("Application not null .......");
			}
			System.out.println("Application after.......");
		}

}
