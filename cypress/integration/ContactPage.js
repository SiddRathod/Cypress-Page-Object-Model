///<reference types="Cypress"/>
import HomePage_PO from "../support/pageObjects/webdriver-uni/HomePage_PO";
import ContactPage_PO from "../support/pageObjects/webdriver-uni/ContactPage_PO"


beforeEach(function(){
  cy.visit("/")
  const homePage_PO = new HomePage_PO()
  homePage_PO.visitContactUsPage()
})

before(function(){    
    cy.fixture("contactusdata.json").then(function(contactdata){
        globalThis.contactdata = contactdata
    })
})

describe("Submit contact us form",function(){
    const contactPage_PO = new ContactPage_PO()

    it("Fill all the details in Contact Us form",function(){
        // homePage_PO.visitHomePage()
        // homePage_PO.visitContactUsPage()
        contactPage_PO.typefirstname(contactdata.firstname)
        contactPage_PO.typelastname(contactdata.lastname)
        contactPage_PO.typeemailaddress(contactdata.emailaddress)
        contactPage_PO.typecomments(contactdata.comments)
        contactPage_PO.clickOnSubmitButton()
        contactPage_PO.validateexpectedmessage(contactdata.expectedmessage)

    })


    it("Fill only firstname in Contact Us form",function(){
        // homePage_PO.visitContactUsPage()
        contactPage_PO.typefirstname(contactdata.firstname)
        contactPage_PO.clickOnSubmitButton()
        contactPage_PO.validateerrormessage(contactdata.errormessage1)
        contactPage_PO.validateerrormessage(contactdata.errormessage2)
    })

})