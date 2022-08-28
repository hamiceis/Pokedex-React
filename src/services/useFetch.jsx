import { useEffect, useState } from "react";
import axios from "axios";



export function useFetch(url) {
  const [data, setData] = useState([])
  const [erro, setErro] = useState([])

  useEffect(() => {
   axios.get(url)
    .then(response => setData(response.data))
    .catch(error => setErro(error))
  }, [url]) 


  return {data, erro}
}