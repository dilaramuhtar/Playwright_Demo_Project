import { test, expect } from "@playwright/test";
import PATCHReqestData from "../../test-data/api_request/PATCH_Request.json" with { type: "json" };

test.use({ baseURL: process.env.API_URL });

const id = 114;

test("Patch request test update one spartan", async ({ request }) => {
  const response = await request.patch(`/api/v2/spartans/${id}`, {
    // this is optional step
    headers: {
      "Content-Type": "application/json",
    },
    data: PATCHReqestData
    ,
  });

  expect(response.status()).toBe(200);

  // verify the json response

  const jsonBody = await response.json();
  expect(jsonBody.data.name).toBe("DilaraLeonidas");
});
