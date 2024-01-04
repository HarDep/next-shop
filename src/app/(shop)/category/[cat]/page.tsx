//import { ValidGenders } from "@/libs/definitions";
import { notFound } from "next/navigation";

import { ProductsGrid, Title } from "@/components"
import { Gender } from "@/libs/definitions";
import { Suspense } from "react";

export default function Page({ params }: { params: { cat: Gender } }) {
    const labels: Record<Gender, string> = {
        'men': 'Hombres',
        'women': 'Mujeres',
        'kid': 'Niños',
        'unisex': 'Todos',
    }
    const { cat } = params;
    if (!labels[cat]) {
        notFound();
    }
    return (
        <div className="px-2">
            <Title title={`Articulos para ${labels[cat]}`} subtitle={`Productos para ${labels[cat]}`} className="mb-2" />
            {/* TODO: products skeleton */}
            <Suspense fallback={<div>Cargando</div>}>
                <ProductsGrid category={cat} />
            </Suspense>
        </div>
    )
}