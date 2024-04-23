import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import colors from 'tailwindcss/colors'
import {
    ResponsiveContainer,
    LineChart,
    XAxis,
    YAxis,
    CartesianGrid,
    Line,
} from 'recharts'
import { useQuery } from "@tanstack/react-query";
import { getDailyRevenueInPeriod } from "@/api/get-daily-revenue-in-period";

export function RevenueChart() {
    const { data: dailyRevenueInPeriod } = useQuery({
        queryKey: ['metrics', 'daily-revenue-in-period'],
        queryFn: getDailyRevenueInPeriod,
    })

    return (
        <Card className="col-span-6">
            <CardHeader className="flex-row items-center justify-between pb-8">
                <div className="space-y-1">
                    <CardTitle className="text-base font-medium">Receita no Período</CardTitle>
                    <CardDescription>Receita Diária no Período</CardDescription>
                </div>
            </CardHeader>
            <CardContent>
                {
                    dailyRevenueInPeriod && (
                        <ResponsiveContainer width={'100%'} height={240}>
                            <LineChart data={dailyRevenueInPeriod} style={{ fontSize: 12 }}>
                                <YAxis stroke="#888" axisLine={false} tickLine={false} width={80} tickFormatter={(value: number) => value.toLocaleString('pt-BR', {
                                    style: 'currency',
                                    currency: 'BRL'
                                })} />
                                <XAxis dataKey={"date"} tickLine={false} axisLine={false} dy={16} />
                                <CartesianGrid vertical={false} className="stroke-muted" />
                                <Line type={'linear'} strokeWidth={2} dataKey={'receipt'} stroke={colors.violet['500']} />
                            </LineChart>
                        </ResponsiveContainer>
                    )
                }
            </CardContent>
        </Card>
    )
}