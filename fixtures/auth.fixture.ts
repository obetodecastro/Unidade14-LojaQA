
import { test as base, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

type AuthFixtures = {
  paginaAutenticada: LoginPage;
};

export const test = base.extend<AuthFixtures>({
  paginaAutenticada: async ({ page }, use) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.login('user@system.com', 'UserPassword123');

    await page.waitForURL(/painel\.html$/);

    await use(loginPage);
  },
});

export { expect };
