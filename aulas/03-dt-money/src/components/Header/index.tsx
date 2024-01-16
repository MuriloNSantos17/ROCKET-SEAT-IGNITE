import { HeaderContainer, HeaderContent, NewTransactionButton } from "../Header/index";
import { NewTransactionModal } from '../NewTransactionModal/index.tsx'
import logoImage from '../../assets/logo.svg';
import * as Dialog from '@radix-ui/react-dialog';

export function Header() {
    return (
        <HeaderContainer>
            <HeaderContent>
                <img src={logoImage} alt="" />

                <Dialog.Root>
                    <Dialog.DialogTrigger asChild>
                        <NewTransactionButton>Nova Transação</NewTransactionButton>
                    </Dialog.DialogTrigger>

                    <NewTransactionModal />
                </Dialog.Root>
        
            </HeaderContent>
        </HeaderContainer>
    )
}