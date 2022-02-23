/// <reference types="Cypress" />
import LoginPage from '../../support/PageObject/LoginPage'
import HomePage from '../../support/PageObject/HomePage'
import UserProfile from '../../support/PageObject/UserProfile'
import Scheduler from '../../support/PageObject/SchedulerPage'


describe('TC_12_Scheduler suit' , function(){

    const loginPage = new LoginPage()
    const homePage = new HomePage()
    const userProfile = new UserProfile()
    const scheduler = new Scheduler()

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
        userProfile.getscheduler().invoke('removeAttr','target').click() 
        userProfile.getschedulerPageHeader().then(function(body){
            const text = body.text()
            cy.log(text)
            userProfile.getschedulerPageHeader().should('have.text', text)   
        })  
        scheduler.getAddScheduler().click() 
        scheduler.getscheduleName().type('Cypress Automation schedule')
        scheduler.getaddScheduleItem().click()
        //cy.get('td[aria-label="Select row"]').click()
        cy.get('[aria-rowindex="1"] > .dx-command-select > .dx-select-checkbox > .dx-checkbox-container > .dx-checkbox-icon').click()
        //cy.click()
        cy.get('#dropDownBoxShedu > .dx-dropdowneditor-input-wrapper > .dx-texteditor-container > .dx-texteditor-buttons-container > .dx-button-normal > .dx-button-content > .dx-dropdowneditor-icon').select()
        //cy.go('back')
         //Get user Logout
         //homePage.getUserLogOut() 
        })
    }) 