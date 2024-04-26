import { ShoppingCart } from "@phosphor-icons/react"
import { Link, } from "react-router-dom"

export interface CardCartProps {
    variant: 'Y' | 'P'
}

export function CardCart(card: CardCartProps) {
    return (
        card.variant == 'Y' ?
            <Link to={'/cart'}>
                <div className={`w-[38px] h-[38px] flex flex-col justify-center items-center rounded-[8px] bg-[#F1E9C9]`}>
                    <ShoppingCart
                        weight="fill"
                        color={'#C47F17'}
                        size={24}
                    />
                </div >
            </Link>
            :
            <div className={`w-[38px] h-[38px] flex flex-col justify-center items-center rounded-[8px] bg-[#4B2995]`}>
                <ShoppingCart
                    weight="fill"
                    color={'white'}
                    size={24}
                />
            </div>
    )
}