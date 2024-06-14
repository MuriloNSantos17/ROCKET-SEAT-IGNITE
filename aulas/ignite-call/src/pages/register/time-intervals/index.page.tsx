import { Button, Checkbox, Heading, MultiStep, Text, TextInput } from "@ignite-ui/react";
import { Container, Header } from "../styles";
import { FormError, IntervalBox, IntervalDay, IntervalInputs, IntervalItem, IntervalsContainer } from './styles';
import { ArrowRight } from "phosphor-react";
import { Controller, useFieldArray, useForm } from "react-hook-form";
import { z } from "zod";
import { getWeekDays } from "@/utils/get-week-days";
import { zodResolver } from "@hookform/resolvers/zod";
import { converTimeStringToMinutes } from "@/utils/convert-time-string-to-minutes";
import { api } from "@/lib/axios";
import { useRouter } from "next/router";
import { NextSeo } from "next-seo";

const timeIntervalsFormSchema = z.object({
    intervals: z.array(z.object({
        weekDay: z.number().min(0).max(6),
        enabled: z.boolean(),
        startTime: z.string(),
        endTime: z.string(),
    })
    )
        .length(7)
        .transform((intervals) => intervals.filter((interval) => interval.enabled))
        .refine(invervals => invervals.length > 0, {
            message: 'Você precisa selecionar pelo menos um dia da semana!'
        }).transform((intervals) => {
            return intervals.map(interval => {
                return {
                    weekDay: interval.weekDay,
                    startTimeInMinutes: converTimeStringToMinutes(interval.startTime),
                    endTimeInMinutes: converTimeStringToMinutes(interval.endTime)
                }
            })
        }).refine((intervals) => {
            return intervals.every(
                (interval) =>
                    interval.endTimeInMinutes - 60 >= interval.startTimeInMinutes,
            )
        }, {
            message: 'O horário de término deve ser pelo menos 1 hora distante do início'
        }),
})

type TimeIntervalFormOutput = z.output<typeof timeIntervalsFormSchema>
type TimeIntervalFormInput = z.input<typeof timeIntervalsFormSchema>


export default function TimeInterval() {

    const { register, handleSubmit, control, watch, formState: {
        isSubmitting,
        errors,
    } } = useForm<TimeIntervalFormInput>({
        resolver: zodResolver(timeIntervalsFormSchema),
        defaultValues: {
            intervals: [
                { weekDay: 0, enabled: false, startTime: '08:00', endTime: '18:00' },
                { weekDay: 1, enabled: true, startTime: '08:00', endTime: '18:00' },
                { weekDay: 2, enabled: true, startTime: '08:00', endTime: '18:00' },
                { weekDay: 3, enabled: true, startTime: '08:00', endTime: '18:00' },
                { weekDay: 4, enabled: true, startTime: '08:00', endTime: '18:00' },
                { weekDay: 5, enabled: true, startTime: '08:00', endTime: '18:00' },
                { weekDay: 6, enabled: false, startTime: '08:00', endTime: '18:00' },
            ]
        }
    });

    const weekDays = getWeekDays();

    const { fields } = useFieldArray({
        control,
        name: 'intervals'
    });

    const intervals = watch('intervals');
    const router = useRouter();

    async function handleSetTimeIntervals(data: any) {
        const { intervals } = data as TimeIntervalFormInput;

        await api.post('/users/time-intervals', {
            intervals
        })

        await router.push('/register/update-profile')
    }

    return (
        <>
            <NextSeo
                title='Selecione sua disponibilidade | Ignite call' noindex
            />
            <Container>
                <Header>
                    <Heading as='strong'>
                        Quase Lá
                    </Heading>
                    <Text>
                        Defina o intervalo de horários que você está disponível em cada dia da semana
                    </Text>
                    <MultiStep size={4} currentStep={3} />
                </Header>
                <IntervalBox as='form' onSubmit={handleSubmit(handleSetTimeIntervals)}>
                    <IntervalsContainer>
                        {
                            fields.map((field, index) => {
                                return (
                                    <IntervalItem key={field.id}>
                                        <IntervalDay>
                                            <Controller
                                                name={`intervals.${index}.enabled`}
                                                control={control}
                                                render={({ field }) => {
                                                    return (
                                                        <Checkbox
                                                            onCheckedChange={(checked: boolean) => {
                                                                field.onChange(checked === true)
                                                            }}
                                                            checked={field.value}
                                                        />
                                                    )
                                                }}
                                            />
                                            <Text>{weekDays[field.weekDay]}</Text>
                                        </IntervalDay>

                                        <IntervalInputs>
                                            <TextInput
                                                disabled={intervals[index].enabled === false}
                                                size={'sm'}
                                                type={'time'}
                                                step={60}
                                                {...register(`intervals.${index}.startTime`)}
                                            >

                                            </TextInput>
                                            <TextInput
                                                disabled={intervals[index].enabled === false}
                                                size={'sm'}
                                                type={'time'}
                                                step={60}
                                                {...register(`intervals.${index}.endTime`)}
                                            >

                                            </TextInput>
                                        </IntervalInputs>
                                    </IntervalItem>
                                )
                            })
                        }


                    </IntervalsContainer>
                    {
                        errors.intervals && (
                            <FormError size="sm">
                                {errors.intervals.root?.message}
                            </FormError>
                        )
                    }
                    <Button type='submit' disabled={isSubmitting}>
                        Próximo Passo
                        <ArrowRight />
                    </Button>
                </IntervalBox>
            </Container >
        </>
    )
}