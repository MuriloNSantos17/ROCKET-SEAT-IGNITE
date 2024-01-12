import { HomeContainer, StartCountDownButton, StopCountdownButton } from "./style";
import { CyclesContext } from "../../contexts/CyclesContext";
import { NewCycleForm } from "./components/NewCycleForm";
import { FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod'
import { Countdown } from "./components/CountDown";
import { HandPalm, Play } from "phosphor-react";
import * as zod from 'zod'
import { useContext } from "react";

const newCycleFormValidationSchema = zod.object({
  task: zod.string().min(1, 'Informe a tarefa'),
  minutesAmount: zod.number()
    .min(5, 'O ciclo precisa ser de no mínimo 5 minutos')
    .max(60, 'O ciclo precisa ser de no máximo 60 minutos')
})

export function Home() {
  const {createNewCycle, interruptCurrentCycle, activeCycle} = useContext(CyclesContext)

  type NewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>;

  const newCycleForm = useForm<NewCycleFormData>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task: '',
      minutesAmount: 0,
    }
  });

  const { handleSubmit, watch, reset } = newCycleForm;


  const task = watch('task');

  function handleCreateNewCycle(data: NewCycleFormData){
    createNewCycle(data);
    reset();
  }

  const isSubmitDisabled = !task;

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCycle)} action="">
        <FormProvider {...newCycleForm}>
          <NewCycleForm />
        </FormProvider>
        <Countdown />
        {
          activeCycle ? (
            <StopCountdownButton type="button" onClick={interruptCurrentCycle}>
              <HandPalm size={24} />
              Interromper
            </StopCountdownButton>)
            :
            (
              <StartCountDownButton type="submit" disabled={isSubmitDisabled} >
                <Play size={24} />
                Começar
              </StartCountDownButton>
            )
        }
      </form>
    </HomeContainer >
  )
}
