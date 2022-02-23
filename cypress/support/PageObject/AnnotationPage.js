class Annotation
{

    getannotationPage()
    {
        return cy.get('a[onClick="GetLastAnnotation()"]')
    }

}
export default Annotation;