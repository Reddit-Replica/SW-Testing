package PageObjects;

import java.util.List;

import org.openqa.selenium.By;

import io.appium.java_client.MobileElement;
import io.appium.java_client.android.AndroidDriver;

public class CreatePostObj {

	static AndroidDriver<MobileElement> driver2;
	public CreatePostObj(){}
	 public CreatePostObj(AndroidDriver<MobileElement> driver_outer){
		driver2 = driver_outer;
	}
	
	 public void HomeCreatPost() throws Exception {
	 		//Test1:go to sign up page from the login
//	 		MobileElement createPostObj = driver2.findElement(By.xpath ("//android.view.View[@bounds='[432,2003][648,2151]']"));
		 MobileElement createPostObj = driver2.findElement(By.xpath ("//android.view.View[@bounds='[432,2063][648,2211]']"));	
		 createPostObj.click();
	}
	 
	//-----------------Text and Link page ----------------//
	public void TextClick() throws Exception {
 		//Test1:go to sign up page from the login
 		MobileElement createPostObj = driver2.findElementByXPath("//android.view.View[@content-desc='Text']");
 		createPostObj.click();
	}
	
	public void LinkClick() throws Exception {
		MobileElement createPostObj = driver2.findElementByXPath("//android.view.View[@content-desc='Link']");
 		createPostObj.click();
 	
	}
	
	public void VideoClick() throws Exception {
		MobileElement createPostObj = driver2.findElementByXPath("//android.view.View[@content-desc='Video']");
 		createPostObj.click();
	 	
	}
	
	public void ImgClick() throws Exception {
		MobileElement createPostObj = driver2.findElementByXPath("//android.view.View[@content-desc='Image']");
 		createPostObj.click();
	 	
	}
	
	public void NextClick() throws Exception {
		List<MobileElement> createPostObj = driver2.findElements(By.xpath("//android.widget.Button"));
 		createPostObj.get(1).click();
	 	
	}
	
	public void ExitByX() throws Exception {
		List<MobileElement> createPostObj = driver2.findElements(By.xpath("//android.widget.Button"));
 		createPostObj.get(0).click();
	 	
	}
	
	public void EnterTitle(String titleText) throws Exception {
		List<MobileElement> title = driver2.findElements(By.xpath("//android.widget.EditText"));//
		title.get(0).click();
 		Thread.sleep(100);
 		title.get(0).sendKeys(titleText);
	}
	
	public void EnterText(String postText) throws Exception {
		///Test2:enter a username
		List<MobileElement> text = driver2.findElements(By.xpath("//android.widget.EditText"));//
		text.get(1).click();
 		Thread.sleep(100);
 		text.get(1).sendKeys(postText);
	}
	//-----------------img page ----------------//Camera
	public void ChooseImgButton() throws Exception {
		///Test2:enter a username
		List<MobileElement> createPostObj = driver2.findElements(By.xpath("//android.widget.Button"));
		createPostObj.get(2).click();
//			MobileElement createPostObj = driver2.findElement(By.xpath ("//android.view.View[@bounds='[33,366][531,809]']"));
//			createPostObj.click();
 		Thread.sleep(100);
// 		createPostObj.get(1).sendKeys();
	}
	
	public void ChooseCamera() throws Exception {
		MobileElement createPostObj = driver2.findElementByXPath("//android.view.View[@content-desc='Camera']");
 		createPostObj.click();	
	}
	
	public void TakePhoto() throws Exception {
		MobileElement createPostObj = driver2.findElementByXPath("//android.widget.Button[@content-desc='Shutter']");
 		createPostObj.click();	
	}
	
	public void AcceptTakenImg() throws Exception {
		MobileElement createPostObj = driver2.findElementByXPath("//android.widget.Button[@content-desc='Done']");
 		createPostObj.click();	
	}
	
	public void AddImgFinal() throws Exception {
		MobileElement createPostObj = driver2.findElementByXPath("//android.widget.Button[@content-desc='Add']");
 		createPostObj.click();	
	}
	
	public void ImgExist() throws Exception {
		MobileElement createPostObj = driver2.findElementByXPath("//android.widget.ImageView");
 		
	}
	//-------------------------------------------second page --------------------------------//

	public void ChooseSubreddit(String commName) throws Exception {
//	MobileElement createPostObj = driver2.findElement(By.xpath ("//android.view.View[@bounds='[432,2003][648,2151]']"));
//		createPostObj.click();	 	
		List<MobileElement> text = driver2.findElements(By.xpath("//android.widget.EditText"));//
		text.get(0).click();
 		Thread.sleep(100);
 		text.get(0).sendKeys(commName);
 		Thread.sleep(2000);
 		
		MobileElement createPostObj2 = driver2.findElement(By.xpath ("//android.view.View[@bounds='[0,396][1080,594]']"));
		createPostObj2.click();
}
	
	//---------------------------------------------------third page -----------------------------------------//
	
	public void PostSubmit() throws Exception {
		MobileElement createPostObj = driver2.findElementByXPath("//android.widget.Button[@content-desc='Post']");
 		createPostObj.click();	
	}
	
	public void RulesClick() throws Exception {
		MobileElement createPostObj = driver2.findElementByXPath("//android.widget.Button[@content-desc='Rules']");
 		createPostObj.click();	
	}
	
	public void BackToFirstPage() throws Exception {
//		MobileElement createPostObj = driver2.findElementByXPath("//android.view.View[@content-desc='Post']");
// 		createPostObj.click();	 
		List<MobileElement> createPostObj = driver2.findElements(By.xpath("//android.widget.Button"));
 		createPostObj.get(0).click();
	}
	
	public void SpoilerClick() throws Exception {
		//NOTE:the space in ' Spoiler' is correct, it is not a mistake
		MobileElement createPostObj = driver2.findElementByXPath("//android.view.View[@content-desc=' Spoiler']");
 		createPostObj.click();	 	
	}
	
	public void NSFWClick() throws Exception {
		MobileElement createPostObj = driver2.findElementByXPath("//android.view.View[@content-desc='(18) NSFW']");
 		createPostObj.click();	 	
	}
	
//	public void ChooseSubreddit2() throws Exception {
//		MobileElement createPostObj = driver2.findElement(By.xpath ("//android.view.View[@bounds='[432,2003][648,2151]']"));
// 		createPostObj.click();	 	
//	}
	
//	public void HomeExist() throws Exception {
//		 	
//	}
	
	

}
