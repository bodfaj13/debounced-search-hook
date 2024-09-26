import { useState, useRef, useCallback } from 'react';

interface DebouncedSearchOptions {
  delay?: number;
  minLength?: number;
}

interface DebouncedSearchResult {
  debouncedSearch: (value: string) => void;
  isTyping: boolean;
}

export const useDebouncedSearch = (
  onSearch: (value: string) => void,
  options: DebouncedSearchOptions = {}
): DebouncedSearchResult => {
  const { delay = 200, minLength = 0 } = options;
  const [isTyping, setIsTyping] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const debouncedSearch = useCallback(
    (value: string) => {
      setIsTyping(true);
      console.log(`Searching ${value}`);

      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }

      timerRef.current = setTimeout(() => {
        setIsTyping(false);
        if (value.trim().length > minLength) {
          onSearch(value);
        }
      }, delay);
    },
    [delay, minLength, onSearch]
  );

  return { debouncedSearch, isTyping };
};