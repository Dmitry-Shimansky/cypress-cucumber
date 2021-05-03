import HomePageActions from '../../pageobjects/pageactions/HomePageActions'
import AddCustomerPageActions from '../../pageobjects/pageactions/AddCustomerPageActions'

const homePage = new HomePageActions();
const addCustomerPage = new AddCustomerPageActions();

Given('I navigate to the website', () => {
    // cy.visit('http://www.way2automation.com/angularjs-protractor/banking/#login')
    homePage.navigateToURL();
})

When('I click on Bank Manager Login Button', () => {
    // cy.get('button[ng-click="manager()"]').click()
    homePage.loginAsBankManager()
})

And('validate the page title', () => {
    // cy.title().should('eq','Protractor practice website - Banking App')
    homePage.validateTitle().should('eq', 'Protractor practice website - Banking App')
})

And('I click on Add Customer Button', () => {
    addCustomerPage.clickAddCustomerBtn()
})

And('I entered', (datatable) => {
    datatable.hashes().forEach(element => {
        addCustomerPage.addCustomerDetails(element.firstname, element.lastname, element.postcode)
    });
})

And('I click on submit button', () => {
    addCustomerPage.submitCustomerDetails()
})

And('I validate the alert text', () => {
    addCustomerPage.validateAlert('Customer added successfully')
})
