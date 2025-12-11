import { Page } from '@playwright/test';
import { Locators } from './login.locators';

export const fillUsernameInput = async (page: Page, usernameInput: string) => {
  await Locators.usernameInputField(page).fill(usernameInput);
};

export const fillPasswordInput = async (page: Page, passwordInput: string) => {
  await Locators.passwordInputField(page).fill(passwordInput);
};

export const clickLogin = async (page: Page) => {
  await Locators.loginButton(page).click();
};

export const handleLogin = async (
  page: Page,
  email: string,
  password: string
) => {
  await fillUsernameInput(page, email);
  await fillPasswordInput(page, password);
  await clickLogin(page);
};
