import { imgFrom } from "../components/card-product";
import { createContext, useState } from "react";
import { Header } from "../components/header";
import { Outlet } from "react-router-dom";

export interface ProductOnCart {
    name: string,
    quantity: number,
    type: imgFrom
}

export interface ProductContextInterface {
    produtos: ProductOnCart[],
    setProdutos: (data: ProductOnCart[]) => void
}

export const ProductContext = createContext<ProductContextInterface>({ produtos: [], setProdutos: () => { } });

export function DefaultLayout() {
    const [produtos, setProdutos] = useState<ProductOnCart[]>([]);

    return (
        <ProductContext.Provider value={{ produtos, setProdutos }}>
            <Header/>
            <Outlet />
        </ProductContext.Provider>
    )
}