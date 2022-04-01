/// <reference types="Cypress"/>

describe("Noggin Home website",function(){

    it("Verify website",function(){

        cy.visit("https://www.noggin.io/")
        cy.get(".cd-dropdown-trigger.mobile-trigger").click()
        cy.contains("Resources").click({force:true})
        cy.contains("Resource Centre").click({force:true})
        cy.title().should('eq','Resources')
        // cy.get("[data-category='category-item'] > a").invoke("removeattr","target")
        cy.get('a[href*="guide-to-developing-an-effective-business-continuity-plan"]').invoke("removeAttr","target").click()
        cy.title().should('eq','Developing an Effective Business Continuity Plan | How to Guide')
    
    })
})