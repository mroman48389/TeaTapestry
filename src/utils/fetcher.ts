/* We shouldn't use useFetch in main.ts since it creates state and we need a fetcher 
   outside of the component tree. Otherwise, prefer the custom useFetch hook we made. */
export const fetcher = async <T>(url: string): Promise<T> => {
    const response = await fetch(import.meta.env.VITE_API_URL + url);

    if (!response.ok) {
        throw new Error(`HTTP error ${response.status}`);
    }
        
    const data = await response.json();

    if (!data) {
        throw data;
    } 

    return data as T;
};