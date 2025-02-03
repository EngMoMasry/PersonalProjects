<!-- # PersonalProjects
This is a repository for my personal projects
Prerequisites
Before starting with the setup and execution, please ensure the following:

Node.js and npm: Ensure Node.js is installed. You can check by running:



node -v
Also, check for npm (Node Package Manager):



npm -v
If you don’t have it installed, download and install it from here.

Playwright: This guide assumes you're using Playwright for browser automation. Ensure Playwright is installed, as mentioned in the steps below.

Setup Instructions
Follow these steps to set up the testing environment.

Step 1: Initialize a New Node.js Project
If you haven’t already, initialize a Node.js project:



npm init -y
Step 2: Install Playwright and Required Dependencies
Install Playwright by running:



npm install @playwright/test
Install Allure Reporter (optional, for generating reports):



npm install allure-commandline allure-playwright --save-dev
Install Playwright Browsers (necessary to run tests in real browsers):



npx playwright install
Executing the Tests
After completing the setup, you can run the tests as follows.

Step 1: Run All Tests
To run all tests (UI and API tests) in the tests folder:



npx playwright test
Step 2: Run Specific Test File
To run a specific test (e.g., ui.test.ts for the UI tests):



npx playwright test tests/ui.test.ts
To run the API tests (e.g., api.test.ts):



npx playwright test tests/api.test.ts
Step 3: View Allure Report (Optional)
If you’ve configured Allure reporting, after running the tests, generate and open the report as follows:

Generate the report:



npx allure generate allure-results --clean -o allure-report
Open the report:



npx allure open allure-report
Test Case Details
Here’s a quick overview of the provided test cases:

1. UI Test Case (UI Automation)
This test case automates the UI workflow of navigating to a website and interacting with different page elements. It verifies that the "Thinking in HTML" book exists, adds it to the cart, and ensures that billing details are shown in the checkout page.

ts

import test from '../app_commons/fixtures/pagefixture';
import HomePage from "../app_commons/pages/HomePage";
import Utils from '../app_commons/Utils/Utils';

test("UI Test@Ui", async ({ page, Utils, homePage, cartPage, formsPage }) => {
    await test.step("1) User navigates to URL", async () => {
        await Utils.navigateTo("https://practice.automationtesting.in/");
        await Utils.waitForPageLoad();
    });

    await test.step("2) User verifies that Thinking Book exists along with the price", async () => {
        await homePage.isThikingBookExists();
        await homePage.isThinkingBookPriceExists();
    });

    await test.step("3) User clicks on Add to Basket for Thinking Book", async () => {
        await homePage.clickOnAddToCart();
    });

    await test.step("4) User clicks on Shopping Cart", async () => {
        await homePage.clickOnCart();
        await Utils.waitForPageLoad();
    });

    await test.step("5) User navigates to cart page and verifies Thinking Book existence", async () => {
        await cartPage.verifyThinkingBookTitleExists();
        await cartPage.verifyThinkingBookPriceExists();
    });

    await test.step("6) User clicks on proceed to checkout", async () => {
        await cartPage.clickOnProceedToCheckOut();
        await Utils.waitForPageLoad();
    });

    await test.step("7) User asserts Billing Details form is displayed", async () => {
        await formsPage.verifyBillingFormExists();
    });
});
2. API Test Case (API Automation)
This suite of API test cases interacts with the Petstore API to perform POST, GET, PUT, and DELETE operations. It tests user creation, retrieval, updating, and deletion.

POST Request: Create a New User
ts



import { test, expect } from "playwright/test";

test('POST request to create a user', async ({ request }) => {
  const endPoint = 'https://petstore3.swagger.io/api/v3/user';
  const requestBody = {
    id: 10,
    username: 'theUser',
    firstName: 'John',
    lastName: 'James',
    email: 'john@email.com',
    password: '12345',
    phone: '12345',
    userStatus: 1
  };

  const response = await request.post(endPoint, {
    data: requestBody,
    headers: { 'Content-Type': 'application/json' },
  });

  expect(response.status()).toBe(200);
  const responseBody = await response.json();

  expect(responseBody.id).toBe(requestBody.id);
  expect(responseBody.username).toBe(requestBody.username);
});
GET Request: Retrieve User Info by Username
ts

test('GET request to get info of the user by username', async ({ request }) => {
    const endPoint = 'https://petstore3.swagger.io/api/v3/user/theUser';
    const response = await request.get(endPoint);
  
    expect(response.status()).toBe(200);
    const responseBody = await response.json();
});
PUT Request: Update User Info
ts
//
test('PUT request to update user by username and userinfo', async ({ request }) => {
    const endPoint = 'https://petstore3.swagger.io/api/v3/user/Mohamed';
  
    const updatedUser = {
        id: 10,
        username: 'Mohamed',
        firstName: 'Mohamed',
        lastName: 'Ali',
        email: 'mohamed.ali@email.com',
        password: 'newPassword123',
        phone: '9876543210',
        userStatus: 1
    };

    const response = await request.put(endPoint, {
        data: updatedUser,
        headers: { 'Content-Type': 'application/json' },
    });

    expect(response.status()).toBe(200);
    const responseBody = await response.json();
    expect(responseBody.username).toBe(updatedUser.username);
});
DELETE Request: Delete User
ts

test('DELETE request to remove user by username', async ({ request }) => {
    const endPoint = 'https://petstore3.swagger.io/api/v3/user/theUser';
    const response = await request.delete(endPoint);
  
    expect(response.status()).toBe(200);
    const responseBody = await response.json();
    expect(responseBody.message).toBe('successful operation');
}); -->
