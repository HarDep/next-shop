import { PageNotFound } from "@/components";

export default function NotFound() {
    return (
        <PageNotFound
            message="no se pudo encontrar productos de esa categoria"
            optionText="ver las categorias disponibles junto con todos nuestros"
            linkText="Productos" link="/" />
    )
}
