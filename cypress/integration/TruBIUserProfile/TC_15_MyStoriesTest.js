/// <reference types="Cypress" />
import LoginPage from '../../support/PageObject/LoginPage'
import HomePage from '../../support/PageObject/HomePage'
import UserProfile from '../../support/PageObject/UserProfile'
import MyStories from '../../support/PageObject/MyStoriesPage'

describe('TC_13_DataAlert suit' , function(){

    const loginPage = new LoginPage()
    const homePage = new HomePage()
    const userProfile = new UserProfile()
    const myStories = new MyStories()
    

    this.beforeEach(function(){

        cy.fixture('example').then(function(data){
            this.data=data
        })
    })

    this.beforeEach(()=>{
        loginPage.navigateToUrl()
    })

    it('TC_15_MyStories test', function(){
  
        loginPage.getUserLogin(this.data.adminLogin,this.data.adminPassword)
         //User Login Verification
         homePage.getuserName().then(function(body){
             const username = body.text()
             cy.log(username)
         }) 

        homePage.getuserProfile().click()
        userProfile.getmyStories().invoke('removeAttr','target').click()
        myStories.getMyStoriesPageHeader().then(function(body){
            const ActualText = body.text()
            cy.log(ActualText)
           expect(ActualText.includes("My Stories")).to.be.true // 
        })

    })

})