import React, { useEffect, useState } from 'react';

const useFetch = (cosaABuscar) => {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch(cosaABuscar)
    .then(res => res.json())
    .then(data => setData(data.results))
  }, [])

  return data
};

export default useFetch;
