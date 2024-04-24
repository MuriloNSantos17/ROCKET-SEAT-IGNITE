import {  GetPopularProductsResponse} from '../get-popular-products';
import { http, HttpResponse } from 'msw'

export const getPopularProductsMock = http.get<never, never, GetPopularProductsResponse>('/metrics/popular-products', () => {
    return HttpResponse.json([
        {
            amount: 20,
            product: "Pizza Peperoni"
        },   
        {
            amount: 220,
            product: "Pizza Mussarela"
        },   
        {
            amount: 250,
            product: "Pizza Strogonoff"
        },   
        
    ])
})