import axios from "axios";
import type { ICarModel } from "../models/CarModdel";

const axiosInstens = axios.create({
    baseURL: 'http://owu.linkpc.net/carsAPI/v1',
    headers: {'Content-Type': 'application/json'}
});

export const getCars=async ():Promise<ICarModel[]>=> {
    const axiosResponce = await  axiosInstens.get<ICarModel[]>('/cars');
    return axiosResponce.data;
}
export const createCar=async (car:ICarModel):Promise<ICarModel>=> {
    const axiosResponce = await  axiosInstens.post<ICarModel>('/cars', car);
    return axiosResponce.data;
}