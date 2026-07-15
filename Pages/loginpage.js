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

	async login(username, password) {
		await this.fill(this.usernameInput, username);
		await this.fill(this.passwordInput, password);
		await this.click(this.submitButton);
	}
}

export default LoginPage;
