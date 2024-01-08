import { Title } from "@/components";
import { initialData } from "@/libs/placeholder-data";
import Image from "next/image";
import clsx from "clsx";
import { IoCardOutline } from "react-icons/io5";

//por ahora carito:
const carrito = [
    initialData.products[0],
    initialData.products[1],
    initialData.products[2],
    initialData.products[3],
];

interface Props {
    params: {
        id: string;
    }
}

export default function Page({ params }: Props) {
    const { id } = params;
    //TODO: verificacion
    //viene de la orden obtenida
    const isPaid = true;
    return (
        <div className="flex justify-center items-center mb-72">
            <div className="flex flex-col w-11/12 md:w-3/4">
                <Title title={`Orden # ${id}`}></Title>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 lg:gap-10">
                    <div className="flex flex-col mt-5">

                        <div className={
                            clsx(
                                "flex items-center rounded-lg py-2 px-3.5 text-xs font-bold text-white mb-5",
                                {
                                    "bg-red-500": !isPaid,
                                    "bg-green-500": isPaid,
                                }
                            )
                        }>
                            <IoCardOutline size={30} />
                            <span className="mx-2">{isPaid ? 'Orden pagada' : 'Pendiente de pago'}</span>
                        </div>

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
                                        <p>$ {product.price}   x 3</p>
                                        {/* talla seleccionada */}
                                        <p>{product.sizes[0]}</p>
                                        <p className="font-bold">Subtotal: {product.price * 3}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>

                    <div className="bg-white rounded-xl shadow-xl p-7 h-fit">
                        <h2 className="text-2xl mb-2">Direccion de entrega</h2>
                        <div className="grid grid-cols-2 mb-5">
                            <span className="mb-1 font-bold text-xl">Pepito perez</span>
                            <span className="mb-1 font-bold text-xl">Cra 12 34-45</span>
                            <span className="mb-1">CP 150004</span>
                            <span className="mb-1">Tunja</span>
                            <span className="mb-1">Colombia</span>
                            <span className="mb-1">3128945789</span>
                        </div>

                        <div className="w-full h-0.5 rounded bg-gray-200 mb-5" />

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
                            <span className="mt-3 text-2xl">Total</span>
                            <span className="text-right text-2xl mt-3">$ 120</span>
                        </div>
                        <div className="mt-3 mb-2 w-full">
                            <div className={
                                clsx(
                                    "flex items-center rounded-lg py-2 px-3.5 text-xs font-bold text-white mb-5",
                                    {
                                        "bg-red-500": !isPaid,
                                        "bg-green-500": isPaid,
                                    }
                                )
                            }>
                                <IoCardOutline size={30} />
                                <span className="mx-2">{isPaid ? 'Orden pagada' : 'Pendiente de pago'}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
