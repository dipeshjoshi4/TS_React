

import { useQuery } from '@tanstack/react-query';
import apiClient from '../utils/api-client';

// const fetchTodos = () => apiClient.get("/todos").then(res => res.data); //take this into useTodos because we have to fetch userId

const useTodos = (userId) => {

    const params = {}
    if (userId) {
        params.userId = userId;
    }

    const fetchTodos = () => (apiClient.get(`/todos`, {
        params: params
    }).then(res => res.data));

    ///reference => users/userId(1,2,3,4,...)/todos
    return useQuery({
        queryKey: userId ? ["users", userId, "todos"] : ["todos"],
        //Above here we do this so that that empty value in select key not be seen as null
        queryFn: fetchTodos,
        gcTime: 400000,
        retry: 4,
    })
}

export default useTodos;