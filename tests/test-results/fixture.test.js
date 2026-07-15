import test, { expect } from "@playwright/test";

test("Locators and assertions", async({page})=>{
    await page.goto("");

    //page assertion
    await expect(page).toHaveTitle(/web/);

    //locators and text assertion
    await expect(page.locator("")).toContainText("Display");
    await expect(page.locator("")).toHaveText("Display");
    page.keyboard.press("ctrl + j")


})