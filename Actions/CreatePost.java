package appiumtests;

import java.util.List;

import org.openqa.selenium.By;
import org.testng.annotations.AfterMethod;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.Test;

import PageObjects.CreatePostObj;
import io.appium.java_client.MobileElement;
import io.appium.java_client.android.AndroidDriver;

public class CreatePost {
	
static AndroidDriver<MobileElement> driver2;
	
//	@SuppressWarnings("unused")
 	@BeforeMethod
 	//public static void main(String[] args) throws Exception {
 		public void beforetest() throws Exception {
		
		
		StartSession startSession = new StartSession();
		driver2 = startSession.StartApp();
		CreatePostObj createObj = new CreatePostObj(driver2);
 			
//		LoginObjects loginObj = new LoginObjects(driver2); 		
//		loginObj.EnterUserName("Samaa_Hazem");
//		loginObj.EnterPassword("cmp123456");
// 		driver2.executeScript("mobile:performEditorAction", ImmutableMap.of("action", "done"));
// 		loginObj.ClickLogin();
// 		
		System.out.println("Application before in.......");
	
	}
	
	@Test
	public void appiumFlutterTest() throws Exception {
		CreatePostObj createObj = new CreatePostObj(driver2);
//		LoginObjects loginObj = new LoginObjects(driver2); 		
//		loginObj.EnterUserName("Samaa_Hazem");
//		loginObj.EnterPassword("cmp123456");
// 		driver2.executeScript("mobile:performEditorAction", ImmutableMap.of("action", "done"));
// 		loginObj.ClickLogin();
// 		Thread.sleep(3000);
		
//		//2)Link 
		createObj.HomeCreatPost();
		Thread.sleep(1000);		
		createObj.LinkClick();
		Thread.sleep(100);
		createObj.EnterTitle(" link!!");
		Thread.sleep(100);
		createObj.EnterText("https://web.whatsapp.com/");
		Thread.sleep(100);
		createObj.NextClick();
		Thread.sleep(100);
		createObj.ChooseSubreddit("footbally");
		Thread.sleep(100);
		createObj.PostSubmit();
		System.out.println("in test case1");

	}
//	
	@Test
	public void PostWithText() throws Exception {
		CreatePostObj createObj = new CreatePostObj(driver2);
		//1)pass post (text)
		createObj.HomeCreatPost();
		Thread.sleep(1000);		
		createObj.TextClick();
		Thread.sleep(100);
		createObj.EnterTitle("text!!");
		Thread.sleep(100);
		createObj.EnterText("post body from samaa");
		Thread.sleep(100);
		createObj.NextClick();
		Thread.sleep(100);
		createObj.ChooseSubreddit("footbally");
		////then?:
		Thread.sleep(100);
		createObj.SpoilerClick();
		createObj.NSFWClick();
		
		Thread.sleep(100);
		createObj.PostSubmit();
		System.out.println("in test case2");

	}
//	
	@Test
	public void appiumFlutterTest33() throws Exception {
		CreatePostObj createObj = new CreatePostObj(driver2);
		//1)pass post (text)
		createObj.HomeCreatPost();
		Thread.sleep(1000);		
//		createObj.TextClick();
//		Thread.sleep(100);
//		createObj.EnterTitle("text!!");
//		Thread.sleep(1000);
//		createObj.EnterText("post body from samaa");
//		Thread.sleep(100);
//		createObj.NextClick();
//		Thread.sleep(100);
//		createObj.ChooseSubreddit("footbally");
//		////then?:
//		Thread.sleep(100);
//		createObj.SpoilerClick();
//		createObj.NSFWClick();
//		
//		Thread.sleep(100);
//		createObj.PostSubmit();
//		System.out.println("in test case3");
		
//		driver2.findElementByXPath("//android.widget.Button[@content-desc='Post']").isEnabled();
//		MobileElement createPostObj = driver2.findElementByXPath("//android.widget.Button[@content-desc='Next']");
		List<MobileElement> createPostObj = driver2.findElements(By.xpath("//android.widget.Button"));
 		
		//Assert.assertFalse((createPostObj.get(1).isEnabled()));
		if(!(createPostObj.get(1).isEnabled()))
		{
			System.out.println("false.......");

		}

	}

	@AfterMethod
	public void tearDown() {
		if (driver2 != null) {
			driver2.quit();
		}
		System.out.println("Application finish.......");
	}
 	
 	
}



//--------------//

