import type {ICart} from "./ICart.ts";

export interface ICartResponsModel  {
	carts: ICart[];
	total: number;
	skip: number;
	limit: number;
}
