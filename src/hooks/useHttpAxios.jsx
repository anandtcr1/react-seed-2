import React, {useState} from 'react';
import axios from 'axios';

function useHttpAxios() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    
    function getHttpRequest(url, method, body, action){
        setLoading(true);
        axios.post(url, body).then((response) => {
            setData(response.data);
        }).catch((err) => {
            setError(err);
        }).finally(() => {
            setLoading(false);
        });
    }

    return [error, getHttpRequest];
}

export default useHttpAxios
