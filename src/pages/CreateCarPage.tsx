import { useForm } from "react-hook-form"
import type { ICarModel } from "../models/ICarModel"
import { createCar } from "../services/api.service"
import { CarValidator } from "../validator/CarValidator"
import { joiResolver } from "@hookform/resolvers/joi"

export const CreateCarPage = () => {

    const {handleSubmit, register, formState:{errors}}
        = useForm<ICarModel>({mode: 'all', resolver:joiResolver(CarValidator)})

    const creatHandler = ( data:ICarModel) => {
        createCar(data)
    }

    return (
        <>
            <form onSubmit={handleSubmit(creatHandler)}>
                <div><input type= "text" {...register("brand")}/>
                <div>{errors.brand && <p>{errors.brand.message}</p>}</div>
                </div>
                <div><input type= "number" {...register("price")}/>
                <div>{errors.price && <p>{errors.price.message}</p>}</div>
                </div>
                <div><input type= "number" {...register("year")}/>
                <div>{errors.year && <p>{errors.year.message}</p>}</div>
                </div>
                <div><button type="submit">Create Car</button>
                </div>

            </form>
        </>
    );
    }
