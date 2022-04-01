import HomePage_PO from "../support/pageObjects/webdriver-uni/HomePage_PO";
import To_Do_List_PO from "../support/pageObjects/webdriver-uni/To_Do_List_PO";

before(function(){
    cy.fixture("todolist").then(function(todolistdata){
        globalThis.todolistdata = todolistdata
    })
})

beforeEach(function(){
    const homePage_PO = new HomePage_PO()
    homePage_PO.visitToDoList()
})

describe("Verify To Do List",function(){
    const to_Do_List_PO = new To_Do_List_PO()
    it("Add and Remove items from List",function(){
        to_Do_List_PO.selectToDoItem().type(todolistdata.listitem1 + '{enter}')
        cy.get("#container > ul > li").contains(todolistdata.listitem1)

        to_Do_List_PO.selectToDoItem().type(todolistdata.listitem2 + '{enter}')
        cy.get("#container > ul > li").contains(todolistdata.listitem2)

        cy.get("#container > ul > li").each(function($el,index,$list){
            cy.log("Value at index "+ index + " is : " + $el.text())
            if($el.text().match(todolistdata.listitem1))
            {
                cy.get("#container > ul > li").eq(index).find(".fa.fa-trash").invoke("show").click()
            }
           
        })

        cy.wait(2000)
       
        cy.get("#container > ul > li").each(function($el,index,$list){
            cy.log("Value at index "+ index + " is : " + $el.text())
        })
    })
})