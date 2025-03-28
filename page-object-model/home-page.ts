import { Page, expect } from '@playwright/test';

export class HomePage {
  constructor(private page: Page) { }

  async navigateToHomePage() {
    await this.page.goto('/');
    await this.page.waitForLoadState('load');
  }

  async acceptCookies() {
    await this.page.locator('#main-view').waitFor({ state: 'visible' });
    await this.page.locator('#accept').click();
    await this.page.locator('#main-view').waitFor({ state: 'hidden' });
  }

  async verifyHomePageAndMenu() {
    await expect(this.page.locator('#main_ctaa')).toBeVisible();
    await expect(this.page.locator('#secondary_cta')).toBeVisible();
    await expect(this.page.getByRole('menuitem', { name: 'Products' })).toBeVisible();
    await expect(this.page.getByRole('menuitem', { name: 'Login' })).toBeVisible();
  }

  async clickAndVerifyTopProductsSubMenu() {
    await this.page.getByRole('menuitem', { name: 'Products' }).click();
    await expect(this.page.getByRole('menuitem', { name: 'Usercentrics Web CMP Empower' })).toBeVisible();
    await expect(this.page.getByRole('menuitem', { name: 'Usercentrics App CMP Secure' })).toBeVisible();
    await expect(this.page.getByRole('menuitem', { name: 'Usercentrics CTV CMP Meet' })).toBeVisible();
    await expect(this.page.getByRole('menuitem', { name: 'Usercentrics Privacy Policy' })).toBeVisible();
    await expect(this.page.getByRole('menuitem', { name: 'Server-Side Tagging Solution' })).toBeVisible();
    await expect(this.page.getByText('Integrations WordPress')).toBeVisible();
  }

  async goToPricingPage() {
    await this.page.getByRole('menuitem', { name: 'Pricing' }).click();
    await expect(this.page.getByText('Essential Simplify your privacy compliance with essential tools. €7 per month')).toBeVisible();
    await expect(this.page.getByText('Plus Easily manage privacy compliance while growing your online presence. €15')).toBeVisible();
    await expect(this.page.getByText('Best choice Pro Robust')).toBeVisible();
    await expect(this.page.getByText('Business Optimize for scaling operations and data-driven decisions. €50 per')).toBeVisible();
  }

  async scrollAndClickLearnMoreButton() {
    await this.page.mouse.wheel(0, 1000)
    await this.page.getByRole('tabpanel').filter({ hasText: 'Usercentrics Web CMP A fully' }).getByRole('link').click()
}
}
