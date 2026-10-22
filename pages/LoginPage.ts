
import { Page, Locator } from '@playwright/test';

export class LoginPage {
  private emailInput: Locator;
  private passwordInput: Locator;
  private loginButton: Locator;
  private errorMessage: Locator;
  private statusMessage: Locator;

  constructor(private page: Page) {
    this.emailInput = page.locator('#email');
    this.passwordInput = page.locator('#password');
    this.loginButton = page.locator('#loginBtn');
    this.errorMessage = page.locator('#errorMessage');
    this.statusMessage = page.locator('#statusMessage');
  }
  
  async goto() {
    await this.page.goto(
      'https://alisonmelo.github.io/tioalison-pe-t4-fap26/projetos-base/01-sistema-login/login.html'
    );
  }

  async login(email: string, password: string) {
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }
  getErrorMessage() {
    return this.errorMessage;
  }

  getStatusMessage() {
    return this.statusMessage;
  }

  getLoginButton() {
    return this.loginButton;
  }
  getPage(): Page {
  return this.page;
}
}
