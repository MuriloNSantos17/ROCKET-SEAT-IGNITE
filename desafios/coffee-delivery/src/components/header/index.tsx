import { CardLocalizacao } from '../card-localizacao'
import logo from '../../images/logo-coffee-shop.svg'
import { Link } from 'react-router-dom'
import { CardCart } from '../card-cart'

export function Header() {

    return (
        <header className={
            'h-[104px] w-full px-[160px] py-[32px] fixed flex justify-between base-background  sm32:px-2 sm32:gap-2 sm60:px-2 sm32:py-[32px] xl:px-[160px]'}>
            <Link to={'/'}>
                <img src={logo} />
            </Link>
            <div className='flex gap-2'>
                <CardLocalizacao />
                <CardCart variant='Y' quantity={0} />
            </div>
        </header>
    )
}

//4B2995