class DataTables_PO{

    findDataInTables(){
        var num =0
        var userDetails = []
        cy.get("#thumbnail-1 td").each(($element,index,$list)=>{
            // cy.log(Number(($element.text())))
            userDetails[index] = $element.text()
        }).then(()=>{
            var i
            for(i=0;i<userDetails.length;i++){
                if(Number(userDetails[i])){
                    num += Number(userDetails[i])
                }
            }
            cy.log(num)
            expect(num).to.eq(322)
        })

    }
        findAgeBasedOnLastName(){
           cy.get("#thumbnail-1 tr td:nth-child(2)").each(($el,index,$list)=>{
               if($el.text().includes("Doe"))
               {
                cy.log(index)
                cy.get("#thumbnail-1 tr td:nth-child(3)").eq(index).invoke("text").then((age)=>{
                    expect(age).to.eq('20')
                })
               }
           })
    }

}
export default DataTables_PO