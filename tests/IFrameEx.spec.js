const { test, expect,chromium } =require('@playwright/test');

test('IFrameEx', async ({ }) => {
  // await page.slow(30);
  const browser = await chromium.launch({ });
  const context = await browser.newContext({
   recordVideo: {
      dir:'videos/',
   }
  })
  const page = await context.newPage();
    await page.goto("http://autopract.com/selenium/iframe1/");

    await page.screenshot({path:'screenshots/screenshot1_'+Date.now()+'.png'});
 //  const myFrame = page.frame("testframe");
    const myFrame = page.frame({name:"testframe"});
 
    await myFrame.fill("(//input[@class ='form-control'])[1]","Rima");
    await myFrame.locator("(//input[@class ='form-control'])[1]","Rima").screenshot({path:'screenshots/screenshot2.png'});
    await myFrame.locator('(//input[@class ="form-control"])').nth(1).type("abc@gmail.com");
}
);