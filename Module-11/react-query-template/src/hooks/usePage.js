

import { keepPreviousData, useInfiniteQuery } from '@tanstack/react-query';
import apiClient from '../utils/api-client';

const usePage = (query) => {

    const fetchTodos = ({ pageParam = 1 }) => apiClient.get(`/todos`, {
        params: {
            _limit: query.pageSize,
            _start: (pageParam - 1) * query.pageSize,  //bydefault=1=> 1-1*10 so start from 0 | 2-1*10 so start from 10
        },
    })
        .then(res => res.data);


    return useInfiniteQuery({
        queryKey: ["todos", query],
        queryFn: fetchTodos,
        gcTime: 400000,
        retry: 4,
        placeholderData: keepPreviousData,

        getNextPageParam: (lastPage, allPages) => {
            // console.log("dipesh", lastPage, allPages);
            return lastPage.length > 0 ? allPages.length + 1 : null
        }
    })
}

export default usePage;