import imgTradicional from '../../images/expresso.svg'

interface CoffeCategory {
    category: string
}

interface CardProductProps {
    type: 'tradicional' | 'americano',
    categorias: CoffeCategory[],
    name: string,
    description: string
}

export function CardProduct(card: CardProductProps) {

    const { categorias } = card

    return (
        <div className="bg-[#F3F2F2] flex flex-col gap-2 px-16 justify-center">
            <img
                className='mt-[-20px] h-[150px]'
                src={
                    card.type == 'tradicional' ?
                        imgTradicional :
                        ''
                }
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
            <div>
                <h2 className='text-center font-bold subtitle'>{card.name}</h2>
                <p>{card.description}</p>
            </div>
        </div>
    );
}