import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../Contexts/AuthContext";


export default function Unauthorized() {
    const {currentUser} = useAuth();

    if (currentUser) {
        return(
            <Navigate to="/" />
        )        
    }

    return <Outlet />   

}