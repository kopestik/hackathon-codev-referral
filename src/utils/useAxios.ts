// src/hooks/useAxios.js
import { useState, useEffect } from 'react';
import axiosInstance from './axios';

const useAxios = (endpoint: string, method = 'GET', body = null) => {
  const [data, setData] = useState<null|any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        let response;
        if (method === 'GET') {
          response = await axiosInstance.get(endpoint);
        } else if (method === 'POST') {
          response = await axiosInstance.post(endpoint, body);
        }
        
        setData(response!.data);
      } catch (err: any) {
        console.log(err)
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [endpoint, method, body]);

  return { data, loading };
};

export default useAxios;
