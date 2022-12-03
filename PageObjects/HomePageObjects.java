package PageObjects;

import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

import io.appium.java_client.android.AndroidDriver;

public class HomePageObjects {

	static AndroidDriver<WebElement> driver2;

	public HomePageObjects() {
	}

	public HomePageObjects(AndroidDriver<WebElement> driver_outer) {
		driver2 = driver_outer;
	}

	public void ModeratingButton() throws Exception {
		List<WebElement> moderatingButton = driver2.findElements(By.xpath("//android.widget.Button"));
		moderatingButton.get(0).click();
	}

	public void HomePopularButton() throws Exception {
		List<WebElement> homePopularButton = driver2.findElements(By.xpath("//android.widget.Button"));
		homePopularButton.get(1).click();
	}

	public void SearchButton() throws Exception {
		List<WebElement> searchButton = driver2.findElements(By.xpath("//android.widget.Button"));
		searchButton.get(2).click();
	}

	public void PostOptionsButton() throws Exception {
		List<WebElement> postOptionsButton = driver2.findElements(By.xpath("//android.widget.Button"));
		postOptionsButton.get(3).click();
	}

	public void SaveInPostOptionsButton() throws Exception {
		List<WebElement> saveInPostOptionsButton = driver2.findElements(By.xpath("//android.view.View"));
		saveInPostOptionsButton.get(0).click();
	}

	public void HidePostInPostOptionsButton() throws Exception {
		List<WebElement> hidePostInPostOptionsButton = driver2.findElements(By.xpath("//android.view.View"));
		hidePostInPostOptionsButton.get(1).click();
	}

	public void ReportInPostOptionsButton() throws Exception {
		List<WebElement> reportInPostOptionsButton = driver2.findElements(By.xpath("//android.view.View"));
		reportInPostOptionsButton.get(2).click();
	}

	public void BlockAccountInPostOptionsButton() throws Exception {
		List<WebElement> blockAccountInPostOptionsButton = driver2.findElements(By.xpath("//android.view.View"));
		blockAccountInPostOptionsButton.get(3).click();
	}

	public void UpVoteInPostButton() throws Exception {
		List<WebElement> upVoteInPostButton = driver2.findElements(By.xpath("//android.widget.Button"));
		upVoteInPostButton.get(4).click();
	}

	public void DownVoteInPostButton() throws Exception {
		List<WebElement> downVoteInPostButton = driver2.findElements(By.xpath("//android.widget.Button"));
		downVoteInPostButton.get(5).click();
	}

	public void CommentInPosButton() throws Exception {
		List<WebElement> commentInPosButton = driver2.findElements(By.xpath("//android.view.View"));
		commentInPosButton.get(1).click();
	}

	public void ShareInPosButton() throws Exception {
		List<WebElement> shareInPosButton = driver2.findElements(By.xpath("//android.view.View"));
		shareInPosButton.get(2).click();
	}

	public void RedditLogo() throws Exception {
		List<WebElement> redditLogo = driver2.findElements(By.xpath("//android.widget.ImageView"));
		redditLogo.get(0).click();
	}

	public void AccountOptions() throws Exception {
		List<WebElement> accountOptions = driver2.findElements(By.xpath("//android.widget.Button"));
		accountOptions.get(0).click();
	}

	public void OnlineOffline() throws Exception {
		List<WebElement> onlineOffline = driver2.findElements(By.xpath("//android.widget.Button"));
		onlineOffline.get(1).click();
	}

	public void ChangeProfilePicture() throws Exception {
		List<WebElement> changeProfilePicture = driver2.findElements(By.xpath("//android.widget.Button"));
		changeProfilePicture.get(2).click();
	}

	public void MyProfile() throws Exception {
		List<WebElement> myProfile = driver2.findElements(By.xpath("//android.widget.Button"));
		myProfile.get(3).click();
	}

	public void CreateACommunity() throws Exception {
		List<WebElement> createACommunity = driver2.findElements(By.xpath("//android.widget.Button"));
		createACommunity.get(4).click();
	}

	public void Saved() throws Exception {
		List<WebElement> saved = driver2.findElements(By.xpath("//android.widget.Button"));
		saved.get(5).click();
	}

	public void History() throws Exception {
		List<WebElement> history = driver2.findElements(By.xpath("//android.widget.Button"));
		history.get(6).click();
	}

	public void PendingPosts() throws Exception {
		List<WebElement> pendingPosts = driver2.findElements(By.xpath("//android.widget.Button"));
		pendingPosts.get(7).click();
	}

	public void Drafts() throws Exception {
		List<WebElement> drafts = driver2.findElements(By.xpath("//android.widget.Button"));
		drafts.get(8).click();
	}

	public void Settings() throws Exception {
		List<WebElement> settings = driver2.findElements(By.xpath("//android.widget.Button"));
		settings.get(9).click();
	}

	/*
	 * public void HomeButton() throws Exception { List<WebElement> homeButton =
	 * driver2.findElements(By.xpath("//android.view.View"));
	 * homeButton.get(4).click(); }
	 * 
	 * public void DiscoverButton() throws Exception { List<WebElement>
	 * discoverButton = driver2.findElements(By.xpath("//android.view.View"));
	 * discoverButton.get(0).click(); }
	 */
}
