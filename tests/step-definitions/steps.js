const { Given, Then } = require('@cucumber/cucumber');
const { chromium } = require('playwright');
const HomePage = require('../pages/homePage');

let browser, page;

Given('I navigate to the home page', async function () {
  browser = await chromium.launch();
  page = await browser.newPage();
  await HomePage.navigate(page); 
});

Then('the page title should be correct', async function () {
  await HomePage.verifyTitle(page); 
  await browser.close();
});
