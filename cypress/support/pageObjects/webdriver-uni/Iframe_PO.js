class Iframe_PO{

    getIframe(){
        cy.get("#frame").then(($iframe)=>{
        const body = $iframe.contents().find("body")
        cy.wrap(body).as('iframe')
        })
        cy.get("@iframe").find("#button-find-out-more").click()
        cy.get("@iframe").find(".modal-header").invoke("text").should("include","Welcome to webdriveruniversity.com")
    }

}
export default Iframe_PO