'use client'
import { Product } from '@/libs/definitions'
import Image from "next/image"
import { useState } from 'react'

export const ProductGridItemImage = ({ product }: { product: Product }) => {
    const [displayImage, setDisplayImage] = useState(0);
    return (
        <Image src={`/products/${product.images[displayImage]}`} alt={product.title}
            className="w-full object-cover rounded" width={500} height={500}
            onMouseEnter={() => setDisplayImage(1)}
            onMouseLeave={() => setDisplayImage(0)} />
    )
}
