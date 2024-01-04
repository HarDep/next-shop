'use client'
import { useState } from "react"
import { IoAddOutline, IoRemoveOutline } from "react-icons/io5"

export const QuantitySelector = ({ quatity, maxQuantity }: { quatity: number, maxQuantity: number }) => {
    const [amount, setAmount] = useState(quatity);

    const onAmountChange = (value: number) => {
        if (value < 1) return;
        const input = document.querySelector('.quantity-in') as HTMLInputElement;
        input.value = `${value}`;
        setAmount(value);
    }
    const changeAmount = (elm: HTMLInputElement) => {
        elm.value = elm.value.replace(/[^0-9]/g, "");
        const num: number = elm.valueAsNumber;
        if (isNaN(num)) return;
        onAmountChange(num);
    }
    const exitValue = (elm: HTMLInputElement) => {
        const num: number = parseInt(elm.value);
        if (isNaN(num)) {
            onAmountChange(1);
            elm.value = '1';
            return;
        }
        if (num > maxQuantity) {
            onAmountChange(maxQuantity);
            elm.value = `${maxQuantity}`;
        }
    }
    return (
        <>
            <h3 className="font-bold mb-4">Cantidad:</h3>
            <div className="flex">
                <button disabled={amount == 1} className={amount == 1 ? 'hover:cursor-not-allowed' : ''}
                    onClick={() => onAmountChange(amount - 1)}>
                    <IoRemoveOutline size={15} />
                </button>
                <input type="number" className={`quantity-in w-20 mx-3 px-5 bg-gray-300 text-center rounded border ${amount > maxQuantity ?
                    'border-red-500 focus:outline-none' : 'border-gray-500'}`} onInput={(value) => changeAmount(value.currentTarget)}
                    defaultValue={amount} onMouseLeave={(prop) => exitValue(prop.currentTarget)}
                    onBlur={(prop) => exitValue(prop.target)}></input>
                <button disabled={amount == maxQuantity} className={amount == maxQuantity ? 'hover:cursor-not-allowed' : ''}
                    onClick={() => onAmountChange(amount + 1)}>
                    <IoAddOutline size={15} />
                </button>

            </div>
            <h3 className={amount > maxQuantity ? 'font-bold text-red-500' : 'hidden'}
            >Cantidad maxima permitida: {maxQuantity}</h3>
        </>
    )
}
