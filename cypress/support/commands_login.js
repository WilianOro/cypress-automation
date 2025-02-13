Cypress.Commands.add('Login', () => {
    cy.visit(Cypress.env('baseUrl'));
    cy.get('[data-test="username"]').type(Cypress.env('username'))
    cy.get('[data-test="password"]').type(Cypress.env('password'))
    cy.get('[data-test="login-button"]').click()
});

Cypress.Commands.add('incorrectLogin', () => {
    cy.visit(Cypress.env('baseUrl'));
    cy.get('[data-test="username"]').type(Cypress.env('username'))
    cy.get('[data-test="password"]').type(Cypress.env('incorrectpassword'))
    cy.get('[data-test="login-button"]').click()
});

Cypress.Commands.add('validarMensagemErro', () => {
    cy.get('[data-test="error"]').should('be.visible')
    cy.contains('Epic sadface: Username and password do not match any user in this service').should ('be.visible')
});       