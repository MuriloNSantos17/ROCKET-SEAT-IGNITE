import { CardItem } from '../../components/card-item';
import { CardProduct } from '../../components/card-product';
import logoCoffee from '../../images/image-coffe-delivery.svg';

export function Home() {
    return (
        <div className='flex flex-col'>
            <div className="p-[104px] h-[544px] base-background flex justify-between">
                <div className='flex flex-col gap-[32px]'>
                    <h1 className="title font-extrabold text-[40px] text-stroke">Encontre o café perfeito<br />para qualquer hora do dia</h1>
                    <p>Com o Coffee Delivery você recebe seu café onde estiver, a<br /> qualquer hora</p>
                    <div className='flex gap-6'>
                        <CardItem variant='cart' item='Compra simples e segura' />
                        <CardItem variant='box' item='Embalagem mantém o café intacto' />
                    </div>
                    <div className='flex gap-4'>
                        <CardItem variant='timer' item='Entrega rápida e rastreada' />
                        <CardItem variant='coffee' item='O café chega fresquinho até você' />
                    </div>
                </div>
                <div className='flex justify-start items-start'>
                    <img src={logoCoffee} className='mr-auto' />
                </div>
            </div>
            <div className='base-background'>
                <h2 className='ml-[104px] text-[30px] font-bold subtitle mb-10'>Nossos cafés</h2>
                <div className='flex gap-4 justify-center px-10'>
                    <CardProduct
                        type='tradicional'
                        name='Expresso Tradicional'
                        description='O tradicional café feito com água quente e grãos moídos'
                        categorias={
                            [
                                {
                                    category: 'TRADICIONAL'
                                }
                            ]
                        }
                    />
                    <CardProduct
                        type='tradicional'
                        name='Expresso Tradicional'
                        description='O tradicional café feito com água quente e grãos moídos'
                        categorias={
                            [
                                {
                                    category: 'TRADICIONAL'
                                }
                            ]
                        }
                    />
                    <CardProduct
                        type='tradicional'
                        name='Expresso Tradicional'
                        description='O tradicional café feito com água quente e grãos moídos'
                        categorias={
                            [
                                {
                                    category: 'TRADICIONAL'
                                }
                            ]
                        }
                    />
                    <CardProduct
                        type='tradicional'
                        name='Expresso Tradicional'
                        description='O tradicional café feito com água quente e grãos moídos'
                        categorias={
                            [
                                {
                                    category: 'TRADICIONAL'
                                }
                            ]
                        }
                    />

                </div>
            </div>
        </div>


    )
}