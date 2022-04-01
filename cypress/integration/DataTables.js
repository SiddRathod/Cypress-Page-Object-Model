import DataTables_PO from "../support/pageObjects/webdriver-uni/DataTables_PO";
import HomePage_PO from "../support/pageObjects/webdriver-uni/HomePage_PO";

beforeEach(function () {
    const homePage_PO = new HomePage_PO()
    homePage_PO.visitDataTables()
})

describe("To verify various mouse actions", function () {

    const dataTables_PO = new DataTables_PO()

    it("To select an item in datatable", function () {
        // dataTables_PO.findDataInTables()
        dataTables_PO.findAgeBasedOnLastName()
    })

})