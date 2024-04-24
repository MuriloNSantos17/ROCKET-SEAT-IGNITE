import { GetDailyRevenueInPeriodResponse } from '../get-daily-revenue-in-period';
import { http, HttpResponse } from 'msw'

export const getDailyRevenueMock = http.get<never, never, GetDailyRevenueInPeriodResponse>('/metrics/daily-receipt-in-period', () => {
    return HttpResponse.json([
        {
            date: '01/01/2024',
            receipt: 7
        },   
        {
            date: '02/01/2024',
            receipt: 74
        },   
        {
            date: '03/01/2024',
            receipt: 780
        },   
        {
            date: '04/01/2024',
            receipt: 20
        },   
        {
            date: '05/01/2024',
            receipt: 220
        },   
        {
            date: '06/01/2024',
            receipt: 201
        },   
        {
            date: '07/01/2024',
            receipt: 2000
        },   
        
    ])
})