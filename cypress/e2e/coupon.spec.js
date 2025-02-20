import CouponPage from '../pages/CouponPage';

describe('Coupon Test', () => {
  const couponPage = new CouponPage();

  beforeEach(() => {
    couponPage.visit();
    couponPage.clickTranslateButton({force: true});
    couponPage.fillEmail('rekaz@yopmail.com');
    couponPage.fillPassword('Password1234');
    couponPage.submit();
    couponPage.navigateToCoupons();
  });

  it('verify users can create a coupon successfully', () => {
    couponPage.createCoupon(); // Creates a new random coupon
  });

  it('verify users can not create a coupon with an existing code', () => {
    couponPage.createDuplicateCoupon(); //  Attempt with an existing code
  });

  it('verify all coupon status can be checked', () => {
    couponPage.verifyCouponStatus(); // Check all coupon status
  });

  it('should allow users to search for a coupon by code', function () {
    couponPage.createCoupon();
    cy.get('@couponCode').then((code) => {
      couponPage.searchCoupon(code);
    });
  });

  it('should allow users to delete a coupon', function () {
    couponPage.createCoupon();
    cy.get('@couponCode').then((code) => {
      couponPage.deleteCoupon(code);
    });
  });
  
});