const { Given, When, Then } = require('@cucumber/cucumber');

When('I click on Run this project', async function () {
    let element = await this.driver.$('#promptToRun > div > button');
    return await element.click();
});

When('I enter my first name {kraken-string}', async function (value) {
    let element = await this.driver.$('body > app > div.jumbotron > div > div > div > ng-component > form > div:nth-child(1) > input');
    return await element.setValue(value);
});

When('I enter my last name {kraken-string}', async function (value) {
    let element = await this.driver.$('body > app > div.jumbotron > div > div > div > ng-component > form > div:nth-child(2) > input');
    return await element.setValue(value);
});

When('I enter my user {kraken-string}', async function (value) {
    let element = await this.driver.$('body > app > div.jumbotron > div > div > div > ng-component > form > div:nth-child(3) > input');
    return await element.setValue(value);
});

When('I enter my password {kraken-string}', async function (value) {
    let element = await this.driver.$('body > app > div.jumbotron > div > div > div > ng-component > form > div:nth-child(4) > input');
    return await element.setValue(value);
});

Then('I click on Register', async function () {
    let element = await this.driver.$('body > app > div.jumbotron > div > div > div > ng-component > form > div:nth-child(5) > button');
    return await element.click();
});

Then('I validate the Registration successful', async function () {
    return await this.driver.$('body > app > div.jumbotron > div > div > div > alert > div');
});