// ...existing code...
import { BasePage } from './basepage';

export class userRegisterpage extends BasePage {

    constructor(page) {
        super(page);

        this.signupButton = this.page.locator("//a[normalize-space()='Signup / Login']");
        this.newUserheader = this.page.locator("//h2[text()='Login to your account']");
        this.nameField = this.page.locator("//input[@placeholder='Name']");
        this.newUserEmailField = this.page.locator("//input[@data-qa='signup-email']");
        this.signupButton = this.page.locator("//button[text()='Signup']");
    }

    async signup(name, email){
        await this.nameField.fill(name);
        await this.newUserEmailField.fill(email);
        await this.signupButton.click();
    }



}