package Appium;

import org.openqa.selenium.WebElement;
import org.testng.annotations.BeforeMethod;

import PageObjects.CreatePostObj;
import io.appium.java_client.android.AndroidDriver;

public class CreatePost {

	static AndroidDriver<WebElement> driver2;

	@SuppressWarnings("unused")
	@BeforeMethod
	public static void main(String[] args) throws Exception {

		StartSession startSession = new StartSession();
		driver2 = startSession.StartApp();
		CreatePostObj createObj = new CreatePostObj(driver2);

		createObj.HomeCreatPost();
		Thread.sleep(1000);
		createObj.TextClick();
		Thread.sleep(1000);
		createObj.EnterTitle("hey titly!!");
		Thread.sleep(1000);
		createObj.EnterText("post body from samaa");
		Thread.sleep(1000);
		createObj.NextClick();
		Thread.sleep(1000);
		createObj.ChooseSubreddit();
		// then?:
//		Thread.sleep(1000);
//		createObj.
		Thread.sleep(1000);
		createObj.PostSubmit();

// 		//click enter so that the "Continue" button appears
// 		driver2.executeScript("mobile:performEditorAction", ImmutableMap.of("action", "done"));

		Thread.sleep(1000);
		System.out.println("Application finish.......");

	}

}
