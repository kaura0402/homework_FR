import type {FC, JSX} from "react";
import type {ICart} from "../../models/ICart.ts";
import {IUser} from "../../models/IUser.ts";

class Props {
    cart: ICart
    user: IUser
}

export const CartComponent: FC<Props> = ({cart, user}:Props) => {
    return (
        <div>
            <div> {cart.total}  ID </div>
        </div>
    );
};