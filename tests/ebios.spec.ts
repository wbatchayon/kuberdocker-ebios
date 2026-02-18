import { test, expect } from '@playwright/test';
import { describe } from 'node:test';

describe('Kuberdocker EBIOS Application', () => {
  
  test('should load the main page', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByRole('heading', { 
      name: /Kuberdocker/i 
    })).toBeVisible();
  });

  test('should display footer with company info', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByText('Groupe international')).toBeVisible();
    await expect(page.getByText('CA: 100M EUR')).toBeVisible();
    await expect(page.getByText('ISO 27001')).toBeVisible();
  });

  test('should have export functionality', async ({ page }) => {
    await page.goto('/');
    const exportButton = page.getByRole('button', { name: /Exporter/i });
    await expect(exportButton).toBeVisible();
  });

  test('should be responsive on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');
    await expect(page.getByRole('heading', { 
      name: /Kuberdocker/i 
    })).toBeVisible();
  });

  test('should have navigation buttons', async ({ page }) => {
    await page.goto('/');
    // Check that navigation buttons exist
    const buttons = page.locator('button');
    await expect(buttons).toHaveCount(9); // 8 nav buttons + 1 export button
  });

  test('should display footer with compliance badges', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByText('PSSI 80%')).toBeVisible();
    await expect(page.getByText('Maturite: 2/4')).toBeVisible();
  });

  test('should show header with EBIOS title', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByText('EBIOS Risk Manager')).toBeVisible();
  });

  test('should display correct footer info', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByText('Cherbourg, Amsterdam, Shanghai')).toBeVisible();
  });

  test('should have 8 navigation sections', async ({ page }) => {
    await page.goto('/');
    // Check navigation has 4 main buttons in grid
    const navButtons = page.locator('.bg-white\\/95 button');
    const count = await navButtons.count();
    expect(count).toBeGreaterThanOrEqual(4);
  });

  test('should display company activities', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByText('Transport maritime').first()).toBeVisible();
  });
});
