describe("Carrinho", () => {
  it("Adicionar produto ao carrinho com Sucesso", () => {
    // Arrange
    cy.visit("https://www.saucedemo.com/");
    cy.get("#user-name").type("standard_user");
    cy.get("#password").type("secret_sauce");
    cy.get("#login-button").click();

    // Act
    cy.get("#add-to-cart-sauce-labs-backpack").click();
    cy.screenshot("Produto adicionado");

    // Assert
    cy.get(".shopping_cart_badge").should("be.visible").and("have.text", "1");

    cy.get("#shopping_cart_container").click();
    cy.contains("Sauce Labs Backpack").should("be.visible");
  });

  it('Remover produto do carrinho com sucesso', () => {
    // Arrange
    cy.visit("https://www.saucedemo.com/");
    cy.get("#user-name").type("sproblem_user");
    cy.get("#password").type("secret_sauce");
    cy.get("#login-button").click();
    cy.get("#add-to-cart-sauce-labs-backpack").click();
    cy.get('.shopping_cart_badge').should('be.visible')

    // Act
    cy.get('#remove-sauce-labs-backpack').click()
    cy.screenshot('Produto removido')

    // Assert
    cy.get('.shopping_cart_badge').should('not.be.visible')
  })
});
