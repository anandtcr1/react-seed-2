import React, {useState} from 'react';
import axios from 'axios';

function useGetData() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    
    function getHttpRequestData(url){
        setLoading(true);
        axios.get(url).then((response) => {
            setData(response.data);
        }).catch((err) => {
            setError(err);
        }).finally(() => {
            setLoading(false);
        });
        return {data, loading, error}
    }

    return {data, loading, error, getHttpRequestData};
}

export default useGetData
