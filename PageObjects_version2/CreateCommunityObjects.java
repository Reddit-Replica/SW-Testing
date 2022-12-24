package PageObjects;

import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

import io.appium.java_client.android.AndroidDriver;

public class CreateCommunityObjects {

	static AndroidDriver<WebElement> driver2;

	public CreateCommunityObjects() {
	}

	public CreateCommunityObjects(AndroidDriver<WebElement> driver_outer) {
		driver2 = driver_outer;
	}

	public void ModeratingButton() throws Exception {
		List<WebElement> moderatingButton = driver2.findElements(By.xpath("//android.widget.Button"));
		moderatingButton.get(0).click();
	}

	public void ModFeed() throws Exception {
		List<WebElement> modFeed = driver2.findElements(By.xpath("//android.widget.Button"));
		modFeed.get(1).click();
	}

	public void ModQueue() throws Exception {
		List<WebElement> modQueue = driver2.findElements(By.xpath("//android.widget.Button"));
		modQueue.get(2).click();
	}

	public void ModMail() throws Exception {
		List<WebElement> modMail = driver2.findElements(By.xpath("//android.widget.Button"));
		modMail.get(3).click();
	}

	public void YourCommunities() throws Exception {
		List<WebElement> yourCommunities = driver2.findElements(By.xpath("//android.widget.Button"));
		yourCommunities.get(4).click();
	}

	public void CreateACommunity() throws Exception {
		List<WebElement> createACommunity = driver2.findElements(By.xpath("//android.widget.Button"));
		createACommunity.get(5).click();
	}

	public void CustomFeeds() throws Exception {
		List<WebElement> customFeeds = driver2.findElements(By.xpath("//android.widget.Button"));
		customFeeds.get(6).click();
	}

	public void All() throws Exception {
		List<WebElement> all = driver2.findElements(By.xpath("//android.widget.Button"));
		all.get(7).click();
	}

	public void CommunityName(String commName) throws Exception {
		List<WebElement> communityName = driver2.findElements(By.xpath("//android.widget.EditText"));
		communityName.get(0).click();
		communityName.get(0).sendKeys(commName);
	}

	public void CommunityType() throws Exception {
		List<WebElement> communityType = driver2.findElements(By.xpath("//android.view.View"));
		communityType.get(0).click();
	}

	public void PlusCommunity() throws Exception {
		List<WebElement> plusCommunity = driver2.findElements(By.xpath("//android.view.View"));
		plusCommunity.get(1).click();
	}

	public void SubmitCreateCommunity() throws Exception {
		List<WebElement> submitCreateCommunity = driver2.findElements(By.xpath("//android.widget.Button"));
		submitCreateCommunity.get(1).click();
	}

}