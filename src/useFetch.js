import { useEffect, useState } from "react"

const useFetch = (url) => {
    const [data,setdata] = useState("");
    const [error, setError] = useState("");
    useEffect(()=>{
        fetch(url)
        .then((res)=>res.text())
        .then((data)=>setdata(data.toString()))
        .catch((error)=>setError(err.toString()));
    }, [url]);

    return[data, error];
}

export default useFetch;