import { Play } from 'phosphor-react'
import { HomerContainer, FormContainer, CountDownContainer } from './style'
export function Home() {
  return (
    <HomerContainer>
      <form action="">
        <FormContainer>
          <label htmlFor="task"> Vou trabalhar em</label>
          <input id="task" type="text"></input>
          <label htmlFor="minutesAmount">Durante</label>
          <input type="number" id="minutesAmount" />
          <span>minutos.</span>
        </FormContainer>

        <CountDownContainer>
          <span>0</span>
          <span>0</span>
          <span>:</span>
          <span>0</span>
          <span>0</span>
        </CountDownContainer>

        <button type="submit">
          <Play size={24} />
          Começar
        </button>
      </form>
    </HomerContainer>
  )
}
