import type { GetOrdersResponse } from "../get-orders"
import { HttpResponse, http } from "msw"

type Orders = GetOrdersResponse['orders']
type OrderStatus = GetOrdersResponse['orders'][number]['status'];

const statuses: OrderStatus[] = [
    'pending',
    'processing',
    'canceled',
    'delivered',
    'delivering'
]

const orders: Orders = Array.from({ length: 60 }).map((_, i) => {
    return {
        createdAt: new Date().toISOString(),
        customerName: `REX LTDA ${i}`,
        orderId: `order-${i + 1}`,
        total: 1000 + i,
        status: statuses[i % 5],
    }
})

export const getOrdersMock = http.get<never, never, GetOrdersResponse>(
    '/orders', async ({ request }) => {
        const { searchParams } = new URL(request.url)

        const pageIndex = searchParams.get('pageIndex') ? Number(searchParams.get('pageIndex')) : 0

        const customerName = searchParams.get('customerName')
        const orderId = searchParams.get('orderId')
        const status = searchParams.get('status')

        let filterdOrders = orders;

        if (customerName) {
            filterdOrders = filterdOrders.filter(order => order.customerName.includes(customerName))
        }

        if (orderId) {
            filterdOrders = filterdOrders.filter(order => order.orderId.includes(orderId))
        }

        if (status) {
            filterdOrders = filterdOrders.filter(order => order.status === status)
        }

        const paginatedOrders = filterdOrders.slice(
            pageIndex * 10,
            (pageIndex + 1) * 10
        )

        return HttpResponse.json({
            orders: paginatedOrders,
            meta: {
                pageIndex,
                perPage: 10,
                totalCount: filterdOrders.length
            }
        })

    }
)
