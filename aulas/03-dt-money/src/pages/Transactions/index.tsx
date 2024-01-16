import { Header } from '../../components/Header/index.tsx';
import { Summary } from '../../components/Summary/index.tsx';
import { SearchForm } from './components/SearchForm/index.tsx';
import { PricheHightLight, TransactionsContainer, TransactionsTable } from './index.ts';

export function Transactions() {
    return (
        <div>
            <Header />
            <Summary />

            <TransactionsContainer>
                <SearchForm />
                <TransactionsTable>
                    <tbody>
                        <tr>
                            <td width={"50%"}>Desenvolvimento de Site</td>
                            <td>
                                <PricheHightLight variant='income'>R$ 12.000,00</PricheHightLight></td>
                            <td>Venda</td>
                            <td>13/04/2022</td>
                        </tr>
                        <tr>
                            <td width={"50%"}>Desenvolvimento de Site</td>
                            <td><PricheHightLight variant='outcome'>R$ - 59,00</PricheHightLight></td>
                            <td>Venda</td>
                            <td>13/04/2022</td>
                        </tr>

                    </tbody>
                </TransactionsTable>
            </TransactionsContainer>

        </div>
    )
}