import test from '@playwright/test';
import * as Data from '../../pages/landing/landing.data';
import { MenuPage } from '../../pages/menu-page.page.ts/menuPage.page';

test.beforeEach(async ({ page }) => {
  await page.goto(Data.MENU_PAGE_URL);
});

test.describe('check order flow using cart', () => {
  test('test adding to cart', async ({ page }) => {
    const menuPage = new MenuPage(page);

    /**
     * Check cart visibility and initial value
     */
    await menuPage.navbar.expectCartBtnVisible('0');

    /**
     * Open cart and check that it is empty
     */
    await menuPage.navbar.clickCartBtn();
    await menuPage.cart.expectCartEmpty();

    /**
     * Close empty cart
     */
    await menuPage.cart.toggleCloseBtn();

    /**
     * Add to empty cart
     */
    await menuPage.clickAddToCart(1);
    await menuPage.clickAddToCart(1);
    await menuPage.clickAddToCart(1);

    /**
     * Check cart count in navbar updates
     */
    await menuPage.navbar.expectCartBtnVisible('3');

    /**
     * Check cart value in active cart
     */
    await menuPage.navbar.clickCartBtn();
    await menuPage.cart.expectCartVisible();
    await menuPage.cart.expectCartValue('Total: $29.97');
    await page.screenshot({ path: 'debug.png', timeout: 5000 });
  });
  test('check increasing and decreasing quantity buttons', async ({ page }) => {
    const menuPage = new MenuPage(page);
    /**
     * Add to empty cart
     */
    await menuPage.clickAddToCart(1);

    /**
     * Check cart count in navbar updates
     */
    await menuPage.navbar.expectCartBtnVisible('1');

    /**
     * Check cart value in active cart
     */
    await menuPage.navbar.clickCartBtn();
    await menuPage.cart.expectCartVisible();
    await menuPage.cart.expectCartValue('Total: $9.99');
    await page.screenshot({ path: 'debug.png', timeout: 5000 });

    /**
     * Increase quantity of existing item in cart
     */
    await menuPage.cart.clickIncreaseQuantity();
    await menuPage.cart.expectCartValue('Total: $19.98');

    /**
     * Check that cart count updates
     */
    await menuPage.cart.toggleCloseWithOverlay();
    await menuPage.navbar.expectCartBtnVisible('2');
  });
});
