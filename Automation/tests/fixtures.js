import { test as base } from '@playwright/test';
import { CheckoutPage } from '../pages/checkout';

export const test = base.extend({

  loginPage: async ({ page }, use) => {
    await page.goto('https://www.saucedemo.com/');

    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();

    await use(page);
  },

  checkoutPage: async ({ loginPage }, use) => {
    await use(new CheckoutPage(loginPage));
  },

});

export { expect } from '@playwright/test';