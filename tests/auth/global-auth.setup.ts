import { test as setup } from '@playwright/test';
import * as Data from '../login/login.data';
import * as Actions from '../login/login.actions';

const authFile = 'playwright/.auth/user.json';
const LOGIN_USER: string = process.env.LOGIN_EMAIL || '';
const LOGIN_PASSWORD: string = process.env.LOGIN_PASSWORD || '';

setup('authentication', async ({ page }) => {
  await page.goto(Data.LOGIN_PAGE_LINK);
  await Actions.handleLogin(page, LOGIN_USER, LOGIN_PASSWORD);

  await page.waitForURL(Data.HOME_PAGE_URL);

  await page.context().storageState({ path: authFile });
});
