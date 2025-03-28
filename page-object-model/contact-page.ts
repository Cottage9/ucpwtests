import { Page, expect } from '@playwright/test';

export class Contact {
  constructor(private page: Page) { }

  async fillContactForm() {
    await this.page.getByRole('textbox', { name: 'First name *' }).click();
    await this.page.getByRole('textbox', { name: 'First name *' }).fill('Jan');
    await this.page.getByRole('textbox', { name: 'Last name *' }).click();
    await this.page.getByRole('textbox', { name: 'Last name *' }).fill('Chalupa');
    await this.page.getByRole('textbox', { name: 'Email', exact: true }).click();
    await this.page.getByRole('textbox', { name: 'Email', exact: true }).fill('sometestmail2@mailor.com');
    await this.page.getByText('Myself / My business').click();
    await this.page.getByLabel('Terms and Conditions: I agree').locator('span').click();
  }

  async chooseDateAndConifrm() {

    await this.page.locator('#fluentform_37_success iframe').contentFrame().locator('[data-test-id="slot-1\\:45PM"]').click();
    await expect(this.page.locator('#fluentform_37_success iframe').contentFrame().getByText('An email has been sent with')).toBeVisible()
  }

}