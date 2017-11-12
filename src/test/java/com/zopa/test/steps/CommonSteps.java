package com.zopa.test.steps;

import java.net.MalformedURLException;

import org.openqa.selenium.remote.RemoteWebDriver;

import com.test.driver.manager.WebDriverManager;

public class CommonSteps {

	public static RemoteWebDriver driver;

	public CommonSteps() {
		if (driver == null) {
			try {
				driver = WebDriverManager.getDriverDynamic();
			} catch (MalformedURLException e) {
				e.printStackTrace();
			}
		}
	}
}