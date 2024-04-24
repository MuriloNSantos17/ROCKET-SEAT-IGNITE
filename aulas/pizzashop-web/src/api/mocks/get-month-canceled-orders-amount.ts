import { http, HttpResponse } from 'msw'
import { GetMonthCanceledOrdersResponse } from '../get-month-canceled-orders-amount';

export const getCanceledOrdersAmountMock = http.get<never, never, GetMonthCanceledOrdersResponse>('/metrics/month-canceled-orders-amount', () => {
    return HttpResponse.json({
        amount: 24,
        diffFromLastMonth: 7
    })
})