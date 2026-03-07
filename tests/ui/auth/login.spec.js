import { login, getEmailValidationMessage, verifyLoginPage } from '../../../src/pages/auth/login.page'
import { test, expect } from '@playwright/test';
import dotenv from 'dotenv'
import path from 'path'
import { fileURLToPath } from 'url'
const __fileName = fileURLToPath(import.meta.url);
const __dirName = path.dirname(__fileName);
const filePath = path.resolve(__dirName, '..', '..', '..', '.env');
dotenv.config({ path: filePath })

import { suaceDemoURL as config } from '../../../config.js'

const USERNAME = process.env.USERNAME || 'standardUser';
const PASSWORD = process.env.PASSWORD || 'scerateSauce'

test.describe("Login functionality", () => {


    test("should login successfully with valid credentials", async ({ page }) => {

        let checkLoginPageAvialble = await verifyLoginPage(config.loginPage, page);
        expect(checkLoginPageAvialble).toEqual("Customer Login");
        let pageStatus = await login(config.loginPage, page, USERNAME, PASSWORD);
        await expect(pageStatus).toHaveTitle(/Account – Sauce Demo/);
    })


    test("should fail to login with invalid credentials", async ({ page }) => {
        const invalidUsername = "wrong_user";
        const invalidPassword = "wrong_pass";

        let checkLoginPageAvialble = await verifyLoginPage(config.loginPage, page);
        expect(checkLoginPageAvialble).toEqual("Customer Login");
        await login(config.loginPage, page, invalidUsername, invalidPassword);
        const validationMessage = await getEmailValidationMessage(page);
        //console.log(validationMessage);
        expect(validationMessage).toContain("@");

    })






})
