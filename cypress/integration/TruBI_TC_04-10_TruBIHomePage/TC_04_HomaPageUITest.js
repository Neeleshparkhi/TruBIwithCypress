/// <reference types="Cypress" />
import LoginPage from '../../support/PageObject/LoginPage'
import HomePage from '../../support/PageObject/HomePage'

describe('TC_04_HomePageUITest suit', function(){

    const loginPage = new LoginPage()
    const homePage = new HomePage()

    beforeEach(function(){

        cy.fixture('example').then(function(data){
            this.data=data
        })
    })

    beforeEach(()=>{
        loginPage.navigateToUrl()
    })

    it('TC_01_TruBI System Admin Login test', function(){
  
  
       loginPage.getUserLogin(this.data.adminLogin,this.data.adminPassword)
        //User Login Verification
        homePage.getuserName().then(function(body){
            const username = body.text()
            cy.log(username)
        })  
        
        homePage.gethomePagelogo().should('be.visible') //Test_01
        homePage.getgroupIcon().should('be.visible') //Test_02
        homePage.getgroupText().should('be.visible') //Test_03
        homePage.getuserName().then(function(body)
        {
            const text = body.text()
            cy.log(text)
        })
        homePage.getuserProfile().should('be.visible') //Test_04
        //homePage.getbotIcon().should('be.visible') //Test_05 This is removed from the application
        homePage.getnotificationIcon().should('be.visible') //Test_06
        homePage.getsettingIcon().should('be.visible') //Test_07
        homePage.getgroupMySpace().each(($el, index, $list) =>{

                    const text = $el.text()
                    cy.log(text)
        }) //Test_08
        homePage.getfotterTruBILogo().should('be.visible') //Test_09
 
        //User LogOut
        homePage.getUserLogOut()
    })


})