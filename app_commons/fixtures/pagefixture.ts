import { test as fixture, expect } from "playwright/test";
import HomePage from "../pages/HomePage";
import CartPage from "../pages/CartPage";
import FormsPage from "../pages/FormsPage";
import Utils from "../Utils/Utils";

// Declare the type of the extended fixture
type MyFixtures = {
  Utils: Utils;
  homePage: HomePage;
  cartPage: CartPage;
  formsPage: FormsPage;
};

// Extend the test fixture with custom fixtures
const test = fixture.extend<MyFixtures>({
  Utils: async ({ page }, use) => {
    await use(new Utils(page)); // Provide the Utils instance
  },

  homePage: async ({ page }, use) => {
    await use(new HomePage(page)); // Provide the HomePage instance
  },

  cartPage: async ({ page }, use) => {
    await use(new CartPage(page)); // Provide the CartPage instance
  },

  formsPage: async ({ page }, use) => {
    await use(new FormsPage(page)); // Provide the FormsPage instance
  }
});

export default test;