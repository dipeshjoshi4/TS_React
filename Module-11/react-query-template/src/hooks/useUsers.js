

import { useQuery } from '@tanstack/react-query';
import apiClient from '../utils/api-client';
const fetchUsers = () => (apiClient.get("/users").then(res => res.data))

const useUsers = () => {
    return useQuery({
        queryKey: ["users"],
        queryFn: fetchUsers,
    })
}

export default useUsers;