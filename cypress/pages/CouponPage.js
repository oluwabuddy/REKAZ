class CouponPage {
  visit() {
    cy.visit('platform.rekaz.dev');
  }

  clickTranslateButton() {
    cy.get('.btn').first().click();
    cy.get('.menu-link').eq(1).click({force: true});
  }

  fillEmail(email) {
    cy.get('#LoginInput_UserNameOrEmailAddress').clear().type(email);
  }

  fillPassword(password) {
    cy.get('#LoginInput_Password').clear().type(password);
  }

  submit() {
    cy.get('.btn-dark').click();
  }

  navigateToCoupons() {
    cy.get('.menu-link .menu-title').eq(7).click();
    cy.url().should('include', '/coupons');
  }

  createCoupon() {
    const couponCode = `TEST${Cypress._.random(1000, 9999)}`;
  
    cy.get('#AbpContentToolbar .btn').click(); // Click "Add Coupon"
    cy.get('#CouponModel_Code').clear().type(couponCode); // Enter coupon code
    cy.get(':nth-child(1) > .btn > .form-check > #CouponModel_DiscountType').click(); // Select discount type
    cy.get('#discount_fixed > #CouponModel_DiscountValue').clear().type('200'); // Enter discount value
    cy.get('#CouponModel_IsActive').click(); // Activate coupon
    cy.get('#btn-submit').click(); // Submit form
  
    cy.wrap(couponCode).as('couponCode'); // Store for later use
  }

  createDuplicateCoupon() {
    this.createCoupon('TESTCOUPON123'); // Use a static code for duplicate test
  }

  verifyDuplicateCouponError() {
    cy.get('.swal2-popup').should('be.visible').contains('Coupon code already exists');
  }

  verifyCouponStatus() {
    cy.get('.gap-4 > :nth-child(2)').click();
    cy.get('.gap-4 > :nth-child(3)').click();
    cy.get('.filter-checked').click();
  }

  searchCoupon(code) {
    cy.get('#SearchInput').clear().type(code); // Input the coupon code
    cy.get('#SearchSubmitButton').click(); // Click search button
  
    // Ensure the search results table is visible
    cy.get('.dataTables_scrollBody').should('be.visible');
  
    // Validate that the searched coupon appears in the result
    cy.contains('.dataTables_scrollBody', code).should('exist');
  }

  deleteCoupon(code) {
  cy.get('#SearchInput').clear().type(code); // Search for the coupon
  cy.get('#SearchSubmitButton').click();

  // Ensure the coupon appears before proceeding
  cy.contains(code).should('be.visible');

  cy.get(':nth-child(1) > :nth-child(1) > .dropdown > .btn').click(); // Open actions menu
  cy.contains('Delete').click({force: true}); // Click delete option
  cy.get('.swal2-confirm').click({force: true}); // Confirm delete

  // Re-search and verify the coupon no longer exists
  cy.get('#SearchInput').clear().type(code);
  cy.get('#SearchSubmitButton').click();
  cy.contains(code).should('not.exist');
}
 
}

export default CouponPage;
