describe('Login', () => {
  it('Realizar login com Sucesso', () => {
    // Arrange
    cy.visit('https://www.saucedemo.com/')

    // Act
    cy.get('#user-name').type('standard_user')
    cy.get('#password').type('secret_sauce')
    cy.get('#login-button').click()
    cy.screenshot('Login realizado')

    // Assert
    cy.url().should('eq', 'https://www.saucedemo.com/inventory.html')
  })

  it('Realizar login com Dados Inválidos', () => {
    // Arrange
    cy.visit('https://www.saucedemo.com/')

    // Act
    cy.get('#user-name').type('user_invalid')
    cy.get('#password').type('pass_invalid')
    cy.get('#login-button').click()
    cy.screenshot('Erro de credenciais')

    // Assert
    cy.get('[data-test=error]')
      .should('contain.text', 'Epic sadface: Username and password do not match any user in this service')
  })
})