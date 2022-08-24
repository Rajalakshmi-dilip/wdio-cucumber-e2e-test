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

  await browser.url("")
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
  



/* Dropdown
Actions:
    Assert defalut option is selected
    Select by attribute,text,index
    Get a list of all options

    */
      //Assert defalut option is selected

    // let ele=await $('//select/option[@selected="selected"]')
    // let val= await ele.getText()
    // chai.expect(val).to.equal("Please select an option")
    // await browser.pause(2000)
  

    //select the specific option

   // let ddEle=await $('#dropdown')
   // await ddEle.selectByIndex(2)
   // await browser.pause(2000)

    //Get a list of all options

    // let eleArr =await $$(`select>option`)
    // let arr=[]
    // for(let i=0;i<eleArr.length;i++){
    //   let ele=eleArr[i]
    //   let val=await ele.getText()
    //   arr.push(val)
    //  console.log(`>>options Array:${arr}`);
    //   await browser.pause(1000)

    // }


    /*Checkbox
    Actions:
    select an option
    unselect an option(if selected)
    Assert if option is selected
    select all options
*/
// select an option
// let ele=await $(`//form[@id="checkboxes"]/input[1]`)
// await ele.click()
// await browser.pause(1000)

// //unselect an option(if selected)
// let ele1=await $(`//form[@id="checkboxes"]/input[2]`)
// if(!await ele1.isSelected()){
//   await ele1.click()
// }
// await browser.pause(1000)

//Assert if option is selected
// let ele2=await $(`//form[@id="checkboxes"]/input[2]`)
// let ischecked=await ele2.isSelected()
// chai.expect(ischecked).to.be.true
// await browser.pause(1000)


//select all options
// let eleArr=await $$(`//form[@id="checkboxes"]/input`)
// for(let i=0;i<eleArr.length;i++){
//   let ele=eleArr[i]
//   if(!await ele.isSelected()){
//     ele.click()
//   }

// }

// await browser.pause(1000)



//windows handling
/*
steps:
 1.Launch the browser
 2.open another windows
 3.switch to the window based on title
 4.switch back to the main window

*/

//open new windows
/*
await $(`=Click Here`).click()
await  (await $(`=Elemental Selenium`)).click()
let currentWinTitle =await browser.getTitle()
let parentWinHandle =await browser.getWindowHandle()
console.log(`>>currentWinTitle:${currentWinTitle}`);

//switch to specific window
let WinHandles =await browser.getWindowHandles()
for(let i=0;i<WinHandles.length;i++){
  console.log(`>>WinHandles:${WinHandles[i]}`);
  await browser.switchToWindow(WinHandles[i])
  currentWinTitle=await browser.getTitle()
  if(currentWinTitle==="Elemental Selenium: Receive a Free, Weekly Tip on Using Selenium like a Pro"){
    await browser.switchToWindow(WinHandles[i])
    let headerTxtElement=await $(`<h1>`).getText()
    console.log(`objectheaderTxtElement:${headerTxtElement}`);

    //rest of the actions go here
    break
  }
  }
//switch back to parent window
await browser.switchToWindow(parentWinHandle)
let parentHeaderText=await $(`<h3>`).getText()
    console.log(`parentHeaderText:${parentHeaderText}`);
    //continue with rest of the execution...
    await browser.debug()

*/

    //Handling Alerts

  //accept alert
   /* await  $(`button=Click for JS Alert`).click()
    if(await browser.isAlertOpen())
{
  await browser.acceptAlert()
  await browser.pause(2000)

}


  //dismiss alert
  await $(`button=Click for JS Confirm`).click()
  if(await browser.isAlertOpen())
{
await browser.dismissAlert()
await browser.pause(2000)

}


  //get text alert
  await $(`button=Click for JS Prompt`).click()
  if(await browser.isAlertOpen())
{
  let alertText =await browser.getAlertText()
  console.log(`>>alertText:${alertText}`);
await browser.sendAlertText(`Hello js prompt..`)
await browser.acceptAlert()
await browser.pause(2000)

}


*/
//file upload
/*
await $(`#file-upload`).addValue(`${process.cwd()}/data/fileupload/dummy.txt`)
await $(`#file-submit`).click()
await browser.pause(3000)
*/


//Frames
/*
await $(`=iFrame`).click()
let ele=await (await $(`#mce_0_ifr`))
await browser.switchToFrame(ele)

//interactions with frames

await $('#tinymce').setValue(`Typing into the frame`)
await browser.switchToParentFrame()
await browser.pause(2000)
*/


//Key press-using frames
/*
await $(`=iFrame`).click()
let ele=await (await $(`#mce_0_ifr`))
await browser.switchToFrame(ele)

//interactions with frames
await $('#tinymce').click()
await browser.keys(["Meta","A"])
await browser.pause(1000)
  await browser.keys("Delete")
await $('#tinymce').setValue(`Typing into the frame`)
await browser.switchToParentFrame()
await browser.pause(2000)
*/

//key press
/*

await $(`#target`).click()
 await browser.keys("A")
 await browser.pause(1000)
 await browser.keys("0")
 await browser.pause(1000)
 await browser.keys(".")
 await browser.pause(1000)
 await browser.keys("Enter")
*/


//Basic scrolling
await (await $("//a[text()='WYSIWYG Editor']")).scrollIntoView(false)
await browser.pause(3000)


}
)