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
      body: JSON.stringify({"data": []})
    });
  });

  await page.screencast.start({ path: 'video.webm' });
  // do stuff here
  await page.screencast.stop();


  await page.goto('http://localhost:5173/');
  new LoginPage(page).login();
  const todoItems = page.locator('.card');
  await expect(todoItems).toHaveCount(0);
  const noTodosMessage = page.locator("text='Brak zadań spełniających kryteria wyszukiwania.'");
  await expect(noTodosMessage).toBeVisible();
});