import { ProductSlideShow, ProductSlideShowMobile, QuantitySelector, SizeSelector } from "@/components";
import { titleFont } from "@/configs/fonts";
import { fetchProduct } from "@/libs/data";
import { notFound } from "next/navigation";

export default async function Page({ params }: { params: { slug: string } }) {
    const { slug } = params;
    const product = await fetchProduct(slug);
    if (!product) {
        notFound();
    }
    return (
        <div className="mt-5 mb-20 grid grid-cols-1 md:grid-cols-3 gap-3">
            <div className="col-span-1 md:col-span-2">
                <ProductSlideShow images={product.images} title={product.title} className="hidden md:block" />
                <ProductSlideShowMobile images={product.images} title={product.title} className="block md:hidden" />
            </div>
            <div className="col-span-1 px-5">
                <h1 className={`${titleFont.className} antialiased font-bold text-xl`}>{product.title}</h1>
                <p className="text-lg mb-5">$ {product.price}</p>
                <SizeSelector availableSizes={product.sizes} />
                <QuantitySelector quatity={1} maxQuantity={product.inStock} />
                <button className="btn-primary my-5">Agregar al carrito</button>
                <h3 className="font-bold text-sm">Descripcion:</h3>
                <p className="font-light">{product.description}</p>
            </div>
        </div>
    )
}
