import HomePage_PO from "../support/pageObjects/webdriver-uni/HomePage_PO";
import Iframe_PO from "../support/pageObjects/webdriver-uni/Iframe_PO"

beforeEach(function () {
    const homePage_PO = new HomePage_PO()
    homePage_PO.visitIframepages()
})

describe("To verify various mouse actions", function () {

    const iframe_PO = new Iframe_PO()

    it("To drap and drop an item", function () {
       iframe_PO.getIframe()
    })

})