const {By, Key, Builder} = require("selenium-webdriver")
require("chromedriver")
var assert = require("assert")
var webdriver = require("selenium-webdriver")

var driver

const chrome = require("selenium-webdriver/chrome")

async function test_case(){
    let driver = await new Builder().forBrowser("chrome").build()


    await driver.get("https://admin.digitalcommunitylabs.com/login")
    

    if(
        await driver.findElement(By.xpath('//*[@id="__next"]/div[1]/div/div[2]/div/form/div[1]/div[2]/div/input'))
        .isEnabled()){
            console.log("test 1 passed")
        }else{
            console.log("test 1 failed")
            return
        }

    await  driver.findElement(By.xpath('//*[@id="__next"]/div[1]/div/div[2]/div/form/div[1]/div[2]/div/input'))
    .sendKeys("rinami2", Key.RETURN)
    

    if(
        await driver.findElement(By.xpath('//*[@id="__next"]/div[1]/div/div[2]/div/form/div[2]/div[2]/div/input'))
        .isEnabled()){
            console.log("test 2 passed")
        }else{
            console.log("test 2 failed")
            return
        }

    await driver.findElement(By.xpath('//*[@id="__next"]/div[1]/div/div[2]/div/form/div[2]/div[2]/div/input'))
    .sendKeys("P@ssw0rd", Key.RETURN)
    
    await driver.findElement(By.xpath('//*[@id="__next"]/div[1]/div/div[2]/div/form/div[3]/button'))
    .click()

    

    //setInterval(function(){
       driver.quit()
    //}, 1000000)

}

test_case();

/*before(function () {
    driver = new webdriver.Builder()
    .forBrowser('chrome')
    .build()       
})

describe('Index page', function () {

    this.timeout(5000000);

    before(function () {
        driver.get('http://google.com')
    })

    it('should show hello greetings', function (done) {
        driver.findElement(By.name('q')).sendKeys('Selenium', Key.RETURN)
    })
})*/