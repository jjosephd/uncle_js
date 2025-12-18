import { Page, Locator, expect } from '@playwright/test';
import { Navbar } from '../../components/layout/navigation.component';
import * as Data from '../landing/landing.data';

export class LandingPage {
  readonly navbar: Navbar;

  public readonly navBar: Locator;
  public readonly homeLink: Locator;
  private readonly aboutSection: Locator;
  public readonly promotionsLink: Locator;
  public readonly promotionsSection: Locator;
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
  public readonly mapCameraControlsBtnUp: Locator;
  public readonly mapCameraControlsBtnRight: Locator;
  public readonly mapCameraControlsBtnDown: Locator;
  public readonly mapCameraControlsBtnLeft: Locator;

  mapStreetOptions = {
    moveUp: 'Move up',
    moveRight: 'Move right',
    moveDown: 'Move down',
    moveLeft: 'Move left',
  };
  constructor(public readonly page: Page) {
    this.navbar = new Navbar(page);
    this.navBar = page.getByTestId('navbar');
    this.homeLink = page.getByText('home').first();
    this.aboutSection = page.getByTestId('about-section').first();
    this.promotionsLink = page.getByText('promotions').first();
    this.promotionsSection = page
      .getByRole('region', { name: 'Promotions' })
      .first();
    this.eventsSection = page.getByRole('region', { name: 'Events' }).first();
    this.menuPageLink = page.getByText('menu').first();
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
    this.mapCameraControls = page.getByRole('button', {
      name: 'Map camera controls',
    });
    this.mapCameraControlsBtnUp = page.getByRole('button', {
      name: this.mapStreetOptions.moveUp,
    });
    this.mapCameraControlsBtnRight = page.getByRole('button', {
      name: this.mapStreetOptions.moveRight,
    });
    this.mapCameraControlsBtnLeft = page.getByRole('button', {
      name: this.mapStreetOptions.moveLeft,
    });
    this.mapCameraControlsBtnDown = page.getByRole('button', {
      name: this.mapStreetOptions.moveDown,
    });
  }

  clickHome = async () => {
    await this.homeLink.click();
  };
  async expectAboutSectionVisible() {
    await expect(this.aboutSection).toBeVisible();
  }
  async expectPromotionSectionVisible() {
    await expect(this.promotionsSection).toBeVisible();
  }
  expectEventsSectionVisible = async () =>
    await expect(this.eventsSection).toBeVisible();
  expectMenuPageVisible = async () =>
    await this.page.waitForURL(Data.MENU_PAGE_URL);
  expectOpenCartVisible = async () => {
    await expect(this.openCart).toBeVisible();
  };
  expectCartButtonVisible = async () =>
    await expect(this.cartBtn).toBeVisible();

  // map controls
  clickMapCameraControl = async (
    direction: 'up' | 'right' | 'down' | 'left'
  ) => {
    const controlsMap = {
      up: this.mapCameraControlsBtnUp,
      right: this.mapCameraControlsBtnRight,
      down: this.mapCameraControlsBtnDown,
      left: this.mapCameraControlsBtnLeft,
    };

    const control = controlsMap[direction];
    if (control) {
      await control.click();
    }
  };
}
