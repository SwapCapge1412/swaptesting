export class BasePage {
	/**
	 * @param {import('@playwright/test').Page} page
	 * @param {string} [baseUrl]
	 */
	constructor(page, baseUrl = '') {
		this.page = page;
		this.baseUrl = baseUrl;
	}

	_toLocator(selectorOrLocator) {
		if (!selectorOrLocator) throw new Error('selectorOrLocator is required');
		// if it's already a Locator-like (has 'locator' or 'click' methods), assume it's a Playwright Locator
		if (typeof selectorOrLocator.click === 'function' || typeof selectorOrLocator.fill === 'function') {
			return selectorOrLocator;
		}
		return this.page.locator(selectorOrLocator);
	}

	async goto(pathOrUrl, options) {
		const url = pathOrUrl.startsWith('http') ? pathOrUrl : `${this.baseUrl}${pathOrUrl}`;
		await this.page.goto(url, options);
	}

	async click(selectorOrLocator, options) {
		const locator = this._toLocator(selectorOrLocator);
		await locator.click(options);
	}

	async fill(selectorOrLocator, value, options) {
		const locator = this._toLocator(selectorOrLocator);
		await locator.fill(value, options);
	}

	async type(selectorOrLocator, value, options) {
		const locator = this._toLocator(selectorOrLocator);
		await locator.type(value, options);
	}

	async getText(selectorOrLocator) {
		const locator = this._toLocator(selectorOrLocator);
		return await locator.innerText();
	}

	async getValue(selectorOrLocator) {
		const locator = this._toLocator(selectorOrLocator);
		return await locator.inputValue();
	}

	async isVisible(selectorOrLocator) {
		const locator = this._toLocator(selectorOrLocator);
		return await locator.isVisible();
	}

	async waitForSelector(selector, options) {
		return await this.page.waitForSelector(selector, options);
	}

	async screenshot(options) {
		return await this.page.screenshot(options);
	}

	async title() {
		return await this.page.title();
	}
}

export default BasePage;
