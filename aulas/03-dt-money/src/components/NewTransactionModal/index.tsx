import { CloseButton, Content, Overlay, TransactionType, TransactionTypeButton } from "./index";
import { TransactionsContext } from "../../contexts/TransactionsContext";
import { ArrowCircleDown, ArrowCircleUp, X } from "phosphor-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import * as Dialog from "@radix-ui/react-dialog";
import { useContext } from "react";
import * as z from 'zod'

const newTransactionFormSchema = z.object({
    description: z.string(),
    price: z.number(),
    category: z.string(),
    type: z.enum(['income', 'outcome'])
})

type NewTransactionFormInputs = z.infer<typeof newTransactionFormSchema>;

export function NewTransactionModal() {
    const { createTransaction } = useContext(TransactionsContext);
    const {
        control,
        register,
        handleSubmit,
        reset,
        formState: { isSubmitting }
    } = useForm<NewTransactionFormInputs>({
        resolver: zodResolver(newTransactionFormSchema),
        defaultValues: {
            type: 'income'
        }
    })

    async function handleCreateNewTransaction(data: NewTransactionFormInputs) {
        createTransaction(data);
        reset();
    }

    return (
        <Dialog.Portal>
            <Overlay />
            <Content>
                <Dialog.Title>Nova Transação</Dialog.Title>
                <CloseButton>
                    <X size={24} />
                </CloseButton>
                <form onSubmit={handleSubmit(handleCreateNewTransaction)}>
                    <input
                        type="text"
                        required placeholder="Descrição"
                        {...register('description')}
                    />
                    <input
                        type="number"
                        required
                        placeholder="Preço"
                        {...register('price', { valueAsNumber: true })}
                    />
                    <input
                        placeholder="Categoria"
                        type="text"
                        required
                        {...register('category')}
                    />
                    <Controller
                        control={control}
                        name="type"
                        render={({ field }) => {
                            return (
                                <TransactionType onValueChange={field.onChange} value={field.value}>
                                    <TransactionTypeButton variant="income" value="income">
                                        <ArrowCircleUp size={24} />
                                        Entrada
                                    </TransactionTypeButton>
                                    <TransactionTypeButton variant="outcome" value="outcome">
                                        <ArrowCircleDown size={24} />
                                        Saída
                                    </TransactionTypeButton>
                                </TransactionType>
                            )
                        }}
                    />



                    <button type="submit" disabled={isSubmitting}>
                        Cadastrar
                    </button>
                </form>

            </Content>
        </Dialog.Portal>
    )
}