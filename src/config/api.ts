import { environment } from 'src/environments/environment';

export const baseUrl = environment.production ? 'https://api.shoppingcart.com/whatever' : 'https://jsonplaceholde.typicode.com'
export const testUrl = baseUrl + '/todos/1';
export const countriesBaseUrl = "https://ajayakv-rest-countries-v1.p.rapidapi.com/rest/v1";
export const countriesUrl = "/all";