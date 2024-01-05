import { QuantitySelectorList, Title } from "@/components";
import { initialData } from "@/libs/placeholder-data";
import Link from "next/link";
import Image from "next/image";
import { redirect } from "next/navigation";
import { Product } from "@/libs/definitions";

//por ahora carito:
const carrito: Product[] = [
    initialData.products[0],
    initialData.products[1],
    initialData.products[2],
];

export default function Page() {
    if (carrito.length == 0) {
        redirect('/empty');
    }
    return (
        <div className="flex justify-center items-center mb-72">
            <div className="flex flex-col w-11/12 md:w-3/4">
                <Title title="Carrito"></Title>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 lg:gap-10">
                    <div className="flex flex-col mt-5">
                        <span className="text-xl">Agregar mas items</span>
                        <Link href={'/'} className="underline mb-5">Continua Comprando</Link>

                        {
                            carrito.map((product) => (
                                <div key={product.slug} className="flex mb-5">
                                    <Image src={`/products/${product.images[0]}`} alt={product.slug} width={100}
                                        height={100} style={{
                                            width: '100px',
                                            height: '100px',
                                        }}
                                        className="mr-5 rounded" />
                                    <div>
                                        <p>{product.title}</p>
                                        <p>$ {product.price}</p>
                                        {/* talla seleccionada */}
                                        <p>{product.sizes[0]}</p>
                                        <QuantitySelectorList quatitySelected={2} maxQuantity={product.inStock} />
                                        <button className="ml-7 underline mt-3">Remover</button>
                                    </div>
                                </div>
                            ))
                        }
                    </div>

                    <div className="bg-white rounded-xl shadow-xl p-7">
                        <h2 className="text-2xl mb-2">Resumen de orden</h2>
                        <div className="grid grid-cols-2">
                            <span className="mb-1">No. Productos</span>
                            <span className="text-right mb-1">3 articulos</span>
                            <span className="mb-1">Subtotal</span>
                            <span className="text-right mb-1">$ 100</span>
                            <span className="mb-1">Envio</span>
                            <span className="text-right mb-1">Gratis</span>
                            <span>Impuesto</span>
                            <span className="text-right">$ 20</span>
                            <span className="mt-4 text-2xl">Total</span>
                            <span className="text-right text-2xl mt-4">$ 120</span>
                        </div>
                        <div className="mt-4 mb-2 w-full">
                            <Link className="flex btn-primary justify-center" href={"/checkout/address"}>Checkout</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
