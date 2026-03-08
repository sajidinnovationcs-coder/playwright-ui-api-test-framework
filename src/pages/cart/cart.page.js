import { getCartCount } from '../../components/cart/cartSummary.component';


export async function addProductToCart(url, page) {
    let productPrice;
    let cartCount;
    let cartResult = {};

    const cartPageXpath = {
        "listOfProduct": "div#page-content",
        "productPrice": "h2#product-price span",
        "addTOCartbutton": "//input[@value='Add to Cart']",
    }

    await page.goto(url);
    await page.waitForLoadState('networkidle')

    const divLocator = await page.locator(cartPageXpath.listOfProduct);
    if (!(await divLocator.count())) {
        return { productPrice: null, cartCount: null };
    }

    if (divLocator != null || divLocator != undefined) {

        await divLocator.locator('a').first().click();
        await page.waitForLoadState('networkidle')



        // Check if the product price exists; if not, return productPrice as null (handles broken page or missing price)
        const checkIfProductPricePresent = page.locator(cartPageXpath.productPrice);
        const isVisible = await checkIfProductPricePresent.isVisible();
        //console.log("Is visible:", isVisible);
        if (!isVisible) {
            return { productPrice: null, cartCount: null };
        }

        productPrice = await page.locator(cartPageXpath.productPrice).textContent();



        //Check if the add to card button existsl if not,  productPrice as null (handles broken page or missing button)
        const addButton = page.locator(cartPageXpath.addTOCartbutton);
        if (!(await addButton.count())) {
            // Product has no Add to Cart button
            return { productPrice: null, cartCount: null };
        }

        // Click Add to Cart button
        await page.locator(cartPageXpath.addTOCartbutton).click();



        cartCount = await getCartCount(page);
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