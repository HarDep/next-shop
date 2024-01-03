import { ProductsGrid, Title } from "@/components";
import { Suspense } from "react";

export default function Home() {
  return (
    <>
      <Title title="Tienda" subtitle="Todos los productos" className="mb-2" />
      {/* TODO: products skeleton */}
      <Suspense fallback={<div>Cargando</div>}>
        <ProductsGrid />
      </Suspense>
    </>
  )
}
