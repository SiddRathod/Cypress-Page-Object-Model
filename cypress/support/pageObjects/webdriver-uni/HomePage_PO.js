/// <reference types="cypress" />

class HomePage_PO1{

    // visitHomePage(){
    //     cy.visit("/")
    // }

    visitLoginPortal(){
        cy.get("#login-portal").invoke("removeAttr","target").click()
    }

    visitContactUsPage(){
        cy.get("#contact-us").invoke("removeAttr","target").click()
    }
    
    visitdropdowncheckboxPage(){
        cy.get("#dropdown-checkboxes-radiobuttons").first().invoke("removeAttr","target").click()
    }


    visitPopupAlertPage(){
        cy.get("#popup-alerts").invoke("removeAttr","target").click()
    }

    visitToDoList(){
        cy.get("#to-do-list").invoke("removeAttr","target").click()
    }

    visitMouseAction(){
        cy.get("#actions").scrollIntoView().invoke("removeAttr","target").click()
    }

    visitIframepages(){
        cy.get("#iframe").invoke("removeAttr","target").click()
    }

    visitDataTables(){
        cy.get("#data-table").invoke("removeAttr","target").click()
    }


}

export default HomePage_PO1