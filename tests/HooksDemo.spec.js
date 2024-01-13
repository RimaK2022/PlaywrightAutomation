const { test, expect } =require('@playwright/test');

test.beforeEach('Hooks', async ({ page }) => {
    await page.goto("https://www.adactinhotelapp.com");
 
}
)
test('Login Adactin',async({page}) => {
    await page.locator('#username').fill('RimaKarmakar');
    await page.locator('#password').fill('Rima@123');
    await page.getByRole('button', { name: 'Login' }).click();
})

test('Search Hotel',async({page}) => {

    await page.locator('#username').fill('RimaKarmakar');
    await page.locator('#password').fill('Rima@123');
    await page.getByRole('button', { name: 'Login' }).click();

    await page.locator('//select[@id="location"]').selectOption('Sydney');
    await page.locator('//select[@id="hotels"]').selectOption({index:1});
    await page.locator('//select[@id="room_type"]').selectOption({label:'Deluxe'});
    await page.locator('//select[@id="room_nos"]').selectOption({index:2});
    await page.locator('//input[@id="Submit"]').click();
})

test.afterEach('After Each',async({page}) =>
{
    console.log('Finished ${testInfo.title} with Status ${testInfo.status}');

})

test.beforeAll('Before All',async({browser}) =>
{
    const context = await browser.newContext();
    const page = await context.newPage();


})
test.afterAll('After All',async({browser})=>
{
    await browser.close();
    
})