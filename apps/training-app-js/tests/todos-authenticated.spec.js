import { test, expect } from '@playwright/test';

// Ten test automatycznie wykorzystuje zapisany stan autoryzacji
// dzięki konfiguracji w playwright.config.js (storageState)

test.describe('Testy z wykorzystaniem autoryzacji', () => {
  
  test('sprawdzenie listy todos bez ręcznego logowania', async ({ page }) => {
    // Przejdź do aplikacji - jesteśmy już zalogowani!
    await page.goto('http://localhost:5173/');
    
    // Sprawdź, czy lista todos jest widoczna
    const todosList = page.locator('.todos-list');
    await expect(todosList).toBeVisible();
    
    // Sprawdź liczbę elementów
    const todoItems = page.locator('.card');
    await expect(todoItems).toHaveCount(6);
  });

  test('dodanie nowego todo z zapisaną autoryzacją', async ({ page }) => {
    await page.goto('http://localhost:5173/');
    
    // Znajdź pole input do dodawania nowego todo
    const addTodoInput = page.getByPlaceholder('Dodaj nowe zadanie...');
    await addTodoInput.fill('Test zadanie z autoryzacją');
    await addTodoInput.press('Enter');
    
    // Sprawdź czy zadanie zostało dodane
    await expect(page.locator('.card').last()).toContainText('Test zadanie z autoryzacją');
  });

  test('filtrowanie todos będąc zalogowanym', async ({ page }) => {
    await page.goto('http://localhost:5173/');
    
    // Sprawdź czy lista jest widoczna
    const todosList = page.locator('.todos-list');
    await expect(todosList).toBeVisible();
    
    // Sprawdź czy przyciski filtrowania są dostępne
    const filterButtons = page.locator('.filter-bar button');
    await expect(filterButtons).toHaveCount(3); // All, Active, Completed
  });
});
