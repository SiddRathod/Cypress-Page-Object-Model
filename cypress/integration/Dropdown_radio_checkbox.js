///<reference types="Cypress"/>
import HomePage_PO from "../support/pageObjects/webdriver-uni/HomePage_PO"
import Dropdown_Radio_Check_PO from "../support/pageObjects/webdriver-uni/Dropdown_Radio_Check_PO"

beforeEach(function(){
    cy.visit("/")
    const homePage_PO = new HomePage_PO()
    homePage_PO.visitdropdowncheckboxPage()
})

before(()=>{    
    cy.fixture("dropdown.json").then(function(dropdowndata){
        globalThis.dropdowndata = dropdowndata
    })
})

describe("Verify dropdown,radiobutton and checkbox",function(){
    
    const dropdown_Radio_Check_PO = new Dropdown_Radio_Check_PO()
    it("Verify the dropdown options",function(){
        dropdown_Radio_Check_PO.selectAndVerifyDropdowns(dropdowndata.dropdown1,dropdowndata.dropdown2,dropdowndata.dropdown3)

    })

    it("Verify the disabled dropdown option",function(){
        dropdown_Radio_Check_PO.verifyDisabledDropdown()
    })

    it("Verify the checbox option",function(){
        dropdown_Radio_Check_PO.selectAndVerifyCheckbox()
    })

    it("Verify the radio button option",function(){
        dropdown_Radio_Check_PO.selectAndVerifyRadioButton()
    })
    
})