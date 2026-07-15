import { test, expect, chromium } from '@playwright/test';

test('Example.com loads successfully', async () => {
  // Launch Chromium
  const browser = await chromium.launch();
  // Create a new page
  const page = await browser.newPage();

  // Open the website and capture the response
  const response = await page.goto('https://example.com');

  // Validate HTTP status code is 200
  expect(response).not.toBeNull();
  expect(response.status()).toBe(200);

  // Validate page title is not empty
  const title = await page.title();
  expect(title.length).toBeGreaterThan(0);

  // Close the browser
  await browser.close();
});