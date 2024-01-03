import { Product } from "@/libs/definitions"
import Link from "next/link"
import { ProductGridItemImage } from "./ProductGridItemImage"

export const ProductGridItem = ({ product }: { product: Product }) => {
    return (
        <div className="rounded-md overflow-hidden fade-in">
            <Link href={`/product/${product.slug}`}>
                <ProductGridItemImage product={product} />
            </Link>
            <div className="p-4 flex flex-col">
                <Link href={`/product/${product.slug}`} className="hover:text-blue-500">{product.title}</Link>
                <span className="font-bold">$ {product.price}</span>
            </div>
        </div>
    )
}
