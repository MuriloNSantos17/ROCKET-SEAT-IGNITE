import { ShoppingCart } from "@phosphor-icons/react"

export interface CardCartProps {
    variant: 'Y' | 'P'
}

export function CardCart(card: CardCartProps) {
    return (
        <div className={`w-[38px] h-[38px] flex flex-col justify-center items-center rounded-[8px] ${card.variant == 'Y' ? "bg-[#F1E9C9]" : 'bg-[#4B2995]'}`}>
            <ShoppingCart
                weight="fill"
                color={card.variant == 'Y' ? '#C47F17' : 'white'}
                size={24}
            />
        </div>
    )
}