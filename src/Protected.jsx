/* eslint-disable react/prop-types */
import { Navigate } from "react-router-dom"
// Restrict navigation
const ProtectedRoute = ({element}) => {
    if(sessionStorage.getItem('user') && JSON.parse(sessionStorage.getItem('user'))){
        return element
    }
    return <Navigate to={'/'} replace/>
}

export default ProtectedRoute