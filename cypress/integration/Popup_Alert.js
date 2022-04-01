import HomePage_PO from "../support/pageObjects/webdriver-uni/HomePage_PO";
import Popup_Alert_PO from "../support/pageObjects/webdriver-uni/Popup_Alert_PO";

beforeEach(function(){
    const homePage_PO = new HomePage_PO()
    homePage_PO.visitPopupAlertPage()
})

describe("To verify Popup and Alerts",function(){

    const popup_Alert_PO = new Popup_Alert_PO()

    it("To verify Alert box",function(){
        popup_Alert_PO.clickOnAlertBox()
        cy.on("window:alert",(alertmessage)=>
        expect(alertmessage).to.eq("I am an alert box!")
        )
    })

    it("To verify Alert and Confirm box using stub",function(){
        
        const stub = cy.stub()
        cy.on("window:alert",stub)
        cy.on("window:confirm",stub)
        popup_Alert_PO.clickOnAlertBox().then(function(){
            expect(stub.getCall(0)).to.be.calledWith("I am an alert box!")
        })
        popup_Alert_PO.clickOnConfirmBox().then(function(){
            expect(stub.getCall(1)).to.be.calledWith("Press a button!")
            return true
        })
        cy.get("#confirm-alert-text").invoke("text").should("equal","You pressed OK!")

        popup_Alert_PO.clickOnAlertBox().then(function(){
            expect(stub.getCall(2)).to.be.calledWith("I am an alert box!")
        })

    }) 

    it("To verify Modal Box",function(){
        popup_Alert_PO.clickOnModalBox()
        // cy.on("window:alert",function(modalboxmessage){
        //     expect(modalboxmessage).to.eq("It’s that Easy!! Well I think it is....")
        // })
        // popup_Alert_PO.switchToModalBox().invoke("text").should("eq","It’s that Easy!!  Well I think it is.....")
        popup_Alert_PO.switchToModalBox().contains("It’s that Easy!! Well I think it is.....")

    })

})