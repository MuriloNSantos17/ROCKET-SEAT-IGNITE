import imgAmericano from '../../images/expresso-americano.svg';
import imgCremoso from '../../images/expresso-cremoso.svg';
import imgGelado from '../../images/expresso-gelado.svg'
import imgTradicional from '../../images/expresso.svg'
import imgCapuccino from '../../images/capuccino.svg'
import imgMacchiato from '../../images/macchiato.svg'
import imgMocaccino from '../../images/mocaccino.svg'
import imgChocolate from '../../images/chocolate.svg'
import imgHavaiano from '../../images/havaiano.svg'
import imgIrlandes from '../../images/irlandes.svg'
import imgCubano from '../../images/cubano.svg'
import imgLeite from '../../images/leite.svg'
import imgLatte from '../../images/latte.svg'
import imgArabe from '../../images/arabe.svg'
import { CardCart } from '../card-cart';
import { useState } from 'react';

interface CoffeCategory {
    category: string
}

type imgFrom = 'tradicional' | 'americano' | 'cremoso' | 'gelado' |
    'leite' | 'latte' | 'capuccino' | 'macchiato' | 'mocaccino'|
    'chocolate' | 'cubano' | 'havaiano' | 'arabe' | 'irlandes'

interface CardProductProps {
    type: imgFrom,
    categorias: CoffeCategory[],
    name: string,
    description: string
}

function returnSrc(type: imgFrom) {
    if (type == 'tradicional') return imgTradicional;
    if (type == 'americano') return imgAmericano;
    if (type == 'cremoso') return imgCremoso;
    if (type == 'gelado') return imgGelado;
    if (type == 'leite') return imgLeite;
    if (type == 'latte') return imgLatte;
    if (type == 'capuccino') return imgCapuccino;
    if (type == 'macchiato') return imgMacchiato;
    if (type == 'arabe') return imgArabe;
    if (type == 'chocolate') return imgChocolate;
    if (type == 'cubano') return imgCubano;
    if (type == 'havaiano') return imgHavaiano;
    if (type == 'irlandes') return imgIrlandes;
    if (type == 'mocaccino') return imgMocaccino;
}

export function CardProduct(card: CardProductProps) {
    const { categorias } = card
    const [quantity, setQuantity] = useState(0);

    return (
        <div className="bg-[#F3F2F2] flex flex-col gap-2 px-8 justify-center 
        max-w-[350px] w-[350px] divRadius 
        sm32:max-w-[315px] sm32:px-2 sm39:max-w-[350px] sm39:m-auto xl:m-0 
        xl:w-[290px] xl:gap-2">
            <img
                className='mt-[-25px] h-[150px]'
                src={returnSrc(card.type)}
            />
            <div className='flex gap-2 justify-center'>
                {
                    categorias.map((item, index) => {
                        return (
                            <div key={index} className='bg-[#F1E9C9] p-2 rounded-lg'>
                                <p className='text-sm text-center font-bold text-[#C47F17]'>{item.category}</p>
                            </div>
                        )
                    })
                }
            </div>
            <div className='flex flex-col gap-2'>
                <h2 className='text-center font-bold subtitle text-[20px]'>{card.name}</h2>
                <p className='text-[#8D8686] text-[17px] text-center'>{card.description}</p>
            </div>
            <div className='flex gap-2 items-center justify-center subtitle m-4'>
                <p>R$<span className='ml-2 font-extrabold'>9,90</span></p>
                <div className='flex justify-between items-center bg-[#E6E5E5] w-[100px] h-[40px] rounded-md'>
                    <div
                        className='p-2 text-[#8047F8] cursor-pointer text-2xl'
                        onClick={() => {
                            if (quantity > 0) setQuantity(quantity - 1)
                        }}
                    >
                        -
                    </div>
                    <div>
                        {quantity}
                    </div>
                    <div
                        className='p-2 text-[#8047F8] cursor-pointer text-2xl'
                        onClick={() => {
                            setQuantity(quantity + 1)
                        }}
                    >
                        +
                    </div>
                </div>
                <CardCart variant='P' />
            </div>
        </div>
    );
}