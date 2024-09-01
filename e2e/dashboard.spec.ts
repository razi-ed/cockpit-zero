import { test, expect } from "@playwright/test";

test.describe("Cockpit0", () => {
  test("should navigate to Dashboard and display app shell", async ({
    page,
  }) => {
    await page.goto("/log-events");

    const appName = page.locator(`text=Cockpit0`);
    await expect(appName).toBeInViewport();

    const header = page.locator("header");
    await expect(header).toBeInViewport();

    const nav = page.locator("nav");
    await expect(nav).toBeInViewport();

    const content = page.locator("main.h-[calc(100%-4rem)]");
    await expect(content).toBeInViewport();
  });

  test("should fetch log events and show them in a table", async ({ page }) => {
    await page.goto("/log-events");

    const tableRows = page.locator("tbody > tr");
    await expect(tableRows).toBeTruthy();
  });

  test("should fetch log events and show them in a table and the row should expand on click to show log event attributes", async ({
    page,
  }) => {
    await page.goto("/log-events");

    const tableRows = page.locator("tbody > tr");
    await tableRows.first().click();

    const attributeValues = page.locator("dd");
    expect(attributeValues.first()).toBeTruthy();
  });
});
