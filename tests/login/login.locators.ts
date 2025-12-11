import { Page } from '@playwright/test';

export const Locators = {
  // Login locators
  usernameInputField: (page: Page) => page.getByPlaceholder('Username'),
  passwordInputField: (page: Page) => page.getByPlaceholder('Password'),
  loginButton: (page: Page) => page.getByRole('button', { name: 'Login' }),
  loadingSpinner: (page: Page) => page.getByTestId('loading-spinner'),
};
