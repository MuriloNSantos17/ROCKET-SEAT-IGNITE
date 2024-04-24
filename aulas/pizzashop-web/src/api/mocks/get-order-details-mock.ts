import { http, HttpResponse } from 'msw'

import { GetOrderDetailsParams, GetOrderDetailsResponse } from '../get-oder-details';

export const getOrderDetailsMock = http.get<GetOrderDetailsParams, never, GetOrderDetailsResponse>('/orders/:orderId', ({params}) => {
    return HttpResponse.json({
        id: params.orderId,
        totalInCents: 5000,
        customer: {
            email:'trex@example.com',
            name: 'Murilo Rex',
            phone: '81888181'
        },
        createdAt: new Date().toISOString(),
        status: 'pending',
        orderItems:[
            {
                id: 'order-item-1',
                product: {name:'Pizza Teste'},
                priceInCents:100,
                quantity:1
            },
            {
                id: 'order-item-2',
                product: {name:'Pizza Teste2'},
                priceInCents:1000,
                quantity:1
            }
        ]
    })
})