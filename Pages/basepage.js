import Utils from './utils';

export class BasePage {
	/**
	 * @param {import('@playwright/test').Page} page
	 * @param {string} [baseUrl]
	 */
	constructor(page, baseUrl = '') {
		this.page = page;
		this.baseUrl = baseUrl;
		this.utils = new Utils(this.page, this.baseUrl);

		// // Return a Proxy so calls like `this.fill(...)` are forwarded to `this.utils.fill(...)`
		// const handler = {
		// 	get(target, prop, receiver) {
		// 		if (prop in target) return Reflect.get(target, prop, receiver);
		// 		const u = target.utils;
		// 		if (!u) return undefined;
		// 		const val = u[prop];
		// 		if (typeof val === 'function') return val.bind(u);
		// 		return val;
		// 	},
		// };

		// return new Proxy(this, handler);
	}
}

export default BasePage;
