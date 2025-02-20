describe('Gerenciamento do Carrinho de Compras', () => {
  beforeEach(() => {
      cy.Login()
      cy.ordenateProducts()
      cy.adicionarProdutoCarrinho()
  })

  it('Deve adicionar e validar um produto no carrinho', () => {
      cy.validarCarrinho()
  })

  it('Deve remover um produto do carrinho e validar que está vazio', () => {
      cy.removerProduto()
      cy.validarCarrinhoVazio()
  })
})