const puppeteer=require('puppeteer');
const loginLink='https://www.hackerrank.com/auth/login';
const email='vinaypandey9823@gmail.com'
const password='ForPlacement@2021'
let browserOpen=puppeteer.launch({
    headless:false,
    args:['--start-maximized'],
    defaultViewport:null
}).then((browserObj)=>{
    let browserOpenPromise=browserObj.newPage()
    return browserOpenPromise
}).then((newTab)=>{
    page=newTab
    let hkOpenPromise=newTab.goto(loginLink);
    return hkOpenPromise;
}).then(()=>{
    let emailEntered=page.type("input[id='input-1']",email,{delay:50})
    return emailEntered;

}).then(()=>{
    let passwordEntered=page.type("input[type='password']",password,{delay:60})
    return passwordEntered;
}).then(()=>{
    let loginButtonClick=page.click('button[data-analytics="LoginPassword"]',{delay:60})
    return loginButtonClick
})
.catch((err)=>{
    console.log("Error Occured");
})