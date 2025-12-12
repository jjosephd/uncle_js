import { Page } from '@playwright/test';

export const Locators = {
  // NavBar locators
  navBar: (page: Page) => page.getByTestId('navbar'),
  homeLink: (page: Page) => page.getByText('home').first(),
  aboutLink: (page: Page) => page.getByText('about').first(),
  aboutSection: (page: Page) => page.getByTestId('about-section').first(),
  promotionsLink: (page: Page) => page.getByText('promotions').first(),
  promotionsSection: (page: Page) =>
    page.getByRole('region', { name: 'Promotions' }),
  eventsLink: (page: Page) => page.getByText('events').first(),
  menuPageLink: (page: Page) => page.getByText('menu').first(),
  instagramBtn: (page: Page) => page.getByTestId('instagram'),
  cartBtn: (page: Page) => page.getByTestId('cart-btn'),
  userMenuBtn: (page: Page) => page.getByTestId('user-menu-btn'),
};
