const { Before, After } = require("@cucumber/cucumber");
const { chromium } = require("playwright");

let browser;

Before(async function () {
  browser = await chromium.launch({ headless: false });
  this.page = await browser.newPage();
});

After(async function () {
  await this.page.close();
  await browser.close();
});