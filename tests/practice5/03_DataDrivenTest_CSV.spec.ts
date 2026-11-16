import { test } from "@playwright/test";
import { parse } from "csv-parse/sync";
import fs from "fs";


type LoginData = {
  email: string;
  password: string;
};

const csvPath = "test-data/qa/testdata.csv";
const fileContents = fs.readFileSync(csvPath, "utf-8");

const records = parse(fileContents, {
  columns: true,
  skip_empty_lines: true,
  trim: true,
  bom: true,
}) as LoginData[];


console.log(records);

for (const [index, data] of records.entries()) {
  test(`login test ${index + 1}: ${data.email}`, async ({ page }) => {
    await page.goto("https://demowebshop.tricentis.com/login");

    await page.locator("#Email").fill(data.email);
    await page.locator("#Password").fill(data.password);

    await page.getByRole("button", { name: /^log in$/i }).click();
  });
}

