import { test, expect } from '@playwright/test';

test('check top level navigation', async ({ page }) => {
    await page.goto('http://localhost:5173/');
    const loginbox = page.getByRole('textbox', { name: 'Wprowadź hasło...' });
    await loginbox.click();
    await loginbox.fill('admin123');
    await loginbox.press('Enter');

    const homePageLink = page.locator('nav :left-of(:text("O aplikacji")):nth-child(2)')
    await expect(homePageLink).toBeVisible();
    await expect(homePageLink).toHaveText('Strona główna');

    const finishedButton = page.locator('button:text("Ukończone"):right-of(:text("Wszystkie"))');
    await expect(finishedButton).toBeVisible();

    const footer = page.locator('footer');

    await expect(footer).toHaveText(/Todo App/);
});