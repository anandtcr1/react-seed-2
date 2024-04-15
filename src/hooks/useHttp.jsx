import React, { useState } from 'react'

function useHttp() {
  const [errorMessage, setErrorMessage] = useState(null);

  function sendHttpRequest(url, method, body, action){
    fetch(url, {
        method: method,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json charset=UTF-8'
        },
        body: body ? body: null
    })
    .then((response) => {
        if(!response.ok){
            throw new Error("Error");
        }
        let data = response.json();
        action(data);
    })
    .catch((error) => {
        setErrorMessage(error.message)
    });
  }

  return [errorMessage, sendHttpRequest];
}

export default useHttp
