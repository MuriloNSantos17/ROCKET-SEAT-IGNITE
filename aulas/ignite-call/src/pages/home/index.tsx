import { ClaimUserNameForm } from './components/ClaimUsernameForm/'
import previewImage from '../../assets/app-preview.png'
import { Container, Hero, Preview } from './styles'
import { Heading, Text } from '@ignite-ui/react'
import Image from 'next/image'

export default function Home() {
  return (
    <Container>
      <Hero>
        <Heading size="4xl">Agendamento descomplicado</Heading>
        <Text size="xl">
          Conecte seu calendário e permita que as pessoas marquem agendamento no
          seu tempo livre
        </Text>
        <ClaimUserNameForm />
      </Hero>
      <Preview>
        <Image
          alt="Calendário simbolizando aplicação em funcionamento"
          src={previewImage}
          quality={100}
          height={400}
          priority
        />
      </Preview>
    </Container>
  )
}
