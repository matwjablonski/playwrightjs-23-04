import { test as setup, expect } from '@playwright/test';

const authFile = 'playwright/.auth/user.json';

setup('authenticate', async ({ page }) => {
  // Przejdź do aplikacji
  await page.goto('http://localhost:5173/');
  
  // Wypełnij pole hasła
  const loginbox = page.getByRole('textbox', { name: 'Wprowadź hasło...' });
  await loginbox.click();
  await loginbox.fill('admin123');
  await loginbox.press('Enter');
  
  // Zaczekaj na załadowanie listy todos (potwierdzenie poprawnego logowania)
  const todosList = page.locator('.todos-list');
  await expect(todosList).toBeVisible();
  
  // Zapisz stan autoryzacji do pliku
  await page.context().storageState({ path: authFile });
  
  console.log('✓ Autoryzacja zakończona pomyślnie. Stan zapisany w:', authFile);
});
