import { PricheHightLight, TransactionsContainer, TransactionsTable } from './index.ts';
import { TransactionsContext } from '../../contexts/TransactionsContext.tsx';
import { SearchForm } from './components/SearchForm/index.tsx';
import { Summary } from '../../components/Summary/index.tsx';
import { Header } from '../../components/Header/index.tsx';
import { useContext } from 'react';
import { dateFormatter, priceFormater } from '../../utils/formatter.ts';

export function Transactions() {
    const { transactions } = useContext(TransactionsContext);
    
    return (
        <div>
            <Header />
            <Summary />

            <TransactionsContainer>
                <SearchForm />
                <TransactionsTable>
                    <tbody>
                        {
                            transactions.map(transaction => {
                                return (
                                    <tr key={transaction.id}>
                                        <td width={"50%"}>{transaction.description}</td>
                                        <td>
                                            <PricheHightLight variant={transaction.type}>
                                                {transaction.type == 'outcome' && '- '}
                                                {priceFormater.format(transaction.price)}
                                            </PricheHightLight>
                                        </td>
                                        <td>{transaction.category}</td>
                                        <td>{dateFormatter.format(new Date(transaction.createdAt))}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </TransactionsTable>
            </TransactionsContainer>

        </div>
    )
}