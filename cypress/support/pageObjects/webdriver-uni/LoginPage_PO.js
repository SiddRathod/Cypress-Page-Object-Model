class LoginPage_PO{

    doLogin(username,password){
        cy.get("#text").type(username)
        cy.get("#password").type(password)
        cy.get("#login-button").click()
    }

}
module.exports = new LoginPage_PO