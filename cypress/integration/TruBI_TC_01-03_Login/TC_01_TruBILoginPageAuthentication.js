/// <reference types="Cypress" />
import LoginPage from '../../support/PageObject/LoginPage'

describe('TruBI Login Page authentication suite', function(){

    const loginPage = new LoginPage()

    this.beforeEach(function(){

        cy.fixture('example').then(function(data){
            this.data=data
        })
    })

    //Navigate to URL
    this.beforeEach(()=>{
        loginPage.navigateToUrl()
    })
     
    // it('TC_01_TruBI Login Page authentication test', function(){
    //     //const loginPage = new LoginPage()
  
    //     //TruBI Login Page
    //     cy.visit(Cypress.env('url'))
    // })
    it('TC_01_TruBI Password authectication' , function()
    {
       
        //cy.visit(Cypress.env('url'))
        //Verify Password velidation
        loginPage.getuserName().type(this.data.adminLogin)
        loginPage.getloginBT().click()
        loginPage.getpasswordVelidation().should('be.visible', 'Enter your password.')
        loginPage.getuserName().clear()
    })
       
    it('TC_02_TruBI Login authectication' , function(){
        
        //cy.visit(Cypress.env('url'))
         //Verify UserName Velidation
         loginPage.getpassword().type(this.data.adminPassword)
         loginPage.getloginBT().click()
         loginPage.getuserNameVelidation().should('be.visible', 'Enter user name')
         loginPage.getpassword().clear()
    })
        
    it('TC_03_TruBI And Password Icon authectication' , function(){
        
        //cy.visit(Cypress.env('url'))
        //Login Icon verify
        loginPage.getloginIcon().should('have.class' , 'iconuser')
        //Password Icon verify
        loginPage.getpasswordIcon().should('have.class','iconuser')
    })
       
    it('TC_04_TruBI Privacy page authectication' , function(){
        
        //cy.visit(Cypress.env('url'))
        //Get Privacy Page verification
        loginPage.getprivacyPage().invoke('removeAttr' ,'target').click()

        //get Privacy page text verification
        loginPage.getprivacyPageText().then(function(body){
            const text = body.text()
            cy.log(text);
        })
        cy.go('back')
    })
        

    it('TC_05_TruBI Privacy page authectication' , function(){
        
        //cy.visit(Cypress.env('url'))
        //Get Terms page verification
        loginPage.gettermsPage().invoke('removeAttr' ,'target').click()

        //Get Terms page text verification
        loginPage.gettermPageText().then(function(body){
            const text = body.text()
            cy.log(text)
        })
        cy.go('back')
    })
})