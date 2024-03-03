import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosPublic from "./useAxiosPublic";



const useTask = () => {
    const axiosPublic = useAxiosPublic();
    const { user } = useAuth();
    const { refetch, data: alltask = [] } = useQuery({
        queryKey: ['alltask',user?.email],
        queryFn: async () => {
            const res = await axiosPublic.get(`/task?email=${user.email}`)
            return res.data;
        }
    })
    return [alltask, refetch]
};

export default useTask;