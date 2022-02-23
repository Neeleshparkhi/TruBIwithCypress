class ForgotPassword
{
   
    getforgotPassword()
    {
        return cy.get('#forgotpassword')
    }

    getforgotPasswordEmail()
    {
        return cy.get('img[src="/TruBI20v5Rel/img/icon_email.png"]')
    }

    getTruBIHeaderImage()
    {
        return cy.get('img[src="http://192.168.4.187/trubi20v5rel//img/Customer_logo.png"]')
    }

    getTruBIFooterImage()
    {
        return cy.get('img[src="/TruBI20v5Rel/img/TruBI_logo.png"]')
    }

    getrecoveryBT()
    {
        return cy.get('#btnRecoverpassword')
    }

    getEnterEmailID()
    {
        return cy.get('#txt-pwdrecover')
    }

    getLoginBT()
    {
        return cy.get('#rtntologin')
    }

    gettextOfForgotPassword()
    {
        return cy.get('#lblcss')
    }


}
export default ForgotPassword;