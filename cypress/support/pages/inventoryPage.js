export const InventoryPage = {
  items: '.inventory_item',
  itemName: '.inventory_item_name',
  itemPrice: '.inventory_item_price',
  addBtn: 'button:contains("Add to cart")',
  removeBtn: 'button:contains("Remove")',
  cartLink: '#shopping_cart_container a',
  cartBadge: '.shopping_cart_badge',
  sortSelect: '.product_sort_container',

  openDetails(name) {
    cy.get(this.items).contains(this.itemName, name).click()
  },

  addToCartByName(name) {
    cy.get(this.items)
      .contains(this.itemName, name)
      .parents(this.items)
      .within(() => cy.contains('button', 'Add to cart').click())
  },

  removeFromCartByName(name) {
    cy.get(this.items)
      .contains(this.itemName, name)
      .parents(this.items)
      .within(() => cy.contains('button', 'Remove').click())
  },

  assertPricesAscending() {
    cy.get(this.itemPrice).then(($els) => {
      const prices = [...$els].map(el => parseFloat(el.innerText.replace('$', '')))
      const sorted = [...prices].sort((a, b) => a - b)
      expect(prices, 'ordem de preços crescente').to.deep.equal(sorted)
    })
  },

  assertNamesOrder(direction = 'asc') {
    cy.get(this.itemName).then(($els) => {
      const names = [...$els].map(el => el.innerText.trim())
      const sorted = [...names].sort((a, b) => a.localeCompare(b))
      if (direction === 'desc') sorted.reverse()
      expect(names, `ordem ${direction}`).to.deep.equal(sorted)
    })
  }
}
