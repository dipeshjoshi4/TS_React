

import { useQuery } from '@tanstack/react-query';
import apiClient from '../utils/api-client';

const useTodos = (userId) => {

    const fetchTodos = () => (apiClient.get(`/todos`, {
        params: {
            userId,
        },
    }).then(res => res.data));

    ///reference => users/userId(1,2,3,4,...)/todos
    return useQuery({
        queryKey: userId ? ["users", userId, "todos"] : ["todos"], 
        queryFn: fetchTodos,
        gcTime: 400000,
        retry: 4,
        // enabled: !!userId, // only run if userId !== ""

    })
}

export default useTodos;