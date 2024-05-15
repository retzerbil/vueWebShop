import { IProduct } from "./IProduct";
import { ICartItem } from "./ICartItem";

export interface IWebShopState {
    products: IProduct[];
    cart: ICartItem[];
    showCheckout: boolean;
}