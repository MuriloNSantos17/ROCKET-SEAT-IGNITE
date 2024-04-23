import { api } from "@/lib/axios";

export interface GetDayOrdersAmountResponse {
    amount: number,
    diffFromYesterday: number,
}

export async function getDayOrdersAmount() {
    const response = await api.get<GetDayOrdersAmountResponse>('http://localhost:3333/metrics/day-orders-amount')
    return response.data
}