const { expect } = require('@playwright/test');
const { chromium } = require('playwright');

class HomePage {
  static async navigate(page) {
    await page.goto('https://example.com');
  }

  static async verifyTitle(page) {
    const title = await page.title();
    expect(title).toBe('Example Domain');
  }
}

module.exports = HomePage;
