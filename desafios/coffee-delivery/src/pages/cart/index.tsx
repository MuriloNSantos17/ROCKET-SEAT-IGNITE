import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money } from "@phosphor-icons/react";
import { useState } from "react";

type methodPayment = 'CC' | 'CD' | 'MO';

export function Cart() {
    const [payBy, setPayBy] = useState<methodPayment>();

    return (
        <div className="px-[160px] py-[100px] flex gap-2">
            <div className="w-[640px] rounded-sm sm32:mt-16">
                <h2 className="font-bold subtitle text-[20px]">Complete seu pedido</h2>
                <div className="bg-[#F3F2F2] p-[40px] mt-4">
                    <div className="flex gap-[8px]">
                        <MapPinLine
                            color="#C47F17"
                            size={22}
                        />
                        <div>
                            <p className="subtitle">Endereço de Entrega</p>
                            <p className="text-[#574F4D]">Informe o Endereço onde deseja receber seu pedido</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-3 gap-2 mt-[20px]">
                        <input
                            className="bg-[#EDEDED] outline-none rounded-[4px] col-span-1 w-[200px] h-[42px] text-[#574F4D] focus:outline-[#C47F17] px-2"
                            placeholder="CEP"
                            maxLength={9}
                            type="text"
                        />
                        <input
                            className="bg-[#EDEDED] outline-none rounded-[4px] h-[42px] text-[#574F4D] focus:outline-[#C47F17] col-span-3 px-2"
                            placeholder="Rua"
                            type="text"
                        />
                        <input
                            className="bg-[#EDEDED] outline-none rounded-[4px] h-[42px]
                             col-span-1
                             text-[#574F4D] focus:outline-[#C47F17] px-2"
                            placeholder="Número"
                            type="text"
                        />
                        <input
                            className="bg-[#EDEDED] outline-none rounded-[4px] h-[42px]
                             col-span-2
                             text-[#574F4D] focus:outline-[#C47F17] px-2"
                            placeholder="Complemento"
                            type="text"
                        />
                        <input
                            className="bg-[#EDEDED] outline-none rounded-[4px] h-[42px]
                             col-span-1
                             text-[#574F4D] focus:outline-[#C47F17] px-2"
                            placeholder="Bairro"
                            type="text"
                        />
                        <input
                            className="bg-[#EDEDED] outline-none rounded-[4px] h-[42px]
                             col-span-1
                             text-[#574F4D] focus:outline-[#C47F17] px-2"
                            placeholder="Cidade"
                            type="text"
                        />
                        <input
                            className="bg-[#EDEDED] outline-none rounded-[4px] h-[42px]
                             col-span-1
                             text-[#574F4D] focus:outline-[#C47F17] px-2"
                            placeholder="UF"
                            type="text"
                        />
                    </div>
                    <div className="flex gap-[8px] sm32:mt-16">
                        <CurrencyDollar
                            color="#8047F8"
                            size={22}
                        />
                        <div>
                            <p className="subtitle">Pagamento</p>
                            <p className="text-[#574F4D]">O pagamento é feito na entrega. Escolha a forma que deseja pagar </p>
                        </div>
                    </div>
                    <div className="flex gap-2 mt-10 p-2">
                        <div className={`cursor-pointer h-[51px] rounded-[6px] gap-2 p-[12px] flex bg-[#E6E5E5] justify-center items-center border-solid border-[1px] ${payBy == 'CC' ? 'border-[#8047F8]' : ''}`} onClick={() => {
                            setPayBy('CC')
                        }}>
                            <CreditCard
                                size={16}
                                color="#8047F8"
                            />
                            <p className="text-[#574F4D]">CARTÃO DE CRÉDITO</p>
                        </div>
                        <div className={`cursor-pointer h-[51px] rounded-[6px] gap-2 p-[12px] flex bg-[#E6E5E5] justify-center items-center border-solid border-[1px] ${payBy == 'CD' ? 'border-[#8047F8]' : ''}`} onClick={()=>{setPayBy('CD')}}>
                            <Bank 
                                size={16}
                                color="#8047F8"
                            />
                            <p className="text-[#574F4D]">CARTÃO DE DÉBITO</p>
                        </div>
                        <div className={`cursor-pointer h-[51px] rounded-[6px] gap-2 p-[12px] flex bg-[#E6E5E5] justify-center items-center border-solid border-[1px] ${payBy == 'MO' ? 'border-[#8047F8]' : ''}`} onClick={()=>{setPayBy('MO')}}>
                            <Money
                                size={16}
                                color="#8047F8"
                            />
                            <p className="text-[#574F4D]">DINHEIRO</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-[640px] rounded-sm sm32:mt-16 ">
                <h2 className="font-bold subtitle text-[20px]">Cafés selecionados</h2>
                <div className="bg-[#F1E9C9]">

                </div>
            </div>
        </div>
    )
}