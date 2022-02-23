/// <reference types="Cypress" />
import LoginPage from '../../support/PageObject/LoginPage'
import HomePage from '../../support/PageObject/HomePage'



describe('TC_10_HomePageGroup suit' , function(){

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

    it('TC_10_HomePageGroupTest test', function(){
  
        loginPage.getUserLogin(this.data.adminLogin,this.data.adminPassword)
         //User Login Verification
         homePage.getuserName().then(function(body){
             const username = body.text()
             cy.log(username)
         }) 

        homePage.getgroupIcon().click()
        homePage.getgroupNameCount().should('have.length.above',2)
            homePage.getgroupNameCount().each(($el,index,$list)=>{
                    const text = $el.text()
                    cy.log(text)
                })

                cy.get('.dx-treelist-text-content').each(($el,index,$list)=>{
                    const text = $el.text()
                    cy.log(text)
                    if(text.includes('Public')){
                        cy.get('.dx-checkbox-icon').eq(index).click()
                    }
                })
        homePage.getGroupOKButton().click()
        cy.wait(2000)
        homePage.getreportName().each(($el,index,$list)=>{
            const reportname = $el.text()
            cy.log(reportname)
            cy.get('.spanDominName').eq(index).each(($el,index,$list)=>{
                const group = $el.text()
                cy.log(group)
            })
        })
        cy.screenshot('All public dashboard visible')
         
        
         //Get user Logout
         homePage.getUserLogOut() 
        })
    })