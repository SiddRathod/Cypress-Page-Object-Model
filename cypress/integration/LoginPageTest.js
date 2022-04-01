/// <reference types="cypress" />

import HomePage_PO from "../support/pageObjects/webdriver-uni/HomePage_PO";
import LoginPage_PO from "../support/pageObjects/webdriver-uni/LoginPage_PO"

describe("LoginPageTest", () => {
    const homePage_PO = new HomePage_PO()
    const tests = require("../fixtures/logindata.json")
    tests.forEach(element => {
        it("Login with invalid credentials", () => {
            // homePage_PO.visitHomePage()  -- in index.js
            homePage_PO.visitLoginPortal()
            LoginPage_PO.doLogin(element.name, element.password)
            cy.on("window:alert",function(alertdata){
                expect(alertdata).to.be.equal(element.expectedvalidationmsg)
            })
        })
    })
})
