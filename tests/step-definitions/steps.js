const { Given, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const { chromium } = require('playwright');

Given('I navigate to {string}', async function (url) {
  this.browser = await chromium.launch();
  this.page = await this.browser.newPage();
  await this.page.goto(url);
});

Then('the page title should be {string}', async function (expectedTitle) {
  const title = await this.page.title();
  expect(title).toBe(expectedTitle);
  await this.browser.close();
});
