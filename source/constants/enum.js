export function findEnumById(type, id) {
  const result = Object.keys(type).filter(
    key => type[key].id === parseInt(id, 10),
  );
  if (result) {
    return type[result[0]];
  }
  return {};
}

export function genEnumToOption(type) {
  return Object.keys(type).map(item => ({
    value: type[item].value,
    label: type[item].label,
  }));
}

export const EnumPage = {
  REPORT_DISH: {
    id: 'REPORT_DISH',
  },
  REPORT_RESTAURANT: {
    id: 'REPORT_RESTAURANT',
  },
  ORDER_MANAGEMENT: {
    id: 'ORDER_MANAGEMENT',
  },
  NOW_SHIP_ORDER_MANAGEMENT: {
    id: 'NOW_SHIP_ORDER_MANAGEMENT',
  },
};

export const EnumLoginType = {
  PASSWORD: {
    id: 0,
    description: 'PASSWORD',
  },
  FACEBOOK: {
    id: 1,
    description: 'FACEBOOK',
  },
  GOOGLE: {
    id: 2,
    description: 'GOOGLE',
  },
  ACCOUNT_KIT: {
    id: 3,
    description: 'ACCOUNT_KIT',
  },
};

export const EnumAppType = {
  NOW_MERCHANT_APP: 1001,
};

export const EnumClientType = {
  CLIENT_WEB: 1,
};

export const EnumPagingMode = {
  NONE: {
    id: 1,
  },
  SELF_PAGING: {
    id: 2,
  },
  PAGING_IDS: {
    id: 3,
  },
  PAGING_OFFSET_LIMIT: {
    id: 4,
  },
};

export const EnumOrderGroupStatus = {
  PROCESSING: {
    id: 1,
    description: 'PROCESSING',
  },
  COMPLETED: {
    id: 2,
    description: 'COMPLETED',
  },
  CANCELLED: {
    id: 3,
    description: 'CANCELLED',
  },
  CONFIRMED: {
    id: 4,
    description: 'CONFIRMED',
  },
};

export const EnumListOrderSortBy = {
  STATUS: {
    id: 1,
    description: 'STATUS',
  },
  DELIVERY_DATETIME: {
    id: 2,
    description: 'DELIVERY_DATETIME',
  },
  SUBMIT_DATETIME: {
    id: 3,
    description: 'SUBMIT_DATETIME',
  },
};

export const EnumOrderListFilter = {
  ALL: {
    id: 1,
    description: 'ALL',
  },
  INCLUDE_VAT: {
    id: 2,
    description: 'INCLUDE_VAT',
  },
  NOT_INCLUDE_VAT: {
    id: 3,
    description: 'NOT_INCLUDE_VAT',
  },
};

export const EnumOrderMerchantStatus = {
  PICKED: {
    id: 1,
    description: 'merchant_order_status_picked',
    class: 'btn-green-dark',
  },
  DELIVERED: {
    id: 2,
    description: 'merchant_order_status_delivered',
    class: 'btn-dark',
  },
  CONFIRMED: {
    id: 3,
    description: 'merchant_order_status_confirmed',
    class: '',
  },
  M_CHANGED: {
    id: 4,
    description: 'merchant_order_status_m_changed',
    class: '',
  },
  M_ASSIGNED: {
    id: 5,
    description: 'merchant_order_status_m_assigned',
    class: '',
  },
  M_RECEIVED: {
    id: 6,
    description: 'merchant_order_status_m_received',
    class: '',
  },
  M_OUTOFSERVICE: {
    id: 7,
    description: 'merchant_order_status_m_out_of_service',
    class: '',
  },
  CANCELLED: {
    id: 8,
    description: 'merchant_order_status_m_cancelled',
    class: '',
  },
  M_TIMEOUT: {
    id: 9,
    description: 'merchant_order_status_m_timeout',
    class: '',
  },
};

export const EnumOrderStatusBy = {
  DELIVERY_NOW: {
    id: 1,
    description: 'merchant_order_status_by_delivery',
  },
  MERCHANT: {
    id: 2,
    description: 'merchant_order_status_by_merchant',
  },
};

export const EnumRejectOrderReason = {
  WRONG_MENU: {
    id: 1,
    description: 'WRONG_MENU',
  },
  RESTAURANT_BUSY: {
    id: 2,
    description: 'RESTAURANT_BUSY',
  },
  RESTAURANT_CLOSES: {
    id: 3,
    description: 'RESTAURANT_CLOSES',
  },
  WRONG_COMMISSION: {
    id: 4,
    description: 'WRONG_COMMISSION',
  },
};

export const EnumOrderUpdateStatus = {
  RECEIVED: {
    id: 1,
    description: 'RECEIVED',
  },
  OUT_OF_SERVICE: {
    id: 2,
    description: 'OUT_OF_SERVICE',
  },
  PICKED: {
    id: 3,
    description: 'PICKED',
  },
  DONE: {
    id: 4,
    description: 'DONE',
  },
  INPUT_TO_PRIVATE_SYSTEM: {
    id: 5,
    description: 'INPUT_TO_PRIVATE_SYSTEM',
  },
  CANCEL: {
    id: 6,
    description: 'CANCEL',
  },
};

export const EnumMerchantPaidMethod = {
  COD: {
    id: 1,
    description: 'COD',
    icon: 'icon-money',
  },
  PAYNOW_CREDIT: {
    id: 2,
    description: 'PAYNOW_CREDIT',
    icon: '',
  },
  BANK_TRANSFER: {
    id: 3,
    description: 'BANK_TRANSFER',
    icon: '',
  },
  CYBER_SOURCE: {
    id: 4,
    description: 'CYBER_SOURCE',
    icon: '',
  },
  NAPAS: {
    id: 5,
    description: 'NAPAS',
    icon: '',
  },
  TOPPAY: {
    id: 6,
    description: 'TOPPAY',
    icon: 'icon-airpay',
  },
  MOMO: {
    id: 7,
    description: 'MOMO',
    icon: '',
  },
  VNPAY: {
    id: 8,
    description: 'VNPAY',
    icon: '',
  },
  FDC: {
    id: 9,
    description: 'FDC',
    icon: '',
  },
  PN_CREDIT_CODE: {
    id: 10,
    description: 'PN_CREDIT_CODE',
    icon: '',
  },
  SACOMBANK_ECOM: {
    id: 11,
    description: 'SACOMBANK_ECOM',
    icon: '',
  },
};

export const EnumBookingNowShipStatus = {
  INIT: {
    id: 1,
    value: 1,
    label: 'INIT',
    class: 'blue',
  },
  ASSIGNING: {
    id: 2,
    value: 2,
    label: 'ASSIGNING',
    class: 'blue',
  },
  ASSIGNING_TIMEOUT: {
    id: 3,
    value: 3,
    label: 'ASSIGNING_TIMEOUT',
    class: 'blue',
  },
  ASSIGNED: {
    id: 4,
    value: 4,
    label: 'ASSIGNED',
    class: 'blue',
  },
  COMING: {
    id: 5,
    value: 5,
    label: 'COMING',
    class: 'blue',
  },
  USER_CANCELED: {
    id: 6,
    value: 6,
    label: 'USER_CANCELED',
    class: 'red',
  },
  ARRIVED: {
    id: 7,
    value: 7,
    label: 'ARRIVED',
    class: 'blue',
  },
  PICKUP: {
    id: 8,
    value: 8,
    label: 'PICKUP',
    class: 'blue',
    icon: 'fa-shopping-bag',
  },
  DRIVER_CANCELED: {
    id: 9,
    value: 9,
    label: 'DRIVER_CANCELED',
    class: 'red',
  },
  IN_PROCESS: {
    id: 10,
    value: 10,
    label: 'IN_PROCESS',
    class: 'blue',
  },
  COMPLETED: {
    id: 11,
    value: 11,
    label: 'COMPLETED',
    class: 'green',
    icon: 'fa-check',
  },
  SYSTEM_CANCELED: {
    id: 12,
    value: 12,
    label: 'SYSTEM_CANCELED',
    class: 'red',
  },
  SYSTEM_ASSIGNED: {
    id: 13,
    value: 13,
    label: 'SYSTEM_ASSIGNED',
    class: 'blue',
  },
  RETURN_SUCCESS: {
    id: 14,
    value: 14,
    label: 'RETURN_SUCCESS',
    class: 'green',
  },
  RETURN_FAILED: {
    id: 15,
    value: 15,
    label: 'RETURN_FAILED',
    class: 'red',
  },
  SCHEDULING: {
    id: 16,
    value: 16,
    label: 'SCHEDULING',
    class: 'blue',
  },
};

export const EnumBookingNowShipStatusBrief = {
  IN_PROGRESS: {
    id: 1,
    value: 1,
    label: 'Processing',
  },
  COMPLETED: {
    id: 2,
    value: 2,
    label: 'Completed',
  },
};

export const EnumPaidStatusNowShip = {
  ERROR: {
    id: -1,
    description: 'ERROR',
  },
  INIT: {
    id: 1,
    description: 'INIT',
  },
  PAID: {
    id: 2,
    description: 'PAID',
    name: 'Paid',
  },
  PENDING: {
    id: 3,
    description: 'PENDING',
  },
  PENDING_AUTH: {
    id: 4,
    description: 'PENDING_AUTH',
  },
  FAILED: {
    id: 5,
    description: 'FAILED',
  },
  PENDING_REFUND: {
    id: 6,
    description: 'PENDING_REFUND',
  },
  PARTIAL_REFUNDED: {
    id: 7,
    description: 'PARTIAL_REFUNDED',
  },
  REFUNDED: {
    id: 8,
    description: 'REFUNDED',
  },
  REFUND_FAILED: {
    id: 9,
    description: 'REFUND_FAILED',
  },
  PREPAID_COD: {
    id: 10,
    description: 'PREPAID_COD',
  },
  RECHARGED_MERCHANT: {
    id: 11,
    description: 'RECHARGED_MERCHANT',
  },
};

export const EnumPaymentMethodNowShip = {
  COD: {
    id: 1,
    description: 'COD',
  },
  PAYNOW_CREDIT: {
    id: 2,
    description: 'PAYNOW_CREDIT',
  },
  BANK_TRANSFER: {
    id: 3,
    description: 'BANK_TRANSFER',
  },
  CYBER_SOURCE: {
    id: 4,
    description: 'CYBER_SOURCE',
  },
  NAPAS: {
    id: 5,
    description: 'NAPAS',
  },
  TOPPAY: {
    id: 6,
    description: 'TOPPAY',
  },
  MOMO: {
    id: 7,
    description: 'MOMO',
  },
  VNPAY: {
    id: 8,
    description: 'VNPAY',
  },
  FDC: {
    id: 9,
    description: 'FDC',
  },
  PN_CREDIT_CODE: {
    id: 10,
    description: 'PN_CREDIT_CODE',
  },
  SACOMBANK_ECOM: {
    id: 11,
    description: 'SACOMBANK_ECOM',
  },
  AIRPAY_CREDIT_CARD: {
    id: 12,
    description: 'AIRPAY_CREDIT_CARD',
  },
  NOW_PORTAL: {
    id: 13,
    description: 'NOW_PORTAL',
  },
};

export const EnumBookingStatusNowShip = {
  INIT: {
    id: 1,
    description: 'INIT',
  },
  ASSIGNING: {
    id: 2,
    description: 'ASSIGNING',
  },
  ASSIGNING_TIMEOUT: {
    id: 3,
    description: 'ASSIGNING_TIMEOUT',
  },
  ASSIGNED: {
    id: 4,
    description: 'ASSIGNED',
  },
  COMING: {
    id: 5,
    description: 'COMING',
  },
  USER_CANCELED: {
    id: 6,
    description: 'USER_CANCELED',
  },
  ARRIVED: {
    id: 7,
    description: 'ARRIVED',
  },
  PICKUP: {
    id: 8,
    description: 'PICKUP',
  },
  DRIVER_CANCELED: {
    id: 9,
    description: 'DRIVER_CANCELED',
  },
  IN_PROCESS: {
    id: 10,
    description: 'IN_PROCESS',
  },
  COMPLETED: {
    id: 11,
    description: 'COMPLETED',
  },
  SYSTEM_CANCELED: {
    id: 12,
    description: 'SYSTEM_CANCELED',
  },
  SYSTEM_ASSIGNED: {
    id: 13,
    description: 'SYSTEM_ASSIGNED',
  },
  RETURN_SUCCESS: {
    id: 14,
    description: 'RETURN_SUCCESS',
  },
  RETURN_FAILED: {
    id: 15,
    description: 'RETURN_FAILED',
  },
  SCHEDULING: {
    id: 16,
    description: 'SCHEDULING',
  },
};

export const EnumNotificationBell = {
  ORDER: {
    to: '/order/order-management',
    id: 1,
  },
};


export const EnumShippingStatus = {
  ALL: {
    id: 0,
    description: 'ALL',
  },
  PICK: {
    id: 1,
    description: 'PICK',
    class: 'order-picked',
    icon: 'fab fa-get-pocket mr-1',
  },
  DELIVERY: {
    id: 2,
    description: 'DELIVERY',
    class: 'order-picked',
    icon: 'fas fa-check mr-1',
  },
  SUCCESS: {
    id: 3,
    description: 'SUCCESS',
    class: 'order-picked',
    icon: 'fas fa-check-circle mr-1',
  },
  DENIED: {
    id: 4,
    description: 'DENIED',
    class: 'order-confirm',
    icon: 'fas fa-check mr-1',
  },
  NOT_DELIVERY: {
    id: 5,
    description: 'NOT_DELIVERY',
    class: 'order-timeout',
    icon: 'fas fa-check mr-1',
  },
};

export const EnumOrderStatus = {
  DELIVERY: {
    id: 1,
    description: 'DELIVERY',
  },
  SUCCESS: {
    id: 2,
    description: 'SUCCESS',
  },
  CANCEL: {
    id: 2,
    description: 'CANCEL',
  },
};

export const EnumLanguage = [
  {
    id: 1,
    code: 'en',
    name: 'language_english',
  },
  {
    id: 2,
    code: process.env.VER,
    name: `${process.env.VER}_language_local`,
  },
];

export const EnumRoutingPage = {
  CATEGORY: {
    id: 1,
    description: 'Ngành hàng',
  },
  PRODUCT: {
    id: 2,
    description: 'Sản phẩm',
  },
  NEWS: {
    id: 3,
    description: 'Tin tức',
  },
  CATEGORY_NEWS: {
    id: 4,
    description: 'Danh mục tin tức',
  },
  SEARCH: {
    id: 5,
    description: 'Tìm kiếm',
  },
  CART: {
    id: 6,
    description: 'Giỏ hàng',
  },
};

export const EnumBoxDetailViewType = {
  PRODUCT: {
    id: 1,
    description: 'Sản phẩm',
  },
  HTML: {
    id: 2,
    description: 'Html',
  },
  NEWS: {
    id: 3,
    description: 'Tin tức',
  },
};


export const EnumLandingPageType = {
  HOME: {
    id: 1,
    description: 'Trang Chủ',
  },
  TAB: {
    id: 2,
    description: 'Tab',
  },
  STATIC: {
    id: 3,
    description: 'Trang tùy biến',
  },
};
