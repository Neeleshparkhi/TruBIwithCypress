/// <reference types="Cypress" />
import LoginPage from '../../support/PageObject/LoginPage'
import HomePage from '../../support/PageObject/HomePage'
import UserProfile from '../../support/PageObject/UserProfile'


describe('TC_11_USerProfileMyThemes suit' , function(){

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

    it('TC_11_USerProfileMyThemesTest test', function(){
  
        loginPage.getUserLogin(this.data.adminLogin,this.data.adminPassword)
         //User Login Verification
         homePage.getuserName().then(function(body){
             const username = body.text()
             cy.log(username)
         }) 

        homePage.getuserProfile().click()
        cy.get('.dropdown-submenu  li a[href="javascript:void(0);"]').each(($el,index,$list)=>{

            const text = $el.text()
            cy.log(text)
            cy.wait(2000)
            cy.get('.dropdown-submenu  li a[href="javascript:void(0);"]').eq(index).click({force: true})
            cy.screenshot(text)
        })
        
         //Get user Logout
         homePage.getUserLogOut() 
        })
    })