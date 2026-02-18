import { test, expect } from '@playwright/test';

describe('Kuberdocker EBIOS Application', () => {
  
  test('should load the main page', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByRole('heading', { 
      name: /Kuberdocker - Analyse EBIOS Risk Manager/i 
    })).toBeVisible();
    await expect(page.getByText('Transport Maritime & Logistique Internationale')).toBeVisible();
  });

  test('should navigate through all EBIOS workshops', async ({ page }) => {
    await page.goto('/');
    const tabs = [
      { id: 'valeurs', label: 'Valeurs Métier' },
      { id: 'evenements', label: 'Événements Redoutés' },
      { id: 'referentiels', label: 'Référentiels' },
      { id: 'sources', label: 'Sources de Risque' },
      { id: 'parties', label: 'Parties Prenantes' },
      { id: 'strategique', label: 'Scénario Stratégique' },
      { id: 'operationnel', label: 'Scénario Opérationnel' },
      { id: 'risque', label: 'Risque Résiduel' },
    ];
    
    for (const tab of tabs) {
      const tabButton = page.getByRole('button', { name: new RegExp(tab.label, 'i') });
      await tabButton.click();
      await expect(page.getByRole('heading', { name: new RegExp(tab.label, 'i') })).toBeVisible();
    }
  });

  test('should display all business values', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('button', { name: /Valeurs Métier/i }).click();
    await expect(page.getByText('Plateforme de réservation et facturation')).toBeVisible();
    await expect(page.getByText('Données R&D livraison par drones')).toBeVisible();
    await expect(page.getByText('Système logistique de gestion des conteneurs')).toBeVisible();
    await expect(page.getByText('Données contractuelles et commerciales')).toBeVisible();
    await expect(page.getByText('Données financières et comptables')).toBeVisible();
  });

  test('should display MITRE ATT&CK scenario', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('button', { name: /Scénario Opérationnel/i }).click();
    await expect(page.getByText('T1589.001')).toBeVisible();
    await expect(page.getByText('T1566.002')).toBeVisible();
    await expect(page.getByText('T1486')).toBeVisible();
    await expect(page.getByText('MFA obligatoire')).toBeVisible();
    await expect(page.getByText('EDR sur postes admins')).toBeVisible();
  });

  test('should display residual risk calculation', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByRole('button', { name: /Risque Résiduel/i })).toBeVisible();
    await page.getByRole('button', { name: /Risque Résiduel/i }).click();
    await expect(page.getByText('16/16')).toBeVisible();
    await expect(page.getByText('6/16')).toBeVisible();
    await expect(page.getByText('CRITIQUE')).toBeVisible();
    await expect(page.getByText('ACCEPTABLE')).toBeVisible();
  });

  test('should have export functionality', async ({ page }) => {
    await page.goto('/');
    const exportButton = page.getByRole('button', { name: /Exporter/i });
    await expect(exportButton).toBeVisible();
  });

  test('should display footer with company info', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByText('Groupe international')).toBeVisible();
    await expect(page.getByText('CA: 100M€')).toBeVisible();
    await expect(page.getByText('ISO 27001')).toBeVisible();
  });

  test('should be responsive on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');
    await expect(page.getByRole('heading', { 
      name: /Kuberdocker - Analyse EBIOS Risk Manager/i 
    })).toBeVisible();
    await page.getByRole('button', { name: /Valeurs Métier/i }).click();
    await expect(page.getByText('Plateforme de réservation')).toBeVisible();
  });

  test('should display correct severity colors', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('button', { name: /Événements Redoutés/i }).click();
    const gravedad4 = page.locator('.bg-red-500, .bg-red-50').first();
    await expect(gravedad4).toBeVisible();
  });

  test('should display all stakeholders', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('button', { name: /Parties Prenantes/i }).click();
    await expect(page.getByText('CloudServices')).toBeVisible();
    await expect(page.getByText('ITservices')).toBeVisible();
    await expect(page.getByText('AllSea')).toBeVisible();
  });
});
