import { Link } from 'react-router-dom'
import logo from '../../images/logo-coffee-shop.svg'
import { CardCart } from '../card-cart'
import { CardLocalizacao } from '../card-localizacao'

export function Header() {
    return (
        <header className={
            'h-[104px] w-full px-[160px] py-[32px] fixed flex justify-between base-background  sm32:px-2 sm32:gap-2 sm60:px-[160px] sm32:py-[32px]'}>
            <Link to={'/'}>
                <img src={logo} />
            </Link>
            <div className='flex gap-2'>
                <CardLocalizacao />
                <CardCart variant='Y' />
            </div>
        </header>
    )
}

//4B2995