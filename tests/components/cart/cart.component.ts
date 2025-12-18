import { expect, Locator, Page } from '@playwright/test';

export class Cart {
  private readonly cartSidePanel: Locator;
  private readonly emptyCart: Locator;
  private readonly closeCartBtn: Locator;
  private readonly screenOverlay: Locator;
  private readonly page: Page;
  private readonly cartTitle: Locator;
  private readonly cartTotalAmt: Locator;
  private readonly decreaseQuantity: Locator;
  private readonly increaseQuantity: Locator;

  constructor(page: Page) {
    this.page = page;
    this.cartTitle = page.getByRole('heading', { name: 'Your Cart' });
    this.cartTotalAmt = page.getByTestId('total amount');
    this.cartSidePanel = page.getByLabel('open cart');
    this.emptyCart = page.getByText('Your cart is empty.');
    this.closeCartBtn = page.locator('.close-cart-button');
    this.screenOverlay = page.getByLabel('screen overlay').nth(1);
    this.decreaseQuantity = page.getByRole('button', { name: '-' });
    this.increaseQuantity = page.getByRole('button', { name: '+' });
  }

  async expectCartVisible() {
    await expect(this.cartTitle).toBeVisible();
  }
  async expectCartHidden() {
    await expect(this.cartSidePanel).toBeHidden();
  }
  async expectCartEmpty() {
    await expect(this.emptyCart).toBeVisible();
  }
  async expectCartValue(expected: string) {
    await expect(this.cartTotalAmt).toHaveText(expected);
  }
  async clickDecreaseQuantity() {
    await this.decreaseQuantity.click();
  }
  async clickIncreaseQuantity() {
    await this.increaseQuantity.click();
  }
  async toggleCloseBtn() {
    await this.closeCartBtn.click();
    await this.expectCartHidden();
  }
  async toggleCloseWithOverlay() {
    await this.screenOverlay.click();
    await this.expectCartHidden();
  }
}
