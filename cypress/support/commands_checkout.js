Cypress.Commands.add('ordenateProducts', () => {
    cy.get('[data-test="product-sort-container"]').select('Price (low to high)')
    cy.contains('Sauce Labs Onesie').should('be.visible')
    cy.contains('Sauce Labs Bike Light').should('be.visible')
    cy.contains('Sauce Labs Bolt T-Shirt').should('be.visible')
});

Cypress.Commands.add('adicionarProdutoCarrinho', () => {
    cy.contains('Sauce Labs Onesie').click()
    cy.get('.btn_primary').click()
    cy.get('[data-test="back-to-products"]').click()

    cy.contains('Sauce Labs Bike Light').click()
    cy.get('.btn_primary').click()
    cy.get('[data-test="back-to-products"]').click()

    cy.contains('Sauce Labs Bolt T-Shirt').click()
    cy.get('.btn_primary').click()
    cy.get('[data-test="back-to-products"]').click()
});

Cypress.Commands.add('checarCarrinho', () => {
    cy.get('[data-test="shopping-cart-link"]').should('have.text','3')
    cy.get('[data-test="shopping-cart-link"]').click()
});

Cypress.Commands.add('checkout', () => {
    cy.get('[data-test="checkout"]').click()
    cy.get('[data-test="firstName"]').type(Cypress.env('firstname'))
    cy.get('[data-test="lastName"]').type(Cypress.env('lastname'))
    cy.get('[data-test="postalCode"]').type(Cypress.env('zipcode'))
    cy.get('[data-test="continue"]').click()
});

Cypress.Commands.add('finalizandoCheckout', () => {
    cy.get('[data-test="total-label"]').should('have.text','Total: $36.69')
    cy.contains('Sauce Labs Onesie').should('be.visible')
    cy.contains('Sauce Labs Bike Light').should('be.visible')
    cy.contains('Sauce Labs Bolt T-Shirt').should('be.visible')
    cy.get('[data-test="finish"]').click()
});

Cypress.Commands.add('mensagemConfirmacao', () => {
    cy.contains('Thank you for your order!').should('be.visible')
});