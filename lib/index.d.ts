interface DebouncedSearchOptions {
    delay?: number;
    minLength?: number;
}
interface DebouncedSearchResult {
    debouncedSearch: (value: string) => void;
    isTyping: boolean;
}
export declare const useDebouncedSearch: (onSearch: (value: string) => void, options?: DebouncedSearchOptions) => DebouncedSearchResult;
export {};
