// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  dev: true,
  mocked_all: false,
  mocked_content: true,
  mocked_endpoints: false,
  server_host_name: 'localhost:3000',
  server_http_protocol: 'http',
  load_vwo_domain_relace_script: true,
  home_page: 'http://localhost:4200',
  path_prefix: 'https://applicationURL',
  proxy_path_prefix: 'http://localhost:3000',
  HEADER_X_API_KEY: 'API_KEY',
 };
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
