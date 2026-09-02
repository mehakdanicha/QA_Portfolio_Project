import { test, expect } from './fixtures';

test('Verify user can place an order', async ({ checkoutPage, page }) => {

  // Add product to cart
  await checkoutPage.addBackpackToCart();

  await expect(checkoutPage.cartBadge).toHaveText('1');

  // Navigate to cart
  await checkoutPage.goToCart();

  await expect(page).toHaveURL(/.*cart.html/);

  console.log('Navigated to cart page successfully');

  // Start checkout
  await checkoutPage.startCheckout();

  await expect(page).toHaveURL(/.*checkout-step-one.html/);

  await expect(checkoutPage.pageTitle)
    .toHaveText('Checkout: Your Information');

  // Fill customer information
  await checkoutPage.fillInformation(
    'Mehak',
    'Khan',
    '12345'
  );

  // Finish order
  await checkoutPage.finishOrder();

  // Verify successful order
  await expect(checkoutPage.successHeader)
    .toHaveText('Thank you for your order!');

  console.log('Order placed successfully');
});