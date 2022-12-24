package Appium;

import org.openqa.selenium.WebElement;
import org.testng.annotations.BeforeMethod;

import PageObjects.CreateCommunityObjects;
import io.appium.java_client.android.AndroidDriver;

public class CreateCommunity {

	static AndroidDriver<WebElement> driver2;

	@BeforeMethod
	public static void main(String[] args) throws Exception {

		StartSession startSession = new StartSession();
		driver2 = startSession.StartApp();
		CreateCommunityObjects communityObj = new CreateCommunityObjects(driver2);

		communityObj.ModeratingButton();
		communityObj.ModeratingButton();
		communityObj.ModeratingButton();

		// communityObj.ModFeed();
		// driver2.pressKey(new KeyEvent(AndroidKey.BACK));

		// communityObj.ModQueue();
		// driver2.pressKey(new KeyEvent(AndroidKey.BACK));

		// communityObj.ModMail();
		// driver2.pressKey(new KeyEvent(AndroidKey.BACK));

		// communityObj.YourCommunities();
		// communityObj.YourCommunities();

		// communityObj.CustomFeeds();
		// driver2.pressKey(new KeyEvent(AndroidKey.BACK));

		// communityObj.All();
		// driver2.pressKey(new KeyEvent(AndroidKey.BACK));

		// communityObj.CreateACommunity();
		// communityObj.CommunityName("karim");
		// driver2.pressKey(new KeyEvent(AndroidKey.BACK));
		// communityObj.CommunityType();

		// communityObj.PlusCommunity();
		// communityObj.PlusCommunity();
		// communityObj.PlusCommunity();

		// communityObj.SubmitCreateCommunity();

		System.out.println("Application finish.......");
	}

}
