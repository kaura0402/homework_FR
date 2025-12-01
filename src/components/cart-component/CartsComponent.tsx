import {useParams} from "react-router";
import {useEffect, useState} from "react";
import type {ICart} from "../../models/ICart.ts";
import type {ICartResponsModel} from "../../models/ICartResponsModel.ts";
import {CartComponent} from "./CartComponent.tsx";
import {cartService} from "../../services/api.service.ts";

export const CartsComponent = () => {

    const {id} = useParams();

    const [carts, setCarts] = useState<ICart[]>([]);

    useEffect(() => {
        cartService.getCartOfUsers(id)
            .then(({carts}: ICartResponsModel) => {
                setCarts(carts);
            })
    }, [id]);
    return (
        <div>
            {
                carts.map((cart: ICart) => <CartComponent cart={cart}/>)
            }
        </div>
    );
};