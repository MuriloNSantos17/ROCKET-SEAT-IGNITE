import { PricheHightLight, TransactionsContainer, TransactionsTable } from './index.ts';
import { TransactionsContext } from '../../contexts/TransactionsContext.tsx';
import { dateFormatter, priceFormater } from '../../utils/formatter.ts';
import { SearchForm } from './components/SearchForm/index.tsx';
import { Summary } from '../../components/Summary/index.tsx';
import { Header } from '../../components/Header/index.tsx';
import { useContextSelector } from 'use-context-selector';

export function Transactions() {
    const transactions = useContextSelector(TransactionsContext, (context) => {
        return context.transactions;
    });

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