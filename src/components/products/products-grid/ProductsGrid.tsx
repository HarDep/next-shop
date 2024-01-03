import { fetchProducts, fetchProductsByCategory } from "@/libs/data";
import { ProductGridItem } from "./ProductGridItem";
import { Product } from "@/libs/definitions";

export const ProductsGrid = async ({ category }: { category?: string }) => {
    let products: Product[] = [];
    if (category) {
        products = await fetchProductsByCategory(category);
    } else {
        products = await fetchProducts();
    }
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
