import { getCartCount } from '../../components/cart/cartSummary.component';


export async function addProductToCart(url, page) {

    let cartResult = {};
    const cartPageXpath = {
        "listOfProduct": "div#page-content",
        "productPrice": "h2#product-price span",
        "addTOCartbutton": "//input[@value='Add to Cart']",
    }
    await page.goto(url);

    await page.waitForLoadState('networkidle')
    let divLocator = await page.locator(cartPageXpath.listOfProduct);

    if (divLocator != null || divLocator != undefined) {

        await divLocator.locator('a').first().click();
        await page.waitForLoadState('networkidle')
        let productPrice = await page.locator(cartPageXpath.productPrice).textContent();
        //console.log("productPrice" + productPrice);
        await page.locator(cartPageXpath.addTOCartbutton).click();



        let cartCount = await getCartCount(page);
        cartCount = parseInt(cartCount, 10);
        // Cart count may not update immediately; retry if the value is 0
        if (cartCount == 0) {
            await page.waitForTimeout(8000);
            cartCount = await getCartCount(page);
            cartCount = parseInt(cartCount, 10);
        }

        //console.log("cartCount" + cartCount);

        cartResult = {
            "productPrice": productPrice,
            "cartCount": cartCount
        }

        return cartResult;


    }
    else {

        return cartResult = {
            "productPrice": null,
            "cartCount": null

        }
    }






}