package runners;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		
glue= {"com.tau.steps"},
features= {"src/test/resources"},
plugin= {"pretty","html:target/site/cucumber-pretty", "json:target/cucumber.json"})
public class RunCucumberTests {

}
