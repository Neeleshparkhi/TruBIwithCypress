class LoginPage
{
    constructor(){
        this.url = 'http://192.168.4.187/trubi20v5rel'
    }

    navigateToUrl()
    {
        cy.visit(this.url)
    }
    getuserName() //Get User Name
    {
        return cy.get('#txt-userName')
    }

    getpassword() //Get password
    {
        return cy.get('#txt-pwd')
    }

    getloginBT() //Get login button
    {
        return cy.get('#btnlogin')
    }

    getloginAlter()
    {
        return cy.get('#alert-modal-confirm-ok')
    }

    getloginAlertText()
    {
        return cy.get('#alert-modal-confirm-msg')
    }

    getpasswordVelidation()
    {
        return cy.get('#lbluserpassword')
    }

    getuserNameVelidation()
    {
        return cy.get('#lblusermeassgae')
    }

    getloginIcon()
    {
        return cy.get('img[src="/TruBI20v5Rel/img/icon_user.png"]')
    }

    getpasswordIcon()
    {
        return cy.get('img[src="/TruBI20v5Rel/img/icon_password.png"]')
    }

    getprivacyPage()
    {
        return cy.get('a[href="/TruBI20v5Rel/LegacyDocs/privacy.html"]')
    }

    getprivacyPageText()
    {
        return cy.get('html body h2')
    }

    gettermsPage()
    {
        return cy.get('a[href="/TruBI20v5Rel/LegacyDocs/terms.html"]')
    }

    gettermPageText()
    {
        return cy.get('html body h2')
    }

    getUserLogin(userName,password)
    {
        const loginPage = new LoginPage()
        loginPage.getuserName().type(userName)
        loginPage.getpassword().type(password)
        loginPage.getloginBT().click()
         //Handeling User Login Alert
         cy.get('body').then((body) => {
            if(body.find('#alert-modal-confirm-ok').length==0){
                cy.log('Alert is not present')
            }
            else if((body.find('#alert-modal-confirm-ok').length > 0))
                 {
                    cy.get('#alert-modal-confirm-ok').click({force: true})
                    cy.log('Alert is present')
            }
        })     
    }


}

export default LoginPage;