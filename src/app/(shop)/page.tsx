import { ProductsGrid, Title } from "@/components";

export default function Home() {
  return (
    <>
      <Title title="Tienda" subtitle="Todos los productos" className="mb-2" />
      {/* TODO: suspense */}
      <ProductsGrid />
    </>
  )
}
