package com.zopa.test.runners;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(format = {"pretty", "html:target/cucumber-html-report", "json:target/report_example.json"}, 
		//dryRun=true,
		glue = { "com.zopa.test.steps" },
		features = { "classpath:TestScenarios/" }
		,monochrome=true
)
public class TestRunner {
	//This is just a runner
}
