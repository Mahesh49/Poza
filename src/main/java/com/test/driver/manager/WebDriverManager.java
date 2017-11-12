package com.test.driver.manager;
import java.net.MalformedURLException;
import java.util.concurrent.TimeUnit;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.remote.RemoteWebDriver;
import com.test.configutils.ConfigUtils;

public class WebDriverManager {
	
	public static RemoteWebDriver getDriverDynamic() throws MalformedURLException {
		String defaultBrowser = ConfigUtils.getASpecificProperty("browser");
		RemoteWebDriver driver = null;
		if (defaultBrowser.equals("chrome") || defaultBrowser.equals("gc")) {
			System.setProperty("webdriver.chrome.driver","src\\test\\resources\\chromedriver.exe");
			driver = new ChromeDriver();
			driver.manage().window().maximize();
			driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
		} 		
		return driver;
	}
}
