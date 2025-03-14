describe('Teste de Performance', () => {
    it('Página inicial deve carregar em menos de 5 segundos', () => {
      cy.visit('https://www.amazon.com.br', {
        onLoad: (contentWindow) => {
          expect(performance.now()).to.be.lessThan(5000);
        },
      });
    });
  });
  