/* eslint-disable max-len */

export const port = process.env.PORT || 3000;
export const host = process.env.WEBSITE_HOSTNAME || `localhost:${port}`;
export const url = process.env.WEBSITE_URL || 'http://localhost:3001';
export const sitename = process.env.SITENAME || 'Your Website Name';
export const adminEmail = process.env.ADMIN_EMAIL || 'admin@yourdomain.com';

// Max File upload size in MB
export const maxUploadSize = 1;

// default locale is the first one
export const locales = ['en-US'];

export const databaseUrl = process.env.DATABASE_URL || 'mysql://<username>:<password>@localhost/<db-name>';


// Listing Photos Upload Directory
export const fileuploadDir = process.env.FILEUPLOAD_DIR || './images/upload/';

// Logo upload directory
export const logouploadDir = process.env.LOGOUPLOAD_DIR || './images/logo/';

// Home page Banner upload directory
export const banneruploadDir = process.env.BANNER_UPLOAD_DIR || './images/banner/';

// User Profile Photos Upload Directory
export const profilePhotouploadDir = process.env.PROFILE_PHOTO_UPLOAD_DIR || './images/avatar/';

//Document Upload
export const documentuploadDir = process.env.FILEUPLOAD_DIR || './images/document/';

export const analytics = {

  // https://analytics.google.com/
  google: {
    trackingId: process.env.GOOGLE_TRACKING_ID || 'UA-XXXXX-X', 
  },

};

export const googleMapAPI = process.env.GOOGLE_MAP_API || '<Your API Key>';

export const payment = {

  paypal: {
    email: process.env.PAYPAL_APP_EMAIL || '<Your PayPal Email>',
    clientId: process.env.PAYPAL_APP_CLIENT_ID || '<Your Client Id>',
    secret: process.env.PAYPAL_APP_SECRET || '<Your Secret Key>',
    host: process.env.PAYPAL_HOST || 'api.sandbox.paypal.com',
    returnURL: process.env.PAYPAL_RETURN_URL || `${url}/success`,
    cancelURL: process.env.PAYPAL_CANCEL_URL || `${url}/cancel`,
    redirectURL: {
      success: process.env.PAYPAL_SUCCESS_URL || '/users/trips/itinerary',
      cancel: process.env.PAYPAL_CANCEL_URL || '/contact',
    },
  },

  stripe: {
    secretKey: '<Your API Key>'
  }

};

// site key for google recaptcha
export const googleCaptcha = {
  sitekey: '<Your Site key>',
};

// SMS verification
export const sms = {
  twilio: {
    accountSid: '<Your AccountSid>',
    authToken: '<Your AuthToken>',
    phoneNumber: '<Your Phone number>'
  }
};

// Email Settings
export const emailConfig = {
  host: process.env.SMTP_HOST || 'smtp-pulse.com',
  port: process.env.SMTP_PORT || 2525,
  email: process.env.SMTP_LOGIN_EMAIL || '<Your Login Email>',
  sender: process.env.SMTP_FROM_NAME || '<Your From Name>',
  senderEmail: process.env.SMTP_SENDER_EMAIL || '<Your Sender Email>',
  password: process.env.SMTP_LOGIN_PASSWORD || '<Your Password>',
  secure: process.env.SMTP_SECURE || false,
  tls: process.env.SMTP_TLS || false,
};


export const auth = {

  jwt: { secret: process.env.JWT_SECRET || '<Your Secret Key>' },

  redirectURL: {
    login: process.env.LOGIN_URL || '/dashboard',
    verification: process.env.LOGIN_URL || '/user/verification',
  },

  // https://developers.facebook.com/
  facebook: {
    id: process.env.FACEBOOK_APP_ID || '<Your App id>',
    secret: process.env.FACEBOOK_APP_SECRET || '<Your Secret Key>',
    returnURL: process.env.FACEBOOK_CLIENT_URL || `${url}/login/facebook/return`,
  },

  // https://cloud.google.com/console/project
  google: {
    id: process.env.GOOGLE_CLIENT_ID || '<Your client id>',
    secret: process.env.GOOGLE_CLIENT_SECRET || '<Your Secret id>',
    returnURL: process.env.GOOGLE_CLIENT_URL || `${url}/login/google/return`,
  },
};
