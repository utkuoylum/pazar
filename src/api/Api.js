import axios from 'axios';

export default async function productsData() {
    const products = await axios.get("https://fakestoreapiserver.reactbd.com/products")
    return products;
}