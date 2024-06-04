import { Button, Text, TextInput } from '@ignite-ui/react'
import { Form, FormAnotation } from './style'
import { ArrowRight } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/router'

const claimUserNameFormSchema = z.object({
    username: z.string()
        .min(3, { message: 'O usuário precisar ter pelo menos 3 letras' })
        .regex(/^([a-z\\-]+)$/i, { message: 'O usuário poder ter apenas letras e hifens' })
        .transform(userName => userName.toLowerCase())
    ,
})

type ClaimUserNameFormData = z.infer<typeof claimUserNameFormSchema>

export function ClaimUserNameForm() {
    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<ClaimUserNameFormData>({
        resolver: zodResolver(claimUserNameFormSchema)
    })

    const router = useRouter();

    async function handleClaimUserName(data: ClaimUserNameFormData) {
        const { username } = data;
        await router.push(`/register?username=${username}`)
    }

    return (
        <>
            <Form as="form" onSubmit={handleSubmit(handleClaimUserName)}>
                <TextInput size="sm" prefix="ignite.com/" placeholder="seu-usuario" {...register('username')} />
                <Button size="sm" type="submit" disabled={isSubmitting}>
                    Reservar
                    <ArrowRight />
                </Button>


            </Form>
            <FormAnotation>
                <Text size='sm'>
                    {errors.username ? errors.username?.message : 'Digite o nome do usuário desejado'}
                </Text>
            </FormAnotation>
        </>
    )
}
