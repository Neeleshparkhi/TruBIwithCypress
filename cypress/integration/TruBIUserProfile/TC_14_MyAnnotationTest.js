/// <reference types="Cypress" />
import LoginPage from '../../support/PageObject/LoginPage'
import HomePage from '../../support/PageObject/HomePage'
import UserProfile from '../../support/PageObject/UserProfile'
import Annotation from '../../support/PageObject/AnnotationPage'




describe('TC_12_Scheduler suit' , function(){

    const loginPage = new LoginPage()
    const homePage = new HomePage()
    const userProfile = new UserProfile()
    const annotation = new Annotation()
    

    this.beforeEach(function(){

        cy.fixture('example').then(function(data){
            this.data=data
        })
    })

    this.beforeEach(()=>{
        loginPage.navigateToUrl()
    })

    it('TC_12_Scheduler test', function(){
  
        loginPage.getUserLogin(this.data.adminLogin,this.data.adminPassword)
         //User Login Verification
         homePage.getuserName().then(function(body){
             const username = body.text()
             cy.log(username)
         }) 

        homePage.getuserProfile().click()
        annotation.getannotationPage().invoke('removeAttr','target').click() 
        annotation.getannotationPage().then(function(body){
            const text = body.text()
            cy.log(text)
            annotation.getannotationPage().should('have.text', text)   
        })  
       //cy.go('back')

         //Get user Logout
         //homePage.getUserLogOut() 
        })
    })