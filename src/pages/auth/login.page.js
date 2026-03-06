
//console.log(process.env.USERNAME);

export async function login(url, page, username, password) {

    const loginPageXapth = {
        "userName": "#customer_email",
        "password": "#customer_password",
        "loginButton": "//input[@value='Sign In']"
    }


    await page.goto(url);
    await page.waitForLoadState('networkidle')
    await page.locator(loginPageXapth.userName).fill(username);
    await page.locator(loginPageXapth.password).fill(password);
    await page.locator(loginPageXapth.loginButton).click();
    //const title = await page.title();
    //console.log(title);
    return page;


}
