import { getOrderDetails } from "@/api/get-oder-details";
import { DialogContent, DialogHeader } from "@/components/ui/dialog";
import { Table, TableBody, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { DialogDescription, DialogTitle } from "@radix-ui/react-dialog";
import { useQuery } from "@tanstack/react-query";

export interface OrderDetailProps {
    orderId: string,
    open: boolean
}

export function OrderDetails({ orderId, open }: OrderDetailProps) {

    const { data: order} = useQuery({
        queryKey: ['order', orderId],
        queryFn: () => getOrderDetails({ orderId }),
        enabled: open 
    })

    return (
        <DialogContent>
            <DialogHeader>
                <DialogTitle>Pedido: 112122121</DialogTitle>
                <DialogDescription>Detalhes do Pedido</DialogDescription>
            </DialogHeader>

            <div className="space-y-6">
                <Table>
                    <TableBody>
                        <TableRow>
                            <TableCell className="text-muted-foreground">Status</TableCell>
                            <TableCell className="flex justify-end">
                                <div className="flex items-center gap-2">
                                    <span className="h-2 w-2 rounded-full bg-slate-400" />
                                    <span className="font-medium text-muted-foreground">Pendente</span>
                                </div>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="text-muted-foreground">Cliente</TableCell>
                            <TableCell className="flex justify-end">
                                Murilo
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="text-muted-foreground">Telefone</TableCell>
                            <TableCell className="flex justify-end">
                                (41) 99585-3913
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="text-muted-foreground">E-mail</TableCell>
                            <TableCell className="flex justify-end">
                                murilo.nsantos17@hotmail.com
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="text-muted-foreground">Realizado há</TableCell>
                            <TableCell className="flex justify-end">
                                3 Minutos
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Produto</TableHead>
                            <TableHead className="text-right">Qtd.</TableHead>
                            <TableHead className="text-right">Preço</TableHead>
                            <TableHead className="text-right">Subtotal</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow>
                            <TableCell>Pizza Pepperoni Família</TableCell>
                            <TableCell className="text-right">2</TableCell>
                            <TableCell className="text-right">R$ 69,90</TableCell>
                            <TableCell className="text-right">R$ 139,80</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Pizza Mussarela Família</TableCell>
                            <TableCell className="text-right">2</TableCell>
                            <TableCell className="text-right">R$ 59,90</TableCell>
                            <TableCell className="text-right">R$ 119,80</TableCell>
                        </TableRow>
                    </TableBody>
                    <TableFooter>
                        <TableCell colSpan={3}>Total do Pedido</TableCell>
                        <TableCell className="text-right font-medium">R$ 259,60</TableCell>
                    </TableFooter>
                </Table>
            </div>
        </DialogContent>
    )
}