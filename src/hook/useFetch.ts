'use client';
import { useState, useEffect, useCallback } from 'react';
import axios, { AxiosRequestConfig } from 'axios';

interface IUseFetchResult<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
  refetch: () => Promise<void>;
}

// axios.interceptors.request.use((config) => {
//   const token = localStorage.getItem('token');

//   if (token) {
//     if (config.headers) {
//       config.headers['Authorization'] = `Bearer ${token}`;
//     }
//   }

//   return config;
// });

axios.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 404) {
      return Promise.reject(new Error('Resource not found (404)'));
    }
    if (error.response && error.response.status === 500) {
      return Promise.reject(new Error('Something went wrong'));
    }
    return Promise.reject(error);
  }
);

export function useFetch<T = unknown>(
  url: string,
  options?: AxiosRequestConfig
): IUseFetchResult<T> {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await axios<T>(url, options);
      setData(response.data);
    } catch (err: any) {
      setError(err.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  }, [url, options]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, loading, error, refetch: fetchData };
}
