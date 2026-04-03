import { test, expect } from '@playwright/test';

test('Verify user can login with valid credentials', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  
  // Fill credentials
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.click('[data-test="login-button"]');

  // Verify Expected Result (Redirected to Inventory)
  await expect(page).toHaveURL(/.*inventory.html/);
  await expect(page.locator('.title')).toHaveText('Products');
  
});