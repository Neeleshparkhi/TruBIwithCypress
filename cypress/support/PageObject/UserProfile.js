class UserProfile
{

    getmyThemes() //Get Themes list
    {
        return cy.get('.dropdown-submenu')
    }

    getscheduler() //Get the scheduler
    {
        return cy.get('a[href="/TruBI20v5Rel/Scheduler/SchedulerHome/SchedulerHome"]')
    }

    getschedulerPageHeader() //Get the scheuduler page header
    {
        return cy.get('.col-md-6 h1')
    }

    getmyStories() //Get the My Stories
    {
        return cy.get('a[href="/TruBI20v5Rel/StoryTelling/StoryTelling/Stories?StoryCount=0"]')
    }

}
export default UserProfile;