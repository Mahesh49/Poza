package com.zopa.test.steps;

import org.junit.AfterClass;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriverException;
import cucumber.api.Scenario;
import cucumber.api.java.After;

public class SharedSteps extends CommonSteps{

	@After  
    public void embedScreenshot(Scenario scenario) {  
        if (scenario.isFailed()) {  
        	System.out.println(("Scenario Failed"));
            try {  
            	byte[] bytes = ((TakesScreenshot) driver).getScreenshotAs(OutputType.BYTES);
            	scenario.embed(bytes, "image/png");
            } catch (WebDriverException wde) {  
                System.err.println(wde.getMessage());  
            } catch (ClassCastException cce) {  
                cce.printStackTrace();  
            } catch (Exception e){
            	e.printStackTrace();
            }
        }  else{
        	System.out.println("Scenario Passed");
        }
        
       // driver.close();
       // driver=null;
    }
	
	@AfterClass
	public void closeBrowser() { 
		driver.close();
	}
}
