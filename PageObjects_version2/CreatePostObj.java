package PageObjects;

import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

import io.appium.java_client.android.AndroidDriver;

public class CreatePostObj {

	static AndroidDriver<WebElement> driver2;
	public CreatePostObj(){}
	 public CreatePostObj(AndroidDriver<WebElement> driver_outer){
		driver2 = driver_outer;
	}
	
	 public void HomeCreatPost() throws Exception {
	 		//Test1:go to sign up page from the login
	 		List<WebElement> goSignUp = driver2.findElements(By.xpath("//android.view.View"));
	 		goSignUp.get(0).click();
	}
	 
	public void TextClick() throws Exception {
 		//Test1:go to sign up page from the login
 		List<WebElement> goSignUp = driver2.findElements(By.xpath("//android.view.View"));
 		goSignUp.get(0).click();
	}
	
	public void LinkClick() throws Exception {
		List<WebElement> goSignUp = driver2.findElements(By.xpath("//android.view.View"));
 		goSignUp.get(1).click();
 	
	}
	
	public void VideoClick() throws Exception {
		List<WebElement> goSignUp = driver2.findElements(By.xpath("//android.view.View"));
 		goSignUp.get(2).click();
	 	
	}
	
	public void ImgClick() throws Exception {
		List<WebElement> goSignUp = driver2.findElements(By.xpath("//android.view.View"));
 		goSignUp.get(3).click();
	 	
	}
	
	public void NextClick() throws Exception {
		List<WebElement> goSignUp = driver2.findElements(By.xpath("//android.widget.Button"));
 		goSignUp.get(1).click();
	 	
	}
	
	public void ExitByX() throws Exception {
		List<WebElement> goSignUp = driver2.findElements(By.xpath("//android.widget.Button"));
 		goSignUp.get(0).click();
	 	
	}
	
	public void EnterTitle(String titleText) throws Exception {
		List<WebElement> title = driver2.findElements(By.xpath("//android.widget.EditText"));//
		title.get(0).click();
 		Thread.sleep(1000);
 		title.get(0).sendKeys(titleText);
	}
	
	public void EnterText(String postText) throws Exception {
		///Test2:enter a username
		List<WebElement> text = driver2.findElements(By.xpath("//android.widget.EditText"));//
		text.get(1).click();
 		Thread.sleep(1000);
 		text.get(1).sendKeys(postText);
	}
	
	//-----------------------second page -------------//

	public void ChooseSubreddit() throws Exception {
	List<WebElement> goSignUp = driver2.findElements(By.xpath("//android.view.View"));
		goSignUp.get(3).click();	 	
}
	
	//-----------------------third page -------------//
	
	public void PostSubmit() throws Exception {
		List<WebElement> goSignUp = driver2.findElements(By.xpath("//android.view.View"));
 		goSignUp.get(3).click();
	 	
	}
	
	public void RulesClick() throws Exception {
		List<WebElement> goSignUp = driver2.findElements(By.xpath("//android.view.View"));
 		goSignUp.get(3).click();	
	}
	
	public void BackToFirstPage() throws Exception {
		List<WebElement> goSignUp = driver2.findElements(By.xpath("//android.view.View"));
 		goSignUp.get(3).click();	 	
	}
	
	public void SpoilerClick() throws Exception {
		List<WebElement> goSignUp = driver2.findElements(By.xpath("//android.view.View"));
 		goSignUp.get(3).click();	 	
	}
	
	public void NSFWClick() throws Exception {
		List<WebElement> goSignUp = driver2.findElements(By.xpath("//android.view.View"));
 		goSignUp.get(3).click();	 	
	}
	
//	public void ChooseSubreddit2() throws Exception {
//		List<WebElement> goSignUp = driver2.findElements(By.xpath("//android.view.View"));
// 		goSignUp.get(3).click();	 	
//	}
	
//	public void HomeExist() throws Exception {
//		 	
//	}
	
	

}
