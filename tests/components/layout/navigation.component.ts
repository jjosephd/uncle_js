import { expect, Locator, Page } from '@playwright/test';

export class Navbar {
  private navBar: Locator;
  private homeLink: Locator;
  private aboutLink: Locator;
  private aboutSection: Locator;
  private promotionsLink: Locator;
  private promotionsSection: Locator;
  private eventsLink: Locator;
  private eventsSection: Locator;
  private menuPageLink: Locator;
  private instagramBtn: Locator;
  private cartBtn: Locator;
  private cartCount: Locator;
  private openCart: Locator;
  private userMenuBtn: Locator;
  private dropDownMenu: Locator;

  constructor(page: Page) {
    this.navBar = page.getByTestId('navbar');
    this.homeLink = page.getByText('home').first();
    this.aboutLink = page.getByText('about').first();
    this.aboutSection = page.getByTestId('about-section').first();
    this.promotionsLink = page.getByText('promotions').first();
    this.promotionsSection = page
      .getByRole('region', { name: 'Promotions' })
      .first();
    this.eventsLink = page.getByText('events').first();
    this.eventsSection = page.getByRole('region', { name: 'Events' }).first();
    this.menuPageLink = page.getByText('menu').first();
    this.instagramBtn = page.getByTestId('instagram');
    this.cartBtn = page.getByTestId('cart-btn');
    this.cartCount = page.getByLabel('cart-count');
    this.openCart = page.getByLabel('open cart');
    this.userMenuBtn = page.getByTestId('user-menu');
    this.dropDownMenu = page.getByLabel('drop down menu');
  }

  gotoHome = async () => {
    await this.homeLink.click();
  };

  goToAbout = async () => {
    await this.aboutLink.click();
  };

  gotoPromotions = async () => {
    await this.promotionsLink.click();
  };

  gotoEvents = async () => {
    await this.eventsLink.click();
  };

  gotoMenuPage = async () => {
    await this.menuPageLink.click();
  };

  hoverEventsLink = async () => await this.eventsLink.hover();
  expectEventsHoverColor = async () => {
    await expect(this.eventsLink).toHaveClass(/hover|active/);
  };

  hoverMenuPageLink = async () => await this.menuPageLink.hover();
  expectMenuLinkHoverColor = async () => {
    await expect(this.eventsLink).toHaveClass(/hover|active/);
  };

  toggleInstagramBtn = async () => await this.instagramBtn.click();
  toggleCartBtn = async () => await this.cartBtn.click();
  toggleUserMenuBtn = async () => await this.userMenuBtn.click();

  /**
   * Hovers over the cart button.
   */
  hoverCartButton = async () => await this.cartBtn.hover();

  /**
   * Asserts that the cart button has either 'hover' or 'active' class.
   */
  expectCartBtnHoverActive = async () => {
    await expect(this.cartBtn).toHaveClass(/hover|active/);
  };

  /**
   * Asserts that the cart button and cart count are visible.
   */
  expectCartBtnVisible = async (value?: string) => {
    await expect(this.cartBtn).toBeVisible();
    await expect(this.cartCount).toBeVisible();
    if (value) {
      await expect(this.cartCount).toHaveText(value);
    }
  };

  /**
   * Asserts that the cart button has either 'hover' or 'active' class.
   */
  expectCartBtnActiveHover = async () => {
    await expect(this.cartBtn).toHaveClass(/hover|active/);
  };

  /**
   * Hovers over the user menu button.
   */
  hoverUserMenuBtn = async () => await this.userMenuBtn.hover();

  /**
   * Asserts user menu button is visible
   */
  expectUserMenuBtnVisible = async () => {
    await expect(this.userMenuBtn).toBeVisible();
  };

  /**
   * Asserts that user menu button has hover or active class
   */
  expectUserMenuBtnActiveHover = async () => {
    await expect(this.userMenuBtn).toHaveClass(/hover|active/);
  };

  clickInstagramBtn = async () => await this.instagramBtn.click();
  clickCartBtn = async () => await this.cartBtn.click();
  clickUserMenuBtn = async () => await this.userMenuBtn.click();

  expectDropdownMenuVisible = async () =>
    await expect(this.dropDownMenu).toBeVisible();

  expectDropdownMenuHidden = async (timeout?: number) =>
    await expect(this.dropDownMenu).toBeHidden({ timeout });
}
