'use client'

import { useState } from "react";

type Props = {
    quatitySelected: number;
    maxQuantity: number;
}

export const QuantitySelectorList = ({ quatitySelected, maxQuantity }: Props) => {
    const options = Array.from({ length: maxQuantity }, (_, index) => index + 1);
    const [quantity, setQuantity] = useState(quatitySelected);
    return (
        <>
            <span className="mr-5">Cantidad:</span>
            <select className="border-transparent bg-transparent"
                value={quantity}
                onChange={(e) => setQuantity(Number.parseInt(e.target.value))}
            >
                {
                    options.map((option) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))
                }
            </select>
        </>
    )
}