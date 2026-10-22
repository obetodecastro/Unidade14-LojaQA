
import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

let loginPage: LoginPage;

test.beforeEach(async ({ page }) => {
  loginPage = new LoginPage(page);
  await loginPage.goto();
});

test('Cenário 1: cliente realiza login com sucesso', async ({ page }) => {
  await loginPage.login('user@system.com', 'UserPassword123');

  await expect(page).toHaveURL(/painel\.html$/);
});

test('Cenário 2: senha incorreta apresenta mensagem de erro', async () => {
  await loginPage.login('user@system.com', 'SenhaErrada123');

  await expect(loginPage.getErrorMessage()).toBeVisible();
});

test('Cenário 3: botão de login inicia desabilitado', async () => {
  await expect(loginPage.getLoginButton()).toBeDisabled();
});
