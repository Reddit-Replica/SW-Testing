[RemoteTestNG] detected TestNG version 7.4.0
Dec 18, 2022 2:40:55 PM io.appium.java_client.remote.AppiumCommandExecutor$1 lambda$0
INFO: Detected dialect: W3C
FAILED: appiumFlutterTest
org.openqa.selenium.NoSuchElementException: The element identified by 'eyJrZXlWYWx1ZVR5cGUiOiJTdHJpbmciLCJrZXlWYWx1ZVN0cmluZyI6ImluY3JlbWVudCIsImZpbmRlclR5cGUiOiJCeVZhbHVlS2V5In0=' is not present in the cache or has expired. Try to find it again
For documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html
Build info: version: '3.141.59', revision: 'e82be7d358', time: '2018-11-14T08:17:03'
System info: host: 'LAPTOP-O3CNM5R4', ip: '172.28.192.1', os.name: 'Windows 10', os.arch: 'amd64', os.version: '10.0', java.version: '1.8.0_202'
Driver info: io.appium.java_client.android.AndroidDriver
Capabilities {adbExecTimeout: 10000, appActivity: com.example.flutter_applica..., appPackage: com.example.flutter_applica..., automationName: UiAutomator2, databaseEnabled: false, desired: {adbExecTimeout: 10000, appActivity: com.example.flutter_applica..., appPackage: com.example.flutter_applica..., automationName: UiAutomator2, deviceName: phony122, noReset: true, platformName: android, platformVersion: 13, remoteAppsCacheLimit: 0, udid: emulator-5554}, deviceApiLevel: 33, deviceManufacturer: Google, deviceModel: sdk_gphone64_x86_64, deviceName: emulator-5554, deviceScreenDensity: 440, deviceScreenSize: 1080x2220, deviceUDID: emulator-5554, javascriptEnabled: true, locationContextEnabled: false, networkConnectionEnabled: true, noReset: true, pixelRatio: 2.75, platform: LINUX, platformName: Android, platformVersion: 13, remoteAppsCacheLimit: 0, statBarHeight: 66, takesScreenshot: true, udid: emulator-5554, viewportRect: {height: 2088, left: 0, top: 66, width: 1080}, warnings: {}, webStorageEnabled: false}
Session ID: a5f249ee-0ef5-45f8-a244-47826e0432bf
	at sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)
	at sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)
	at sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)
	at java.lang.reflect.Constructor.newInstance(Constructor.java:423)
	at org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)
	at org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)
	at org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)
	at org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)
	at io.appium.java_client.remote.AppiumCommandExecutor.execute(AppiumCommandExecutor.java:239)
	at org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)
	at io.appium.java_client.DefaultGenericMobileDriver.execute(DefaultGenericMobileDriver.java:42)
	at io.appium.java_client.AppiumDriver.execute(AppiumDriver.java:1)
	at io.appium.java_client.android.AndroidDriver.execute(AndroidDriver.java:1)
	at org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)
	at org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:84)
	at appiumtests.SeleniumWebdriverTest.appiumFlutterTest(SeleniumWebdriverTest.java:61)
	at sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)
	at sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)
	at sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)
	at java.lang.reflect.Method.invoke(Method.java:498)
	at org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:133)
	at org.testng.internal.TestInvoker.invokeMethod(TestInvoker.java:598)
	at org.testng.internal.TestInvoker.invokeTestMethod(TestInvoker.java:173)
	at org.testng.internal.MethodRunner.runInSequence(MethodRunner.java:46)
	at org.testng.internal.TestInvoker$MethodInvocationAgent.invoke(TestInvoker.java:824)
	at org.testng.internal.TestInvoker.invokeTestMethods(TestInvoker.java:146)
	at org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:146)
	at org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:128)
	at java.util.ArrayList.forEach(ArrayList.java:1257)
	at org.testng.TestRunner.privateRun(TestRunner.java:794)
	at org.testng.TestRunner.run(TestRunner.java:596)
	at org.testng.SuiteRunner.runTest(SuiteRunner.java:377)
	at org.testng.SuiteRunner.runSequentially(SuiteRunner.java:371)
	at org.testng.SuiteRunner.privateRun(SuiteRunner.java:332)
	at org.testng.SuiteRunner.run(SuiteRunner.java:276)
	at org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:53)
	at org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:96)
	at org.testng.TestNG.runSuitesSequentially(TestNG.java:1212)
	at org.testng.TestNG.runSuitesLocally(TestNG.java:1134)
	at org.testng.TestNG.runSuites(TestNG.java:1063)
	at org.testng.TestNG.run(TestNG.java:1031)
	at org.testng.remote.AbstractRemoteTestNG.run(AbstractRemoteTestNG.java:115)
	at org.testng.remote.RemoteTestNG.initAndRun(RemoteTestNG.java:251)
	at org.testng.remote.RemoteTestNG.main(RemoteTestNG.java:77)


===============================================
    Default test
    Tests run: 1, Failures: 1, Skips: 0
===============================================


===============================================
Default suite
Total tests run: 1, Passes: 0, Failures: 1, Skips: 0
===============================================

