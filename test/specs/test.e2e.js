import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'
import SecurePage from '../pageobjects/secure.page.js'

describe('Test Automation Sample', () => {
    it('should login with standard_user (positive test)', async () => {
        await LoginPage.open();
        await LoginPage.login('standard_user', 'secret_sauce');
        const currentUrl = await browser.getUrl();
        expect(currentUrl).toContain('/inventory.html');
    });

    it('should not login with standard_user (negative test)', async () => {
        await LoginPage.open();
        await LoginPage.login('standard_user', 'wrong_password');
        const errorMessage = await $('h3[data-test="error"]').getText();
        expect(errorMessage).toContain('Epic sadface: Username and password do not match any user in this service');
    });

    it('should not login with locked_out_user (positive test but expected to fail)', async () => {
        await LoginPage.open();
        await LoginPage.login('locked_out_user', 'secret_sauce');
        const errorMessage = await $('h3[data-test="error"]').getText();
        expect(errorMessage).toContain('Epic sadface: Sorry, this user has been locked out.');
    });

    it('should not login with locked_out_user (negative test)', async () => {
        await LoginPage.open();
        await LoginPage.login('locked_out_user', 'wrong_password');
        const errorMessage = await $('h3[data-test="error"]').getText();
        expect(errorMessage).toContain('Epic sadface: Username and password do not match any user in this service');
    });

    it('should login with problem_user (positive test)', async () => {
        await LoginPage.open();
        await LoginPage.login('problem_user', 'secret_sauce');
        const currentUrl = await browser.getUrl();
        expect(currentUrl).toContain('/inventory.html');
    });

    it('should not login with problem_user (negative test)', async () => {
        await LoginPage.open();
        await LoginPage.login('problem_user', 'wrong_password');
        const errorMessage = await $('h3[data-test="error"]').getText();
        expect(errorMessage).toContain('Epic sadface: Username and password do not match any user in this service');
    });

    it('should login with performance_glitch_user (positive test)', async () => {
        await LoginPage.open();
        await LoginPage.login('performance_glitch_user', 'secret_sauce');
        const currentUrl = await browser.getUrl();
        expect(currentUrl).toContain('/inventory.html');
    });

    it('should not login with performance_glitch_user (negative test)', async () => {
        await LoginPage.open();
        await LoginPage.login('performance_glitch_user', 'wrong_password');
        const errorMessage = await $('h3[data-test="error"]').getText();
        expect(errorMessage).toContain('Epic sadface: Username and password do not match any user in this service');
    });

    it('should login with error_user (positive test)', async () => {
        await LoginPage.open();
        await LoginPage.login('error_user', 'secret_sauce');
        const currentUrl = await browser.getUrl();
        expect(currentUrl).toContain('/inventory.html');
    });

    it('should not login with error_user (negative test)', async () => {
        await LoginPage.open();
        await LoginPage.login('error_user', 'wrong_password');
        const errorMessage = await $('h3[data-test="error"]').getText();
        expect(errorMessage).toContain('Epic sadface: Username and password do not match any user in this service');
    });

    it('should login with visual_user (positive test)', async () => {
        await LoginPage.open();
        await LoginPage.login('visual_user', 'secret_sauce');
        const currentUrl = await browser.getUrl();
        expect(currentUrl).toContain('/inventory.html');
    });

    it('should not login with visual_user (negative test)', async () => {
        await LoginPage.open();
        await LoginPage.login('visual_user', 'wrong_password');
        const errorMessage = await $('h3[data-test="error"]').getText();
        expect(errorMessage).toContain('Epic sadface: Username and password do not match any user in this service');
    });
})

