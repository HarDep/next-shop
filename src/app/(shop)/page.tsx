import { ProductsGrid, Title } from "@/components";
import { Suspense } from "react";

export default function Home() {
  return (
    <div className="px-2">
      <Title title="Tienda" subtitle="Todos los productos" className="mb-2" />
      {/* TODO: products skeleton */}
      <Suspense fallback={<div>Cargando</div>}>
        <ProductsGrid />
      </Suspense>
    </div>
  )
}
