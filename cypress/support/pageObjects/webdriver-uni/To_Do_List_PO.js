class To_Do_List_PO
{
    selectToDoItem(){
        return cy.get("#container").find("[placeholder='Add new todo']")
    }

}

export default To_Do_List_PO