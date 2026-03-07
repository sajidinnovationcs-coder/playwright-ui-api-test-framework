
//console.log(process.env.USERNAME);

const loginPageXpath = {
    "userName": "#customer_email",
    "password": "#customer_password",
    "loginButton": "//input[@value='Sign In']",
    "loginPageText": "//*[contains(text(),'Customer Login')]"
}


export async function login(url, page, username, password) {


    await page.goto(url);
    await page.waitForLoadState('networkidle')
    await page.locator(loginPageXpath.userName).fill(username);
    await page.locator(loginPageXpath.password).fill(password);
    await page.locator(loginPageXpath.loginButton).click();
    //const title = await page.title();
    //console.log(title);
    return page;


}


export async function getEmailValidationMessage(page) {

    return await page
        .locator(loginPageXpath.userName)
        .evaluate(el => el.validationMessage);

}

export async function verifyLoginPage(url, page) {

    await page.goto(url);
    return await page.locator(loginPageXpath.loginPageText).textContent();

}