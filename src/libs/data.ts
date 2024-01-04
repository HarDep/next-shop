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

export async function fetchProductsByCategory(category: string) {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const products = initialData.products.filter(product => product.gender === category);
    return products;
}

export async function fetchProduct(slug: string) {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const product = initialData.products.find(product => product.slug === slug);
    return product;
}