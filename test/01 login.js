const {By, Key, Builder} = require("selenium-webdriver")
require("chromedriver")
var assert = require("assert")
var webdriver = require("selenium-webdriver")
var should = require("chai").should();
var driver

const chrome = require("selenium-webdriver/chrome")

//describe block
describe("login test", async function(){

    this.timeout(5000000)
        let driver =  new Builder().forBrowser("chrome").build();
        driver.get("https://admin.digitalcommunitylabs.com/login")

    //it block
    it("positive verifikasi username", async function(){
        
        await driver.findElement(By.xpath('//*[@id="__next"]/div[1]/div/div[2]/div/form/div[1]/div[2]/div/input'))
			.isEnabled()
        await driver.findElement(By.xpath('//*[@id="__next"]/div[1]/div/div[2]/div/form/div[1]/div[2]/div/input'))
        .sendKeys("citra")        
    }) 
    
    it("positive verifikasi password", async function(){
        await driver.findElement(By.xpath('//*[@id="__next"]/div[1]/div/div[2]/div/form/div[2]/div[2]/div/input'))
		.isEnabled()
        await driver.findElement(By.xpath('//*[@id="__next"]/div[1]/div/div[2]/div/form/div[2]/div[2]/div/input'))
        .sendKeys("Klikcair@123")  
        
        
    })    

    it("positive click tombol login", async function(){
        await driver.findElement(By.xpath('//*[@id="__next"]/div[1]/div/div[2]/div/form/div[3]/button'))
        .click()
    })
   /* it("positive pilih role admin", async function(){
        await driver.findElement(By.css('.kc-button:nth-child(1) > .kc-button__content'))
        .click()
    })*/

    await webdriver.quit()
})