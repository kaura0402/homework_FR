import {useEffect, useState} from "react";
import type { ICarModel } from "../../models/ICarModel";
import { getCars } from "../../services/api.service";
import { CarComponent } from "./CarComponent";

export const CarsComponent = () => {
    const [cars, setCars] = useState<ICarModel[]>([]);

    useEffect(() => {
    getCars().then(cars => {
        setCars(cars);
    });
    }, []);

    // @ts-ignore
    return (
        <>
            {
                cars.map((car) => (
                    <CarComponent key={car.id} item={car} />
                ))
            }
        </>
    );
};


