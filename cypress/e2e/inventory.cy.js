import { InventoryPage } from '../support/pages/inventoryPage'
import { CartPage } from '../support/pages/cartPage'

describe('Inventory - SauceDemo', () => {
  beforeEach(() => {
    cy.login('standard_user', 'secret_sauce')
    cy.url().should('include', '/inventory.html')
  })

  it('Deve adicionar e remover produto da lista', () => {
    // adiciona por nome
    InventoryPage.addToCartByName('Sauce Labs Backpack')
    cy.get(InventoryPage.cartBadge).should('contain', '1')

    // remove por nome
    InventoryPage.removeFromCartByName('Sauce Labs Backpack')
    cy.get(InventoryPage.cartBadge).should('not.exist')
  })

  it('Deve abrir o detalhe do produto e adicionar ao carrinho', () => {
    InventoryPage.openDetails('Sauce Labs Bike Light')
    cy.url().should('include', 'inventory-item.html')
    cy.get(InventoryPage.addBtn).click()
    cy.get(InventoryPage.cartBadge).should('contain', '1')
  })

  it('Deve ordenar por preço (low to high)', () => {
    cy.get(InventoryPage.sortSelect).select('lohi')
    InventoryPage.assertPricesAscending()
  })

  it('Deve ordenar por nome (Z to A)', () => {
    cy.get(InventoryPage.sortSelect).select('za')
    InventoryPage.assertNamesOrder('desc')
  })

  it('Deve navegar para o carrinho pelo ícone', () => {
    InventoryPage.addToCartByName('Sauce Labs Fleece Jacket')
    cy.get(InventoryPage.cartLink).click()
    cy.url().should('include', '/cart.html')
    cy.get(CartPage.items).should('have.length', 1)
  })
})
