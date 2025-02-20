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

  createCoupon(code = `test${Cypress._.random(1, 1000)}`) {
    cy.get('#AbpContentToolbar .btn').click(); // Click "Add Coupon"

    cy.get('#CouponModel_Code').clear().type(code); // Enter coupon code
    cy.get(':nth-child(1) > .btn > .form-check > #CouponModel_DiscountType').click(); // Select discount type
    cy.get('#discount_fixed > #CouponModel_DiscountValue').clear().type('200'); // Enter discount value
    cy.get('#CouponModel_IsActive').click(); // Activate coupon
    cy.get('#btn-submit').click(); // Submit form
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

  searchCoupon() {
    cy.get('#SearchInput').type('TESTCOUPON123');
    cy.get('#SearchSubmitButton').click();
    cy.get('.dataTables_scrollBody').should('be.visible').contains('TESTCOUPON123');
  }
}

export default CouponPage;
