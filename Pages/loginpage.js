import BasePage from './basepage';

export class LoginPage extends BasePage {
	/**
	 * @param {import('@playwright/test').Page} page
	 */
	constructor(page, baseUrl = '') {
		super(page, baseUrl);
		this.usernameInput = this.page.locator('#username');
		this.passwordInput = this.page.locator('#password');
		this.submitButton = this.page.locator('button[type="submit"]');
	}

	async loginSwag(user, pass) {
    await this.page.locator('#user-name').fill(user);
    await this.page.locator('#password').fill(pass);
    await this.page.locator('#login-button').click();
  }
}

export default LoginPage;
