/// <reference types="cypress" />

class HomePageActions {
    constructor() {
    }

    navigateToURL() {
        return cy.visit('http://www.way2automation.com/angularjs-protractor/banking/#login')
    }

    loginAsBankManager() {
        cy.get('button[ng-click="manager()"]').click()
    }

    validateTitle() {
        return cy.title()
    }
}

export default HomePageActions;
