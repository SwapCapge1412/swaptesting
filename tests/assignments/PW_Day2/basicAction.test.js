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
  await page.fill('input[placeholder="From"]', 'Mumbai');
  await page.locator('//input[@placeholder="From"]/following::span[contains(text(),"Mumbai")]').first().click();

  // Locate the "To" input field using XPath Selector and type value
 let toField = page.locator('#toCity');
 await toField.click();
 // Type another value to to fields
  await page.type('input[placeholder="To"]', 'Bengaluru');

  //date picker //div[@class="DayPicker-Day"]//following::p[text()="8"]
  //await page.locator('//input[@placeholder="To"]/following::span[contains(text(),"Bengaluru")]').first.click();

  // Clear the To city field
  await toField.clear();

  await page.locator('//div[@class="DayPicker-Day"]//following::p[text()="8"]').first().click();

  // Locate the Search button using Text Selector and click
  await page.getByText('Search', { exact: true }).click();
});