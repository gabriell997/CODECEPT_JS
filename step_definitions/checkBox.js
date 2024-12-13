const {I}= inject();

Given (`I navigate to website`, () => {
    I.amOnPage(`https://demoqa.com/`)
});
When (`I click Elements`, () => {
    I.wait(2)
    I.click(`//div[normalize-space(text())='Elements']`)
});

When (`I click Check Box`, () =>{
    I.wait(2);
    I.click(`//span[normalize-space(text())='Check Box']`)
});

When (`I click home`, () =>{
    I.wait(2);
    I.click(`//input[@id='tree-node-home']/following-sibling::span[1]`);
});

When (`I click desktop`, () =>{
    I.wait(2);
    I.click(`//span[normalize-space(text())='Desktop']`);
});

When (`I click expand`, () =>{
    I.wait(2);
    I.click(`//button[@class='rct-option rct-option-expand-all']`)
});
Then (`I should see desktop`, () =>{
    I.wait(2);
    I.see(`Desktop`);
});
When (`I click collapse `, () =>{
    I.wait(2);
    I.click(`//button[@class='rct-option rct-option-collapse-all']`)
});

Then(`I dont see desktop`, () => {
    I.wait(2);
    I.dontSee('Desktop');
});
