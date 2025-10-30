export const CartPage = {
  items: '.cart_item',
  itemName: '.inventory_item_name',
  removeBtn: 'button:contains("Remove")',
  continueShopping: '[data-test="continue-shopping"]',
  checkout: '[data-test="checkout"]',

  assertHasItem(name) {
    cy.get(this.items).contains(this.itemName, name).should('exist')
  },

  assertNotHasItem(name) {
    cy.get(this.items).contains(this.itemName, name).should('not.exist')
  },

  removeByName(name) {
    cy.get(this.items)
      .contains(this.itemName, name)
      .parents(this.items)
      .within(() => cy.contains('button', 'Remove').click())
  }
}
