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

test('mock todos API response', async ({ page }) => {
  page.route('*/**/data.json', route => {
    route.fulfill({
      status: 200,
      contentType: 'application/json',
      body: JSON.stringify({"data": [
    {
      "id": 1,
      "task": "Posprzątaj pokój",
      "done": false,
      "priority": 1,
      "created_at": "2023-10-01T12:00:00Z",
      "due_date": "2023-10-05T12:00:00Z",
      "description": "Upewnij się, że wszystkie rzeczy są na swoim miejscu i podłoga jest czysta."
    },
    {
      "id": 2,
      "task": "Zrób zakupy",
      "done": false,
      "priority": 2,
      "created_at": "2023-10-02T12:00:00Z",
      "due_date": "2023-10-06T12:00:00Z",
      "description": "Kup mleko, chleb i owoce."
    }]})
    });
  });

  await page.goto('http://localhost:5173/');
  new LoginPage(page).login();
  const todoItems = page.locator('.card');
  await expect(todoItems).toHaveCount(2);
});