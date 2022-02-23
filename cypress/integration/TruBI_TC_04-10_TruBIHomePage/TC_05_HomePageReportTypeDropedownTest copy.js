/// <reference types="Cypress" />
import LoginPage from '../../support/PageObject/LoginPage'
import HomePage from '../../support/PageObject/HomePage'



describe('TC_05_HomePageReportTypeDropedownTest suit' , function(){

    const loginPage = new LoginPage()
    const homePage = new HomePage()

    this.beforeEach(function(){

        cy.fixture('example').then(function(data){
            this.data=data
        })
    })

    this.beforeEach(()=>{
        loginPage.navigateToUrl()
    })

    it('TC_05_HomePageReportTypeDropedown test', function(){
  
        loginPage.getUserLogin(this.data.adminLogin,this.data.adminPassword)
         //User Login Verification
         homePage.getuserName().then(function(body){
             const username = body.text()
             cy.log(username)
         })  
         
         //Get All Report
         homePage.getreportTypeDropedown().each(($el, index, $list) =>{

            const text = $el.text()
            //cy.log(text)
            homePage.getreportIDs().eq(0).select(text)
            cy.wait(2000)
            cy.get('body').then((body)=>{
                if(body.find('.repDataDiv').length>0){

                    cy.get('.repDataDiv').each(($el, index, $list) =>{ 
                        homePage.getreportName().eq(index).then(function(body){
                            cy.log(body.text())
                        })
                    })  
                } else if(body.find('.repDataDiv').length==0){
                    cy.log('No Report Found')
                }
            })
         })

           //Get user Logout
           homePage.getUserLogOut() 

         //cy.get('#ddlReportType').eq(1).select('Dashboards')//.should('have.value','ALL')

        })

})