package com.zopa.test.steps;
import static org.junit.Assert.assertTrue;

import org.openqa.selenium.Cookie;

import com.test.pages.Homepage;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

public class HomepageSteps extends CommonSteps {
	public Homepage homepage;
    public HomepageSteps(){
		homepage = new Homepage(driver);
	}
	
	@Given("^I am on homepage$")
	public void i_am_on_File_Mailer_home_page() throws Throwable {
        homepage.gotoHomePage();
        Cookie C1 = new Cookie("acceptCookies","1");
		driver.manage().addCookie(C1);
    }

	@When("^I select Get a Zopa Loan$")
	public void i_select_Get_a_Zopa_Loan() throws Throwable {
		homepage.clickZopaLoan();
	}
    
	@When("^I select Get my personalised rates$")
	public void i_select_Get_my_personalised_rates() throws Throwable {
		homepage.clickRates();
	}
	
	@When("^I select Calculate my rates$")
	public void i_select_Calculate_my_rates() throws Throwable {
		homepage.rates();
	}
	
	@When("^I enter Email address \"([^\"]*)\"$")
	public void i_enter_Email_address(String arg1) throws Throwable {
		homepage.email(arg1);
	}
	
	@When("^I select Title \"([^\"]*)\"$")
	public void i_select_Title(String arg1) throws Throwable {
	    homepage.title(arg1);
	}

	@Then("^I should see Error summary box$")
	public void i_should_see_Error_summary_box() throws Throwable {
	    assertTrue(homepage.error());
	}
	
	@Then("^I should see Error \"([^\"]*)\"$")
	public void i_should_see_Error_summary_box(String arg1) throws Throwable {
	    assertTrue(homepage.errorListMessage(arg1));
	}
	
	@Then("^I should not see Error \"([^\"]*)\"$")
	public void i_should_not_see_Error_summary_box(String arg1) throws Throwable {
	    Assert.assertEquals(false, homepage.errorListMessage(arg1));
	}
}
