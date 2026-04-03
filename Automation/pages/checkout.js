export class CheckoutPage {
  constructor(page) {
    this.page = page;
    // Selectors
    this.addToCartBtn = page.locator('[data-test="add-to-cart-sauce-labs-backpack"]');
    this.cartBadge = page.locator('.shopping_cart_badge');
    this.cartLink = page.locator('.shopping_cart_link');
    this.checkoutBtn = page.locator('[data-test="checkout"]');
    this.firstNameInput = page.locator('[data-test="firstName"]');
    this.lastNameInput = page.locator('[data-test="lastName"]');
    this.postalCodeInput = page.locator('[data-test="postalCode"]');
    this.continueBtn = page.locator('[data-test="continue"]');
    this.finishBtn = page.locator('[data-test="finish"]');
    this.successHeader = page.locator('.complete-header');
    this.pageTitle = page.locator('.title');
  }

  // Actions
  async addBackpackToCart() {
    await this.addToCartBtn.click();
  }

  async goToCart() {
    await this.cartLink.click();
  }

  async startCheckout() {
    await this.checkoutBtn.click();
  }

  async fillInformation(fname, lname, zip) {
    await this.firstNameInput.fill(fname);
    await this.lastNameInput.fill(lname);
    await this.postalCodeInput.fill(zip);
    await this.continueBtn.click();
  }

  async finishOrder() {
    await this.finishBtn.click();
  }
}