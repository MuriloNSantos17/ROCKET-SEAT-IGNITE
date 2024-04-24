import { http, HttpResponse } from 'msw'
import { GetManagedRestaurantResponse } from '../get-management-restaurant';

export const getManagedRestaurantMock = http.get<never, never, GetManagedRestaurantResponse>('/metrics/month-receipt', () => {
    return HttpResponse.json({
        id: 'custom-user-id',
        createdAt: new Date(),
        name: 'Pizza Restaurant',
        description: '415151255',
        managerId: '122112',
        updatedAt: null
    })
})