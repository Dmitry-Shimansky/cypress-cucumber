/// <reference types="cypress" />

import HomePageActions from '../../pageobjects/pageactions/HomePageActions'

describe('Login as Bank Manager', () => {

    const homePage = new HomePageActions();

    beforeEach(()=>{
        homePage.navigateToURL();
    })
})
