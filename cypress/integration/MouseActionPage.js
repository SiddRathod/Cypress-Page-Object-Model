import HomePage_PO from "../support/pageObjects/webdriver-uni/HomePage_PO";
import Mouse_Actions_PO from "../support/pageObjects/webdriver-uni/Mouse_Actions_PO"

beforeEach(function () {
    const homePage_PO = new HomePage_PO()
    homePage_PO.visitMouseAction()
})

describe("To verify various mouse actions", function () {

    const mouse_Actions_PO = new Mouse_Actions_PO()

    it("To drap and drop an item", function () {
        mouse_Actions_PO.dragAndDrop()
    })

    it("To double click on an item", function () {
        mouse_Actions_PO.doubleClick()
    })

    it("To double click on an item", function () {
        mouse_Actions_PO.clickAndHold()
    })

    it.only ("To hover on an item", function () {
        mouse_Actions_PO.Hoverfunction()
    })



})