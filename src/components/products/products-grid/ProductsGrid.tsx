import { fetchProducts } from "@/libs/data";
import { ProductGridItem } from "./ProductGridItem";

export const ProductsGrid = async () => {
    const products = await fetchProducts();
    return (
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-10 mb-10">
            {
                products.map(product => (
                    <ProductGridItem key={product.slug} product={product} />
                ))
            }
        </div>
    )
}
