import { test, expect } from './fixtures';

test('Verify product can be added to cart', async ({ checkoutPage }) => {

  // Add product to cart
  await checkoutPage.addBackpackToCart();

  // Verify cart badge
  await checkoutPage.cartBadge.waitFor({ state: 'visible' });
  await expect(checkoutPage.cartBadge).toHaveText('1');

  console.log('Product added to cart successfully');
});


test('Verify quantity increment button is available', async ({ checkoutPage, page }) => {

  // Add product to cart
  await checkoutPage.addBackpackToCart();

  // Verify product was added
  await expect(checkoutPage.cartBadge).toHaveText('1');

  // Expected + button to be available
  await expect(page.locator('[data-test="increase-quantity"]'))
    .toBeVisible();
});