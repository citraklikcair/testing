const {By, Key, Builder} = require("selenium-webdriver")
require("chromedriver")
var assert = require("assert")
var webdriver = require("selenium-webdriver")
var should = require("chai").should();
var driver

const chrome = require("selenium-webdriver/chrome")

//describe block
describe("dashboard test", async function(){

    this.timeout(5000000)
        let driver =  new Builder().forBrowser("chrome").build();
        driver.get("https://admin.digitalcommunitylabs.com/login")

    //it block
    it('login', async function(){
        await driver.findElement(By.xpath('//*[@id="__next"]/div[1]/div/div[2]/div/form/div[1]/div[2]/div/input'))
        .sendKeys("citra")
        await driver.findElement(By.xpath('//*[@id="__next"]/div[1]/div/div[2]/div/form/div[2]/div[2]/div/input'))
        .sendKeys("Klikcair@123")  
        await driver.findElement(By.xpath('//*[@id="__next"]/div[1]/div/div[2]/div/form/div[3]/button'))
        .click()
    })
    it("positive verifikasi UI", async function(){        

        {
            const elements = await driver.findElements(By.css(".kc-button:nth-child(1) > .kc-button__content"))
            assert(elements.length)
          }
    
        await driver.findElement(By.css(".kc-button:nth-child(1) > .kc-button__content")).click()
        
        await driver.findElement(By.xpath('//*[@id="__next"]/aside/a/span'))
		.getText('Digital Community Bank') 
        await driver.findElement(By.xpath('//*[@id="__next"]/div[1]/div[1]/div/div/div[1]'))
        .getText('Dashboard') 

        await driver.findElement(By.xpath('//*[@id="__next"]/aside/div/nav/ul/li[1]/a'))
        .getAttribute()

        await driver.findElement(By.xpath('//*[@id="__next"]/div[1]/div[1]/div/div/div[2]/ol/li/a'))
        .click()
    }) 

    it("positive verifikasi halaman users", async function(){
        
        await driver.findElement(By.xpath('//*[@id="__next"]/aside/div/nav/ul/li[2]/a'))
		.getText('Users') 
        await driver.findElement(By.xpath('//*[@id="__next"]/aside/div/nav/ul/li[2]/a'))
        .click() 
        await driver.findElement(By.xpath('//*[@id="__next"]/div[1]/div[2]/div/div[1]/button'))
        .click()
    }) 
    

    await webdriver.quit()
})