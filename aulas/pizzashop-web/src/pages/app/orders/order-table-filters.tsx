import { SelectContent, SelectItem, SelectTrigger, SelectValue, Select } from '@/components/ui/select';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, X } from "lucide-react";

export function OrderTableFilters() {
    return (
        <form className="flex items-center gap-2">
            <span className="text-sm font-semibold">Filtros:</span>
            <Input placeholder="ID do Pedido" className="h-8 w-auto" />
            <Input placeholder="Nome do Cliente" className="h-8 w-[320px]" />
            <Select defaultValue="all">
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
            <Button type="submit" variant={'secondary'} size={'xs'}>
                <Search className="h-4 w-4 mr-2" />
                Filtrar Resultados
            </Button>
            <Button type="button" variant={'outline'} size={'xs'}>
                <X className="h-4 w-4 mr-2" />
                Remover Filtros
            </Button>
        </form>
    )
}