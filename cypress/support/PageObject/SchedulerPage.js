class Scheduler
{

    getAddScheduler()
    {
        return cy.get('div[title="Add new schedule"]')
    }

    getscheduleName()
    {
        return cy.get('#Name')
    }

    getaddScheduleItem()
    {
        return cy.get('#objSchJobs_ReportID')
    }

}
export default Scheduler;