import { Play } from 'phosphor-react'
import {
  StartCountDownButton,
  CountDownContainer,
  MinutsAmountInput,
  HomerContainer,
  FormContainer,
  Separator,
  TaskInput,
} from './style'

export function Home() {
  return (
    <HomerContainer>
      <form action="">
        <FormContainer>
          <label htmlFor="task"> Vou trabalhar em</label>
          <TaskInput
            id="task"
            type="text"
            placeholder="Dê um nome para o seu projeto."
            list="task-suggestions"
          />
          <datalist id="task-suggestions">
            <option value="Projeto 1" />
            <option value="Projeto 2" />
            <option value="Projeto 3" />
          </datalist>
          <label htmlFor="minutesAmount">Durante</label>
          <MinutsAmountInput
            type="number"
            id="minutesAmount"
            placeholder="00"
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

        <StartCountDownButton disabled type="submit">
          <Play size={24} />
          Começar
        </StartCountDownButton>
      </form>
    </HomerContainer>
  )
}
