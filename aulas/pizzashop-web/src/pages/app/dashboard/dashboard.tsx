import { Helmet } from 'react-helmet-async'
import { MonthRevenueCard } from './components/month-revenue-card'
import { MonthOrdersAmountCard } from './components/month-oders-amount-card'
import { DayOrdersAmountCard } from './components/day-orders-amount-card'
import { MonthCanceledOrdersAmount } from './components/month-canceled-orders-amount'
import { RevenueChart } from './components/revenue-chart'
import { PopularProductsChart } from './components/PopularProductsChart'

export function Dashboard() {
  return (
    <>
      <Helmet title="Dashboard" />
      <div className='flex flex-col gap-4'>
        <h1 className='text-3xl font-bold tracking-tight'>Dashboard</h1>
        <div className='grid grid-cols-4 gap-4'>
          <MonthRevenueCard />
          <MonthOrdersAmountCard />
          <DayOrdersAmountCard />
          <MonthCanceledOrdersAmount />
        </div>
        <div className="grid grid-cols-9 gap-4">
          <RevenueChart />
          <PopularProductsChart />
        </div>
      </div>
    </>
  )
}
