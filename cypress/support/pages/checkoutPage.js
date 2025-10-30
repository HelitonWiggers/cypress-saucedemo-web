export const CheckoutPage = {
  // step one
  firstName: '[data-test="firstName"]',
  lastName:  '[data-test="lastName"]',
  postalCode:'[data-test="postalCode"]',
  continue:  '[data-test="continue"]',
  cancel:    '[data-test="cancel"]',
  error:     '[data-test="error"]',

  // step two (overview)
  summaryTotal: '.summary_total_label',
  finish:       '[data-test="finish"]',
  back:         '[data-test="back-to-products"]',

  // complete
  completeHeader: '.complete-header',

  fillYourInfo({ first, last, zip } = {}) {
    if (first !== undefined) cy.get(this.firstName).clear().type(first)
    if (last  !== undefined) cy.get(this.lastName).clear().type(last)
    if (zip   !== undefined) cy.get(this.postalCode).clear().type(zip)
  }
}
