import { initialData } from "./placeholder-data";

export async function fetchProducts() {
    /* const response = await fetch('XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX', {cache: 'no-store'});
    const data = await response.json();
    return data; 
    // o consulta sql con unstable_noStore de next/cache */

    // delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return initialData.products;
}