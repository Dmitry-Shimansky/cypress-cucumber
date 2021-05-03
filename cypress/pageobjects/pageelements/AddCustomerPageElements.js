/// <reference types="cypress" />

export default class AddCustomerPageElements {
    constructor() {
    }

    addCustomerBtn() {
        return cy.get('button[ng-click="addCust()"]')
    }

    firstNameField() {
        return cy.get('input[ng-model="fName"]')
    }

    lastNameField() {
        return cy.get('input[ng-model="lName"]')
    }

    postCodeField() {
        return cy.get('input[ng-model="postCd"]')
    }

    addCustomerSubmitBtn() {
        return cy.get('button[class="btn btn-default"]')
    }
}
