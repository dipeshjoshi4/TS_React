

import { keepPreviousData, useQuery } from '@tanstack/react-query';
import apiClient from '../utils/api-client';

const useFetchUsers = (query) => {

    const fetchTodos = () => apiClient.get(`/todos`, {
        params: {
            _limit: query.pageSize,
            _start: (query.page - 1) * query.pageSize,  //bydefault=1=> 1-1*10 so start from 0 | 2-1*10 so start from 10
        },
    })
        .then(res => res.data);


    return useQuery({
        queryKey: ["todos", query],
        queryFn: fetchTodos,
        gcTime: 400000,
        retry: 4,
        placeholderData: keepPreviousData, //untill new data cames the privous one shows and the positions of button not chnage 
    })
}

export default useFetchUsers;