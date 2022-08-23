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

//Web interactions

Given(/^A webpage is opened$/,async function(){

  await browser.url("/inputs")
  await browser.setTimeout({implicit:15000,pageLoad:10000})
  await browser.maximizeWindow()


})

When(/^Perform web interactions$/,async function() {

  /* 1.Input box
  Actions:
     Type into input box
     Clear the field and type or just add value
     Click and type
     Slow typing

     */
    let num=12345
    let strNum=num.toString()

     let ele=await $(`[type=number]`)
     //await ele.setValue(strNum)
     await ele.click()
     for(let i=0;i<strNum.length;i++){
      let charStr =strNum.charAt(i)
      await browser.pause(1000)
      await browser.keys(charStr)
     }
     await browser.pause(3000)
  
 

})