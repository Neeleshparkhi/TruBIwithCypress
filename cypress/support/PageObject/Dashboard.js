class Dashboard
{

    getnewdashboard()
    {
        return cy.get('a[title="Add New Dashboard"] i:nth-child(1)')
    }

    //Enter Dashboard Name
    getnewdashboardname()
    {
        return cy.get('.dx-texteditor-input:nth-child(1)')
    }

    //Type the data source selection
    getthedatasourcelist()
    {
        return cy.get('.dx-texteditor-input:nth-child(2)')
    }

    //Get the data source selection
    getthedatasourceselection()
    {
        return cy.get('.dx-dashboard-datasource-item')
    }

    //create button
    getcreatedashboard()
    {
        return cy.get('.dx-button-content')
    }

    //Dashboard Objects

    getgrid()
    {
        return cy.get('div[title="Grid"]:nth-child(2)')
    }

    //Pod Click
    getpodclick()
    {
        return cy.get('.dx-layout-item-container')
    }

    //Bindings
    getbindings()
    {
        return cy.get('.dx-dashboard-designer-menu-item.dx-dashboard-item-binding-panel-options-button')
    }
}
export default Dashboard;