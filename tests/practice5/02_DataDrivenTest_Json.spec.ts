import { test, expect } from "@playwright/test";
import testData from "../../test-data/qa/testdata.json" with { type: "json" };

// difine the test data structure, because of type safety issue;

type TestData = {
  TestDataSet1: {
    Skills1: string;
    Skills2: string;
  };
  TestDataSet2: {
    Skills1: string;
    Skills2: string;
  };
};


const typedTestData: TestData = testData;

for (const dataSetName in typedTestData) {

  const skill = typedTestData[dataSetName as keyof TestData];
  
  test(`Wikipedia search Data driven test: - ${skill.Skills1}`, async ({
      page,
    }) => {
      await page.goto("https://testautomationpractice.blogspot.com/");

      const searchBox = page.locator("input.wikipedia-search-input");
      const searchButton = page.locator("input.wikipedia-search-button");

      await searchBox.fill(skill.Skills1);
      // await expect(searchBox).toHaveValue();
      await searchButton.click();
    });

}

// for (const [dataSetName, skills] of Object.entries(typedTestData)) {
//   for (const [skillName, keyword] of Object.entries(skills)) {
//     test(`Wikipedia search Data driven test- ${dataSetName} - ${skillName}: ${keyword}`, async ({
//       page,
//     }) => {
//       await page.goto("https://testautomationpractice.blogspot.com/");

//       const searchBox = page.locator("input.wikipedia-search-input");
//       const searchButton = page.locator("input.wikipedia-search-button");

//       await searchBox.fill(keyword);
//       await expect(searchBox).toHaveValue(keyword);
//       await searchButton.click();
//     });
//   }
// }
