import type {FC, JSX} from "react";
import type {IUserJsonplaceholderMod} from "../../models/jsonplaceholder_model/IUserJsonplaceholderMod.ts";

type UsersTypeProps = {
    item: IUserJsonplaceholderMod,
    key?: number
}

export const UserJsonplaceholderComponent:FC<UsersTypeProps> = ({item}) => {

    return (
        <div>
            <h2>{item.name} ({item.username})</h2>
            <p>Email: {item.email}</p>
            <p>Phone: {item.phone}</p>
            <p>Website: {item.website}</p>
            <hr/>
            <h3>Address:</h3>
            <p>{item.address.street}, {item.address.suite}</p>
            <p>{item.address.city}, {item.address.zipcode}</p>
            <hr/>
            <h3>Company:</h3>
            <p>Name: {item.company.name}</p>
            <p>Catch Phrase: {item.company.catchPhrase}</p>
            <p>BS: {item.company.bs}</p>
            <hr/>
            <hr/>
        </div>
    );
};
