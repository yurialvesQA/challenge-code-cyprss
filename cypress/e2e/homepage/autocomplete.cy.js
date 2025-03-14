describe('Teste de Autocomplete', () => {
    beforeEach(() => {
      cy.visit('https://www.amazon.com.br');
    });
  
    it('Deve exibir sugestões ao digitar na barra de pesquisa', () => {
      cy.get('#twotabsearchtextbox').type('notebook');
      cy.get('.s-suggestion').should('be.visible');
    });
  
    it('Não deve exibir sugestões para caracteres inválidos', () => {
      cy.get('#twotabsearchtextbox').type('@@@@');
      cy.get('.s-suggestion').should('not.exist');
    });
  });
  