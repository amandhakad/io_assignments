import {Outlet} from "react-router-dom";

const Root = (props) => {   
	return (
		<div className="root-container">
			<h1 style={{textAlign: "center"}}>IMDB Clone</h1>
			<Outlet/>
		</div>);
};

export default Root;