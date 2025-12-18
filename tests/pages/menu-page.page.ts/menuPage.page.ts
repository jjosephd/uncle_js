import { Page } from '@playwright/test';
import { Navbar } from '../../components/layout/navigation.component';
import { Cart } from '../../components/cart/cart.component';

export class MenuPage {
  public readonly page: Page;
  public readonly navbar: Navbar;
  readonly cart: Cart;
  constructor(page: Page) {
    this.page = page;
    this.navbar = new Navbar(page);
    this.cart = new Cart(page);
  }

  async clickAddToCart(value: number) {
    await this.page
      .getByRole('button', { name: 'Add to Cart' })
      .nth(value)
      .click();
  }
}
