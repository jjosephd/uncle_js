import { Page, Locator } from '@playwright/test';
import { Locators } from './landing.locators';

export class LandingPage {
  public readonly navBar: Locator;
  public readonly homeLink: Locator;
  public readonly aboutLink: Locator;
  public readonly aboutSection: Locator;
  public readonly promotionsLink: Locator;
  public readonly promotionsSection: Locator;
  public readonly eventsLink: Locator;
  public readonly menuPageLink: Locator;
  public readonly instagramBtn: Locator;
  public readonly cartBtn: Locator;
  public readonly userMenuBtn: Locator;

  constructor(public readonly page: Page) {
    this.navBar = Locators.navBar(this.page);
    this.homeLink = Locators.homeLink(this.page);
    this.aboutLink = Locators.aboutLink(this.page);
    this.aboutSection = Locators.aboutSection(this.page);
    this.promotionsLink = Locators.promotionsLink(this.page);
    this.promotionsSection = Locators.promotionsSection(this.page);
    this.eventsLink = Locators.eventsLink(this.page);
    this.menuPageLink = Locators.menuPageLink(this.page);
    this.instagramBtn = Locators.instagramBtn(this.page);
    this.cartBtn = Locators.cartBtn(this.page);
    this.userMenuBtn = Locators.userMenuBtn(this.page);
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
