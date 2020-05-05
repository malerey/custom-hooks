import React, { useState, useEffect } from 'react';
const useForm = (initialState) => {
 const [infoHook, setInfoHook] = useState(initialState)
    return [
      infoHook, 
      e => {
        setInfoHook({
          ...infoHook, 
          [e.target.name]: e.target.value
        })
      }
    ]
};

export default useForm;
