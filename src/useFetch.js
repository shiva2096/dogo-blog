import { useEffect, useState } from "react";

const useFetch = (url) =>{

    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const abortCont = new AbortController();
        
        // setting a 1sec delay to see the Loading message
        setTimeout(()=> {
            fetch(url , {signal: abortCont.signal})
            .then(res => {
                if(!res.ok){
                    throw Error("Colud not fetch from the resource!!");
                    // this error is catched at the end in catch block below 
                }
                return res.json()
            })
            .then(data => {
                setData(data)
                setIsPending(false)  // This will hide the loading message
                setError(null)       // This will set the error variable to null
            })
            .catch(err => {
                if (err.name === "AbortError"){
                    console.log("fetch aborted")
                }
                else{
                    setIsPending(false)
                    setError(err.message)
                }
            });
        }, 1000)

        return () => abortCont.abort();

    }, [url]);

    return {data, isPending, error}
}


export default useFetch;