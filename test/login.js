const {By, Key, Builder} = require("selenium-webdriver")
require("chromedriver")

async function test_case(){
    let driver = await new Builder().forBrowser("chrome").build()

    await driver.get("https://google.com")

    await driver.findElement(By.name('q')).sendKeys("selenium", Key.RETURN)

    setInterval(function(){
        driver.quit()
    }, 100000)

}

test_case();