import type {FC, JSX} from "react";
import type {IUserDummyMod} from "../../models/dummyjson_model/dummyjson_model/IUserDummyjsonMod.ts";


class UserDummyProps {
    user: IUserDummyMod;
    key?: string | number;
}

export const UserDummyjsonComponent:FC<UserDummyProps> = ({user:{id, firstName, lastName,
    age, username,address, company}}) => {

    return (
        <div>
            <h3>{id}. {firstName} {lastName} ({username}), {age} years old</h3>
            <p>Address: {address.address}, {address.city}, {address.state}, {address.country}</p>
            <p>Company: {company.name}, {company.department}</p>
            <p>{company.name}, {company.address.city}</p>
            <hr/>
            <hr/>
        </div>
    );
};
