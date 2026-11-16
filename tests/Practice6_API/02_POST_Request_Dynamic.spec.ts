import { test, expect } from "@playwright/test";
import { APIRequestHelper } from "../../src/utils/APIHepler.js"
import postAPIrequest from "../../test-data/api_request/POST_Requst_Dynamic.json" with { type: "json" };




test.use({ baseURL: process.env.API_URL });

test("POST request test with Spartan project with dynamic json data", async ({ request }) => {
  const values = ["tester", "Female","0000000000"];

  const formattedRequest = APIRequestHelper.formatAPIRequest(
    JSON.stringify(postAPIrequest),
    values,
  );

  const requestBody = JSON.parse(formattedRequest);

  const response = await request.post("/api/v2/spartans", {
    data: requestBody,
  });

  expect(response.status()).toBe(201);

  const responseBody = await response.json();
  expect(responseBody.data.name).toBe(values[0]);
});


