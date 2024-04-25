import logo from '../../images/logo-coffee-shop.svg'
import { CardCart } from '../card-cart'
import { CardLocalizacao } from '../card-localizacao'

export function Header() {
    return (
        <header className={'h-[104px] w-full px-[160px] py-[32px] base-background fixed flex justify-between'}>
            <img src={logo} />
            <div className='flex gap-2'>
                <CardLocalizacao />
                <CardCart variant='Y' />
            </div>
        </header>
    )
}

//4B2995