

import { useQuery } from '@tanstack/react-query';
import apiClient from '../utils/api-client';
const fetchTodos = () => (apiClient.get("/todos").then(res => res.data))

const useTodos = () => {
    return useQuery({
        queryKey: ["todos"],
        queryFn: fetchTodos,
        gcTime: 400000,
        retry: 4,
    })
}

export default useTodos;