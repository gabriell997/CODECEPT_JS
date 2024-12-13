const {I} = inject();

Given (`I click menu Elements`, () => {
    I.amOnPage(`https://demoqa.com/`)
});

When (`I click Text Box`, () =>{
    I.wait(5);
    I.click(`(//div[contains(@class,'card mt-4')]//div)[1]`)
    I.click(`//span[normalize-space(text())='Text Box']`)
});

When (`I fill Fullname`, () =>{
    I.wait(5);
    I.fillField({xpath:"//input[@placeholder='Full Name']"},`Anindia`);
});

When (`I fill Email`, () =>{
    I.wait(5);
    I.fillField({xpath:"//input[@placeholder='name@example.com']"},`gadyutawati@gmail.com`);
});

When (`I fill Current Adress`, () =>{
    I.wait(5);
    I.fillField({xpath:"//textarea[@placeholder='Current Address']"},`Jl. O , Jakarta`);
});
When (`I fill Permanent Adress`, () =>{
    I.wait(5);
    I.fillField({xpath:"//label[normalize-space(text())='Permanent Address']/following::textarea"},`Jl.K, Jakarta`);
});
When (`I click Submit button`, () =>{
    I.wait(5);
    I.click(`//button[@class='btn btn-primary']`)
});

Then(`I should see the data`, () => {
    I.wait(5);
    I.saveScreenshot('textBox.png');
});
