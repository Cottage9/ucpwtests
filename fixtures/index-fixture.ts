import { test as base } from '@playwright/test';
import { HomePage } from '../page-object-model/home-page';
import { CTVCMP } from '../page-object-model/ctv-cmp';
import { Pricing } from '../page-object-model/pricing-page';
import { Contact } from '../page-object-model/contact-page';

type Fixtures = {
  homePage: HomePage;
  ctvCmp: CTVCMP;
  pricing: Pricing;
  contact: Contact;
};

export const test = base.extend<Fixtures>({
  homePage: async ({ page }, use) => {
    const homePage = new HomePage(page);
    await homePage.navigateToHomePage();
    await homePage.acceptCookies();
    await use(homePage);
  },

  ctvCmp: async ({ page }, use) => {
    const ctvCmp = new CTVCMP(page);
    await use(ctvCmp);
  },

  pricing: async ({ page }, use) => {
    const pricing = new Pricing(page);
    await use(pricing);
  },
  contact: async ({ page }, use) => {
    const contact = new Contact(page);
    await use(contact);
  }
  
});

export { expect } from '@playwright/test';
