
import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

const cenarios = [
  {
    descricao: 'cliente com senha correta',
    email: 'user@system.com',
    senha: 'UserPassword123',
    loginValido: true,
  },
  {
    descricao: 'cliente com senha incorreta',
    email: 'user@system.com',
    senha: 'SenhaErrada123',
    loginValido: false,
  },
  {
    descricao: 'administrador com senha correta',
    email: 'admin@system.com',
    senha: 'AdminPassword123',
    loginValido: true,
  },
];

for (const cenario of cenarios) {
  test(`Data-Driven: ${cenario.descricao}`, async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.login(cenario.email, cenario.senha);

    if (cenario.loginValido) {
      await expect(page).toHaveURL(/painel\.html$/);
    } else {
      await expect(loginPage.getErrorMessage()).toBeVisible();
    }
  });
}
