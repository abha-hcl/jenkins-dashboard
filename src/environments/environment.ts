// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  // jenkinsUrl: 'http://10.8.12.239:8080/job/r3-mobile-sol-dryrun/api/json?tree=builds[number,result,duration,actions[parameters[name,value]]]'
  jenkinsUrl: 'http://35.184.96.216/job/mobileBuild/api/json'
  
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
