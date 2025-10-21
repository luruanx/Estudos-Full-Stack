describe("Carrinho", () => {
  it("Adicionar produto ao carrinho com Sucesso", () => {
    // Arrange
    cy.visit("https://www.saucedemo.com/");
    cy.get("#user-name").type("standard_user");
    cy.get("#password").type("secret_sauce");
    cy.get("#login-button").click();

    // Act
    cy.get('#add-to-cart-sauce-labs-backpack').click()

    // Assert
    cy.get('.shopping_cart_badge')
        .should('be.visible')
        .and('have.text', '1')
    
    cy.get('#shopping_cart_container').click()
    cy.contains('Sauce Labs Backpack').should('be.visible')
  });
});
