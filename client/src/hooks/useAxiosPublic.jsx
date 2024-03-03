import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'https://server-tau-sage.vercel.app/'
})

const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;

