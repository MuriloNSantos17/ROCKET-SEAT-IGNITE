import { ShoppingCart } from "@phosphor-icons/react"
import { ProductContext } from "../../layout"
import { imgFrom } from "../card-product"
import { Link, } from "react-router-dom"
import { useContext } from "react"
export interface CardCartProps {
    variant: 'Y' | 'P',
    quantity: number,
    name?: string,
    type?: imgFrom,
}


export function CardCart(card: CardCartProps) {
    const data = useContext(ProductContext);

    const { setProdutos, produtos } = data;

    const handleAddProduto = () => {
        const index = produtos.findIndex(obj => obj.type == card.type);
        const newProdutos = produtos;
        const newProduct = {
            name: card.name ? card.name : '',
            quantity: card.quantity ? card.quantity : 0,
            type: card.type ? card.type : 'americano',
        }

        if (index != -1) {
            newProdutos[index] = newProduct;
        } else {
            newProdutos.push(newProduct);
        }

        setProdutos(newProdutos)

        console.log(newProdutos)
    }

    return (
        card.variant == 'Y' ?
            <Link to={'/cart'}>
                <div className={`w-[38px] h-[38px] flex justify-center flex-col items-center rounded-[8px] bg-[#F1E9C9]`}>
                    <div className="bg-[#C47F17] h-[30px] w-[30px] mt-[-14px] z-40 rounded-[100%] text-center font-bold flex justify-center items-center ml-[30px] text-white">
                        {card.quantity ? card.quantity : 0}
                    </div>
                    <ShoppingCart
                        weight="fill"
                        color={'#C47F17'}
                        size={24}
                    />

                </div >
            </Link>
            :
            <div className={`w-[38px] h-[38px] flex flex-col justify-center items-center rounded-[8px] bg-[#4B2995] cursor-pointer`} onClick={handleAddProduto}>
                <ShoppingCart
                    weight="fill"
                    color={'white'}
                    size={24}
                />
            </div>
    )
}