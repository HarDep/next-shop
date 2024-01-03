import { PageNotFound } from "@/components";

export default function NotFound() {
    return (
        <PageNotFound
            message="no se pudo encontrar ese producto"
            optionText="ver nuestros"
            linkText="Productos"
            link="/" />
    )
}
