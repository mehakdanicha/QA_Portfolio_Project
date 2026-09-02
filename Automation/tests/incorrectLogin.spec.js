import { test, expect } from '@playwright/test';
test('Verify error message in login form', async({page})=>{
    //goto website
    await page.goto('https://www.saucedemo.com/');
   //fill credentials 
    await page.locator('[data-test="username"]').fill('locked_out_user');
    await page.locator('[data-test="password"]').fill('122345');
    //click on login button
    await page.locator('[data-test="login-button"]').click();
    //check for error message
    await expect(page.locator('[data-test="error"]')).
    toHaveText("Epic sadface: Username and password do not match any user in this service");


})