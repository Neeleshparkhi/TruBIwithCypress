class DataAlert
{

    getdataAlert()
    {
        return cy.get('a[href="/TruBI20v5Rel/Admin/DataAlert/MainViewAlert"]')
    }

    getdataAlertPageHeader()
    {
        return cy.get('.col-md-6:nth-child(1)')
    }

    

}
export default DataAlert;