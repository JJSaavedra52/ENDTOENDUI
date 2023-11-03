const {Browser, Builder, By} = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const start = async () => {
    let driver = null;
    try {
        const chromeOptions = new chrome.Options();
        //Que no saque navegador
        // chromeOptions.headless();

        driver = await new Builder().forBrowser(Browser.CHROME)
        .setChromeOptions(chromeOptions).build();

        // driver = await new Builder().forBrowser(Browser.CHROME).build();
        await driver.get("https://www.selenium.dev/selenium/web/web-form.html");

        const textInput = await driver.findElement(By.id("my-text-id"));
        await textInput.sendKeys("Este es mi texto desde selenium");

        delay(2000);

        const textArea = await driver.findElement(By.css("textarea[name='my-textarea']"));
        await textArea.sendKeys("anita lava la tina");

        await delay(2000);

        const submit = await driver.findElement(By.css("button[type=submit]"));
        await submit.click();
        await delay(2000);

        console.log(submit);
    } catch (error) {
    } finally {
        if (driver) {
            // await driver.quit();
        }
    }
}
start();