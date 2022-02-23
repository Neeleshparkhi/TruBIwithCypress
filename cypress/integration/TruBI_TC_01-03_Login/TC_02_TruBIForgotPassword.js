/// <reference types="Cypress" />
import ForgotPassword from '../../support/PageObject/ForgotPassword'

describe('TruBI Forgot Password authentication suit', function(){

    const forgotPassword = new ForgotPassword()

    before(function(){

        cy.fixture('example').then(function(data){
            this.data=data
        })
    })

    this.beforeEach(()=>{
        loginPage.navigateToUrl()
    })

    it('TruBI Forgot Password authentication test', function(){
        
         forgotPassword.getforgotPassword().click()
         
         //Email Icon verification
         forgotPassword.getforgotPasswordEmail().should('have.class','iconuser')

         //TruBI header Icon verification
         forgotPassword.getTruBIHeaderImage().should('have.class','img-responsive')

         //TruBI fotter Icon verification
         forgotPassword.getTruBIFooterImage().should('have.class','img-responsive')

         //LoginBT Verification
         forgotPassword.getLoginBT().should('have.text','Login' )

         //Forgot Password Negative test
         //forgotPassword.getEnterEmailID().type(this.data.forgotPasswordWrongEmailID)
         forgotPassword.getrecoveryBT().type(this.data.forgotPasswordWrongEmailID).click()
         forgotPassword.gettextOfForgotPassword().should('have.class' , 'alert alert-danger')


         //PasswordRecoveryBT
         forgotPassword.getEnterEmailID().clear()
         forgotPassword.getrecoveryBT().type(this.data.forgotPassword).click()
         forgotPassword.gettextOfForgotPassword().should('have.class','alert alert-success')
    })
})