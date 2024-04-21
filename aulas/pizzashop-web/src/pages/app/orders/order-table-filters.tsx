import { SelectContent, SelectItem, SelectTrigger, SelectValue, Select } from '@/components/ui/select';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, X } from "lucide-react";
import { z } from 'zod';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useSearchParams } from 'react-router-dom';


const orderFilterSchema = z.object({
    orderId: z.string().optional(),
    customerName: z.string().optional(),
    status: z.string().optional(),
})

type OrderFilterSchema = z.infer<typeof orderFilterSchema>

export function OrderTableFilters() {
    const [searchParams, setSearchParams] = useSearchParams()

    const orderId = searchParams.get('orderId');
    const customerName = searchParams.get('customerName');
    const status = searchParams.get('status');

    const { register, handleSubmit, control, reset } = useForm<OrderFilterSchema>({
        resolver: zodResolver(orderFilterSchema),
        defaultValues: {
            orderId: orderId ?? '',
            customerName: customerName ?? '',
            status: status ?? 'all'
        }
    })

    function handleFilter({ orderId, customerName, status }: OrderFilterSchema) {
        setSearchParams(state => {
            if (orderId) {
                state.set('orderId', orderId)
            } else {
                state.delete('orderId')
            }

            if (customerName) {
                state.set('customerName', customerName)
            } else {
                state.delete('customerName')
            }

            if (status) {
                state.set('status', status)
            } else {
                state.delete('status')
            }

            state.set('page', '1');

            return state;
        })
    }

    function handleClearFilters() {
        setSearchParams(state => {
            state.delete('orderId')
            state.delete('customerName')
            state.delete('status')
            state.set('page', '1')
            return state;
        })

        reset({
            orderId: '',
            customerName: '',
            status: 'all'
        });
    }

    return (
        <form className="flex items-center gap-2" onSubmit={handleSubmit(handleFilter)}>
            <span className="text-sm font-semibold">Filtros:</span>
            <Input placeholder="ID do Pedido" className="h-8 w-auto" {...register('orderId')} />
            <Input placeholder="Nome do Cliente" className="h-8 w-[320px]" {...register('customerName')} />
            <Controller
                name='status'
                control={control}
                render={({ field: { name, onChange, value, disabled } }) => {
                    return (
                        <Select
                            onValueChange={onChange}
                            defaultValue="all"
                            disabled={disabled}
                            value={value}
                            name={name}
                        >
                            <SelectTrigger className="h-8 w-[180px]">
                                <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="all">Todos Status</SelectItem>
                                <SelectItem value="pending">Pendente</SelectItem>
                                <SelectItem value="canceled">Cancelado</SelectItem>
                                <SelectItem value="processing">Em preparo</SelectItem>
                                <SelectItem value="delivering">Em Entrega</SelectItem>
                                <SelectItem value="delivered">Entregue</SelectItem>
                            </SelectContent>
                        </Select>
                    )
                }}
            />

            <Button type="submit" variant={'secondary'} size={'xs'}>
                <Search className="h-4 w-4 mr-2" />
                Filtrar Resultados
            </Button>
            <Button type="button" variant={'outline'} size={'xs'} onClick={handleClearFilters}>
                <X className="h-4 w-4 mr-2" />
                Remover Filtros
            </Button>
        </form>
    )
}