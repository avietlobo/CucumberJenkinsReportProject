$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("LoginParaBank.feature");
formatter.feature({
  "line": 1,
  "name": "Login Functionality",
  "description": "In order to do internet banking\r\nAs a valid Para Bank customer\r\nI want to login successfully",
  "id": "login-functionality",
  "keyword": "Feature"
});
formatter.before({
  "duration": 3853258500,
  "status": "passed"
});
formatter.scenario({
  "line": 7,
  "name": "Login Successfull",
  "description": "",
  "id": "login-functionality;login-successfull",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 9,
  "name": "I am in the login page of the Para Bank Application",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I enter valid credentials",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I should be taken to the Overview page",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.i_am_in_the_login_page_of_the_Para_Bank_Application()"
});
formatter.result({
  "duration": 3065951100,
  "status": "passed"
});
formatter.match({
  "location": "Steps.i_enter_valid_credentials()"
});
formatter.result({
  "duration": 1135831100,
  "status": "passed"
});
formatter.match({
  "location": "Steps.i_should_be_taken_to_the_Overview_page()"
});
formatter.result({
  "duration": 3306675100,
  "status": "passed"
});
formatter.after({
  "duration": 116766200,
  "status": "passed"
});
});