import { ClaimUserNameForm } from './components/ClaimUsernameForm/'
import previewImage from '../../assets/app-preview.png'
import { Container, Hero, Preview } from './styles'
import { Heading, Text } from '@ignite-ui/react'
import Image from 'next/image'
import { NextSeo } from 'next-seo'

export default function Home() {
  return (
    <>
      <NextSeo
        title='Descomplique sua agenda | Ignite call'
        description='Conecte seu calendário e permita que as pessoas marquem agendamento no
            seu tempo livre'
      />
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
    </>
  )
}
