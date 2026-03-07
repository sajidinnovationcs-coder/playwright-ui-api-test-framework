
export async function getCartCount(page) {

    let myCartXapth = {
        "cartCount": "//a[contains(text(),'My Cart')][1]"
    }
    await page.waitForLoadState('networkidle');

    let cardCount = await page.locator(myCartXapth.cartCount).textContent();
    cardCount = cardCount.match(/\d+/)[0];
    return cardCount;

}



