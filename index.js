const { Builder, By, Key, until, Browser } = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const start = async () => {
    let driver = null;
    try {
        const chromeOptions = new chrome.Options();
        // Comenté la línea que desactiva el navegador para que puedas ver la interacción en la ventana del navegador.
        // chromeOptions.headless();

        driver = await new Builder().forBrowser(Browser.CHROME)
            .setChromeOptions(chromeOptions)
            .build();

        await driver.get("https://www.selenium.dev/selenium/web/web-form.html");

        await delay(2000);
        const textArea = await driver.findElement(By.css("textarea[name='my-textarea']"));
        await textArea.sendKeys("anita lava la tina");
        await delay(2000);

        const dropdown = await driver.findElement(By.css("select[name='my-select']"));
        await dropdown.sendKeys("Three");
        await delay(2000);

        const colorPicker = await driver.findElement(By.css("input[name='my-colors']"));
        await colorPicker.sendKeys("#20a722");
        await delay(2000);

        const datePicker = await driver.findElement(By.css("input[name='my-date']"));
        await datePicker.sendKeys("08/16/1970");
        await delay(2000);

        const checkbox = await driver.findElement(By.css("input[type='checkbox'][name='my-check'][id='my-check-2']"));
        await checkbox.click();
        await delay(2000);

        const submitButton = await driver.findElement(By.css("button[type=submit]"));
        await submitButton.click();
        await delay(2000);

        const formSubmittedTitle = await driver.findElement(By.css("h1.display-6"));
        const formSubmittedText = await formSubmittedTitle.getText();
        console.log(formSubmittedText);
        await delay(2000);

        const receivedMessage = await driver.findElement(By.css("p.lead#message"));
        const receivedText = await receivedMessage.getText();
        console.log(receivedText);
    } catch (error) {
        console.error("Error:", error);
    } finally {
        if (driver) {
            // await driver.quit();
        }
    }
};

start();
