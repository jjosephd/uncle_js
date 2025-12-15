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
  public readonly dropDownMenu: Locator;
  public readonly locationMap: Locator;
  public readonly mapViewSatelliteOption: Locator;
  public readonly mapViewStreetMapOption: Locator;
  public readonly mapMenuBar: Locator;
  public readonly mapFullScrnBtn: Locator;
  public readonly mapCameraControls: Locator;

  constructor(public readonly page: Page) {
    this.navBar = page.getByTestId('navbar');
    this.homeLink = page.getByText('home');
    this.aboutLink = page.getByText('about');
    this.aboutSection = page.getByTestId('about-section');
    this.promotionsLink = page.getByText('promotions');
    this.promotionsSection = page.getByRole('region', { name: 'Promotions' });
    this.eventsLink = page.getByText('events');
    this.eventsSection = page.getByRole('region', { name: 'Events' });
    this.menuPageLink = page.getByText('menu');
    this.instagramBtn = page.getByTestId('instagram');
    this.cartBtn = page.getByTestId('cart-btn');
    this.cartCount = page.getByLabel('cart-count');
    this.openCart = page.getByLabel('open cart');
    this.userMenuBtn = page.getByTestId('user-menu');
    this.dropDownMenu = page.getByLabel('drop down menu');
    this.locationMap = page.getByLabel('Restaurant Location Map');
    this.mapViewSatelliteOption = page.getByLabel('Show satellite imagery');
    this.mapViewStreetMapOption = page.getByRole('menuitemradio', {
      name: 'Show street map',
    });
    this.mapMenuBar = page.getByRole('menubar');
    this.mapFullScrnBtn = page.getByRole('button', {
      name: 'Toggle fullscreen view',
    });
    this.mapCameraControls = page.getByRole('button', {
      name: 'Map camera controls',
    });
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
  hoverUserMenuBtn = async () => await this.userMenuBtn.hover();

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
