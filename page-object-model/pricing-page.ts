import { Page, expect } from '@playwright/test';

export class Pricing {
  constructor(private page: Page) { }

  async openPricingPage() {
      await this.page.getByRole('menuitem', { name: 'Pricing' }).click();
      await expect(this.page.getByText('Essential Simplify your privacy compliance with essential tools. €7 per month')).toBeVisible();
      await expect(this.page.getByText('Plus Easily manage privacy compliance while growing your online presence. €15')).toBeVisible();
      await expect(this.page.getByText('Best choice Pro Robust')).toBeVisible();
      await expect(this.page.getByText('Business Optimize for scaling operations and data-driven decisions. €50 per')).toBeVisible();
  }

}