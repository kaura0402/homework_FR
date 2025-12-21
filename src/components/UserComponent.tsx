import {type FC, memo} from "react";


export const UserComponent: FC<{foo:()=>void, arr:number[]}> = memo(({arr}) => {
    console.log("Hello UserComponent!");
    console.log(arr);
    return (
        <div>
            memo функція, яка виключає повторне використання UserComponent
            UserComponent
        </div>
    );
})