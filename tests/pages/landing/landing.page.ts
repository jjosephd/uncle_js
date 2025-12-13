import { Page, Locator } from '@playwright/test';

export class LandingPage {
  public readonly navBar: Locator;
  public readonly homeLink: Locator;
  public readonly aboutLink: Locator;
  public readonly aboutSection: Locator;
  public readonly promotionsLink: Locator;
  public readonly promotionsSection: Locator;
  public readonly eventsLink: Locator;
  public readonly eventsSection: Locator;
  public readonly menuPageLink: Locator;
  public readonly instagramBtn: Locator;
  public readonly cartBtn: Locator;
  public readonly cartCount: Locator;
  public readonly openCart: Locator;
  public readonly userMenuBtn: Locator;

  constructor(public readonly page: Page) {
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
    this.userMenuBtn = page.getByTestId('user-menu-btn');
  }

  clickHome = async () => {
    await this.homeLink.click();
  };
  clickAbout = async () => {
    await this.aboutLink.click();
  };
  clickPromotions = async () => {
    await this.promotionsLink.click();
  };
  hoverEventsLink = async () => await this.eventsLink.hover();
  hoverMenuPageLink = async () => await this.menuPageLink.hover();
  hoverCartButton = async () => await this.cartBtn.hover();

  clickEvents = async () => {
    await this.eventsLink.click();
  };
  clickMenuPage = async () => {
    await this.menuPageLink.click();
  };
  clickInstagramBtn = async () => await this.instagramBtn.click();
  clickCartBtn = async () => await this.cartBtn.click();
  clickUserMenuBtn = async () => await this.userMenuBtn.click();
}
