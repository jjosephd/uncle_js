import test, { expect } from '@playwright/test';
import { LandingPage } from './landing.page';
import * as Data from './landing.data';

test.beforeEach(async ({ page }) => {
  await page.goto(Data.HOME_PAGE_URL);
});
// test navlinks
test.describe('check that routes for navlinks are correct', () => {
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
  test('check that events link routes to #customer-favorites-section', async ({
    page,
  }) => {
    const landingPage = new LandingPage(page);
    const properties = {
      colors: { green: 'oklch(0.393 0.095 152.535)' },
    };

    await landingPage.hoverEventsLink();
    await expect(landingPage.eventsLink).toHaveCSS(
      'color',
      properties.colors.green
    );
    await landingPage.clickEvents();
    await expect(landingPage.eventsSection).toBeVisible();
  });
  test('check that menu link routes to /menu', async ({ page }) => {
    const landingPage = new LandingPage(page);
    const properties = {
      colors: { green: 'oklch(0.393 0.095 152.535)' },
    };

    await landingPage.hoverMenuPageLink();
    await expect(landingPage.menuPageLink).toHaveCSS(
      'color',
      properties.colors.green
    );
    await landingPage.clickMenuPage();
    await page.waitForURL(Data.MENU_PAGE_URL);
  });
});

// test cart button

test.describe('navbar cart button', () => {
  test('should be visible and have correct hover effects', async ({ page }) => {
    const landingPage = new LandingPage(page);

    // 1. Check initial visibility (static state)
    await expect(landingPage.cartBtn).toBeVisible();
    await expect(landingPage.cartCount).toBeVisible();

    // 2. Check interaction (hover state)
    await landingPage.hoverCartButton();
    await expect(landingPage.cartBtn).toHaveCSS(
      Data.HOVER_EFFECTS.borderBottom.borderProperty,
      Data.HOVER_EFFECTS.borderBottom.value
    );
    await expect(landingPage.cartBtn).toHaveCSS(
      Data.HOVER_EFFECTS.borderRight.borderProperty,
      Data.HOVER_EFFECTS.borderRight.value
    );
    await expect(landingPage.cartBtn).toHaveCSS(
      Data.HOVER_EFFECTS.scale110.cssProperty,
      Data.HOVER_EFFECTS.scale110.value
    );

    // 3. Check click interaction
    await landingPage.cartBtn.click();
    await expect(landingPage.openCart).toBeVisible();
  });

  /* Write tests for button click handling */
});
