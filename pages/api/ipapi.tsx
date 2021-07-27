import React, { useEffect, useState } from 'react'

export const IP_API_URL = 'http://ip-api.com/json/?query=&fields=status,country,regionName'

const IpApi = () => {
  const [ip, setIp] = useState(null);

  useEffect(() => {
    async function getIp() {
      const res = await fetch(IP_API_URL);
      const json = await res.json();
      setIp(json);
    }
    getIp()
  }, [])

  return { ip, IP_API_URL }
}

export default IpApi
