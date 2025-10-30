import { InventoryPage } from '../support/pages/inventoryPage'
import { CartPage } from '../support/pages/cartPage'

describe('Carrinho - SauceDemo', () => {
  beforeEach(() => {
    cy.login('standard_user', 'secret_sauce')
    cy.url().should('include', '/inventory.html')
  })

  it('Deve listar itens adicionados e permitir remoção', () => {
    InventoryPage.addToCartByName('Sauce Labs Backpack')
    InventoryPage.addToCartByName('Sauce Labs Bolt T-Shirt')

    cy.get(InventoryPage.cartLink).click()
    cy.url().should('include', '/cart.html')

    CartPage.assertHasItem('Sauce Labs Backpack')
    CartPage.assertHasItem('Sauce Labs Bolt T-Shirt')

    CartPage.removeByName('Sauce Labs Backpack')
    CartPage.assertNotHasItem('Sauce Labs Backpack')
    cy.get(CartPage.items).should('have.length', 1)
  })

  it('Deve voltar para a lista ao clicar em Continue Shopping', () => {
    InventoryPage.addToCartByName('Sauce Labs Onesie')
    cy.get(InventoryPage.cartLink).click()
    cy.get(CartPage.continueShopping).click()
    cy.url().should('include', '/inventory.html')
  })
})