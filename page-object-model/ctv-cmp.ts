import { Page, expect } from '@playwright/test';

export class CTVCMP {
  constructor(private page: Page) { }

  async topMenuOpenCtvCmp() {
    await this.page.getByRole('menuitem', { name: 'Usercentrics CTV CMP Meet' }).click();
    await this.page.getByText('Meet global data compliance requirements and reduce legal risks. Secure OTT').click();
    await expect(this.page.getByText('USERCENTRICS CTV CMP Protect')).toBeVisible();
    await expect(this.page.getByText('Meet global data compliance requirements and reduce legal risks. Secure OTT')).toBeVisible();
  }

}