package Appium;

import org.openqa.selenium.WebElement;
import org.testng.annotations.BeforeMethod;

import PageObjects.HomePageObjects;
import io.appium.java_client.android.AndroidDriver;
import io.appium.java_client.android.nativekey.AndroidKey;
import io.appium.java_client.android.nativekey.KeyEvent;

public class HomePage {

	static AndroidDriver<WebElement> driver2;

	@BeforeMethod
	public static void main(String[] args) throws Exception {

		StartSession startSession = new StartSession();
		driver2 = startSession.StartApp();
		HomePageObjects homeObj = new HomePageObjects(driver2);

		// homeObj.ModeratingButton();
		// driver2.pressKey(new KeyEvent(AndroidKey.BACK));

		// homeObj.HomePopularButton();
		// driver2.pressKey(new KeyEvent(AndroidKey.BACK));

		// homeObj.SearchButton();
		// driver2.pressKey(new KeyEvent(AndroidKey.BACK));

		// homeObj.DiscoverButton();
		// driver2.pressKey(new KeyEvent(AndroidKey.BACK));

		// homeObj.PostOptionsButton();
		// homeObj.SaveInPostOptionsButton();

		// homeObj.PostOptionsButton();
		// homeObj.HidePostInPostOptionsButton();

		// homeObj.PostOptionsButton();
		// homeObj.ReportInPostOptionsButton();

		// homeObj.PostOptionsButton();
		// homeObj.BlockAccountInPostOptionsButton();

		// homeObj.UpVoteInPostButton();
		// homeObj.DownVoteInPostButton();

		// homeObj.CommentInPosButton();
		// homeObj.ShareInPosButton();

		// homeObj.RedditLogo();

		// homeObj.AccountOptions();
		// driver2.pressKey(new KeyEvent(AndroidKey.BACK));

		// homeObj.OnlineOffline();
		// driver2.pressKey(new KeyEvent(AndroidKey.BACK));

		// homeObj.ChangeProfilePicture();

		// homeObj.MyProfile();
		// driver2.pressKey(new KeyEvent(AndroidKey.BACK));

		// homeObj.CreateACommunity();
		// driver2.pressKey(new KeyEvent(AndroidKey.BACK));

		// homeObj.Saved();
		// driver2.pressKey(new KeyEvent(AndroidKey.BACK));

		// homeObj.History();
		// driver2.pressKey(new KeyEvent(AndroidKey.BACK));

		// homeObj.PendingPosts();
		// driver2.pressKey(new KeyEvent(AndroidKey.BACK));

		// homeObj.Drafts();
		// driver2.pressKey(new KeyEvent(AndroidKey.BACK));

		// homeObj.Settings();
		driver2.pressKey(new KeyEvent(AndroidKey.BACK));

		System.out.println("Application finish.......");
	}

}
