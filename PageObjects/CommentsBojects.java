package PageObjects;

import org.openqa.selenium.interactions.touch.TouchActions;
import org.testng.Assert;

import io.appium.java_client.MobileElement;
import io.appium.java_client.android.AndroidDriver;

public class CommentsBojects {

	static AndroidDriver<MobileElement> driver2;

	public CommentsBojects() {
	}

	public CommentsBojects(AndroidDriver<MobileElement> driver_outer) {
		driver2 = driver_outer;
	}

	public void EnterUserName(String Username) throws Exception {
		MobileElement EnterUserName = driver2
				.findElementByXPath("//android.widget.EditText[@bounds='[30,753][690,862]']");
		EnterUserName.click();
		EnterUserName.sendKeys(Username);
	}

	public void EnterPassword(String password) throws Exception {
		MobileElement EnterPassword = driver2.findElementByXPath("//android.widget.EditText[@text='Password']");
		EnterPassword.click();
		EnterPassword.sendKeys(password);
	}

	public void ContinueButton() throws Exception {
		MobileElement ContinueButton = driver2.findElementByXPath("//android.widget.Button[@content-desc='Continue']");
		Assert.assertEquals(ContinueButton.getAttribute("contentDescription"), "Continue");
		ContinueButton.click();
	}

	// Start of Home objects

	public void ClickOnComments() throws Exception {
		MobileElement ClickOnComments = driver2.findElementByXPath("//android.view.View[@bounds='[0,176][720,956]']");
		ClickOnComments.click();
	}

	public void ClickOnThreeDots() throws Exception {
		MobileElement ClickOnThreeDots = driver2
				.findElementByXPath("//android.widget.Button[@bounds='[369,960][417,1008]']");
		TouchActions action = new TouchActions(driver2);
		action.scroll(ClickOnThreeDots, 10, 100);
		action.perform();
		ClickOnThreeDots.click();
	}

	public void Save() throws Exception {
		MobileElement Save = driver2.findElementByXPath("//android.view.View[@content-desc='Save']");
		Save.click();

	}

	public void Share() throws Exception {
		MobileElement Save = driver2.findElementByXPath("//android.view.View[@content-desc='Share']");
		Save.click();

	}

	public void Copytext() throws Exception {
		MobileElement Copytext = driver2.findElementByXPath("//android.view.View[@content-desc='Copy text']");
		Copytext.click();

	}

	public void CollapseThread() throws Exception {
		MobileElement CollapseThread = driver2
				.findElementByXPath("//android.view.View[@content-desc='Collapse Thread']");
		CollapseThread.click();

	}

	public void BlockAcount() throws Exception {
		MobileElement BlockAcount = driver2.findElementByXPath("//android.view.View[@content-desc='Block Acount']");
		BlockAcount.click();

	}

	public void MarkNSFW() throws Exception {
		MobileElement MarkNSFW = driver2.findElementByXPath("//android.view.View[@content-desc='Mark NSFW']");
		MarkNSFW.click();

	}

	public void Follow() throws Exception {
		MobileElement Follow = driver2.findElementByXPath("//android.view.View[@content-desc='Follow']");
		Follow.click();

	}

	public void Edit() throws Exception {
		MobileElement Edit = driver2.findElementByXPath("//android.view.View[@content-desc='Edit']");
		Edit.click();

	}

	public void Delete() throws Exception {
		MobileElement Delete = driver2.findElementByXPath("//android.view.View[@content-desc='Delete']");
		Delete.click();

	}

	public void AddaCommentTab() throws Exception {
		MobileElement AddaComment = driver2.findElementByXPath("//android.view.View[@content-desc='Add a comment']");
		AddaComment.click();
	}

	public void WriteAComment(String commentContent) throws Exception {
		MobileElement WriteAComment = driver2.findElementByXPath("//android.view.View[@bounds='[0,238][720,974]']");
		WriteAComment.click();
		WriteAComment.sendKeys(commentContent);
	}

	public void ClickOnPostComment() throws Exception {
		MobileElement ClickOnPostComment = driver2.findElementByXPath("//android.widget.Button[@content-desc='Post']");
		ClickOnPostComment.click();

	}

	public void AddaReplyTab() throws Exception {
		MobileElement AddaReplyTab = driver2.findElementByXPath("//android.view.View[@content-desc='Reply']");
		AddaReplyTab.click();
	}

	public void WriteAReply(String commentContent) throws Exception {
		MobileElement WriteAReply = driver2.findElementByXPath("//android.view.View[@bounds='[0,238][720,974]']");
		WriteAReply.click();
		WriteAReply.sendKeys(commentContent);
	}

	public void ClickOnPostReply() throws Exception {
		MobileElement ClickOnPostReply = driver2.findElementByXPath("//android.widget.Button[@content-desc='Post']");
		ClickOnPostReply.click();

	}

	public void ClickOnAddLink() throws Exception {
		MobileElement ClickOnAddLink = driver2
				.findElementByXPath("//android.widget.Button[@bounds='[0,1010][64,1074]']");
		ClickOnAddLink.click();
	}

	public void WriteTextInAddLink(String TextContent) throws Exception {
		MobileElement WriteTextInAddLink = driver2.findElementByXPath("//android.widget.EditText[@text='Text']");
		WriteTextInAddLink.click();
		WriteTextInAddLink.sendKeys(TextContent);
	}

	public void WriteLinkInAddLink(String LinkContent) throws Exception {
		MobileElement WriteLinkInAddLink = driver2.findElementByXPath("//android.widget.EditText[@text='Text']");
		WriteLinkInAddLink.click();
		WriteLinkInAddLink.sendKeys(LinkContent);
	}

	public void ClickOnOkInAddLink() throws Exception {
		MobileElement ClickOnOkInAddLink = driver2.findElementByXPath("//android.widget.EditText[@content-desc='Ok']");
		ClickOnOkInAddLink.click();
	}

	public void ClickOnAddGIF() throws Exception {
		MobileElement ClickOnAddGIFInAddLink = driver2
				.findElementByXPath("//android.widget.Button[@bounds='[624,1504][720,1600]']");
		ClickOnAddGIFInAddLink.click();
	}

	public void ClickOnAGIF() throws Exception {
		MobileElement ClickOnAGIF = driver2
				.findElementByXPath("//android.widget.ImageView[@bounds='[16,712][352,1310]']");
		ClickOnAGIF.click();
	}

	public void ClickOnAddPhoto() throws Exception {
		MobileElement ClickOnAddPhoto = driver2
				.findElementByXPath("//android.widget.Button[@bounds='[560,1010][624,1074]']");
		ClickOnAddPhoto.click();
	}

	public void ClickOnAddPhotoGallery() throws Exception {
		MobileElement ClickOnAddPhotoGallery = driver2
				.findElementByXPath("//android.widget.Button[@content-desc='Gallery']");
		ClickOnAddPhotoGallery.click();
	}

	public void ClickOnuserName() throws Exception {
		MobileElement ClickOnuserName = driver2
				.findElementByXPath("//android.view.View[@content-desc='u/ahmed • now']");
		ClickOnuserName.click();
	}

	public void ClickOnViewProfile() throws Exception {
		MobileElement ClickOnViewProfile = driver2
				.findElementByXPath("//android.view.View[@content-desc='  View profile']");
		ClickOnViewProfile.click();

	}

	public void CheckFollowing() throws Exception {
		MobileElement CheckFollowing = driver2.findElementByXPath("//android.view.View[@content-desc='Follow']");

	}

	public void ClickOnEditButton() throws Exception {
		MobileElement ClickOnEditButton = driver2.findElementByXPath("//android.view.View[@content-desc='Edit']");
		ClickOnEditButton.click();
	}

	public void EditReplyOnComment() throws Exception {
		MobileElement EditReplyOnComment = driver2
				.findElementByXPath("//android.view.View[@bounds='[0,176][720,974]']");
		EditReplyOnComment.sendKeys("karim");

	}

	public void CheckContentAfterAdding(String commentContent) throws Exception {
		MobileElement CheckContentAfterAdding = driver2
				.findElementByXPath("//android.view.View[@content-desc='/u/karim22 dfgghtyhyth");

	}

}
