import { test, expect } from './fixtures';

test('Verify product can be added to cart & place the order', async ({ checkoutPage, page }) => {
  // 1. Add product to cart
  await checkoutPage.addBackpackToCart();
  
  // Verify badge
  await checkoutPage.cartBadge.waitFor({ state: 'visible' });
  await expect(checkoutPage.cartBadge).toHaveText('1');
  console.log('Product added to cart successfully');
  await page.waitForTimeout(1000); 

  // 2. Navigate to cart
  await checkoutPage.goToCart();
  await expect(page).toHaveURL(/.*cart.html/);
  console.log('Navigated to cart page successfully');

  // 3. Checkout process
  await checkoutPage.startCheckout();
  await expect(page).toHaveURL(/.*checkout-step-one.html/);
  await expect(checkoutPage.pageTitle).toHaveText('Checkout: Your Information');

  // 4. Fill info and continue
  await checkoutPage.fillInformation('Mehak', 'Khan', '12345');
  await page.waitForTimeout(1000); 

  // 5. Finish order
  await checkoutPage.finishOrder();
  await expect(checkoutPage.successHeader).toHaveText('Thank you for your order!');
  console.log('Order placed successfully');
});