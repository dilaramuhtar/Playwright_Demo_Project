import { test, expect } from "@playwright/test";

test.use({ baseURL: process.env.API_URL });

const id = 115;

test("Delete request test update one spartan", async ({ request }) => {
  const response = await request.delete(`/api/v2/spartans/${id}`);

  expect(response.status()).toBe(200);

  
});
