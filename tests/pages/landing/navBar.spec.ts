import test, { expect } from '@playwright/test';
import { LandingPage } from './landing.page';
import * as Data from './landing.data';

test.beforeEach(async ({ page }) => {
  await page.goto(Data.HOME_PAGE_URL);
});

test.describe('check that routes are correct', () => {
  test('check that home routes to /', async ({ page }) => {
    const landingPage = new LandingPage(page);

    await landingPage.clickHome();
    await page.waitForURL(Data.HOME_PAGE_URL);
  });
  test('check that about routes to #about-section', async ({ page }) => {
    const landingPage = new LandingPage(page);

    await landingPage.clickAbout();
    await expect(landingPage.aboutSection).toBeVisible();
  });
  test('check that promotions link routes to #promotions-section', async ({
    page,
  }) => {
    const landingPage = new LandingPage(page);

    await landingPage.clickPromotions();
    await expect(landingPage.promotionsSection).toBeVisible();
  });
});
