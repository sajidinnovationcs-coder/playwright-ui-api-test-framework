
export async function getCartCount(page) {

    let myCartXapth = {
        "cartCount": "//a[contains(text(),'My Cart')][1]"
    }
    let cardCount = await page.locator(myCartXapth.cartCount).textContext();
    cardCount = cardCount.match(/\d+/)[0];
    return cardCount;

}



