/// <reference types="Cypress" />
import LoginPage from '../../support/PageObject/LoginPage'
import HomePage from '../../support/PageObject/HomePage'
import UserProfile from '../../support/PageObject/UserProfile'
import DataAlert from '../../support/PageObject/DataAlertPage'



describe('TC_13_DataAlert suit' , function(){

    const loginPage = new LoginPage()
    const homePage = new HomePage()
    const userProfile = new UserProfile()
    const dataAlert = new DataAlert()
    

    this.beforeEach(function(){

        cy.fixture('example').then(function(data){
            this.data=data
        })
    })

    this.beforeEach(()=>{
        loginPage.navigateToUrl()
    })

    it('TC_13_DataAlert test', function(){
  
        loginPage.getUserLogin(this.data.adminLogin,this.data.adminPassword)
         //User Login Verification
         homePage.getuserName().then(function(body){
             const username = body.text()
             cy.log(username)
         }) 

        homePage.getuserProfile().click()
        dataAlert.getdataAlert().invoke('removeAttr','target').click() 
        dataAlert.getdataAlertPageHeader().then(function(body){
            const text = body.text()
            cy.log(text)
            dataAlert.getdataAlertPageHeader().should('have.text', text)   
        })  
       //cy.go('back')

         //Get user Logout
         //homePage.getUserLogOut() 
        })
    })