/// <reference types="Cypress" />
import LoginPage from '../../support/PageObject/LoginPage'
import HomePage from '../../support/PageObject/HomePage'


describe('TC_08_HomePageGridAndListView suit' , function(){

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

    it('TC_08_HomePageGridAndListView test', function(){
  
        loginPage.getUserLogin(this.data.adminLogin,this.data.adminPassword)
         //User Login Verification
         homePage.getuserName().then(function(body){
             const username = body.text()
             cy.log(username)
         }) 

            cy.get('.active').then(ele=>{
                const text = ele.attr('title')
                cy.log(text)
                
            })
            cy.wait(2000)
            cy.get('.domain').screenshot()
   
            cy.get('.inactive').click()
            cy.get('.active').then(ele=>{
                const text = ele.attr('title')
                cy.log(text)
            })
            cy.wait(2000)
            cy.get('.domain').screenshot()
            
            //Get to the orignal position "Grid View"
            cy.get('.inactive').click()

         //Get user Logout
         homePage.getUserLogOut() 
        })
    })