import { test, expect } from "@playwright/test";

//let apiContext;

// test.beforeAll(async ({ request }) => {
//   apiContext = await request.newContext({
//     ignoreHTTPSErrors: true,
//   });
// });

test("GET API", async ({ request }) => {
  const response = await request.get(
    "https://conduit-api.bondaracademy.com/api/tags",
    { ignoreHTTPSErrors: true }
  );
  

  // 1. Ensure the API actually succeeded
  expect(response.status()).toBe(200); 

  const body = await response.json();
  console.log("Current API Tags:", body.tags); // Helps you debug what is actually returning

  // 2. BULLETPROOF VALIDATION: Check if "Coding" exists ANYWHERE in the list
  expect(body.tags).toContain("Coding");

  // 3. Validate array size safely
  expect(Array.isArray(body.tags)).toBeTruthy();
  expect(body.tags.length).toBeLessThanOrEqual(10);
});


test("Get all Articles", async ({request}) => {
  // const response = await apiContext.get(
  //   "https://conduit-api.bondaracademy.com/api/articles?limit=10&offset=0"
  // );
  const response = await request.get(
      "https://conduit-api.bondaracademy.com/api/articles?limit=10&offset=0",
    { ignoreHTTPSErrors: true }
  );

  expect(response.status()).toBe(200);

  const body = await response.json();
  console.log(body);
  expect(body.articles.length).toBeLessThanOrEqual(10);
  expect(body.articlesCount).toEqual(10);
});