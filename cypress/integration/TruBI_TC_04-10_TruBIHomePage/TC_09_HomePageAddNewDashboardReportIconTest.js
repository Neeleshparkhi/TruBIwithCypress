/// <reference types="Cypress" />
import LoginPage from '../../support/PageObject/LoginPage'
import HomePage from '../../support/PageObject/HomePage'


describe('TC_09_HomePageAddNewDashboardReportIcon suit' , function(){

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

    it('TC_09_HomePageAddNewDashboardReportIconTest', function(){
  
        loginPage.getUserLogin(this.data.adminLogin,this.data.adminPassword)
         //User Login Verification
         homePage.getuserName().then(function(body){
             const username = body.text()
             cy.log(username)
         }) 

           homePage.getnewDashboardAndReport().should('be.visible')
         

         //Get user Logout
         homePage.getUserLogOut() 
        })
    })