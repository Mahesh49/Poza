package com.test.pages;
import java.util.List;

import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.remote.RemoteWebDriver;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.pagefactory.AjaxElementLocatorFactory;
import org.openqa.selenium.support.pagefactory.ElementLocatorFactory;

import com.test.configutils.ConfigUtils;

public class Homepage {

	private RemoteWebDriver driver;
			
	@FindBy(css=".twoBlock__blockOne--button")
	private WebElement getZopaloan;
	
	@FindBy(id="submit-loan-button")
	private WebElement getClickrates;
	
	@FindBy(id="member_email")
	private WebElement emailAddress;
	
	@FindBy(name="button")
	private WebElement calculateRates;
	
	@FindBy(id="feedback")
	private WebElement errorbox;
	
	@FindBy(css=".error>li")
	private List<WebElement> errorList;
	
	@FindBy(id="applications_loan_apply_title_mr")
	private WebElement mr;
	
	@FindBy(id="applications_loan_apply_title_mrs")
	private WebElement mrs;
	
	@FindBy(id="applications_loan_apply_title_miss")
	private WebElement miss;
	
	@FindBy(id="applications_loan_apply_title_ms")
	private WebElement ms;
	
	
	public Homepage(RemoteWebDriver driver) {
		ElementLocatorFactory finder = new AjaxElementLocatorFactory(driver, 30);
		PageFactory.initElements(finder, this);
		this.driver = driver;
	}	
	public void clickZopaLoan(){
		 getZopaloan.click();
	}	
	public void clickRates() {
		getClickrates.click();
	}	   
	public void email(String email){
		 emailAddress.sendKeys(email);
	}
	public void rates(){
		 calculateRates.click();
	}
	public void title(String arg1){
		JavascriptExecutor ex = (JavascriptExecutor)driver;
		switch (arg1){
	    case "Mr":			
	    	ex.executeScript("arguments[0].click();", mr);
			break;
		case "Miss":
			ex.executeScript("arguments[0].click();", miss);
			break;
		case "Mrs":
			ex.executeScript("arguments[0].click();", mrs);
			break;
		case "Ms":
			ex.executeScript("arguments[0].click();", ms);
			break;
		}
	}
	public boolean error(){
		 return errorbox.isDisplayed();
	}
	public boolean errorListMessage(String arg1){
		 boolean a = false;
		  for (WebElement element : errorList) {
			if(element.getText().equals(arg1))
			{   
				a= true;
				break;	
			}
		  }
		return a;
	}
	public void gotoHomePage() {
		driver.get(ConfigUtils.getWebEndPoint());
	}
}