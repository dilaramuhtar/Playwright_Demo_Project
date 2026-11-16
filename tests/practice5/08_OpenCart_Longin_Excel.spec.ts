import { test } from "@playwright/test";
import fs from "node:fs";
import { read, utils } from "xlsx";

const excelFilePath = "test-data/qa/openCartLogin.xlsx";

// 1. Read the Excel file as a Buffer.
const fileContent = fs.readFileSync(excelFilePath);

// 2. Parse the file content into a workbook.
const workBook = read(fileContent);

// 3. Get the first worksheet.
const firstSheetName = workBook.SheetNames[0];

if (firstSheetName === undefined) {
  throw new Error("The Excel file has no worksheets.");
}

const workSheet = workBook.Sheets[firstSheetName];

if (workSheet === undefined) {
  throw new Error(`Worksheet "${firstSheetName}" was not found.`);
}

// 4. Convert the worksheet rows into objects.
type LoginData = {
  email: string;
  password: string;
};

const loginData = utils.sheet_to_json<LoginData>(workSheet, { raw: false });

// 5. Create one login test per row.
for (const [index, { email, password }] of loginData.entries()) {
  test(`OpenCart login - case ${index + 1}`, async ({ page }) => {
    await page.goto("https://awesomeqa.com/ui/index.php?route=account/login");

    await page.locator("input[name='email']").fill(email);
    await page.locator("input[name='password']").fill(password);
    await page.locator("input[type='submit']").click();
  });
}
