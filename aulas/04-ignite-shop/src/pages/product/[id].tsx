import { useRouter } from 'next/router'

export default function Teste() {
    const { query } = useRouter();

    return (
        <h1>Teste {JSON.stringify(query)}</h1>
    )
}