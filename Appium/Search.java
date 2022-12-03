package Appium;

import org.openqa.selenium.WebElement;
import org.testng.annotations.BeforeMethod;

import PageObjects.SearchObjects;
import io.appium.java_client.android.AndroidDriver;
import io.appium.java_client.android.nativekey.AndroidKey;
import io.appium.java_client.android.nativekey.KeyEvent;

public class Search {

	static AndroidDriver<WebElement> driver2;

	@BeforeMethod
	public static void main(String[] args) throws Exception {

		StartSession startSession = new StartSession();
		driver2 = startSession.StartApp();
		SearchObjects searchObj = new SearchObjects(driver2);

		searchObj.SearchButton();

		searchObj.SearchReddit("karim");
		driver2.pressKey(new KeyEvent(AndroidKey.ENTER));

		searchObj.Posts();
		searchObj.Comments();
		searchObj.Communities();
		searchObj.People();
		searchObj.Media();

		System.out.println("Application finish.......");
	}

}
