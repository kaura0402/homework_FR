import type { FC } from "react";
import type { ICarModel } from "../../models/ICarModel";

type CarProps = {
    item: ICarModel;
    key?: number// Assuming ICarModel is defined elsewhere
}

export const CarComponent:FC<CarProps> = ({ item }) => {

    return (
        <div>
            <h3>{item.brand}</h3>
            <p>Year: {item.year}</p>
            <p>Price: ${item.price}</p>
        </div>
    );

};
