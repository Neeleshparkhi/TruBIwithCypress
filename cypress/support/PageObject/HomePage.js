import LoginPage from "./LoginPage"

class HomePage
{
    getuserName() //User name
    {
        return cy.get('.pt5')
    }

    getuserProfile()//User profile logo
    {
        return cy.get('a[title="User Profile"] i')
    }

    getlogOut()//Log out click
    {
        return cy.get('li a').contains('Logout')
    }

    gethomePagelogo() //Get TruBI Home page logo
    {
        return cy.get('img[src="./img/Customer_logo.png"]')
    }

    getgroupIcon() //Group ICON
    {
        return cy.get('.fa.fa-sitemap')
    }

    getgroupText() //Group text
    {
        return cy.get('span.seprator-bar')
    }

    getbotIcon() //Bot ICON
    {
        return cy.get('#botIcon img')
    }

    getnotificationIcon() //Notification icon
    {
        return cy.get('a[title="Notifications"]')
    }

    getsettingIcon() //Setting icon
    {
        return cy.get('a[title="Settings"]')
    }

    getgroupMySpace()
    {
        return cy.get('.row.pull-right div')
    }

    getfotterTruBILogo()
    {
        return cy.get('img[src="/TruBI20v5Rel/img/TruBI_logo.png"]')
    }

    getUserLogOut()
    {
        const homePage = new HomePage()
        const loginPage = new LoginPage()
        //User LogOut
        homePage.getuserProfile().click()
        homePage.getlogOut().click()
        loginPage.getuserName().should('be.visible')
    }

    getreportTypeDropedown() //Get dahboard, report count dropdown
    {
        return cy.get('#ddlReportType option')
    }

    getreportSortBy() //Get Dashboard, Report Sort by
    {
        return cy.get('#ddlSortType option')
    }

    getreportSortByIds() //Get Dashboard, Report count
    {
        return cy.get('#ddlSortType')
    }

    getreportIDs() //Get search box for All,Dashbord,Report and Favourite Select
    {
        return cy.get('#ddlReportType')
    }

    getreportName() //get Dashbaord and Report name
    {
        return cy.get('.dtitle')
    }

    getallReport() //get number of Report and Dashboard
    {
        return cy.get('.repDataDiv')
    }

    getsearchDashboard() //Search DAshbaord by name
    {
        return cy.get('#txtsearch')
    }

    getnewDashboardAndReport() //Get the (+) sign logo
    {
        return cy.get('.my-space-event')
    }

    getgroupNameCount() //Get group name Total count
    {
        return cy.get('.dx-data-row')
    }

    getGroupOKButton() //Get groups OK Button
    {
        return cy.get('#groupsOkBtn')
    }

    
}

export default HomePage;