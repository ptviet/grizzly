const AUTH_API_PROD      = 'https://sp-grizzly-apigateway.herokuapp.com/auth';
const CATEGORY_API_PROD  = 'https://sp-grizzly-apigateway.herokuapp.com/category';
const PRODUCT_API_PROD   = 'https://sp-grizzly-apigateway.herokuapp.com/product';
const USER_API_PROD      = 'https://sp-grizzly-apigateway.herokuapp.com/user';
const VENDOR_API_PROD    = 'https://sp-grizzly-apigateway.herokuapp.com/vendor';

const PRODUCT_IMAGE_PROD = 'https://sp-grizzly-apigateway.herokuapp.com/productimgs/';
const VENDOR_IMAGE_PROD  = 'https://sp-grizzly-apigateway.herokuapp.com/vendorimgs/';

const AUTH_API_DEV      = 'http://localhost:8765/auth';
const CATEGORY_API_DEV  = 'http://localhost:8765/category';
const PRODUCT_API_DEV   = 'http://localhost:8765/product';
const USER_API_DEV      = 'http://localhost:8765/user';
const VENDOR_API_DEV    = 'http://localhost:8765/vendor';

// prod = true, test = true, dev = false
let PRODUCTION = false;
if (process.env.REACT_APP_ENV !== "development")
  PRODUCTION = true;

export const AUTH_API_GATEWAY     = PRODUCTION ? AUTH_API_PROD      : AUTH_API_DEV;
export const CATEGORY_API_GATEWAY = PRODUCTION ? CATEGORY_API_PROD  : CATEGORY_API_DEV;
export const PRODUCT_API_GATEWAY  = PRODUCTION ? PRODUCT_API_PROD   : PRODUCT_API_DEV;
export const USER_API_GATEWAY     = PRODUCTION ? USER_API_PROD      : USER_API_DEV;
export const VENDOR_API_GATEWAY   = PRODUCTION ? VENDOR_API_PROD    : VENDOR_API_DEV;

export const PRODUCT_IMAGE        = PRODUCT_IMAGE_PROD;
export const VENDOR_IMAGE         = VENDOR_IMAGE_PROD;