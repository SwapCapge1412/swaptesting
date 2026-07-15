import { test, expect, chromium } from '@playwright/test';

test('Validate MakeMyTrip homepage loads successfully', async () => {
  // Launch Chromium browser
  const browser = await chromium.launch({ headless: false });

  // Create a new browser context
  const context = await browser.newContext();

  // Open a new page
  const page = await context.newPage();

  // Navigate to MakeMyTrip homepage
  await page.goto('https://www.makemytrip.com/');

  // Validate that the page title is not empty
  const title = await page.title();
  expect(title.trim().length).toBeGreaterThan(0);

  console.log(`Page Title: ${title}`);
});