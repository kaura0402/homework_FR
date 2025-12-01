import type {FC, JSX} from "react";
import type {ICart} from "../../models/ICart.ts";

class Props {
    cart: ICart
}

export const CartComponent: FC<Props> = ({cart}:Props) => {
    return (
        <div>
            (<div> {cart.total}  </div>)
        </div>
    );
};