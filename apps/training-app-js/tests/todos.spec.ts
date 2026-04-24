import { test, expect } from '@playwright/test';
import LoginPage from './pages/LoginPage';

test('check list of todos', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await page.goto('http://localhost:5173/');
  await loginPage.login();
  
  const todosList = page.locator('.todos-list');
  await expect(todosList).toBeVisible();
  
  const todoItems = page.locator('.card');
  await expect(todoItems).toHaveCount(6);
});