// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
// import { initializeApp } from 'firebase/app';
// import { getAnalytics } from 'firebase/analytics';

export const environment = {
  firebase: {
    projectId: 'flight-ticket-scheduler-201e9',
    appId: '1:874592876662:web:31abaced6eae0d7eea4757',
    databaseURL:
      'https://flight-ticket-scheduler-201e9-default-rtdb.firebaseio.com',
    storageBucket: 'flight-ticket-scheduler-201e9.appspot.com',
    locationId: 'us-central',
    apiKey: 'AIzaSyCUGi3MT1RIj5pYu6D1mYGZ8mfQoPxDhXU',
    authDomain: 'flight-ticket-scheduler-201e9.firebaseapp.com',
    messagingSenderId: '874592876662',
    measurementId: 'G-9ZGXCQ3W05',
  },
  production: false,
};

// const app = initializeApp(environment.firebaseConfig);
// const analytics = getAnalytics(app);

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
