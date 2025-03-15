import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="login-credentials"]').click();
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('nk');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('nk1234');
  await page.locator('[data-test="login-button"]').click();
  await page.locator('[data-test="username"]').dblclick();
  await page.getByRole('heading', { name: 'Password for all users:' }).click();
  await page.locator('[data-test="login-password"]').click();
  await page.locator('[data-test="login-credentials"]').click();
  await page.getByText('Swag Labs').click();
});