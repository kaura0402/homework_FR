import {type FC, memo} from "react";


export const UserComponent: FC<{foo:()=>void}> = memo(() => {
    console.log("Hello UserComponent!");
    return (
        <div>
            memo функція, яка виключає повторне використання UserComponent67
            UserComponent
        </div>
    );
})