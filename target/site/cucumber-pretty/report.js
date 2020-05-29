$(document).ready(function() {var formatterformatter. = new CucumberHTML.DOMFormatter($('.cucumber-report'));uriformatter.(uri("LoginParaBank.feature""LoginParaBank2.feature"););

formatter.feature(formatter.feature({
  "line": 1,
  "name": "Login Functionality",
  "description": "In order to do internet banking\r\nAs a valid Para Bank customer\r\nI want to login successfully",
  "id": "login-functionality",
  "keyword": "Feature"
}{
  "line": 1,
  "name": "Login Functionality",
  "description": "In order to do internet banking\r\nAs a valid Para Bank customer\r\nI want to login successfully",
  "id": "login-functionality",
  "keyword": "Feature"
}););

formatter.before({
  "duration": 8017191400,
  "status": "passed"
});
formatter.scenario({
  "line": 7,
  "name": "Login Successfull 2",
  "description": "",
  "id": "login-functionality;login-successfull-2",
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
  "duration": 7373268801,
  "status": "passed"
});
formatter.match({
  "location": "Steps.i_enter_valid_credentials()"
});
formatter.result({
  "duration": 2396465601,
  "status": "passed"
});
formatter.match({
  "location": "Steps.i_should_be_taken_to_the_Overview_page()"
});
formatter.result({
  "duration": 3124647000,
  "status": "passed"
});
formatter.after({
  "duration": 187758699,
  "status": "passed"
});
});