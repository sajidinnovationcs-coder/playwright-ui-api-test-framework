import { login, getEmailValidationMessage } from '../../../src/pages/auth/login.page'
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

test.describe("Validate login page with valid and invalid user credentials", () => {


    test.skip("Valid login", async ({ page }) => {

        let pageStatus = await login(config.loginPage, page, USERNAME, PASSWORD);
        await expect(pageStatus).toHaveTitle(/Account – Sauce Demo/);
    })

    test("invalid login", async ({ page }) => {
        const invalidUsername = "wrong_user";
        const invalidPassword = "wrong_pass";

        await login(config.loginPage, page, invalidUsername, invalidPassword);
        const validationMessage = await getEmailValidationMessage(page);
        //console.log(validationMessage);
        expect(validationMessage).toContain("@");

    })



})
