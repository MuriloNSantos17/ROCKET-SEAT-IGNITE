import { Button, Text, TextArea, TextInput } from "@ignite-ui/react";
import { ConfirmForm, FormActions, FormError, FormHeader } from "./style";
import { CalendarBlank, Clock } from "phosphor-react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const confirmFormSchema = z.object({
    name: z.string().min(3, { 'message': 'O noe precisa de no mínimo 3 caracteres' }),
    email: z.string().email({ message: 'Digite um e-mail válido!' }),
    observations: z.string().nullable(),
})

type ConfirmeFormData = z.infer<typeof confirmFormSchema>


export default function ConfirmStep() {
    const { register, handleSubmit, formState: { isSubmitting, errors } } = useForm<ConfirmeFormData>({
        resolver: zodResolver(confirmFormSchema)
    })

    function handleConfirmScheduling(data: ConfirmeFormData) {
        console.log(data);
    }

    return (
        <ConfirmForm as={"form"} onSubmit={handleSubmit(handleConfirmScheduling)}>
            <FormHeader>
                <Text>
                    <CalendarBlank />
                    22 se Setembro de 2022
                </Text>
                <Text>
                    <Clock />
                    12:00
                </Text>
            </FormHeader>
            <label>
                <Text size="sm">
                    Nome completo
                </Text>
                <TextInput placeholder={"seu nome"} {...register('name')} />
                {
                    errors.name && (
                        <FormError size={"sm"}>{errors.name.message}</FormError>
                    )
                }
            </label>
            <label>
                <Text size="sm">
                    Endereço de E-mail
                </Text>
                <TextInput type={"email"} placeholder={"seu nome"} {...register('email')} />
                {
                    errors.email && (
                        <FormError size={"sm"}>{errors.email.message}</FormError>
                    )
                }
            </label>
            <label>
                <Text size="sm">
                    Observações
                </Text>
                <TextArea {...register('observations')} />
            </label>
            <FormActions>
                <Button type="button" variant={"tertiary"}>
                    Cancelar
                </Button>
                <Button type="submit" disabled={isSubmitting}>
                    Confirmar
                </Button>
            </FormActions>
        </ConfirmForm>
    )
}