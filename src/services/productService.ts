import type { IProduct } from "@/models/IProduct";
import { get } from "./serviceBase";

const baseURL = "http://fakestoreapi.com/products";

export const getProducts = async (): Promise<IProduct[]> =>{
    return await get<IProduct[]>(baseURL);
}