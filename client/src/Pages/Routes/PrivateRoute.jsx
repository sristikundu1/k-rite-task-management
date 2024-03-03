import useAuth from '../../hooks/useAuth';
import { Navigate,useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const{user,loading} = useAuth();

    const location = useLocation();

    if(loading){
        return <span className="loading loading-infinity loading-lg flex justify-center items-center"></span>
    }

    if(user){
        return children;
    }
    return <Navigate state={location.pathname} to="/login"></Navigate>;
};

export default PrivateRoute;