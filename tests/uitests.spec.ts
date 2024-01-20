// import { test, expect, type Page } from "@playwright/test";
// import { user } from "../tests-examples/datatest.json";
// import { product } from "../tests-examples/productList.json";
// import { execPath } from "process";
// import * as fs from "fs";

// // test('has title', async ({ page }) => {
// //     await page.goto('https://www.automationexercise.com');

// //     await expect(page).toHaveTitle(/Automation/);
// //   });

// test.beforeEach(async ({ page }) => {
//   await page.goto("https://www.automationexercise.com");
// });

// //   test('get started link', async ({ page }) => {
// //     await page.goto('https://www.automationexercise.com');

// //     await page.getByRole('link', { name: 'Video Tutorials' }).click();

// //     await expect(page).toHaveURL(/.*AutomationExercise/);
// //   });

// //   test.describe('tests UI', () => {
// //     test('register user', async ({ page }) => {

// //      // await page.goto('https://www.automationexercise.com');
// //       //await expect(page.getByText('Full-Fledged practice website for Automation Engineers')).toBeVisible();
// //       await  page.getByRole('heading', { name: 'Full-Fledged practice website for Automation Engineers' }).isVisible
// //       await page.getByRole('link', { name: 'Singup/Login' }).click();
// //      // await expect (page).toHaveTitle('Login')

// //     });
// test("new user sign up ", async ({ page }) => {
//   // await page.goto("https://www.automationexercise.com");
//   await page.getByRole("link", { name: "Signup / Login" }).click();
//   await expect(page.getByText("New User Signup!")).toBeVisible();

//   // await page.evaluate(() => {
//   //   document.body.remove();
//   // });

//   // await page.evaluate(() => {
//   //   const elementToRemove = document.getElementById("ad_position_box");
//   //   if (elementToRemove) {
//   //     elementToRemove.remove();
//   //   }
//   // });

//   const emailSignup = page.locator(
//     'form:has-text("Signup") input[placeholder="Email Address"]'
//   );
//   const nameSingnup = page.locator(
//     'form:has-text("Signup") input[placeholder="Name"]'
//   );

//   await expect(nameSingnup).toBeEmpty;
//   await expect(emailSignup).toBeEmpty;
//   await nameSingnup.fill("Pav");
//   await emailSignup.fill("eee@mail.com");
//   await page.getByRole("button", { name: /Signup/i }).click();

//   // await expect(page).toHaveURL(/.*signup/);
//   await expect(page.getByText("ENTER ACCOUNT INFORMATION")).toBeVisible();

//   // const user = JSON.parse(fs.readFileSync("datatest.json", "utf-8"));
//   // await page.fill("#first_name", user.firstName);
//   // await page.fill("#last_name", user.lastName);
//   // await page.fill("#email", user.email);
//   // await page.fill("#password", user.password);
//   // await page.getByRole("button", { name: /Create Account/i }).click();

//   const password = page.getByLabel("Password");
//   //const password = page.getByPlaceholder("Password");
//   await password.fill("123");
//   const firstName = page.getByLabel("First Name");
//   await firstName.fill("pav");
//   const lastName = page.getByLabel("Last Name");
//   await lastName.fill("rud");
//   await page
//     .getByLabel("Address * (Street address, P.O. Box, Company name, etc.)")
//     .fill("kob 54");
//   await page.getByLabel("Country").selectOption("Canada");
//   await page.getByLabel("State").fill("maz");
//   await page.getByLabel("City ").fill("waw");
//   await page.getByLabel("Zipcode ").fill("12345");
//   await page.getByLabel("Mobile Number").fill("123456789");

//   await page.getByRole("button", { name: /Create Account/i }).click();
//   await expect(page.getByText("ACCOUNT CREATED!")).toBeVisible();
// });

// test("login user negative", async ({ page }) => {
//   //  await page.goto("https://www.automationexercise.com");

//   await page.getByRole("link", { name: "Signup / Login" }).click();

//   await expect(page.getByText("Login to your account")).toBeVisible();

//   const emailLogin = page.locator(
//     'form:has-text("Login") input[placeholder="Email Address"]'
//   );

//   await expect(emailLogin).toBeEmpty;
//   await emailLogin.fill("pav@mail.com");
//   const password = page.getByPlaceholder("Password");
//   await expect(password).toBeEmpty;
//   await password.fill("123");
//   await page.getByRole("button", { name: /Login/i }).click();
  
//   await expect(
//     page.getByText("Your email or password is incorrect!")
//   ).toBeVisible();
// });

// test("login user positive", async ({ page }) => {
//   await page.goto("https://www.automationexercise.com");

//   await page.getByRole("link", { name: "Signup / Login" }).click();

//   await expect(page.getByText("Login to your account")).toBeVisible();

//   const emailLogin = page.locator(
//     'form:has-text("Login") input[placeholder="Email Address"]'
//   );
//   const passwordLogin = page.locator(
//     'form:has-text("Login") input[placeholder="Password"]'
//   );

//   await expect(emailLogin).toBeEmpty;
//   await emailLogin.fill("eee@mail.com");
//   //const passwordLogin = page.getByPlaceholder("Password");
//   await expect(passwordLogin).toBeEmpty;
//   await passwordLogin.fill("123");
//   await page.getByRole("button", { name: /Login/i }).click();
//   // await expect(page.getByText("Full-Fledged practice website for Automation Engineers")).toBeVisible();
// });

// test("add to card ", async ({ page }) => {
//   //await page.goto("https://www.automationexercise.com");

//   // await page.evaluate(() => {
//   //   document.body.remove();
//   // });

//   await page.evaluate(() => {
//     const elementToRemove = document.getElementById("ad_position_box");
//     if (elementToRemove) {
//       elementToRemove.remove();
//     }
//   });

//   await page.getByRole("link", { name: "Products" }).click();

//   // await page.evaluate(() => {
//   //   document.body.remove();
//   // });

//   await page.evaluate(() => {
//     const elementToRemove = document.querySelector(".adsbygoogle");
//     if (elementToRemove) {
//       elementToRemove.remove();
//     }
//   });

//   await expect(page.getByText("All product")).toBeVisible();
//   const search = page.getByPlaceholder("Search");
//   await expect(search).toBeEmpty;
//   await search.fill("blue");
//   // await page.waitForSelector('#submit_search', { visible: true });
//   await page.click("#submit_search");

//   const addToCartLinks = await page.locator('.productinfo .add-to-cart').all();
//   for (const link of addToCartLinks) {
//     await link.click();
//     await page.getByRole("button", { name: /Continue Shopping/i }).click();
//   }

//   await page.getByRole("link", { name: "Cart" }).click();
// });

// test("product color is blue ", async ({ page }) => {
//   const cartProductList = page.getByTitle("Cart");
//   await expect(cartProductList).toHaveText("Blue");
// });


import { expect, test } from "@playwright/test";
import { createUserData } from "../pages/createUserData";
import { CreateAccountSignupPage } from "../pages/CreateAccountSignuoPage";
import { HomePage } from "../pages/HomePage";
import { SignupOrLoginPage } from "../pages/SignupOrLoginPage";

test("new user sign up ", async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.goto();
  await homePage.signupOrLoginLink.click()


  const loginPage = new SignupOrLoginPage(page)
  await loginPage.mount()

  // await expect(loginPage.signupNameInput).toBeEmpty();
  await loginPage.signupNameInput.fill("Pav");
  await loginPage.signupEmailInput.fill(`eee+test-${Date.now()}@mail.com`);
  await loginPage.signupButton.click();

  const createAccountSignupPage = new CreateAccountSignupPage(page)
  await createAccountSignupPage.mount()
  await expect(createAccountSignupPage.pageHeader).toBeVisible();

  const userData = createUserData()
  await createAccountSignupPage.fillIn(userData)
  await createAccountSignupPage.createAccountButton.click();
  await expect(createAccountSignupPage.acccountCreatedSuccessMessage).toBeVisible();
});


test("login user negative", async ({ page }) => {

  await page.getByRole("link", { name: "Signup / Login" }).click();

  await expect(page.getByText("Login to your account")).toBeVisible();

  const emailLogin = page.locator(
    'form:has-text("Login") input[placeholder="Email Address"]'
  );

  await expect(emailLogin).toBeEmpty;
  await emailLogin.fill("pav@mail.com");
  const password = page.getByPlaceholder("Password");
  await expect(password).toBeEmpty;
  await password.fill("123");
  await page.getByRole("button", { name: /Login/i }).click();

  await expect(
    page.getByText("Your email or password is incorrect!")
  ).toBeVisible();
});


test("login user positive", async ({ page }) => {
  await page.goto("https://www.automationexercise.com");

  await page.getByRole("link", { name: "Signup / Login" }).click();

  await expect(page.getByText("Login to your account")).toBeVisible();

  const emailLogin = page.locator(
    'form:has-text("Login") input[placeholder="Email Address"]'
  );
  const passwordLogin = page.locator(
    'form:has-text("Login") input[placeholder="Password"]'
  );

  await expect(emailLogin).toBeEmpty;
  await emailLogin.fill("eee@mail.com");
  await expect(passwordLogin).toBeEmpty;
  await passwordLogin.fill("123");
  await page.getByRole("button", { name: /Login/i }).click();
});


test("add to card ", async ({ page }) => {

  await page.evaluate(() => {
    const elementToRemove = document.getElementById("ad_position_box");
    if (elementToRemove) {
      elementToRemove.remove();
    }
  });

  await page.getByRole("link", { name: "Products" }).click();
  await page.evaluate(() => {
    const elementToRemove = document.querySelector(".adsbygoogle");
    if (elementToRemove) {
      elementToRemove.remove();
    }
  });

  await expect(page.getByText("All product")).toBeVisible();
  const search = page.getByPlaceholder("Search");
  await expect(search).toBeEmpty;
  await search.fill("blue");
  await page.click("#submit_search");

  const addToCartLinks = await page.locator('.productinfo .add-to-cart').all();
  for (const link of addToCartLinks) {
    await link.click();
    await page.getByRole("button", { name: /Continue Shopping/i }).click();
  }

  await page.getByRole("link", { name: "Cart" }).click();
});


test("product color is blue ", async ({ page }) => {
  const cartProductList = page.getByTitle("Cart");
  await expect(cartProductList).toHaveText("Blue");
});