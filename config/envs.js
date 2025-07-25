import {config} from 'dotenv';
config();

export const envs = {
  database: {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    projectId: process.env.PROJECT_ID,
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.MESSAGING_SENDER_ID,
    appId: process.env.APP_ID,
    measurementId: process.env.MEASUREMENT_ID,
  },
  port: process.env.PORT || 3000,
  secrets: {
    jwt_secret: process.env.JWT_SECRET || 'defaultsecret',
  },
};