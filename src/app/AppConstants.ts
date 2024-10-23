export class AppConstants {
  public static BASE_URL = '';
  public  static SCHEDULER_BASE_URL = '';
  public  static COMPANY_KEY = '';

  public static API = {

    All_SERVICES: AppConstants.BASE_URL + '/services',
    All_PRICING: AppConstants.BASE_URL + '/pricings',
    All_PRODUCTS: AppConstants.BASE_URL + '/products',
    Order: AppConstants.BASE_URL + '/orders/place',
    POSTCODE: AppConstants.BASE_URL + '/cities',
    SLOTS: AppConstants.SCHEDULER_BASE_URL + '/slots/company',
    UPDATE_SLOT: AppConstants.SCHEDULER_BASE_URL + '/slots/update/',
    BOOK_SLOT: AppConstants.SCHEDULER_BASE_URL + '/slots/book/',
    COUPON: AppConstants.BASE_URL + '/coupons/apply',

  };

  constructor() {
  }

}
