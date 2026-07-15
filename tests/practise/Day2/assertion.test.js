import { test } from '@playwright/test';

test('MakeMyTrip basic flight search actions', async ({page}) => {
  // Navigate to MakeMyTrip
  await page.goto('https://www.makemytrip.com', {waitUntil : "domcontentloaded"});

  await page.locator('body').click({ position: { x: 10, y: 10 } });
  // Click the Flights tab
  await page.click('//span[contains(@class,"chNavText darkGreyText")][text()="Flights"]'); 
  // we can alos use this CSS selector  "a[class='headerIcons makeFlex hrtlCenter column active'] span[class='headerIconTextAlignment chNavText darkGreyText']"
  
  // Close any login/signup popup if displayed
  await page.locator('body').click({ position: { x: 10, y: 10 } });
  // Locate the "From" input field using CSS Selector and fill value
  await page.waitForSelector('#fromCity', {timeout: 10000});
  await page.locator("#fromCity").click();
  await page.fill('input[placeholder="From"]', 'Chennai');
  await page.locator('//input[@placeholder="From"]/following::span[contains(text(),"Chennai")]').first().click();

  // Locate the "To" input field using XPath Selector and type value
 let toField = page.locator('#toCity');
 await toField.click();
 // Type another value to to fields
  await page.fill('input[placeholder="To"]', 'Mumbai');

  
  await page.locator('//input[@placeholder="To"]/following::span[contains(text(),"Mumbai")]').first.click();

  await page.locator('//div[@class="DayPicker-Day"]//following::p[text()="8"]').first().click();
  //date picker //div[@class="DayPicker-Day"]//following::p[text()="8"]

  // Locate the Search button using Text Selector and click
  await page.getByText('Search', { exact: true }).click();

  //Validate the result page
  await page.locator("//title[text()='MakeMyTrip']").isEnabled();

  //Assert URL contains /flight/search
  await expect(page).toHaveURL(/.*\/flight\/search.*/);

  //Assert Results header ("Flights from") is visible
  const resultsHeader = page.locator('//div[@class="listingRhs"]//span[contains(text(),"Flights from")]'); 
  await expect(resultsHeader).toBeVisible();
  await expect(resultsHeader).toContainText('Flights from');

});