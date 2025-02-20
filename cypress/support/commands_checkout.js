Cypress.Commands.add('ordenateProducts', () => {
    cy.get('[data-test="product-sort-container"]').select('Price (low to high)')
    cy.contains('Sauce Labs Onesie').should('be.visible')
    cy.contains('Sauce Labs Bike Light').should('be.visible')
    cy.contains('Sauce Labs Bolt T-Shirt').should('be.visible')
});

Cypress.Commands.add('adicionarProdutoCarrinho', () => {
    cy.contains('Sauce Labs Onesie').click()
    cy.get('.btn_primary').click()
});

Cypress.Commands.add('validarCarrinho', () => {
    cy.get('[data-test="shopping-cart-link"]').should('have.text','1')
    cy.get('[data-test="shopping-cart-link"]').click()
    cy.contains('Sauce Labs Onesie').should('be.visible')
});

Cypress.Commands.add('removerProduto', () => {
    cy.get('[data-test="shopping-cart-link"]').click()
    cy.contains('Remove').should('be.visible').click()
});

Cypress.Commands.add('validarCarrinhoVazio', () => {
    cy.get('[data-test="shopping-cart-link"]').click()
    cy.contains('Remove').should('not.exist')
});


