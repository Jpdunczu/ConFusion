import { baseURL } from './baseurl';

export function RestangularConfigFactory(RestangularProvider) {
    // config the rest API server root, to enable restangular module to comm with the server.
    RestangularProvider.setBaseUrl(baseURL);
}