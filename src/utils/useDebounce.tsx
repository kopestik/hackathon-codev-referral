import { useEffect, useRef } from 'react';

const useDebounce = (func: (...args: any[]) => void, delay: number) => {
  const timerRef = useRef<any>(null);

  const debouncedFunction = (...args: any[]) => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    timerRef.current = setTimeout(() => {
      func(...args);
    }, delay);
  };

  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, []);

  return debouncedFunction;
};

export default useDebounce;
