import { environment } from 'src/environments/environment';

export const baseUrl = environment.production ? 'https://api.shoppingcart.com/whatever' : 'https://jsonplaceholder.typicode.com'
export const testUrl = baseUrl + '/todos/1';