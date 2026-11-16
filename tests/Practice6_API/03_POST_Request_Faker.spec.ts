import { test, expect } from "@playwright/test";
import { APIRequestHelper } from "../../src/utils/APIHepler.js";
import postAPIrequest from "../../test-data/api_request/POST_Requst_Dynamic.json" with { type: "json" };
import { faker } from "@faker-js/faker";

test.use({ baseURL: process.env.API_URL });

test("POST request test with Spartan project with dynamic json data", async ({
  request,
}) => {
    const fullName = faker.person.firstName();
    const gender = "Female";
    const phone = String(
      faker.number.int({ min: 1_000_000_000, max: 9_999_999_999 }));
       // Generate a random 10-digit number;

  const values = [fullName, gender, phone];

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
  expect(responseBody.data.name).toBe(fullName);
});
