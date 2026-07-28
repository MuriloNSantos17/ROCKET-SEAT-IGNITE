# Rocketseat Ignite

Repositório de estudos e projetos desenvolvidos durante a trilha **Ignite ReactJS**, da [Rocketseat](https://www.rocketseat.com.br/).

O conteúdo está organizado em aplicações independentes que exploram, de forma progressiva, fundamentos do React, TypeScript, gerenciamento de estado, consumo de APIs, testes, Next.js, design systems e integrações com serviços externos.

## Projetos

### Aulas

| Projeto | Descrição | Principais tecnologias |
| --- | --- | --- |
| [Fundamentos do ReactJS](./aulas/01-fundamentos-reactjs) | Introdução a componentes, propriedades e conceitos essenciais do React. | React, JavaScript, Vite |
| [Fundamentos do ReactJS com TypeScript](./aulas/01-fudamentos-reactjs-ts) | Feed social com posts, comentários, componentes reutilizáveis e tipagem estática. | React, TypeScript, CSS Modules, date-fns |
| [Ignite Timer](./aulas/02-ignite-timer) | Temporizador para ciclos de foco com histórico, interrupção de ciclos e persistência local. | React, TypeScript, React Router, Styled Components, React Hook Form, Zod, Immer |
| [DT Money](./aulas/03-dt-money) | Controle financeiro para cadastrar, listar e pesquisar transações, com resumo de entradas e saídas. | React, TypeScript, Axios, Styled Components, Radix UI, JSON Server |
| [Ignite Shop](./aulas/04-ignite-shop) | Loja virtual com catálogo de produtos, página de detalhes e checkout integrado ao Stripe. | Next.js, TypeScript, Stitches, Stripe, Keen Slider |
| [Design System](./aulas/05%20-%20design-system) | Monorepo de componentes, tokens de design, configurações compartilhadas e documentação visual. | React, TypeScript, Storybook, Turborepo, tsup, Stitches |
| [Feed Project](./aulas/feed-project) | Versão em JavaScript de uma interface de feed com posts, comentários e interações. | React, JavaScript, CSS Modules, Vite |
| [Ignite Call](./aulas/ignite-call) | Plataforma de agendamentos conectada ao Google Calendar, com autenticação e disponibilidade por usuário. | Next.js, TypeScript, NextAuth, Prisma, MySQL, Google APIs, React Query |
| [Pizza Shop](./aulas/pizzashop-web) | Painel de gestão para restaurantes com dashboard, métricas, pedidos, autenticação e perfil da loja. | React, TypeScript, Tailwind CSS, shadcn/ui, React Query, Vitest, Playwright, MSW |

### Desafios

| Projeto | Descrição | Principais tecnologias |
| --- | --- | --- |
| [Coffee Delivery](./desafios/coffee-delivery) | Catálogo de cafés e fluxo de carrinho e entrega. | React, TypeScript, React Router, Tailwind CSS |
| [To-do List](./desafios/to-do-list) | Gerenciador de tarefas com criação, conclusão, remoção e acompanhamento do progresso. | React, TypeScript, CSS Modules, Vite |

## Estrutura do repositório

```text
.
├── aulas/
│   ├── 01-fundamentos-reactjs/
│   ├── 01-fudamentos-reactjs-ts/
│   ├── 02-ignite-timer/
│   ├── 03-dt-money/
│   ├── 04-ignite-shop/
│   ├── 05 - design-system/
│   ├── feed-project/
│   ├── ignite-call/
│   └── pizzashop-web/
├── desafios/
│   ├── coffee-delivery/
│   └── to-do-list/
├── LICENSE
└── README.md
```

Cada pasta possui seu próprio `package.json` e deve ser instalada e executada separadamente.

## Pré-requisitos

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/) em uma versão LTS
- npm, incluído na instalação do Node.js

Alguns projetos também dependem de serviços externos. Consulte a seção [Configurações específicas](#configurações-específicas).

## Como executar

Clone o repositório:

```bash
git clone https://github.com/MuriloNSantos17/ROCKET-SEAT-IGNITE.git
cd ROCKET-SEAT-IGNITE
```

Entre na pasta da aplicação desejada, instale as dependências e inicie o ambiente de desenvolvimento. Por exemplo:

```bash
cd aulas/02-ignite-timer
npm install
npm run dev
```

Para um desafio:

```bash
cd desafios/coffee-delivery
npm install
npm run dev
```

O terminal exibirá o endereço local da aplicação. Nos projetos Vite, ele normalmente será `http://localhost:5173`; nos projetos Next.js, `http://localhost:3000`.

### Scripts mais comuns

Os scripts disponíveis variam entre os projetos, mas os principais são:

| Comando | Ação |
| --- | --- |
| `npm run dev` | Inicia o servidor de desenvolvimento |
| `npm run build` | Gera a versão de produção |
| `npm run preview` | Visualiza localmente o build de um projeto Vite |
| `npm run start` | Inicia o build de produção de um projeto Next.js |
| `npm run lint` | Executa a análise estática, quando configurada |

## Configurações específicas

### DT Money

O projeto utiliza JSON Server como API local. Execute a interface e a API em terminais diferentes:

```bash
# Terminal 1
cd aulas/03-dt-money
npm run dev:server
```

```bash
# Terminal 2
cd aulas/03-dt-money
npm run dev
```

A API será iniciada em `http://localhost:3333`.

### Ignite Shop

Crie um arquivo `.env.local` em `aulas/04-ignite-shop`:

```env
STRIPE_SECRET_KEY=sua_chave_secreta_do_stripe
NEXT_URL=http://localhost:3000
```

O catálogo e o checkout dependem de produtos e preços previamente cadastrados em uma conta do Stripe.

### Ignite Call

O projeto requer um banco MySQL e credenciais OAuth do Google. Crie um arquivo `.env.local` em `aulas/ignite-call`:

```env
DATABASE_URL="mysql://usuario:senha@localhost:3306/ignite_call"
GOOGLE_CLIENT_ID="seu_client_id"
GOOGLE_CLIENT_SECRET="seu_client_secret"
```

Depois de instalar as dependências, prepare o banco antes de iniciar a aplicação:

```bash
npx prisma generate
npx prisma migrate dev
npm run dev
```

No Google Cloud Console, configure a URI de redirecionamento OAuth de acordo com a rota do NextAuth usada no ambiente local.

### Pizza Shop

A URL da API é validada pelas variáveis do Vite. Crie um arquivo `.env.local` em `aulas/pizzashop-web`:

```env
VITE_API_URL="http://localhost:3333"
VITE_ENABLE_API_DELAY=false
```

Os testes de componentes podem ser executados com:

```bash
npm run test
```

Os testes end-to-end estão configurados com Playwright:

```bash
npx playwright test
```

### Design System

O design system usa workspaces do npm e Turborepo. A partir de sua pasta raiz:

```bash
cd "aulas/05 - design-system"
npm install
npm run dev
```

O Storybook do pacote de documentação é disponibilizado por padrão na porta `6006`.

## Conceitos praticados

- Componentização, propriedades, estado e hooks do React
- TypeScript aplicado a aplicações front-end
- Context API, reducers, imutabilidade e persistência local
- Formulários e validação com React Hook Form e Zod
- Roteamento com React Router e Next.js
- Consumo de APIs REST com Axios e React Query
- Estilização com CSS Modules, Styled Components, Stitches e Tailwind CSS
- Testes unitários, de componentes e end-to-end
- Autenticação, banco de dados e integrações externas
- Criação e documentação de um design system

## Licença

Este projeto está sob a licença MIT. Consulte o arquivo [LICENSE](./LICENSE) para mais informações.

## Autor

Desenvolvido por [Murilo Nunes dos Santos](https://github.com/MuriloNSantos17).
