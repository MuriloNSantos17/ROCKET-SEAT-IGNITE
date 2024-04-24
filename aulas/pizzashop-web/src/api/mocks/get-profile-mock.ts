import { http, HttpResponse } from 'msw'
import { GetProfileResponse } from '../get-profile';

export const getProfileMock = http.get<never, never, GetProfileResponse>('/me', () => {
    return HttpResponse.json({
        id: 'custom-user-id',
        createdAt: new Date(),
        email: 'johndoe@example.com',
        name: 'John',
        phone: '4151555',
        role: 'manager',
        updatedAt: null
    })
})