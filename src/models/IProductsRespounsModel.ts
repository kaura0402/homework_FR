import type {IProducts} from "./IProduct.ts";

export type IProductsRespounsModel = {
    products: IProducts[];
	total: number;
	limit: number;
	skip: number;
}

