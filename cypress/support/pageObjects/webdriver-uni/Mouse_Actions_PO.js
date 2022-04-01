class Mouse_Actions_PO{

    dragAndDrop(){
        cy.get("#draggable").trigger("mousedown",{which:1})
        cy.get("#droppable").trigger("mousemove").trigger("mouseup",{force:true}).as("droppeditem")
        cy.get("@droppeditem").invoke("text").should("contains","Dropped!")
        cy.get("@droppeditem").should("have.css","background-color")  
        // ,"rgb(244, 89, 80)")
    }

    doubleClick(){
        cy.get("#double-click").dblclick().should("have.css","background-color","rgb(147, 203, 90)")
    }

    clickAndHold(){
        cy.get("#click-box").trigger("mousedown").should("have.text","Well done! keep holding that click now.....")
        .and("have.css","background-color","rgb(0, 255, 0)") 
        cy.get("#click-box").trigger("mouseup").should("have.text","Dont release me!!!")
    }

    Hoverfunction(){
        cy.get(".dropdown.hover > .dropbtn").trigger("mouseover").then(()=>{
        cy.get(".dropdown-content > .list-alert").first().click({force:true})
    })
    }

    
}

export default Mouse_Actions_PO