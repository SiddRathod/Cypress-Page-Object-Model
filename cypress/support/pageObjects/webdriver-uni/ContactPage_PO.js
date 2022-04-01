class ContactPage_PO{

    typefirstname(firstname)
    {
        cy.get("#contact_form > input").first().type(firstname)
    }

    typelastname(lastname)
    {
        cy.get("#contact_form > input").eq(1).type(lastname)
    }

    typeemailaddress(emailaddress)
    {
        cy.get("#contact_form > input").eq(2).type(emailaddress)
    }

    typecomments(comments)
    {
        cy.get("#contact_form > textarea").type(comments)
    }

    clickOnSubmitButton()
    {
        cy.get("input[type='submit']").click()
    }

    validateexpectedmessage(expectedmessage)
    {
        cy.get("#contact_reply").contains(expectedmessage)
    }

    validateerrormessage(expectedmessage)
    {
        cy.get("body").contains(expectedmessage)
    }
}

export default ContactPage_PO