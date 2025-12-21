import {useEffect, useState} from "react";

export const useFetch = <T,>(url: string, defaultvalue:T) => {

    const [object, setObject] = useState<T>(defaultvalue)
    
    useEffect(() => {

fetch(url)
    .then(res => res.json())
    .then(res => {
        setObject(res);

    });
    }, []);
    return object;

}

