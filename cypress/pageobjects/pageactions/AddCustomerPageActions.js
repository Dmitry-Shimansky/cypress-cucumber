/// <reference types="cypress" />

import AddCustomerPageElements from '../pageelements/AddCustomerPageElements'

const addCustomerPageElements = new AddCustomerPageElements();

class AddCustomerPageActions {
    constructor() {
    }

    clickAddCustomerBtn() {
        addCustomerPageElements.addCustomerBtn().click()
    }

    addCustomerDetails(firstName, lastName, postCode) {
        // addCustomerPageElements.addCustomerBtn().click()
        addCustomerPageElements.firstNameField().type(firstName)
        addCustomerPageElements.lastNameField().type(lastName)
        addCustomerPageElements.postCodeField().type(postCode)
        // addCustomerPageElements.addCustomerSubmitBtn().click()
    }

    submitCustomerDetails() {
        addCustomerPageElements.addCustomerSubmitBtn().click()
    }

    validateAlert(alertMsg) {
        cy.on('window:alert', (alertText) => {
            expect(alertText).contains(alertText)
        })
    }
}

export default AddCustomerPageActions;
