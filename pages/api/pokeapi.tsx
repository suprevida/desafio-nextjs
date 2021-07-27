import React, { useEffect, useState } from 'react'

export const POKE_API_URL = 'https://pokeapi.co/api/v2/type/3'

const IpApi = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    async function getApi() {
      const res = await fetch(POKE_API_URL);
      const json = await res.json();
      setData(json);
      setLoading(false);
    }
    getApi()
  }, [])

  
  return { data, loading, POKE_API_URL }
}

export default IpApi
