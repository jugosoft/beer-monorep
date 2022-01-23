import { useState, useCallback } from 'react';

const http = () => {

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const request = useCallback(async (url, method = 'GET', body = null, headers = {}) => {

        try {
            setLoading(true);
            const response = await fetch(url, {
                method: method,
                body: body,
                headers: headers
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || 'Something went wrong!');
            }

            setLoading(false);

        } catch (error) {
            setLoading(false);
            setError(error.message);
            throw error;
        }
    }, []);

    const cleanupErrors = () => setError(null);

    return {loading, request, error, cleanupErrors};
}   

export default http;