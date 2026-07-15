import {test, expect} from "@playwright/test";


  test('selects flight filters and validates them', async ({ page }) => {
    await page.goto('https://www.makemytrip.com/', { waitUntil: 'domcontentloaded', timeout: 30000 });
    await page.locator("//li[@class='selected']//span[@class='tabsCircle appendRight5']").check();
    await page.locator('#nonStop').check();
    await expect(page.locator('input[value="oneWay"]')).toBeChecked();
    await expect(page.locator('#nonStop')).toBeChecked();
  });

  test('updates travellers and class from the custom dropdown', async ({ page }) => {
    await page.goto('https://www.makemytrip.com/', { waitUntil: 'domcontentloaded', timeout: 30000 });
    await page.locator('#travellersButton').click();
    await page.locator('#adultsPlus').click();
    await page.locator('#travelClass').selectOption('Business');
    await page.locator('#closeTravellers').click();
    await expect(page.locator('#adultsCount')).toHaveText('2');
    await expect(page.locator('#travelClassLabel')).toHaveText('Business');
  });

  test('dismisses the login popup and validates the iframe', async ({ page }) => {
    await page.goto('https://www.makemytrip.com/', { waitUntil: 'domcontentloaded', timeout: 30000 });
    await page.locator('//span[@class="commonModal__close"]').click();
    await expect(page.locator('#loginPopup')).toBeHidden();
    await page.locator('#flightsTab').click();
    await page.locator('#footer').evaluate((element) => element.scrollIntoView());
    const frame = page.frameLocator('iframe[name="promoFrame"]');
    await expect(frame.locator('h3')).toBeVisible();
    await expect(page.locator('#flightsTab')).toBeVisible();
  });
