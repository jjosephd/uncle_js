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

    await landingPage.navbar.goToAbout();
    await landingPage.expectAboutSectionVisible();
  });
  test('check that promotions link routes to #promotions-section', async ({
    page,
  }) => {
    const landingPage = new LandingPage(page);

    await landingPage.navbar.gotoPromotions();
    await landingPage.expectPromotionSectionVisible();
  });
  test('check that events link routes to #customer-favorites-section', async ({
    page,
  }) => {
    const landingPage = new LandingPage(page);

    await landingPage.navbar.hoverEventsLink();
    await landingPage.navbar.expectEventsHoverColor();
    await landingPage.navbar.gotoEvents();
    await landingPage.expectEventsSectionVisible();
  });
  test('check that menu link routes to /menu', async ({ page }) => {
    const landingPage = new LandingPage(page);

    await landingPage.navbar.hoverMenuPageLink();
    await landingPage.navbar.expectMenuLinkHoverColor();
    await landingPage.navbar.gotoMenuPage();
    await landingPage.expectMenuPageVisible();
  });
});

// test cart button

test.describe('navbar cart button', () => {
  test('should be visible and have correct hover effects', async ({ page }) => {
    const landingPage = new LandingPage(page);

    // 1. Check initial visibility (static state)
    await landingPage.navbar.expectCartBtnVisible();

    // 2. Check interaction (hover state)
    await landingPage.navbar.hoverCartButton();
    await landingPage.navbar.expectCartBtnActiveHover();

    // 3. Check click interaction
    await landingPage.navbar.toggleCartBtn();

    /* CONTINUE REFACTORING HERE */
    await expect(landingPage.openCart).toBeVisible();
  });

  /* Write tests for button click handling */
});
test.describe('user menu button', () => {
  test('should be visibile and display menu options list', async ({ page }) => {
    const landingPage = new LandingPage(page);

    // 1. Check intial visibility
    await expect(landingPage.cartBtn).toBeVisible();

    // 2. Check hover state
    await landingPage.navbar.hoverUserMenuBtn();
    await expect(landingPage.userMenuBtn).toHaveCSS(
      Data.HOVER_EFFECTS.borderBottom.borderProperty,
      Data.HOVER_EFFECTS.borderBottom.value
    );
    await expect(landingPage.userMenuBtn).toHaveCSS(
      Data.HOVER_EFFECTS.borderRight.borderProperty,
      Data.HOVER_EFFECTS.borderRight.value
    );
    await expect(landingPage.userMenuBtn).toHaveCSS(
      Data.HOVER_EFFECTS.scale110.cssProperty,
      Data.HOVER_EFFECTS.scale110.value
    );

    // 3. Check click interaction
    await landingPage.clickUserMenuBtn();
    await expect(landingPage.dropDownMenu).toBeVisible();

    // 4. Check close open menu
    await landingPage.clickUserMenuBtn();
    await expect(landingPage.dropDownMenu).toBeHidden();
  });
});
