class Dropdown_Radio_Check_PO{

    selectAndVerifyDropdowns(dropdown1,dropdown2,dropdown3){
        cy.get("#dropdowm-menu-1").select(dropdown1)
        cy.get("#dropdowm-menu-1").should("have.value",dropdown1)
        cy.get("#dropdowm-menu-2").select(dropdown2).should("have.value",dropdown2)
        // cy.get("#dropdowm-menu-2").should("have.value",dropdown2)
        cy.get("#dropdowm-menu-3").should("have.value",dropdown3)
        // cy.get("#dropdowm-menu-3").contains("CSS")
    }

    verifyDisabledDropdown(){
        cy.get("#fruit-selects").contains("Orange").should("be.disabled")     
        cy.get("#radio-buttons-selected-disabled").find("[value='cabbage']").should("be.disabled")
    }

    selectAndVerifyCheckbox(checkbox1,checkbox2,checkbox3){
        cy.get("#checkboxes input").eq(2).should("be.checked")
        // cy.get("#checkboxes input").first().check()
        // cy.get("#checkboxes input").check(["option-1","option-2"]).should("be.checked")
        cy.get("#checkboxes input").first().click()
        // cy.get("#checkboxes input").uncheck(["option-1","option-2"]).should("not.be.checked")
    }

    selectAndVerifyRadioButton(){
        cy.get("#radio-buttons > input").check("green").should("be.checked")
        cy.get("#radio-buttons > input").first().click().should("be.checked")
    }



}

export default Dropdown_Radio_Check_PO