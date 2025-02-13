describe('compra de produto efetuada', () => { 
    it('fluxo de compras', () => {
      cy.Login()
      cy.ordenateProducts()
      cy.adicionarProdutoCarrinho()
      cy.checarCarrinho()
      cy.checkout()
      cy.finalizandoCheckout()
      cy.mensagemConfirmacao()
      })
})