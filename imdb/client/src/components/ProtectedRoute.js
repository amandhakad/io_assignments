import {Outlet} from "react-router-dom";
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";

const ProtectedRoute = (props) => { 

	const {authToken} = useSelector((state) => state.auth);
  	const navigate = useNavigate();

	useEffect(() => {
	   	if(!authToken) {
      		return navigate('/login');
    	}
	}, [authToken]);

	return (<Outlet/>);
};

export default ProtectedRoute;
