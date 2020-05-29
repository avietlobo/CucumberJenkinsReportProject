package com.tau.steps;

import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import com.tau.base.BaseUtil;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;



public class Steps {
	
	
	private WebDriver driver;
	
	  @cucumber.api.java.Before 
	  public void setUp() {
	  System.setProperty("webdriver.chrome.driver",System.getProperty("user.dir") + "\\drivers\\chromedriver.exe"); driver=new ChromeDriver();
	  //driver.manage().window().maximize();
	  
	  System.out.println("Hello");
	  
	  
	  }
	  
	  @cucumber.api.java.After 
	  public void quitBrowser() {
	  
	  driver.close(); }
	 
	
	
	
	
	 
	
	@Given("^I am in the login page of the Para Bank Application$")
	public void i_am_in_the_login_page_of_the_Para_Bank_Application()  {
		
	  driver.get("http://parabank.parasoft.com/parabank/index.htm");
	}

	@When("^I enter valid credentials$")
	public void i_enter_valid_credentials()  {
		driver.findElement(By.name("username")).sendKeys("testuser");
		driver.findElement(By.name("password")).sendKeys("password");
		driver.findElement(By.name("username")).submit();
	   
	}

	@Then("^I should be taken to the Overview page$")
	public void i_should_be_taken_to_the_Overview_page() throws InterruptedException  {
		
		Thread.sleep(2000);
		driver.findElement(By.linkText("Log Out")).click();
		 //System.out.println(base.UserFullName);
		
	}

	
	
}
