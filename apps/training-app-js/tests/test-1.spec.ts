import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:5173/#/');
  await page.getByRole('textbox', { name: 'Wprowadź hasło...' }).click();
  await page.getByRole('textbox', { name: 'Wprowadź hasło...' }).fill('admin123');
  await page.getByRole('textbox', { name: 'Wprowadź hasło...' }).press('Enter');
});