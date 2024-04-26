import { CardItem } from '../../components/card-item';
import { CardProduct } from '../../components/card-product';
import logoCoffee from '../../images/image-coffe-delivery.svg';

export function Home() {
    return (
        <div className='flex flex-col'>
            <div className="p-[104px] h-[544px] base-background flex justify-between sm32:h-[auto] sm32:p-[2px] sm32:mt-28 sm32:flex-col-reverse sm60:flex-row sm60:mt-28 xl:mt-4 xl:p-[104px]">
                <div className='flex flex-col gap-[32px] sm32:p-2 sm32:gap-4'>
                    <h1 className="title font-extrabold text-[50px] text-stroke">Encontre o café perfeito<br />para qualquer hora do dia</h1>
                    <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora!</p>
                    <div className='flex gap-6 sm32:flex-col sm32:gap-2 xl:flex-row xl:gap-6'>
                        <CardItem variant='cart' item='Compra simples e segura' />
                        <CardItem variant='box' item='Embalagem mantém o café intacto' />
                    </div>
                    <div className='flex gap-4 sm32:flex-col sm32:gap-2 xl:flex-row xl:gap-4'>
                        <CardItem variant='timer' item='Entrega rápida e rastreada' />
                        <CardItem variant='coffee' item='O café chega fresquinho até você' />
                    </div>
                </div>
                <div className='flex justify-start items-start'>
                    <img src={logoCoffee} className='mr-auto' />
                </div>
            </div>
            <div className='base-background flex flex-col gap-10'>
                <h2 className='ml-[104px] text-[30px] font-bold subtitle mb-10 sm32:mb-2 sm32:text-center sm32:ml-0 xl:text-left xl:ml-[104px]'>Nossos cafés</h2>
                <div className='flex gap-4 justify-start px-10 sm32:flex-col sm32:px-2 sm32:gap-8 sm60:flex-row sm60:flex-wrap sm60:justify-center'>
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
                        type='americano'
                        name='Expresso Americano'
                        description='Expresso diluíduo, menos intenso que o tradicional'
                        categorias={
                            [
                                {
                                    category: 'TRADICIONAL'
                                }
                            ]
                        }
                    />
                    <CardProduct
                        type='cremoso'
                        name='Expresso Cremoso'
                        description='Café expresso tradicional com espuma cremosa'
                        categorias={
                            [
                                {
                                    category: 'TRADICIONAL'
                                }
                            ]
                        }
                    />
                    <CardProduct
                        type='gelado'
                        name='Expresso Gelado'
                        description='Bebida preparada com café expresso e cubos de gelo'
                        categorias={
                            [
                                {
                                    category: 'TRADICIONAL'
                                },
                                {
                                    category: 'GELADO'
                                }
                            ]
                        }
                    />

                </div>
                <div className='flex gap-4 justify-start px-10 sm32:flex-col sm32:px-2 sm32:gap-8 sm60:flex-row sm60:flex-wrap sm60:justify-center'>
                    <CardProduct
                        type='leite'
                        name='Café com Leite'
                        description='Meio a meio de expresso tradicional com leite vaporizado'
                        categorias={
                            [
                                {
                                    category: 'TRADICIONAL'
                                },
                                {
                                    category: 'COM LEITE'
                                }
                            ]
                        }
                    />
                    <CardProduct
                        type='latte'
                        name='Latte'
                        description='Uma dose de café expresso com o dobro de leite e espuma cremosa'
                        categorias={
                            [
                                {
                                    category: 'TRADICIONAL'
                                },
                                {
                                    category: 'COM LEITE'
                                }
                            ]
                        }
                    />
                    <CardProduct
                        type='capuccino'
                        name='Capuccino'
                        description='Bebida com cancela feita de doses iguais de café, leite e espuma'
                        categorias={
                            [
                                {
                                    category: 'TRADICIONAL'
                                },
                                {
                                    category: 'COM LEITE'
                                }
                            ]
                        }
                    />
                    <CardProduct
                        type='macchiato'
                        name='Macchiato'
                        description='Café expresso misturado com um pouco de leite quente e espuma'
                        categorias={
                            [
                                {
                                    category: 'TRADICIONAL'
                                },
                                {
                                    category: 'COM LEITE'
                                }
                            ]
                        }
                    />

                </div>
                <div className='flex gap-4 justify-start px-10 sm32:flex-col sm32:px-2 sm32:gap-8 sm60:flex-row sm60:flex-wrap sm60:justify-center'>
                    <CardProduct
                        type='mocaccino'
                        name='Mocaccino'
                        description='Café expresso com calda de chocolate, pouco leite e espuma'
                        categorias={
                            [
                                {
                                    category: 'TRADICIONAL'
                                },
                                {
                                    category: 'COM LEITE'
                                }
                            ]
                        }
                    />
                    <CardProduct
                        type='chocolate'
                        name='Chocolate Quente'
                        description='Bebida feita com chocolate dissolvido no leite quente e café'
                        categorias={
                            [
                                {
                                    category: 'ESPECIAL'
                                },
                                {
                                    category: 'COM LEITE'
                                }
                            ]
                        }
                    />
                    <CardProduct
                        type='cubano'
                        name='Cubano'
                        description='Drink gelado de café expresso com rum, creme de leite e hortelã'
                        categorias={
                            [
                                {
                                    category: 'ESPECIAL'
                                },
                                {
                                    category: 'ALCOÓLICO'
                                },
                                {
                                    category: 'GELADO'
                                }
                            ]
                        }
                    />
                    <CardProduct
                        type='havaiano'
                        name='Havaiano'
                        description='Bebida adocicada preparada com café e leite de coco'
                        categorias={
                            [
                                {
                                    category: 'ESPECIAL'
                                },
                            ]
                        }
                    />

                </div>
                <div className='flex gap-4 justify-start px-10 mb-10 sm32:flex-col sm32:px-2 sm32:gap-8 sm60:flex-row sm60:flex-wrap sm60:justify-center'>
                    <CardProduct
                        type='arabe'
                        name='Árabe'
                        description='Bebida preparada com grãos de café árabe e especiarias'
                        categorias={
                            [
                                {
                                    category: 'ESPECIAL'
                                },
                            ]
                        }
                    />
                    <CardProduct
                        type='irlandes'
                        name='Irlandês'
                        description='Bebida a base de café, uísque irlandês, açúcar e chantily'
                        categorias={
                            [
                                {
                                    category: 'ESPECIAL'
                                },
                                {
                                    category: 'ALCOÓLICO'
                                }
                            ]
                        }
                    />
                </div>
            </div>
        </div>
    )
}