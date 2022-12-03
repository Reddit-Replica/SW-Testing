package PageObjects;

import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

import io.appium.java_client.android.AndroidDriver;

public class SearchObjects {

	static AndroidDriver<WebElement> driver2;

	public SearchObjects() {
	}

	public SearchObjects(AndroidDriver<WebElement> driver_outer) {
		driver2 = driver_outer;
	}

	public void SearchButton() throws Exception {
		List<WebElement> searchButton = driver2.findElements(By.xpath("//android.widget.Button"));
		searchButton.get(2).click();
	}

	public void SearchReddit(String searchWords) throws Exception {
		List<WebElement> searchReddit = driver2.findElements(By.xpath("//android.widget.EditText"));
		searchReddit.get(0).sendKeys(searchWords);
	}

	public void Posts() throws Exception {
		List<WebElement> posts = driver2.findElements(By.xpath("//android.view.View"));
		posts.get(0);
	}

	public void Comments() throws Exception {
		List<WebElement> comments = driver2.findElements(By.xpath("//android.view.View"));
		comments.get(1).click();
	}

	public void Communities() throws Exception {
		List<WebElement> communities = driver2.findElements(By.xpath("//android.view.View"));
		communities.get(2).click();
	}

	public void People() throws Exception {
		List<WebElement> people = driver2.findElements(By.xpath("//android.view.View"));
		people.get(3).click();
	}

	public void Media() throws Exception {
		List<WebElement> media = driver2.findElements(By.xpath("//android.view.View"));
		media.get(4).click();
	}

}