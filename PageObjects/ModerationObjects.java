package PageObjects;

import org.testng.Assert;

import io.appium.java_client.MobileElement;
import io.appium.java_client.android.AndroidDriver;

public class ModerationObjects {

	static AndroidDriver<MobileElement> driver2;

	public ModerationObjects() {
	}

	public ModerationObjects(AndroidDriver<MobileElement> driver_outer) {
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

	// Start of Notifications objects

	public void ClickOnForgetPassword() throws Exception {
		MobileElement ClickOnForgetPassword = driver2
				.findElementByXPath("//android.widget.Button[@content-desc='Forgot password']");
		ClickOnForgetPassword.click();

	}

	public void ThreeSmallLines() throws Exception {
		MobileElement ThreeSmallLines = driver2
				.findElementByXPath("//android.widget.Button[@bounds='[0,64][112,176]']");
		ThreeSmallLines.click();
	}

	public void ClickOnSpecificCommunity(String CommunityName) throws Exception {
		MobileElement ClickOnSpecificCommunity = driver2
				.findElementByXPath("//android.view.View[@bounds='[20,352][608,480]']");
		ClickOnSpecificCommunity.click();

	}

	public void Click() throws Exception {
		MobileElement Click = driver2.findElementByXPath("//android.widget.Button[@content-desc='Mod Tool']");
		Click.click();

	}

	public void ClickoNModTools() throws Exception {
		MobileElement CheckModToolsInSubreddit = driver2
				.findElementByXPath("//android.widget.Button[@bounds='[452,200][680,296]']");
		Assert.assertEquals(CheckModToolsInSubreddit.getAttribute("contentDescription"), "Mod Tool");
		CheckModToolsInSubreddit.click();
	}

	public void CheckDescription() throws Exception {
		MobileElement CheckDescription = driver2.findElementByXPath("//android.view.View[@bounds='[0,256][720,368]']");
		Assert.assertEquals(CheckDescription.getAttribute("contentDescription"), "Description");
		CheckDescription.click();
	}

	public void CheckWelcomemessage() throws Exception {
		MobileElement CheckWelcomemessage = driver2
				.findElementByXPath("//android.view.View[@bounds='[0,368][720,480]']");
		Assert.assertEquals(CheckWelcomemessage.getAttribute("contentDescription"), "Welcome message");
		CheckWelcomemessage.click();
	}

	public void AddorEditMessage() throws Exception {
		MobileElement AddorEditMessage = driver2.findElementByXPath("//android.view.View[@bounds='[0,406][720,518]']");
		Assert.assertEquals(AddorEditMessage.getAttribute("contentDescription"), "Add/Edit Message");
		AddorEditMessage.click();
	}

	public void WelcomeToOutCommunity(String message) throws Exception {
		MobileElement WelcomeToOutCommunity = driver2
				.findElementByXPath("//android.widget.EditText[@bounds='[20,1471][700,1580]']");
		Assert.assertEquals(WelcomeToOutCommunity.getAttribute("text"), "Welcome to out community");
		WelcomeToOutCommunity.click();
		Thread.sleep(2000);
		WelcomeToOutCommunity.sendKeys(message);
	}

	public void CheckWelcomeToOutCommunity(String message) throws Exception {
		MobileElement CheckWelcomeToOutCommunity = driver2
				.findElementByXPath("//android.widget.EditText[@bounds='[20,1471][700,1580]']");
		Assert.assertEquals(CheckWelcomeToOutCommunity.getAttribute("text"), message + ", Welcome to out community");
	}

	public void CheckTopics() throws Exception {
		MobileElement CheckTopics = driver2.findElementByXPath("//android.view.View[@bounds='[0,480][720,592]']");
		Assert.assertEquals(CheckTopics.getAttribute("contentDescription"), "Topics");
		CheckTopics.click();

	}

	public void CheckCommunityType() throws Exception {
		MobileElement CheckCommunityType = driver2
				.findElementByXPath("//android.view.View[@bounds='[0,592][720,704]']");
		Assert.assertEquals(CheckCommunityType.getAttribute("contentDescription"), "Community Type");
		CheckCommunityType.click();

	}

	public void CheckPosttypes() throws Exception {
		MobileElement CheckPosttypes = driver2.findElementByXPath("//android.view.View[@bounds='[0,704][720,816]']");
		Assert.assertEquals(CheckPosttypes.getAttribute("contentDescription"), "Post types");
		CheckPosttypes.click();

	}

	public void CheckDiscovery() throws Exception {
		MobileElement Discovery = driver2.findElementByXPath("//android.view.View[@bounds='[0,816][720,928]']");
		Assert.assertEquals(Discovery.getAttribute("contentDescription"), "Discovery");
		Discovery.click();

	}

	public void CheckModnotifications() throws Exception {
		MobileElement Check = driver2.findElementByXPath("//android.view.View[@bounds='[0,928][720,1040]']");
		Assert.assertEquals(Check.getAttribute("contentDescription"), "Mod notifications");
		Check.click();

	}

	public void CheckLocation() throws Exception {
		MobileElement CheckLocation = driver2.findElementByXPath("//android.view.View[@bounds='[0,1040][720,1152]']");
		Assert.assertEquals(CheckLocation.getAttribute("contentDescription"), "Location");
		CheckLocation.click();

	}

	public void CheckCheckLocation(String location) throws Exception {
		MobileElement CheckCheckLocation = driver2
				.findElementByXPath("//android.view.View[@bounds='[0,406][720,518]']");
		Assert.assertEquals(CheckCheckLocation.getAttribute("contentDescription"), location);
	}

	public void Country(String country1) throws Exception {
		MobileElement Country = driver2.findElementByXPath("//android.widget.EditText[@bounds='[30,442][690,551]']");
		Country.click();
		Thread.sleep(2000);
		Country.sendKeys(country1);
	}

	public void CheckArchivePosts() throws Exception {
		MobileElement CheckArchivePosts = driver2
				.findElementByXPath("//android.view.View[@bounds='[0,1152][720,1264]']");
		Assert.assertEquals(CheckArchivePosts.getAttribute("contentDescription"), "Archive Posts");
		CheckArchivePosts.click();

	}

	public void CheckMediaincomments() throws Exception {
		MobileElement CheckMediaincomments = driver2
				.findElementByXPath("//android.view.View[@bounds='[0,1264][720,1376]']");
		Assert.assertEquals(CheckMediaincomments.getAttribute("contentDescription"), "Media in comments");
		CheckMediaincomments.click();

	}

	public void CheckPostflair() throws Exception {
		MobileElement CheckPostflair = driver2.findElementByXPath("//android.view.View[@bounds='[0,297][720,409]']");
		Assert.assertEquals(CheckPostflair.getAttribute("contentDescription"), "Post flair");
		CheckPostflair.click();
	}

	public void ClickOnCreateFlair() throws Exception {
		MobileElement ClickOnCreateFlair = driver2
				.findElementByXPath("//android.view.View[@bounds='[216,1066][504,1166]']");
		Assert.assertEquals(ClickOnCreateFlair.getAttribute("contentDescription"), "Create flair");
		ClickOnCreateFlair.click();
	}

	public void TypeToCreateFlair(String flair) throws Exception {
		MobileElement TypeToCreateFlair = driver2
				.findElementByXPath("//android.view.View[@bounds='[216,1066][504,1166]']");
		Assert.assertEquals(TypeToCreateFlair.getAttribute("contentDescription"), "Create flair");
		TypeToCreateFlair.click();
		Thread.sleep(2000);
		TypeToCreateFlair.sendKeys(flair);

	}

	public void AddFlair() throws Exception {
		MobileElement AddFlair = driver2.findElementByXPath("//android.view.View[@bounds='[216,1066][504,1166]']");
		Assert.assertEquals(AddFlair.getAttribute("contentDescription"), "ADD");
		AddFlair.click();
	}

	public void SuccessfullyAddFlair() throws Exception {
		MobileElement SuccessfullyAddFlair = driver2
				.findElementByXPath("//android.view.View[@bounds='[216,1066][504,1166]']");
		Assert.assertEquals(SuccessfullyAddFlair.getAttribute("contentDescription"), "Flair Added Successfully");
	}

	public void CheckScheduledposts() throws Exception {
		MobileElement CheckScheduledposts = driver2
				.findElementByXPath("//android.view.View[@bounds='[0,409][720,521]']");
		Assert.assertEquals(CheckScheduledposts.getAttribute("contentDescription"), "Scheduled posts");
		CheckScheduledposts.click();

	}

	public void CheckModerators() throws Exception {
		MobileElement CheckModerators = driver2.findElementByXPath("//android.view.View[@bounds='[0,617][720,729]']");
		Assert.assertEquals(CheckModerators.getAttribute("contentDescription"), "Moderators");
		CheckModerators.click();

	}

	public void InviteModeratorplus() throws Exception {
		MobileElement InviteModeratorplus = driver2
				.findElementByXPath("//android.widget.Button[@bounds='[550,74][710,166]']");
		InviteModeratorplus.click();
	}

	public void UserNameOfInvitedModerator(String userName) throws Exception {
		MobileElement UserNameOfInvitedModerator = driver2
				.findElementByXPath("//android.widget.Button[@bounds='[550,74][710,166]']");
		UserNameOfInvitedModerator.click();
		Thread.sleep(2000);
		UserNameOfInvitedModerator.sendKeys(userName);
	}

	public void SuccessfullyInvitedUser(String userName) throws Exception {
		MobileElement SuccessfullyInvitedUser = driver2
				.findElementByXPath("//android.view.View[@bounds='[36,1470][684,1600]']");
		Assert.assertEquals(SuccessfullyInvitedUser.getAttribute("contentDescription"), userName + " Was Invited ");

	}

	public void CheckApprovedusers() throws Exception {
		MobileElement CheckApprovedusers = driver2
				.findElementByXPath("//android.view.View[@bounds='[0,729][720,841]']");
		Assert.assertEquals(CheckApprovedusers.getAttribute("contentDescription"), "Approved users");
		CheckApprovedusers.click();

	}

	public void CheckMutedusers() throws Exception {
		MobileElement CheckMutedusers = driver2.findElementByXPath("//android.view.View[@bounds='[0,841][720,953]']");
		Assert.assertEquals(CheckMutedusers.getAttribute("contentDescription"), "Muted users");
		CheckMutedusers.click();

	}

	public void CheckBannedusers() throws Exception {
		MobileElement CheckBannedusers = driver2.findElementByXPath("//android.view.View[@bounds='[0,953][720,1065]']");
		Assert.assertEquals(CheckBannedusers.getAttribute("contentDescription"), "Banned users");
		CheckBannedusers.click();

	}

	public void CheckUserflair() throws Exception {
		MobileElement CheckUserflair = driver2.findElementByXPath("//android.view.View[@bounds='[0,1065][720,1177]']");
		Assert.assertEquals(CheckUserflair.getAttribute("contentDescription"), "User flair");
		CheckUserflair.click();

	}

	public void CheckModSupport() throws Exception {
		MobileElement CheckModSupport = driver2.findElementByXPath("//android.view.View[@bounds='[0,964][720,1076]']");
		Assert.assertEquals(CheckModSupport.getAttribute("contentDescription"), "r/ModSupport");
		CheckModSupport.click();

	}

	public void Checkmodhelp() throws Exception {
		MobileElement Checkmodhelp = driver2.findElementByXPath("//android.view.View[@bounds='[0,1076][720,1188]']");
		Assert.assertEquals(Checkmodhelp.getAttribute("contentDescription"), "r/modhelp");
		Checkmodhelp.click();

	}

	public void CheckModhelpcenter() throws Exception {
		MobileElement CheckModhelpcenter = driver2
				.findElementByXPath("//android.view.View[@bounds='[0,1188][720,1300]']");
		Assert.assertEquals(CheckModhelpcenter.getAttribute("contentDescription"), "Mod help center");
		CheckModhelpcenter.click();

	}

	public void CheckModguidelines() throws Exception {
		MobileElement CheckModguidelines = driver2
				.findElementByXPath("//android.view.View[@bounds='[0,1300][720,1412]']");
		Assert.assertEquals(CheckModguidelines.getAttribute("contentDescription"), "Mod guidelines");
		CheckModguidelines.click();

	}

	public void CheckConnectReddit() throws Exception {
		MobileElement CheckConnectReddit = driver2
				.findElementByXPath("//android.view.View[@bounds='[0,1412][720,1456]']");
		Assert.assertEquals(CheckConnectReddit.getAttribute("contentDescription"), "Connect Reddit");
		CheckConnectReddit.click();

	}

	public void DescribeYourCommunity(String commDes) throws Exception {
		MobileElement DescribeYourCommunity = driver2
				.findElementByXPath("//android.widget.EditText[@bounds='[40,812][680,965]']");
		DescribeYourCommunity.click();
		Thread.sleep(2000);
		DescribeYourCommunity.sendKeys(commDes);
	}

	public void CheckContentOfDescribeYourCommunity(String commDes) throws Exception {
		MobileElement CheckContentOfDescribeYourCommunity = driver2
				.findElementByXPath("//android.widget.EditText[@bounds='[40,812][680,965]']");
		Assert.assertEquals(CheckContentOfDescribeYourCommunity.getAttribute("text"),
				commDes + ", Describe you community");
	}

	public void SaveDescribeYourCommunity() throws Exception {
		MobileElement SaveDescribeYourCommunity = driver2
				.findElementByXPath("//android.widget.Button[@bounds='[550,74][710,166]']");
		Assert.assertEquals(SaveDescribeYourCommunity.getAttribute("contentDescription"), "Save");
		SaveDescribeYourCommunity.click();
	}

	public void PREVIEWMESSAGE() throws Exception {
		MobileElement PREVIEWMESSAGE = driver2
				.findElementByXPath("//android.widget.Button[@content-desc='PREVIEW MESSAGE']");
		PREVIEWMESSAGE.click();
	}

	public void SelectTopic(String topicType) throws Exception {
		MobileElement SelectTopic = driver2
				.findElementByXPath("//android.widget.CheckBox[@bounds='[16,192][704,307]']");
		SelectTopic.click();
	}

	public void TopicAddedSuccessfully() throws Exception {
		MobileElement TopicAddedSuccessfully = driver2
				.findElementByXPath("//android.widget.CheckBox[@bounds='[36,1470][684,1600]']");
		Thread.sleep(2000);
		Assert.assertEquals(TopicAddedSuccessfully.getAttribute("contentDescription"), "Topic added successfully");
	}

	public void plus18() throws Exception {
		MobileElement plus18 = driver2.findElementByXPath("//android.widget.CheckBox[@bounds='[568,454][688,518]']");
		plus18.click();
	}

	public void Checkplus18() throws Exception {
		MobileElement Checkplus18 = driver2
				.findElementByXPath("//android.widget.CheckBox[@bounds='[568,454][688,518]']");
		Assert.assertEquals(Checkplus18.getAttribute("contentDescription"), "plus18 changed successfully");
	}

	public void ImageLinks() throws Exception {
		MobileElement ImageLinks = driver2.findElementByXPath("//android.view.View[@bounds='[584,364][704,428]']");
		ImageLinks.click();
	}

	public void ShowUpHighTrafficFeeds() throws Exception {
		MobileElement ShowUpHighTrafficFeeds = driver2
				.findElementByXPath("//android.view.View[@bounds='[570,394][690,458]']");
		ShowUpHighTrafficFeeds.click();
	}

	public void InviteModerator() throws Exception {
		MobileElement InviteModerator = driver2
				.findElementByXPath("//android.widget.Button[@bounds='[624,64][720,176]']");
		InviteModerator.click();
	}

	public void EnterUserNameInInviteModerator() throws Exception {
		MobileElement EnterUserNameInInviteModerator = driver2
				.findElementByXPath("//android.widget.Button[@text='u/username']");
		EnterUserNameInInviteModerator.click();
	}

	public void ClickOnAddToInviteModerator() throws Exception {
		MobileElement ClickOnAddToInviteModerator = driver2
				.findElementByXPath("//android.widget.Button[@content-desc='ADD']");
		ClickOnAddToInviteModerator.click();
	}

	public void ModeratorWasInvited() throws Exception {
		MobileElement ModeratorWasInvited = driver2
				.findElementByXPath("//android.widget.Button[@content-desc='u/karim55 was invited']");
		ModeratorWasInvited.click();

	}

}
