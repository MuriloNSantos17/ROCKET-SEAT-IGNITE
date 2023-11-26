import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Play } from 'phosphor-react'
import * as zod from 'zod'

import {
  StartCountDownButton,
  CountDownContainer,
  MinutsAmountInput,
  HomerContainer,
  FormContainer,
  Separator,
  TaskInput,
} from './style'

const newCycleFormValidationSchema = zod.object({
  task: zod.string().min(1, 'Informe a tarefa'),
  minutesAmount: zod
    .number()
    .min(5, 'O ciclo deve ser de no mínimo 5 minutos')
    .max(60, 'O ciclo deve ser de no máximo 60 minutos'),
})

type NewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>

export function Home() {
  const { register, handleSubmit, watch, reset } = useForm<NewCycleFormData>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task: '',
      minutesAmount: 0,
    },
  })

  const task = watch('task')
  const isSubmitDisabled = !task

  function handleCreateNewCycle(data: NewCycleFormData) {
    console.log(data)
    reset()
  }

  return (
    <HomerContainer>
      <form action="" onSubmit={handleSubmit(handleCreateNewCycle)}>
        <FormContainer>
          <label htmlFor="task"> Vou trabalhar em</label>
          <TaskInput
            placeholder="Dê um nome para o seu projeto."
            list="task-suggestions"
            {...register('task')}
            type="text"
            id="task"
          />
          <datalist id="task-suggestions">
            <option value="Projeto 1" />
            <option value="Projeto 2" />
            <option value="Projeto 3" />
          </datalist>
          <label htmlFor="minutesAmount">Durante</label>
          <MinutsAmountInput
            {...register('minutesAmount', { valueAsNumber: true })}
            id="minutesAmount"
            placeholder="00"
            type="number"
            step={5}
            min={5}
            max={60}
          />
          <span>minutos.</span>
        </FormContainer>

        <CountDownContainer>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </CountDownContainer>

        <StartCountDownButton disabled={isSubmitDisabled} type="submit">
          <Play size={24} />
          Começar
        </StartCountDownButton>
      </form>
    </HomerContainer>
  )
}
