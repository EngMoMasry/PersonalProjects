
import test from '../app_commons/fixtures/pagefixture'
import HomePage from "../app_commons/pages/HomePage";
import Utils from '../app_commons/Utils/Utils';

test("Ui Test@Ui", async ({
    page, Utils, homePage, cartPage, formsPage
}) => {
    await test.step("1)User navigates to URL", async () => {
        await Utils.navigateTo("https://practice.automationtesting.in/")
        await Utils.waitForPageLoad()

    });

    await test.step("2)User verifies That thinking book exists along with the price", async () => {
   
        await homePage.isThikingBookExists()
        await homePage.isThinkingBookPriceExists()
    });
    await test.step("3)User clicks on Add to Basket for Thinking Book", async () => {
        await homePage.clickOnAddToCart()

    });
    await test.step("4)User clicks on Shopping Cart", async () => {
        await homePage.clickOnCart()
        await Utils.waitForPageLoad()

    });
    await test.step("5)User navigates to cartspage and verifies thinking book existense", async () => {
        await cartPage.verifyThinkingBookTitleExists()
        await cartPage.verifyThinkingBookPriceExists()
    });

    await test.step("6)User clicks on proceed to checkout", async () => {
        await cartPage.clickOnProceedToCheckOut()
        await Utils.waitForPageLoad()

    });

    await test.step("7)User Asserts Billing Details form displayed", async () => {
        await formsPage.verifyBillingFormExists()
    });


})