import { Given ,When,Then} from "@wdio/cucumber-framework";
import chai from "chai";
Given(/^Google page is opened$/,async function(){

    await browser.url("https://www.google.com/")
    await browser.pause(1000)

})

When(/^search with (.*)$/,async function(searchitem) {
    console.log(`>>searchitem:${searchitem}`);
    let ele=await $(`[name=q]`)
    await ele.setValue(searchitem)
    await browser.keys("Enter")

})
Then(/^click on the first search result$/,async function(){
  let ele=await $(`<h3>`)
  ele.click()

})

Then(/^URL should matched (.*)$/,async function(ExpectedURL) {

console.log(`>>ExpectedURL:${ExpectedURL}`);
let url=await browser.getUrl()
chai.expect(url).to.equal(ExpectedURL)



})