import React from "react";
import Navbar from "../components/Navbar";

function Wrapper({ children }) {
	return (
		<div>
			<Navbar />
			{children}
		</div>
	);
}

export default Wrapper;
