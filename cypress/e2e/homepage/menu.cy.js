describe('Teste do Menu de Navegação', () => {
    it('Deve exibir o menu corretamente em diferentes resoluções', () => {
      const viewports = ['macbook-15', 'ipad-2', 'iphone-x'];
  
      viewports.forEach((viewport) => {
        cy.viewport(viewport);
        cy.visit('https://www.amazon.com.br');
        cy.get('#nav-hamburger-menu').click();
        cy.get('.hmenu-visible').should('be.visible');
      });
    });
  });
  