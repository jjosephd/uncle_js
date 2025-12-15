import test, { expect } from '@playwright/test';
import { LandingPage } from './landing.page';
import * as Data from './landing.data';

test.beforeEach(async ({ page }) => {
  await page.goto(Data.HOME_PAGE_URL);
});

test.describe('google map API interaction', () => {
  test('check that map loads and is visible', async ({ page }) => {
    const landingPage = new LandingPage(page);

    await landingPage.clickAbout();
    // 1. Check intial visibility
    await expect(landingPage.locationMap).toBeVisible();

    // 2. Check initial view option state
    await expect(landingPage.mapViewSatelliteOption).toBeVisible({
      timeout: 15000,
    });

    // 3. Check interaction with map buttons
    await expect(landingPage.mapViewStreetMapOption).toBeVisible({
      timeout: 15000,
    });
    expect(landingPage.mapViewStreetMapOption).toBeTruthy();

    // check switching between map views
    await landingPage.mapViewSatelliteOption.click();
    expect(landingPage.mapViewSatelliteOption).toBeTruthy();
    await landingPage.mapViewStreetMapOption.click();
    expect(landingPage.mapViewStreetMapOption).toBeTruthy();

    // check full screen button
    await expect(landingPage.mapFullScrnBtn).toBeVisible(); // visibility
  });
});
