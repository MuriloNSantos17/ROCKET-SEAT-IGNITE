import { getCanceledOrdersAmountMock } from './get-month-canceled-orders-amount';
import { getDailyRevenueMock } from './get-daily-revenue-in-period-mock';
import { getManagedRestaurantMock } from './get-managed-restaurant-mock';
import { getMonthOrdersAmountMock } from './get-month-orders-amount';
import { getPopularProductsMock } from './get-popular-products-mock';
import { registerRestaurantMock } from './register-restaurant-mock';
import { getDaysOrdersAmountMock } from './get-day-orders-amount';
import { getOrderDetailsMock } from './get-order-details-mock';
import { updateProfileMock } from './update-profile-mock';
import { getMonthRevenueMock } from './get-month-revenue';
import { canceledOrderMock } from './canceled-order-mock';
import { dispatchOrderMock } from './dispatch-order-mock';
import { aprroveOrderMock } from './approve-order-mock';
import { deliverOrderMock } from './deliver-order-mock';
import { getProfileMock } from './get-profile-mock';
import { getOrdersMock } from './get-orders-mock';
import { signInMock } from './sign-in-mock';
import { setupWorker } from 'msw/browser'
import { env } from '@/env';

export const worker = setupWorker(
    signInMock, 
    getOrdersMock,
    registerRestaurantMock, 
    getDaysOrdersAmountMock,
    getCanceledOrdersAmountMock, 
    getMonthRevenueMock,
    getMonthOrdersAmountMock,
    getDailyRevenueMock,
    getOrderDetailsMock,
    aprroveOrderMock,
    canceledOrderMock,
    deliverOrderMock,
    dispatchOrderMock,
    getPopularProductsMock,
    getManagedRestaurantMock,
    getProfileMock,
    updateProfileMock
    
);

export async function enableMSW() {
    if (env.MODE != 'test') {
        return;
    }
    await worker.start();
}