import { useState, useEffect } from 'react';
import client from '../client';

interface ErrorWithStatus extends Error {
  status: number;
}

export const useSanityData = <T>(query: string) => {
  const [data, setData] = useState<T>();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<ErrorWithStatus | null>(null);

  useEffect(() => {
    setIsLoading(true);
    client.fetch(query)
      .then((fetchedData: T) => {
        console.log(fetchedData);
        
        setData(fetchedData);
        console.log(fetchedData);
        
        setIsLoading(false);
      })
      .catch((err: ErrorWithStatus) => {
        console.error(err);
        setError(err);
        setIsLoading(false);
      });
  }, [query]); // Include 'query' in the dependency array to re-fetch when the query changes.

  return { data, isLoading, error };
};