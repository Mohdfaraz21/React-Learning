import { useEffect, useState } from "react";


/* Declare a custom hook named useFetch that accept a url as an argument
this let you reuse data fetching logic in multiple components */
export function useFetch(url) {
    /* "finalData" : stores response api from url.
    "loading" : a boolean to track whether the fetch is still in progress.
    "useState({})" : initialize finalData as an empty object.
     */
    const [finalData, setFinalData] = useState({});
    const [loading , setLoading] = useState(true);


    /* "getDetails()" : is an async function to fetch data from the given URL.
    "setLoading(true)": ensure the loading state is shown before starting fetch.
    "fetch(url)": perform the HTTP request.
    "await response.json()": parses the response body as JSON.
    "setFinalData": Stores the fetched JSON into finalData.
    "setLoading(false)": hides the loading state after fetch is done. */
    async function getDetails() {
        setLoading(true);
        const response = await fetch(url);
        const json = await response.json();
        setFinalData(json);
        setLoading(false);
    }
    /* this run getDetails() whenever the url changes
    "useEffect"  ensure that the data is fetched at once at mount and on updates.*/
    useEffect(() => {
        getDetails();
    }, [url])

    /* Return an object containing finalData and loading.
    Allow component to access both values */
    return {
        finalData,
        loading
    }
}