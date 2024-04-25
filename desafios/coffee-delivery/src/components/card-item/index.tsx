import { Coffee, Package, ShoppingCart, Timer } from "@phosphor-icons/react"

export interface CardItemProps {
    item: string,
    variant: 'cart' | 'box' | 'timer' | 'coffee'
}

export function CardItem(card: CardItemProps) {
    return (
        <div className="flex gap-2 items-center">
            <div className={`h-[32px] w-[32px] flex flex-col items-center justify-center rounded-full ${card.variant == 'cart' ?
                'bg-[#C47F17]' :
                card.variant == 'timer' ?
                    'bg-[#DBAC2C]' :
                    card.variant == 'box' ?
                        'bg-[#574F4D]' :
                        'bg-[#8047F8]'
                }`}>
                {
                    card.variant == 'cart' ?
                        <ShoppingCart
                            size={20}
                            weight="fill"
                            color="white"
                        /> :
                        card.variant == 'timer' ?
                            <Timer
                                size={20}
                                weight="fill"
                                color="white"
                            /> :
                            card.variant == 'box' ?
                                <Package
                                    size={20}
                                    weight="fill"
                                    color="white"
                                />
                                : <Coffee
                                    size={20}
                                    weight="fill"
                                    color="white"
                                />


                }
            </div>
            <div className="text-[#574F4D]">
                {card.item}
            </div>
        </div>
    )
}