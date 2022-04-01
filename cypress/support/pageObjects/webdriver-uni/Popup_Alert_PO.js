class Popup_Alert_PO{

    clickOnAlertBox(){
       return cy.get("#button1").click()
    }

    clickOnConfirmBox(){
        return cy.get("#button4").click()
     }

    clickOnModalBox(){
       return cy.get("#button2").click()
    }

    switchToModalBox(){
       return cy.get(".modal-content").find(".modal-title")
    }

}

export default Popup_Alert_PO