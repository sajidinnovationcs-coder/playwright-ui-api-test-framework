import { test, expect } from '@playwright/test';
import { addProductToCart } from '../../../src/pages/cart/cart.page.js'
import { suaceDemoURL as config } from '../../../config.js'
import { login } from '../../../src/pages/auth/login.page';
import dotenv from 'dotenv'
import path from 'path'

import { fileURLToPath } from 'url'
const __fileName = fileURLToPath(import.meta.url);
const __dirName = path.dirname(__fileName);
const filePath = path.resolve(__dirName, '..', '..', '..', '.env');
dotenv.config({ path: filePath })


test.describe("Cart functionality - adding items", () => {

    test("should display correct cart total after adding an item", async ({ page }) => {
        const USERNAME = process.env.USERNAME || 'standardUser';
        const PASSWORD = process.env.PASSWORD || 'scerateSauce'


        await login(config.loginPage, page, USERNAME, PASSWORD);
        let cartResult = await addProductToCart(config.homepage, page);
        expect(cartResult.productPrice).toMatch(/^£\d+\.\d{2}$/);
        expect(cartResult.cartCount).toBe(1);
    })
})