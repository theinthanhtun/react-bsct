import { useState, useEffect } from "react";
export function useLocalStorage(initState,key){
    const [value, setValue] = useState(function(){
        const storedMovie = localStorage.getItem(key);
        return storedMovie ? JSON.parse(storedMovie) : initState;
    });

    useEffect(function(){
        localStorage.setItem(key,JSON.stringify(value))
    },[value,key]);

    return [value,setValue];
}