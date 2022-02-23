/// <reference types="Cypress" />
import LoginPage from '../../support/PageObject/LoginPage'
import HomePage from '../../support/PageObject/HomePage'

import Dashbaord from '../../support/PageObject/Dashboard'

describe('TC_16_Dashboard suit' , function(){

    const loginPage = new LoginPage()
    const homePage = new HomePage()
    const dashboard = new Dashbaord()
    

    this.beforeEach(function(){

        cy.fixture('example').then(function(data){
            this.data=data
        })
    })

    this.beforeEach(()=>{
        loginPage.navigateToUrl()
    })

    it('TC_16_New Dashboard Test', function(){
  
        loginPage.getUserLogin(this.data.adminLogin,this.data.adminPassword)
         //User Login Verification
         homePage.getuserName().then(function(body){
             const username = body.text()
             cy.log(username)
           }) 
        dashboard.getnewdashboard().click({force:true})
        cy.visit('http://192.168.4.187/TruBI20v5Rel/Dashboard/designer/?isNew=true&mode=designer')
        cy.get('.dx-dashboard-settings-form-title').then(function(text)
        {
            const actualtext = text.text()
            cy.log(actualtext)
            expect(actualtext.includes('New...')).to.be.true

        })
        dashboard.getnewdashboardname().clear()
        dashboard.getnewdashboardname().type(this.data.dashboardName)
        dashboard.getthedatasourcelist().type(this.data.dataSourceName)
        dashboard.getthedatasourceselection().contains(this.data.datasourceselection).click()
        dashboard.getcreatedashboard().click()

        //Create the dashboard
        dashboard.getgrid().click()
        dashboard.getpodclick().click()
        dashboard.getbindings().click({force: true})
        cy.get('.dx-button-content').contains('Add Column').click()

    })
})
