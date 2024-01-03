//import { ValidGenders } from "@/libs/definitions";
import { notFound } from "next/navigation";

export default function Page({ params }: { params: { cat: string } }) {
    const { cat } = params;
    if (cat === 'kids') {
        notFound();
    }
    return (
        <div>
            <h1>Category con {cat}</h1>
        </div>
    )
}