describe('Login', () => { 
    it('Realizar login com sucesso', () => {
      cy.Login()
    })

    it('Falha ao realizar login', () => {
      cy.incorrectLogin()
      cy.validarMensagemErro()
    })
})

