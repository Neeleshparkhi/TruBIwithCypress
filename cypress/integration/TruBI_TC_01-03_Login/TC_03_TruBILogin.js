/// <reference types="Cypress" />
import LoginPage from '../../support/PageObject/LoginPage'
import HomePage from '../../support/PageObject/HomePage'

describe('TruBILogin page suit_3_Tests', function(){

    const loginPage = new LoginPage()
    const homePage = new HomePage()

    beforeEach(function(){

        cy.fixture('example').then(function(data){
            this.data=data
        })
    })

    this.beforeEach(()=>{
        loginPage.navigateToUrl()
    })

    it('TC_01_TruBI System Admin Login test', function(){

        loginPage.getUserLogin(this.data.adminLogin,this.data.adminPassword)
        //User Login Verification
        homePage.getuserName().then(function(body){
            const username = body.text()
            cy.log(username)
        }) 
        //User Log Out
        homePage.getUserLogOut()

    })

    it('TC_02_TruBI Business user Login test', function(){
       
        loginPage.getUserLogin(this.data.businessUserLogin,this.data.businessUserPassword)
        //User Login Verification
        homePage.getuserName().then(function(body){
            const username = body.text()
            cy.log(username)
        }) 
        //User Log Out
        homePage.getUserLogOut()

    })

    it('TC_03_TruBI Data Admin user Login test', function(){
       
        loginPage.getUserLogin(this.data.dataAdminUserLogin,this.data.dataAdminUserPassword)
        //User Login Verification
        homePage.getuserName().then(function(body){
            const username = body.text()
            cy.log(username)
        }) 
        //User Log Out
        homePage.getUserLogOut()
    })

})