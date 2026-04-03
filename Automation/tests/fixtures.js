import { test as base } from '@playwright/test';

export const test = base.extend({
  loginPage: async ({ page }, use) => {
    await page.goto('https://www.saucedemo.com/');

    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.click('[data-test="login-button"]');

    await use(page);   // <-- makes logged-in page available to all tests
    checkoutPage: async ({ page }, use) => {
    await use(new CheckoutPage(page));
  }
  },
});

export { expect } from '@playwright/test';