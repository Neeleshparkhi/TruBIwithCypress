/// <reference types="Cypress" />
import LoginPage from '../../support/PageObject/LoginPage'
import HomePage from '../../support/PageObject/HomePage'

describe('TC_07_HomePageDashboardSearch suit' , function(){

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

    it('TC_07_HomePageDashboardSearch test', function(){
  
        loginPage.getUserLogin(this.data.adminLogin,this.data.adminPassword)
         //User Login Verification
         homePage.getuserName().then(function(body){
             const username = body.text()
             cy.log(username)
         }) 

         homePage.getsearchDashboard().type(this.data.dashboard)
         cy.get('body').then((body)=>{
            if(body.find('.dtitle').length>0){
            homePage.getreportName().each(($el,index,$list)=>{
             const text = $el.text()
             cy.log(text)
         })
            }else if(body.find('.dtitle').length==0){
            cy.log('Dashboard is not present')
             }
         })

         //Get user Logout
         homePage.getUserLogOut() 
        })
    })