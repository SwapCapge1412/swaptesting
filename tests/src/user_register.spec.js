import test from "@playwright/test";
import { userRegisterpage, userRegisterPage } from "../../Pages/userRegister.page";

test.describe("User Registration", () => {

    test.beforeEach(async ({ page }) => {
        await page.goto("https://automationexercise.com/");
    });

    test("should register a new user", async ({ page }) => {
        // Test implementation here
        const userRegisterPage = new userRegisterPage(page);
        await userRegisterpage.signupButton.click();
        await userRegisterpage.newUserheader.waitFor({ state: 'visible' });
        await userRegisterpage.signup("Test User", "testuser@example.com");
        
    });


});